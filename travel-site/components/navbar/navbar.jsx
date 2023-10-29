"use client"
import {React,useState} from 'react'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'

const Navbar = () => {
  const [nav, setNav] = useState(true)
  const navHandler=()=>{
    setNav(!nav)
  }
  return (
  
    <div className='flex text-white  justify-between  px-4 items-center h-24'>
      <h1 className='text-blue-300 text-2xl'>Next.14</h1>
      <ul className='hidden  md:flex '>
        <li className='p-6'>Home</li>
        <li className='p-6'>Comapany</li>
        <li className='p-6'>Resources</li>
        <li className='p-6'>About</li>
        <li  className='p-6'>Contact</li>
      </ul>
      <div onClick={navHandler} className='cursor-pointer block md:hidden'>
        {!nav ?<AiOutlineClose size={20}/>:    <AiOutlineMenu size={20} />}
    
      </div>
      <div className={!nav ?"fixed text-white w-[60%]  h-full top-0 left-0 bg-[#100f0f]  border-r border-gray-900 ease-in-out duration-1000 transition-0.4":"fixed left-[-100%]"}>
      <h1 className='p-6 text-blue-300 text-2xl'>Next.14</h1>
        <ul className=' bg-blue-500uppercase p-4'>
          <li className='p-6 border-b border-gray-600'>Home</li>
          <li className='p-6 border-b border-gray-600'>Comapany</li>
          <li className='p-6 border-b border-gray-600'>Resources</li>
          <li className='p-6 border-b border-gray-600 '>About</li>
          <li className='p-6'>Contact</li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
