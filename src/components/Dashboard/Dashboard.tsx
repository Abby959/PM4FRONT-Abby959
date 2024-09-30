"use client";
import AuthContext from '@/contexts/authContext'
import { useRouter } from 'next/navigation';
import React, { useContext, useEffect } from 'react'

const Dashboard = () => {
    const router = useRouter();
    const { user } = useContext(AuthContext);
    useEffect(() => {
        if (!user?.login) {
            router.push("/login");
        }
    }, []);
    return (
        <div className='mt-4'>
            <h3 className='w-full text-center'>Dashboard</h3>
            <div className='text-primary flex flex-col gap-4 mt-4'>
                <p className='hover:text-slate-50 cursor-pointer max-w-fit'>Name: {user?.user.name}</p>
                <p className='hover:text-slate-50 cursor-pointer max-w-fit'>Email: {user?.user.email}</p>
                <p className='hover:text-slate-50 cursor-pointer max-w-fit'>Phone: {user?.user.phone}</p>
                <p className='hover:text-slate-50 cursor-pointer max-w-fit'>Address: {user?.user.address}</p>
                <p className='hover:text-slate-50 cursor-pointer max-w-fit'>Order: {user?.user.orders?.map((order, i) => (
                    <div className='flex gap-4' key={i}>
                        <h4>Order {order.id}</h4>
                        <p>{order.date}</p>
                    </div>
                ))}</p>
            </div>
        </div>
    )
}

export default Dashboard;