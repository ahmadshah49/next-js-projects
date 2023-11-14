import React from 'react'
import { GiCoffeeBeans } from 'react-icons/gi'
import { IoIosTime } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

const Footer = () => {
    return (
        <div className='bg-[#000000] py-10 text-white px-4 grid  sm:grid-cols-2 md:grid-cols-3 gap-8 items-center sm:justify-items-center'>
            <div>
                <h1><GiCoffeeBeans size={40} className='mb-4 text-[#BA9270]' /></h1>

                <p className='text-sm sm:text-base'>Lorem ipsum dolor sit amet consectetur adipisicing elit. At soluta deleniti labore repellat maxime odit quidem harum accusantium repudiandae atque eaque esse non optio, dolorum ipsa eius vitae animi illo?</p>
                <span>
                    icons
                </span>
            </div>
            <div>
                <h1 className='text-2xl mb-4 font-bold text-[#BA9270]'>Navigation</h1>
                <p className='cursor-pointer text-sm sm:text-base pb-2'>Become an Affliate</p>
                <p className='cursor-pointer text-sm sm:text-base pb-2'>Community Meetups</p>
                <p className='cursor-pointer text-sm sm:text-base pb-2'>Why Buy With Us?</p>
                <p className='cursor-pointer text-sm sm:text-base pb-2'>Blog & News</p>
                <p className='cursor-pointer text-sm sm:text-base pb-2'>About</p>
            </div>
            <div>
                <h1 className='text-2xl mb-4 font-bold text-[#BA9270]'>Address</h1>
                <p className='flex gap-2 cursor-pointer text-sm sm:text-base pb-4'  >
                    <FaMapMarkerAlt size={20} />   378FA Tower,William SBI 2123,IL,US
                </p>
                <p className='flex gap-2 cursor-pointer text-sm sm:text-base pb-4' >
                    <FaPhoneAlt size={20} /> Telephone:+1220344-4
                </p>
                <p className='flex gap-2 cursor-pointer text-sm sm:text-base pb-4' >
                    <MdEmail size={20} />
                    ahmadraza.fsd.pk94@gmail.com
                </p>
                <p className='flex gap-2  cursor-pointer text-sm sm:text-base pb-4' >
                    <IoIosTime size={20} /> Time:9,00am-4,00pm
                </p>
            </div>
        </div>
    )
}

export default Footer