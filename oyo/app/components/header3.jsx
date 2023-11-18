import Link from 'next/link'
import React from 'react'

const Header3 = () => {
    return (
        <div className='bg-gradient-to-l from-red-500 to-red-400  h-60'>
            <div className='mx-10 p-5'>
                <h1 className='text-3xl font-bold text-white text-center  '>Over 157,000 hotels and homes across 35 countries</h1>
<div className='grid grid-cols-5 py-4'>
<input type="text"placeholder='Search..'  className='h-16 px-4 border-r border-gray-200 col-span-2' />
<input type="text"placeholder='Search..'  className='h-16 px-4 border-r border-gray-200 col-span-1' />
<input type="text"placeholder='Search..'  className='h-16 px-4 border-r border-gray-200 col-span-1' />
<button className='bg-green-500 text-white text-lg hover:cursor-pointer hover:bg-green-700 duration-200 outline-none'><Link href={"/hotels"}>Search</Link></button>
</div>

            </div>
        </div>
    )
}

export default Header3