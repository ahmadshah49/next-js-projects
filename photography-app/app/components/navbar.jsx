"use client"
import React from 'react'
import { useState,useEffect } from 'react';
import Link from 'next/link'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
const Navbar = () => {
const [nav, setNav] = useState(false)    
const [color, setColor] = useState('transparent')
const [textColor, setTextColor] = useState('white')
const onNavHandler=()=>{
    setNav(!nav)
}
useEffect(() => {
    const onScrollHandler=()=>{
        if(window.scrollY>=90){
            setColor("white")
            setTextColor('black')
        }else{
            setColor('tranparent')
            setTextColor('white')
        }
        window.addEventListener('scroll',onScrollHandler)
    }
}, [])

    return (
        <div
    
        className='fixed top-0 left-0 w-full z-[10]'>
            <div className={`max-w-[1240px] m-auto bg-black/95 flex justify-between items-center p-4`}>
                <Link className='text-3xl font-bold' href={"/"}>Captur</Link>
                <ul className='hidden md:flex'>
                    <li className='px-4 text-lg'><Link href={"/"}>Home</Link></li>
                    <li className='px-4 text-lg'><Link href={"/#gallery"}>Gallery</Link></li>
                    <li className='px-4 text-lg'><Link href={"/work"}>Work</Link></li>
                    <li className='px-4 text-lg'><Link href={"/contact"}>Contact</Link></li>
                </ul>
                <div onClick={onNavHandler} className='block md:hidden z-[20]'>
                    {
                        nav? <AiOutlineClose size={30}/>
                        :<AiOutlineMenu  size={30} />
                    }
                   </div>

            {/* Mobile Menu */}
            <div className={nav ?'w-full h-screen absolute top-0 left-0  bg-black flex justify-center items-center ease-in-out duration-1000':'w-full h-screen absolute top-0 left-[-100%]  bg-black flex justify-center items-center ease-in-out duration-1000'}>
                 
                <ul>
                    <li className='pb-16 text-2xl text-center hover:text-gray-500 ease-in duration-300'><Link href={"/"}>Home</Link></li>
                    <li className='pb-16 text-2xl text-center hover:text-gray-500 ease-in duration-300'><Link href={"/#gallery"}>Gallery</Link></li>
                    <li className='pb-16 text-2xl text-center hover:text-gray-500 ease-in duration-300'><Link href={"/work"}>Work</Link></li>
                    <li className='pb-16 text-2xl text-center hover:text-gray-500 ease-in duration-300'><Link href={"/contact"}>Contact</Link></li>
                </ul>
            </div>
            </div>
        </div>
    )
}

export default Navbar