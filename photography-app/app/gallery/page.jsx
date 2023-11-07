








"use client"
import { useState } from 'react'
import React from 'react'
import { SliderData } from '../data/gallery'
import Image from 'next/image'
import { FaArrowCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa'
const Gallery = ({ slides }) => {
  const [current, setCurrent] = useState(0)
  const length = slides.length
  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1)
  }
  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1)
  }
  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }
  return (
    <div id='gallery' className=' max-w-[1240px] mx-auto'>
      <h1 className='text-2xl font-bold text-center py-20'>Gallery</h1>
      <div className='relative flex justify-center items-center p-4'>
        {
          SliderData.map((slide, index) => {
            return (
              <div key={index} className={index === current ? 'opacity-[1] ease-in-out duration-1000' : 'opacity-0'}>
                <FaArrowCircleLeft
                onClick={prevSlide}
                size={50} className='absolute top-[50%] left-[30px] text-black cursor-pointer select-none z-10' />
                {index === current &&
                  <Image
                    src={slide.image}
                    objectFit='cover'
                    width={1440}
                    height={600}
                    className='w-[1240px] h-[50vh] object-cover'
                    />
                    
                }
                    <FaArrowAltCircleRight size={50} 
                    onClick={nextSlide}
                    className=' absolute top-[50%] right-[30px] text-black cursor-pointer select-none z-10'/>
              </div>
            )
          })}
      </div>
    </div>
  )
}

export default Gallery