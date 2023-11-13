import Image from 'next/image'
import React from 'react'

const Play = () => {
  return (
    <div className='bg-[#101010] px-2 py-[10rem]'>
        <div className='flex flex-wrap gap-2 justify-evenly   '>
            <Image src={'/1.svg'} width={150} height={200} className='h-[50px] object-center filte '  />
            <Image src={'/3.svg'} width={150} height={200} className='h-[50px] object-center filte' />
            <Image src={'/4.svg'} width={150} height={200} className='h-[50px] object-center filte' />
            <Image src={'/5.svg'} width={150} height={200} className='h-[50px] object-center filte' />
            <Image src={'/6.svg'} width={150} height={200} className='h-[50px] object-center filte' />
            <Image src={'/7.svg'} width={150} height={200} className='h-[50px] object-center filte' />
            <Image src={'/8.svg'} width={150} height={200} className='h-[50px] object-center filte' />
        </div>
    </div>
  )
}

export default Play