import React from 'react'

const Hero = () => {
  return (
    <div className='text-white'>
      <div className='flex justify-center items-center -mt-24 flex-col h-screen' >
        <p className='uppercase p-2 text-blue-300 font-bold '> Growing with data Analytics</p>
        <h1 className='text-4xl  font-bold sm:text-6xl md:text-7xl md:py-6 py-4'>Grow With Data </h1>
        <div>
          <p className='md:text-4xl sm:text-3xl text-xl font-bold'>Fast,Flexible Financing for BTC</p>
        </div>
        <p className='md:text-2xl sm:text-xl font-bold text-gray-600' >Monitor Your Data Analystic to increase revenue for BTC</p>
        <button className='w-[200px] bg-blue-300 my-4 py-4 rounded-lg text-black  font-bold hover:bg-blue-400  ease-in-out duration-500'>Get Started</button>
      </div>
    </div>
  )
}

export default Hero
