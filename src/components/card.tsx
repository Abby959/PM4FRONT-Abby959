"use client"
import { Products } from '@/app/interface'
import Image from 'next/image'
import React, { FC, useState } from 'react'
import Link from 'next/link'


const Card: FC<Products> = ({ categoryId, id, name, description, price, stock, image }) => {
    const [isDescpritionVisible, setIsDescpritionVisible] = useState(false)
    return (
        <div className='w-[400px] min-h-[500px] p-4 box-content flex flex-col gap-1 items-center'>
            <div className='w-[400px] h-[300px]'>
                <Image
                    src={image}
                    alt={"Iphone"}
                    className="dark:invert object-contain w-full h-full"
                    width={300}
                    height={200}
                    priority
                />
            </div>

            <h2 className='text-2xl'>{name}</h2>

            <button
                onClick={() => setIsDescpritionVisible(!isDescpritionVisible)}
                className='bg-gray-800 w-36 p-1 rounded-lg text-sm text-white border border-gray-600 hover:bg-transparent hover:border-white transition-colors duration-300'>
                See {isDescpritionVisible ? "less" : "more"} ...
            </button>

            <p style={{ display: isDescpritionVisible ? "flex" : "none" }}>{description}</p>
            <p>Price: {price}</p>
            <p>Stock: {stock}</p>
            <Link className='w-fit' href={`/store/${id}`}>
                <button className='bg-gradient-to-r from-blue-800 to-indigo-900 p-2 rounded-lg w-20 hover:bg-gradient-to-r hover:from-slate-900 hover:to-slate-700 text-white'>Buy</button>
            </Link>
        </div>
    )
}

export default Card;