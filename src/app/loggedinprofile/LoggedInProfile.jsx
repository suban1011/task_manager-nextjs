"use client"
import UserContext from '@/context/userContext'
import Image from 'next/image'
import React, { useContext, useState } from 'react'

const LoggedInProfile = () => {

    const { user } = useContext(UserContext);

    return (
        <div className="w-[100%] border border-black grid grid-cols-12">
            <div className='shadow-lg right-0 col-span-8 col-start-8'>

                <div className="max-w-2xl mx-auto p-8 bg-white shadow-lg rounded-md">
                    <div className="flex items-center">
                        <Image
                            src={user?.profileUrl} // Replace with your actual profile picture URL
                            alt="Profile Picture" width={'400'} height={'400'}
                            className="w-16 h-16 rounded-full mr-4"
                        />
                        <div>
                            <h1 className="text-2xl font-bold">{user?.name}</h1>
                            <p className="text-gray-600">Web Developer</p>
                        </div>
                    </div>

                    <div className="mt-8">
                        <h2 className="text-lg font-semibold mb-4">About Me</h2>
                        <p className="text-gray-700">
                            {user?.about}
                        </p>
                    </div>

                    <div className="mt-8">
                        <h2 className="text-lg font-semibold mb-4">Contact Information</h2>
                        <p className="text-gray-700">
                            Email: {user?.email}
                            <br />
                            Phone: +1 123-456-7890
                        </p>
                    </div>

                    {/* Add more sections as needed */}
                </div>
            </div>

        </div>

    )
}

export default LoggedInProfile
