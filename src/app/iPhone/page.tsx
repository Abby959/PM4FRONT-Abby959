import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div className='overflow-hidden w-full min-h-[500px] box-content flex flex-col gap-1 items-center justify-center'>
      <h2 className='text-2xl text-center'>iPhone 11</h2>
      <div className='w-[500px] h-[300px]'>
        <Image
          src={'https://images.pexels.com/photos/9555102/pexels-photo-9555102.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'}
          alt={"Iphone"}
          className="dark:invert object-contain w-full h-full"
          width={1000}
          height={1000}
          priority
        />
      </div>
      <p className='text-center'>
        Experience power and elegance with the iPhone 11: capture stunning moments with its dual-camera system, enjoy exceptional performance, and immerse yourself in a brilliant Liquid Retina display. Discover a world of possibilities in the palm of your hand!
      </p>
      <div className='flex items-center gap-4' >
        <p>Price: $699</p>
        <Link className='w-fit' href='/store/2'>
          <button className='bg-gradient-to-r from-blue-800 to-indigo-900 p-2 rounded-lg w-20 hover:bg-gradient-to-r hover:from-slate-900 hover:to-slate-700 text-white'>Buy</button>
        </Link>
      </div>
    </div>
  )
}

export default page