import React from 'react'
import Btn2 from '../components/btn2'
import { BsShop } from 'react-icons/bs'
import { AiFillPlayCircle } from 'react-icons/ai'
import { GiAbstract076 } from 'react-icons/gi'

const About = () => {
  return (
    <div id='About' className='w-[100%]  py-10 px-4 bg-[#101010]'>
      <div className='flex flex-col md:flex-row  justify-center items-center gap-12 '>

        {/* left */}

        <div className=" grad left w-full md:w-[40%]  rounded-xl relative ">
          <div className='text-center grad2 w-full h-full absolute  mx-auto '>
            <div className='w-full h-full flex flex-col justify-end py-8 items-center'>
              <h1 className='font  font-thin text-white text-3xl md:text-4xl py-1 md:py-2'>Coffee Tea Moments</h1>
              <p className='py-2 md:py-2 text-xl text-teal-50'>Since 1992 Year </p>
              <Btn2 btn="Get Free Coffee" />
            </div>
          </div>
          <img className='w-full h-full rounded-lg ' src="https://images.unsplash.com/photo-1605728376920-063bcfaa212d?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEyfHx8ZW58MHx8fHx8" alt="/" />
        </div>

        {/* right */}

        <div className="right w-full md:w-[40%]   flex flex-col justify-start ">
          <p className='text-xl font py-2 md:py-3 text-[#BA9270]'>Our Coffee-tea</p>
          <h1 className='text-white md:text-4xl text-3xl sm:text-3xl py-2 font-bold'>About our Coffee-Tea</h1>
          <p className='text-white text-sm font-mono  py-2  '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur velit numquam error ea praesentium assumenda consectetur deserunt illum accusamus, iusto pariatur architecto earum. Necessitatibus maxime, praesentium dolorum optio iusto.</p>
          <div className='flex gap-4 py-4 justify-center items-center' >
              <BsShop  size={90} className='text-[#BA9270]'/>
            <div>
            <h1 className='text-xl font-bold text-white py-2'>Many Points For Sale</h1>
            <p className='text-sm font-mono text-white py-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque assumenda numquam qui.</p>
            </div>
          </div>
          <div className='flex gap-4 py-4 justify-center items-center' >
              <GiAbstract076  size={90} className='text-[#BA9270]'/>
            <div>
            <h1 className='text-xl font-bold text-white py-2'>Best Coffe Flavors</h1>
            <p className='text-sm font-mono text-white py-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque assumenda numquam qui.</p>
            </div>
          </div>
          <div className='flex gap-2  py-4  items-center '>
            <AiFillPlayCircle className='text-[#BA9270]' size={60} />
            <h1 className='text-[#BA9270] uppercase font-semibold cursor-pointer'>History Play</h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About