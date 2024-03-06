import UserContext from '@/context/userContext'
import React, { useContext } from 'react'
import { IoClose } from "react-icons/io5";
import Swal from 'sweetalert2'

const Task = ({ task, deleteFromParent }) => {
    const { user } = useContext(UserContext);

    function handleDelete() {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                });
                deleteFromParent(task._id)
            }
        });

    }

    return (
        <div className=' mx-auto max-w-[45%] p-3 m-3 rounded-md shadow-md bg-gray-700 text-white'>
            <div className="flex justify-between items-center">
                <h2 className='font-bold text-[20px]'>{task.title}</h2>
                <button onClick={handleDelete}><IoClose /></button>
            </div>
            <p>{task.content}</p>
            <h1>{task.status}</h1>
            <p className='flex justify-end'>Author :{user?.name}</p>

        </div>
    )
}

export default Task
