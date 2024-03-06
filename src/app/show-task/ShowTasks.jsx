"use client"
import Task from '@/components/Task';
import UserContext from '@/context/userContext';
import { deleteTask, getUserTask } from '@/services/taskServices';
import React, { useContext, useEffect, useState } from 'react'
import { toast } from 'react-toastify';

const ShowTasks = () => {
    const [tasks, setTasks] = useState([]);
    const context = useContext(UserContext);
    async function loadTask(userid) {

        try {
            const tasks = await getUserTask(userid)
            setTasks([...tasks].reverse())
        } catch (error) {
            console.log(error);

        }
    }
    useEffect(() => {
        if (context.user) {
            loadTask(context.user._id);
        }

    }, [context.user])
    const deleteFromParent = async (taskid) => {
        try {
            const result = await deleteTask(taskid)
            const newTask = tasks.filter(item => item._id != taskid)
            setTasks(newTask);
            console.log(result);
            toast.success("removed successfully")
        } catch (error) {
            console.log(error);
            toast.error(error);
        }
    }
    return (
        <>
            <div className='m-w-[400px] mx-auto border border-black'>
                <h2 className='text-center font-bold text-[30px]'>Your Task ({tasks.length})
                </h2>
                {
                    tasks.map((task) => (
                        <Task task={task} key={task._id} deleteFromParent={deleteFromParent} />

                    ))
                }
            </div>
        </>
    )
}

export default ShowTasks
