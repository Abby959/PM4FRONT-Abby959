"use client";
import AuthContext from '@/contexts/authContext'
import { useRouter } from 'next/navigation';
import React, { useContext, useEffect } from 'react'
import { BsPersonCircle } from "react-icons/bs";
import { MdOutlineMailOutline } from "react-icons/md";
import { GiSmartphone } from "react-icons/gi";
import { SiGooglemaps } from "react-icons/si";

const Dashboard = () => {
    const router = useRouter();
    const { user } = useContext(AuthContext);
    useEffect(() => {
        if (!user?.login) {
            router.push("/signIn");
        }
    }, [user]);

    console.log(user)
    return (
        <div className='mt-4'>
            <h2 className='w-full text-center'>Dashboard</h2>
            <div className='text-secondary flex flex-col gap-4 mt-4'>
                <p className=' cursor-pointer max-w-fit flex items-center gap-3'> <BsPersonCircle /> {user?.user.name} </p>
                <p className=' cursor-pointer max-w-fit flex items-center gap-3'> <MdOutlineMailOutline /> {user?.user.email}</p>
                <p className=' cursor-pointer max-w-fit flex items-center gap-3'> <GiSmartphone /> {user?.user.phone}</p>
                <p className=' cursor-pointer max-w-fit flex items-center gap-3'> <SiGooglemaps /> {user?.user.address}</p>
                <div className=' cursor-pointer max-w-fit border border-gray-700 rounded-lg p-4'>
                    Order: {user?.user.orders?.map((order, i) => (
                        <div className='flex gap-4 ' key={i}>
                            <h4>Order {order.id}</h4>
                            <p>{order.date}</p>
                        </div>
                    ))}</div>
            </div>
        </div>
    )
}

export default Dashboard;