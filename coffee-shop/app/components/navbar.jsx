"use client"
import React from 'react'
import { useState } from 'react'
import { AiOutlineSearch, AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import { GiShoppingCart, GiCoffeeBeans } from 'react-icons/gi'
import {HiMenuAlt3} from 'react-icons/hi'
import Link from 'next/link'
const Navbar = () => {
    const [nav, setNav] = useState(false)
    return (
        <div className='fixed w-full z-20'>
        <div className=' flex justify-between px-4 items-center h-16 bg-[#101010]'>
            <h1><GiCoffeeBeans size={50} className='text-[#BA9270]' /></h1>
            <ul className='hidden md:flex gap-4 text-white font-bold text-base uppercase'>
                <li className='hover:text-[#edd7c3] duration-300 cursor-pointer'><Link href={"/#home"}>home</Link></li>
                <li className='hover:text-[#edd7c3] duration-300 cursor-pointer'><Link href={"/#About"}>About</Link></li>
                <li className='hover:text-[#edd7c3] duration-300 cursor-pointer'><Link href={"/#Menu"}>menu</Link></li>
                <li className='hover:text-[#edd7c3] duration-300 cursor-pointer'><Link href={"/#page"}>Projects</Link></li>
                <li className='hover:text-[#edd7c3] duration-300 cursor-pointer'><Link href={"/#team"}>Team</Link></li>
                <li className='hover:text-[#edd7c3] duration-300 cursor-pointer'><Link href={"/#Testimonial"}>Testimonial</Link></li>
                <li className='hover:text-[#edd7c3] duration-300 cursor-pointer'><Link href={"/#contact"}>Contact</Link></li>
            </ul>
            <div className=' flex justify-between items-center md:w-16 text-white '>
                <span className='hidden md:flex bg-[#BA9270] w-8 h-8 rounded-full cursor-pointer  items-center justify-center  '><AiOutlineSearch size={20} /></span>
                <GiShoppingCart size={20} className='hidden md:block cursor-pointer' />
                <div onClick={() => setNav(!nav)} className='md:hidden'>
                    {!nav ? <HiMenuAlt3 size={30} /> : <AiOutlineClose size={30} />}
                </div>
            </div>

            {/* for responsive */}
            <div className={nav ? 'fixed  top-0 left-0 bg-[#101010] w-[70%] h-screen duration-1000 z-20' : 'fixed z-20 top-0 left-[-100%] bg-[#101010] w-[70%] h-screen duration-1000'}>
                <div className='h-16 w-[100%] px-4 mx-auto flex justify-between items-center  text-white '>
                   
                    <GiShoppingCart size={40} className='text-[#BA9270] cursor-pointer' />

                </div>
                <ul className='flex flex-col items-center mt-16 justify-start h-[100%]  gap-4 text-white font-bold text-base'>
                    <li className=' duration-300 cursor-pointer h-10 uppercase text-[1.25em]   w-[40%] text-center border-b-2 '>Home</li>
                    <li className=' duration-300 cursor-pointer h-10 uppercase text-[1.25em]   w-[40%] text-center border-b-2 '>About</li>
                    <li className=' duration-300 cursor-pointer h-10 uppercase text-[1.25em]   w-[40%] text-center border-b-2 '>menu</li>
                    <li className=' duration-300 cursor-pointer h-10 uppercase text-[1.25em]   w-[40%] text-center border-b-2 '>Shop</li>
                    <li className=' duration-300 cursor-pointer h-10 uppercase text-[1.25em]   w-[40%] text-center border-b-2 '>Pages</li>
                    <li className=' duration-300 cursor-pointer h-10 uppercase text-[1.25em]   w-[40%] text-center border-b-2 '>Blog</li>
                    <li className=' duration-300 cursor-pointer h-10 uppercase text-[1.25em]   w-[40%] text-center border-b-2 '>Contact</li>
                </ul>
            </div>

        </div>
        </div>

    )
}

export default Navbar                                                       