import Image from 'next/image'
import React from 'react'

const Features = () => {
    return (
        <div className='flex flex-col p-4 gap-4 '>
            <div className='flex-1 w-full max-h-[300px] overflow-hidden rounded-sm'>
                <Image
                    className='hover:scale-110 transition duration-150 ease-in-out'
                    src={'/h1.jpeg'}
                    alt={'features'}
                    width={1000}
                    height={1000}
                />
            </div>
            <div className='flex-1 w-full max-h-[300px] overflow-hidden rounded-sm'>
                <Image
                    className='hover:scale-110 transition duration-150 ease-in-out'
                    src={'/h2.jpeg'}
                    alt={'features'}
                    width={1000}
                    height={1000}
                />
            </div>
        </div>
    )
}

export default Features