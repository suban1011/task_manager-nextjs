"use client"
import React, { useState } from 'react'
import signupsvg from '../../../public/svg/register1.svg'
import Image from 'next/image'
import { registerUser } from '@/services/userService'
import { toast } from 'react-toastify'
import { useRouter } from 'next/navigation'

const Signup = () => {
    const router = useRouter()
    const [user, setUser] = useState({
        name: '',
        email: '',
        password: '',
        about: '',
        profileUrl: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png'
    })
    const handleRegister = async (e) => {
        e.preventDefault();
        // if (user.name.trim() === '' || user.name === null) {
        //     toast.warning("Name is required !!", { position: "bottom-center" });
        // } if (user.email.trim() === '' || user.email === null) {
        //     toast.warning("Email is required !!", { position: "bottom-center" });
        // } else {

        // }
        try {
            await registerUser(user);
            toast.success("User is registered", { position: "top-center" })
            router.push('/login')

        } catch (error) {
            console.log(error)

            toast.error(error.response.data.message, { position: "top-center" })
        }

    }
    function resetData() {
        setUser({
            name: '',
            email: '',
            password: '',
            about: '',
            profileUrl: ''
        })
    }
    return (
        <>
            <section className='mx-w-[80%] mx-auto  grid grid-cols-12 mt-[10px]'>

                <div className="col-span-4 col-start-3">
                    <form action="#" onSubmit={handleRegister}>
                        <section className="p-3">
                            <label htmlFor="title">Name </label> <br />
                            <input
                                onChange={(e) => setUser({ ...user, name: e.target.value })}
                                value={user.name}
                                name='user_name'
                                type="text"
                                className='border border-gray-400 rounded-md outline-none w-full px-[6px] py-[3px]'
                                required={true} />
                        </section>
                        <section className="p-3">
                            <label htmlFor="title">Email </label> <br />
                            <input
                                onChange={(e) => setUser({ ...user, email: e.target.value })}
                                value={user.email}
                                name='user_email'
                                type="email"
                                className='border border-gray-400 rounded-md outline-none w-full px-[6px] py-[3px]'
                                required={true} />
                        </section>
                        <section className="p-3">
                            <label htmlFor="title">Password </label> <br />
                            <input
                                onChange={(e) => setUser({ ...user, password: e.target.value })}
                                value={user.password}
                                name='user_password'
                                type="password"
                                className='border border-gray-400 rounded-md outline-none w-full px-[6px] py-[3px]'
                                required={true} />
                        </section>
                        <section className="p-3">
                            <label htmlFor="title">About </label> <br />
                            <textarea
                                onChange={(e) => setUser({ ...user, about: e.target.value })}
                                value={user.about}
                                name='user_about'
                                type="text"
                                className='border border-gray-400 rounded-md outline-none w-full px-[6px] py-[3px]'
                            />
                        </section>
                        {/* <section className="p-3">
                            <label htmlFor="title">Profile </label> <br />
                            <input

                                name='task_title'
                                type="text"
                                className='border border-gray-400 rounded-md outline-none w-full px-[6px] py-[3px]'
                            />
                        </section> */}
                        <section className="p-3 ">
                            <button type='submit' className='bg-blue-600 text-white px-[8px] py-[3px] rounded-lg hover:bg-blue-800  mx-[5px] mb-[20px]'>Register</button>
                            <button onClick={resetData} type='button' className='bg-red-600 text-white px-[8px] py-[3px] rounded-lg hover:bg-red-800  mx-auto mb-[20px]'>Reset</button>
                        </section>

                        {/* {JSON.stringify(user)} */}
                    </form>
                </div>
                <div className="col-span-4">
                    <Image src={signupsvg} width={"auto"} height={400} className='mx-auto pt-10' alt='tasklogo'></Image>
                </div>

                {/* {JSON.stringify(user)} */}

            </section>
        </>

    )
}

export default Signup
