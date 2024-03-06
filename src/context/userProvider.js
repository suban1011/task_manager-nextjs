"use client"
import React, { useEffect, useState } from 'react'
import UserContext from './userContext'
import { currentUser } from '@/services/userService'

const UserProvider = ({ children }) => {
    const [user, setUser] = useState(undefined)

    useEffect(() => {
        async function load() {
            try {
                const currUser = await currentUser()
                console.log(currUser)
                setUser({ ...currUser })

            } catch (error) {
                console.log(error);

            }
        }
        load();


    }, [])
    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider
