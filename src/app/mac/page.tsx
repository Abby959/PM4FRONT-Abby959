import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div className='overflow-hidden w-full min-h-[500px] box-content flex flex-col gap-1 items-center justify-center'>
      <h2 className='text-2xl text-center'>MacBook Air</h2>
      <div className='w-[500px] h-[300px]'>
        <Image
          src={'https://images.macrumors.com/t/cmiOFijobaEbGyHuqwKR2rEaaFI=/800x0/article-new/2020/10/macbook-pro-13-inch-banner.jpeg?lossy'}
          alt={"Iphone"}
          className="dark:invert object-contain w-full h-full"
          width={1000}
          height={1000}
          priority
        />
      </div>
      <p className='text-center'>
        Embrace efficiency and sophistication with the MacBook Air: lightweight design meets powerful performance, stunning Retina display brings your work to life, and all-day battery life keeps you productive wherever you go. Elevate your computing experience with the MacBook Air.
      </p>
      <div className='flex items-center gap-4' >
        <p>Price: $999</p>
        <Link className='w-fit' href='/store/2'>
          <button className='bg-gradient-to-r from-blue-800 to-indigo-900 p-2 rounded-lg w-20 hover:bg-gradient-to-r hover:from-slate-900 hover:to-slate-700 text-white'>Buy</button>
        </Link>
      </div>
    </div>
  )
}

export default page