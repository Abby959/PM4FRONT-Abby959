import React from 'react'
import Link from 'next/link';
import UserWidget from '../UserWidget/UserWidget';
import { FaApple } from "react-icons/fa";

const Navbar = () => {
    return (
        <nav className="items-center px-6 py-2 mx-auto my-0 w-full bg-gradient-to-r from-black via-[#1a1a1a] to-slate-300 flex justify-between ">
            <Link href={"/"}>
                <div className='text-white cursor-pointer hover:scale-110'>
                    <FaApple />
                </div>
            </Link>
            <div className='flex items-center gap-10 text-sm text-primary'>
                <Link href={"/store"}>
                    <div className=' cursor-pointer hover:text-secondary'>  Store  </div>
                </Link>
                <Link href={"/mac"}>
                    <div className=' cursor-pointer hover:text-secondary'>  Mac  </div>
                </Link>
                <Link href={"/iPhone"}>
                    <div className=' cursor-pointer hover:text-secondary'>  iPhone  </div>
                </Link>
            </div>
            <UserWidget />
        </nav>

    )
}

export default Navbar;