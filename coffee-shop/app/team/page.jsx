import Image from 'next/image'
import React from 'react'

const Team = (props) => {
    return (
     <div className='flex flex-col justify-center items-center sm:px-8 md:px-0'>
      <img src={props.img} className='rounded w-[320px] h-[400px] object-cover' alt="" />
      <div className='bg-black text-white  w-[280px] h-[100px] py-4 text-center -mt-14  rounded' >
        <h1 className='uppercase text-[1.5rem] font-bold'>{props.title}</h1>
        <p className='pt-2 text-[#BA9270] font-bold'>{props.chef}</p>
      </div>
     </div>

    )
}

export default Team
