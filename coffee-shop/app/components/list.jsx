"use client"
import React from 'react'

const List = (props) => {
  return (
    <div className='flex  justify-center items-center gap-4 border py-4 md:py-8 duration-300 hover:shadow-lg   hover:shadow-[#18232c] px-8'>
{props.icon}
<div>
    <h1 className='text-white text-xl sm:text-2xl md:text-3xl font-bold py-2 '>{props.title}</h1>
    <p className='text-gray-400 text-xs sm:text-sm'>{props.pera}</p>
</div>
    </div>
  )
}

export default List