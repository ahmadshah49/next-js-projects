import React from 'react'
import Btn from './btn'

const Hero = () => {
    return (
        <div className='relative flex justify-start items-center h-[93vh]  text-white  bg-fixed bg-center bg-cover img'>
            <div className='grad absolute top-0 left-0 right-0 bottom-0 '></div>
            <div className='px-8 sm:px-24 md:px-36 z-10'>
                <h2 className='font text-xl md:text-2xl'>Coffee - Tea -Food</h2>
                <h1 className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold py-4 uppercase ' >Coffe Shop <br /> Morning</h1>
                <div className='flex gap-2'>
                   <Btn btn="Discover More"/>
                    <button className='px-3 py-2 text-xs sm:text-lg sm:px-4 sm:py-3 font-bold  border hover:bg-[#BA9270] duration-300 '>Product More</button>

                </div>
            </div>
        </div>
    )
}

export default Hero