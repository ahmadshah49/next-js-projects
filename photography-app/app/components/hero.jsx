import React from 'react'

const Hero = (props) => {
  return (
    <div className='flex justify-center items-center h-screen  text-white  bg-fixed bg-center bg-cover img'>
        <div className='absolute top-0 left-0 right-0 bottom-0 bg-black/70 z-[2]'/>
        <div  className='z-[2] px-4'  >
            <h2 className='text-5xl font-bold '>{props.title}</h2>
            <p className='py-2 text-xl'>{props.para}</p>
            <button className='border p-2 '>Submit</button>
        </div>
    </div>
  )
}

export default Hero                                             