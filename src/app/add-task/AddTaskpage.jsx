"use client"
import React, { useState } from 'react'
import { toast } from 'react-toastify';
import tasksvg from '../../../public/svg/task1.svg'
import Image from 'next/image'
import { addTask } from '@/services/taskServices'
const AddTaskpage = () => {

  const [task, setTask] = useState({
    title: '',
    content: '',
    taskstatus: 'none',
    userId: '',
  })
  // with axios
  const handleAddTask = async (e) => {
    e.preventDefault();
    try {
      const result = await addTask(task);
      toast.success("Task added successfully", {
        position: "top-center"
      });
      setTask({
        title: '',
        content: '',
        taskstatus: 'none',

      })
    } catch (error) {
      toast.error("Task not added..", {
        position: "top-center"
      })
    }

  }
  //without axios
  // const handleAddTask = async (e) => {
  //   e.preventDefault();
  //   const { title, content, taskstatus, userId } = task;
  //   let postTask = await fetch("http://localhost:3000/api/tasks", {
  //     method: 'post',
  //     body: JSON.stringify({ title, content, taskstatus, userId }),

  //   })
  //   postTask = await postTask.json();
  // }
  return (

    <section className='md:max-w-[40%] mx-auto shadow-lg rounded-md '>
      <Image src={tasksvg} width={"auto"} height={200} className='mx-auto' alt='tasklogo'></Image>
      <form action="#" onSubmit={handleAddTask}>
        <section className="p-3">
          <label htmlFor="title">Title</label> <br />
          <input
            onChange={(e) => setTask({
              ...task,
              title: e.target.value
            })}
            value={task.title}
            name='task_title'
            type="text"
            className='border border-gray-400 rounded-md outline-none w-full px-[6px] py-[3px]'
          />
        </section>
        <section className="p-3">
          <label htmlFor="title">Content</label> <br />
          <textarea
            onChange={(e) => setTask({ ...task, content: e.target.value })}
            value={task.content}
            name='task_content'
            type="text"
            className='border border-gray-400 rounded-md outline-none w-full px-[6px] py-[3px]'
            rows={3}
          />
        </section>

        <section className="p-3">
          <label htmlFor="title">Status</label> <br />
          <select
            onChange={(e) => setTask({ ...task, taskstatus: e.target.value })}
            value={task.taskstatus}
            name='task_status'
            className='border border-gray-400 rounded-md outline-none w-full px-[6px] py-[6px]' id="">
            <option value="none" disabled>--selete status--</option>
            <option value="pending">pending</option>
            <option value="completed">completed</option>
          </select>

        </section>
        <section className="p-3 m-5">
          <button type='submit' className='bg-blue-600 text-white m-3 px-[8px] py-[3px] rounded-lg hover:bg-blue-800 w-full'>Add Todo</button>

        </section>

      </form>

    </section>

  )
}

export default AddTaskpage
