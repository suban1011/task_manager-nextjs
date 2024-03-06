"use client"
import React, { useContext, useState } from 'react'

import loginsvg from '../../../public/svg/login.svg'
import Image from 'next/image'
import { toast } from 'react-toastify'
import { loginUser } from '@/services/userService'
import { useRouter } from 'next/navigation'
import UserContext from '@/context/userContext'

const Login = () => {
    const router = useRouter();
    const context = useContext(UserContext);
    const [userLogin, setUserLogin] = useState({
        email: '',
        password: ''
    })
    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const result = await loginUser(userLogin)
            toast.success("User Logged In..", { position: "top-center" })
            context.setUser(result.user);
            router.push("/profile/user");
        } catch (error) {
            console.log(error);
            toast.error(error.response.data.message, { position: "top-center" })
        }
    }
    return (
        <>
            <section className='mx-w-[80%] mx-auto  grid grid-cols-12 mt-[10px]'>

                <div className="col-span-4 col-start-5">
                    <Image src={loginsvg} width={"auto"} height={200} className='mx-auto pt-10' alt='tasklogo'></Image>
                    <form action="#" onSubmit={handleLogin}>

                        <section className="p-3">
                            <label htmlFor="title">Email </label> <br />
                            <input
                                onChange={(e) => setUserLogin({ ...userLogin, email: e.target.value })}
                                value={userLogin.email}
                                name='user_email'
                                type="email"
                                className='border border-gray-400 rounded-md outline-none w-full px-[6px] py-[3px]'
                                required={true} />
                        </section>
                        <section className="p-3">
                            <label htmlFor="title">Password </label> <br />
                            <input
                                onChange={(e) => setUserLogin({ ...userLogin, password: e.target.value })}
                                value={userLogin.password}
                                name='user_password'
                                type="password"
                                className='border border-gray-400 rounded-md outline-none w-full px-[6px] py-[3px]'
                                required={true} />
                        </section>

                        <section className="p-3 ">
                            <button type='submit' className='bg-green-600 text-white px-[8px] py-[3px] rounded-lg hover:bg-green-800  mx-auto mb-[20px]'>Login</button>

                        </section>


                    </form>
                </div>
                <div className="col-span-4">

                </div>


            </section>
        </>

    )
}

export default Login
