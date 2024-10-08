import Link from 'next/link';
import React from 'react'

const Hero = () => {
  return (
    <div className='flex flex-col items-center gap-4 justify-center p-4 text-primary h-screen'>
      <h3>iPhone 15 Pro</h3>
      <video autoPlay muted playsInline loop> 
        <source src='/video15pro.mp4' type="video/mp4"/>
        </video>
        <Link href={"/store"} >
        <button className='bg-gradient-to-r from-blue-800 to-indigo-900 p-3 rounded-lg w-20 hover:bg-gradient-to-r hover:from-slate-900 hover:to-slate-700 text-white'>Buy</button>
        </Link>
      <p className='text-center'>Release Price <br/> U$S 700</p>
    </div>
  )
}

export default Hero;