import React from 'react'

const Hero = () => {
  return (
    <div className='px-4 max-w-[1640px]'>
      <div className='relative max-h-[500px]'>
        <div className='absolute w-full h-full flex flex-col justify-center px-2 bg-black/75  text-white font-bold '>
            <h1 className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl'>The <span className='text-orange-500'>Best</span></h1>
            <h1 className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl'><span className='text-orange-500'>Food</span> Devliverd</h1>
        </div>
        <img className='w-full  object-cover h-[500px]' src="https://images.pexels.com/photos/1639562/pexels-photo-1639562.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
      </div>
    </div>
  )
}

export default Hero
