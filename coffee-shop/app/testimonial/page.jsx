import React from 'react'
import { BsFillStarFill } from 'react-icons/bs'
const Testimonial = () => {
    return (
        <div id="Menu" className='bg-[#101010] px-4 py-16'>
            <h1 className='font text-xl text-[#BA9270] text-center '>Our Testimonial</h1>
            <h1 className='py-5 text-white text-4xl uppercase  font-bold text-center'>What a Client Say ?</h1>
           <div className='flex gap-8 flex-col sm:flex-wrap  sm:flex-row justify-center items-center'>
           <div className='mt-8 flex flex-col justify-center border px-4 py-10  items-start w-full sm:w-[350px]'>
                <div className='flex gap-1 text-[#BA9270] py-4'>
                    <BsFillStarFill />
                    <BsFillStarFill />
                    <BsFillStarFill />
                    <BsFillStarFill />
                    <BsFillStarFill />
                </div>
                <p className='text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, nam. Consequuntur incidunt tempore veniam? Magnam, adipisci! Facilis, suscipit ad omnis, sed fuga aspernatur repudiandae ullam sequi soluta voluptatum consectetur natus!</p>
                <div className='flex justify-center items-center gap-6 py-8'>
                    <img className='h-[70px] w-[70px] object-cover rounded-full' src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGVyc29ufGVufDB8fDB8fHww" alt="" />
                    <div>
                        <h1 className='text-xl text-white font-bold'>Chicana Males</h1>
                        <p className= 'text-sm text-[#BA9270]'>Co-Founder</p>
                    </div>
                </div>
            </div>
            <div className='mt-8 flex flex-col justify-center border px-4 py-10  items-start w-full sm:w-[350px]'>
                <div className='flex gap-1 text-[#BA9270] py-4'>
                    <BsFillStarFill />
                    <BsFillStarFill />
                    <BsFillStarFill />
                    <BsFillStarFill />
                    <BsFillStarFill />
                </div>
                <p className='text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, nam. Consequuntur incidunt tempore veniam? Magnam, adipisci! Facilis, suscipit ad omnis, sed fuga aspernatur repudiandae ullam sequi soluta voluptatum consectetur natus!</p>
                <div className='flex justify-center items-center gap-6 py-8'>
                    <img className='h-[70px] w-[70px] object-cover rounded-full' src="https://images.unsplash.com/photo-1587064712555-6e206484699b?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEwfHx8ZW58MHx8fHx8" alt="" />
                    <div>
                        <h1 className='text-xl text-white font-bold'>Richard Coste</h1>
                        <p className= 'text-sm text-[#BA9270]'>Marketing</p>
                    </div>
                </div>
            </div>
            <div className='mt-8 flex flex-col justify-center border px-4 py-10  items-start w-full sm:w-[350px]'>
                <div className='flex gap-1 text-[#BA9270] py-4'>
                    <BsFillStarFill />
                    <BsFillStarFill />
                    <BsFillStarFill />
                    <BsFillStarFill />
                    <BsFillStarFill />
                </div>
                <p className='text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, nam. Consequuntur incidunt tempore veniam? Magnam, adipisci! Facilis, suscipit ad omnis, sed fuga aspernatur repudiandae ullam sequi soluta voluptatum consectetur natus!</p>
                <div className='flex justify-center items-center gap-6 py-8'>
                    <img className='h-[70px] w-[70px] object-cover rounded-full' src="https://images.unsplash.com/photo-1552058544-f2b08422138a?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cGVyc29ufGVufDB8fDB8fHww" alt="" />
                    <div>
                        <h1 className='text-xl text-white font-bold'>Richard Cost</h1>
                        <p className= 'text-sm text-[#BA9270]'>Manager</p>
                    </div>
                </div>
            </div>
           </div>
        </div>
    )
}

export default Testimonial