"use client";
import AuthContext from '@/contexts/authContext'
import Link from 'next/link';
import React, { useContext } from 'react'
import { TfiShoppingCart } from 'react-icons/tfi';

const UserWidget = () => {
    const { user, logout } = useContext(AuthContext)
    return (
        <div className='flex items-center gap-4 text-sm text-primary'>
            {user?.login ?
                <>
                    <Link href={"/cart"}>
                        <div className='cursor-pointer text-black hover:scale-110 relative'>
                            <TfiShoppingCart />
                        </div>
                    </Link>
                    <Link className='cursor-pointer  text-black hover:scale-110' href="/dashboard">Dashboard</Link>
                    <button className='cursor-pointer  text-black hover:scale-110' onClick={logout}>Logout</button>
                </> :
                <Link href={"/signIn"}>
                    <div className=' cursor-pointer text-black hover:scale-110'>Sign In</div>
                </Link>
            }
        </div>
    )
}

export default UserWidget