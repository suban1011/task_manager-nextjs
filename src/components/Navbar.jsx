"use client"
import UserContext from '@/context/userContext'
import { logoutUser } from '@/services/userService'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useContext } from 'react'
import { toast } from 'react-toastify'
const Navbar = () => {
    const context = useContext(UserContext);
    const router = useRouter();
    const handleLogout = async () => {
        try {
            await logoutUser()

            toast.success("Logout successfully...", { position: "top-center" })
            router.push('/');
            context.setUser(undefined)
        } catch (error) {
            console.log(error);
            toast.error("error in logging out")
        }
    }
    return (
        <>
            <header className='flex justify-between items-center bg-blue-600 text-white px-[100px] py-[10px] '>
                <h1 className='text-[28px] hover:text-blue-400'>
                    Work Manager
                </h1>
                <section className="">
                    <ul className='flex gap-5 text-[18px]'>
                        {
                            context.user && (
                                <>
                                    <li className='hover:text-blue-400'><Link href={'/'}>Home</Link></li>
                                    <li className='hover:text-blue-400'><Link href={'/add-task'}>Add Task</Link></li>
                                    <li className='hover:text-blue-400'><Link href={'/show-task'}>Show Tasks</Link></li>
                                </>
                            )
                        }
                    </ul>
                </section>
                <section className="">
                    <ul className='flex gap-3 text-[18px]'>
                        {
                            context.user && (
                                <>

                                    <li className='hover:text-blue-400'>
                                        <Link href={'/loggedinprofile'}>{context.user.name}</Link>
                                    </li>
                                    <li className='hover:text-blue-400'>
                                        <button onClick={handleLogout}>Logout</button>
                                    </li>

                                </>
                            )
                        }
                        {
                            context.user === undefined && (
                                <>
                                    <li className='hover:text-blue-400'>
                                        <Link href={'/login'}>Login</Link>
                                    </li>

                                    <li className='hover:text-blue-400'>
                                        <Link href={'/signup'}>Sign up</Link>
                                    </li>
                                </>
                            )
                        }
                    </ul>
                </section>
            </header>
        </>
    )
}

export default Navbar
