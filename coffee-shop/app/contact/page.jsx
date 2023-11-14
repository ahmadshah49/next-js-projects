import React from 'react'
import Btn from '../components/btn'

const Contact = () => {
    return (
        <div id='contact' className='bg-[#101010] '>
            <div className='flex bg-black flex-col justify-center mx-auto items-center py-16 border border-[#BA9270] w-[90%]'>
            <h2 className='font text-xl md:text-2xl text-[#BA9270]'>Contact Us.</h2>
            <h1 className='text-3xl text-white sm:text-4xl md:text-5xl lg:text-6xl font-extrabold py-4 uppercase ' >Make a Reserve</h1>
            <p className='pb-4 text-center text-white text-sm sm:text-base'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam molestias deserunt nam magni? Est. <span className='text-[#BA9270]'>Call Us +949-443-424-44</span>
            </p>
            <form   >
     <div className='grid sm:grid-cols-2 py-6 gap-6'>
                <div className='py-4'>
                    <label className='text-white text-base'>Your Name <sup>*</sup></label> <br />
                    <input type="text"  className='bg-transparent border-b-[1px] outline-none text-[#BA9270] text-sm pt-2  ' />
                </div>
                <div className='py-4'>
                    <label className='text-white text-base'>Your Number <sup>*</sup></label> <br />
                    <input type="number"  className='bg-transparent border-b-[1px] outline-none text-[#BA9270] text-sm pt-2  ' />
                </div>
                <div className='py-4'>
                    <label className='text-white text-base'>Your Email <sup>*</sup></label> <br />
                    <input type="email"  className='bg-transparent border-b-[1px] outline-none text-[#BA9270] text-sm pt-2  ' />
                </div>
                
                <div className='py-4'>
                    <label className='text-white text-base'>Password <sup>*</sup></label> <br />
                    <input type="password"  className='bg-transparent border-b-[1px] outline-none text-[#BA9270] text-sm pt-2  ' />
                </div>
             
                </div>
                <button type='submit' className='bg-white outline-none py-2 px-4 font-bold rounded text-center mx-auto'>
                    Submit
                </button>
            </form>
            </div>
        </div>
    )
}

export default Contact