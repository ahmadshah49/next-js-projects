import React from 'react'
import {MdCoffeeMaker} from 'react-icons/md'

const Cards = (props) => {
  return (
    <div className='bg-[#101010] py-10 md:py-28 px-4  '>
       <div className='border border-[#BA9270] hover:scale-105 duration-300 flex justify-center items-center flex-col  text-center px-4 rounded py-16  shadow-2xl  shadow-[#18232c]' >
        {props.logo}
        <h1 className='py-2 text-2xl font-bold text-white' >{props.title}</h1>
        <p className='py-2 text-sm text-white'>{props.pera}</p>
        <a href="/" className='text-[#BA9270] py-3 font-bold '>Read More</a>
      </div>
      </div>
  )
}

export default Cards