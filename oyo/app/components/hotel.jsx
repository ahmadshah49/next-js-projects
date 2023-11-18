import Image from 'next/image'
import React from 'react'
import Link from 'next/link'

const Hotel = () => {
  return (
    <>

    <div className='w-[98%] flex p-4 border border-black my-4 mx-auto rounded-lg'>
        <div className='flex  '>
            <Image src={"https://static.leonardo-hotels.com/image/leonardohotelbucharestcitycenter_room_comfortdouble2_2022_4000x2600_7e18f254bc75491965d36cc312e8111f_1200x780_mobile_3.jpeg"}
            width={2000}
            height={2000}
            className='w-[320px] object-cover h-60 mr-4'/>
            <div className='flex flex-col justify-between h-60'>
            <Image src={"https://static.leonardo-hotels.com/image/leonardohotelbucharestcitycenter_room_comfortdouble2_2022_4000x2600_7e18f254bc75491965d36cc312e8111f_1200x780_mobile_3.jpeg"}
            width={2000}
            height={2000}
            className='w-20  '/>
            <Image src={"https://static.leonardo-hotels.com/image/leonardohotelbucharestcitycenter_room_comfortdouble2_2022_4000x2600_7e18f254bc75491965d36cc312e8111f_1200x780_mobile_3.jpeg"}
            width={2000}
            height={2000}
            className='w-20  '/><Image src={"https://static.leonardo-hotels.com/image/leonardohotelbucharestcitycenter_room_comfortdouble2_2022_4000x2600_7e18f254bc75491965d36cc312e8111f_1200x780_mobile_3.jpeg"}
            width={2000}
            height={2000}
            className='w-20  '/><Image src={"https://static.leonardo-hotels.com/image/leonardohotelbucharestcitycenter_room_comfortdouble2_2022_4000x2600_7e18f254bc75491965d36cc312e8111f_1200x780_mobile_3.jpeg"}
            width={2000}
            height={2000}
            className='w-20  mr-3'/>
            </div>
            <div className='pl-16 '>
      <h1 className=' font-bold text-2xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, incidunt?</h1>
      <p className=' py-3 text-sm'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo quae dignissimos consectetur amet culpa aspernatur nemo deleniti.</p>
      <div>
        <span className='font-bold mr-2 pb-4 text-lg'>Facilities:</span>
        <span className='text-lg '>Free Wifi  </span>,
        <span className='text-lg '>Pet Care </span>,
        <span className='text-lg '>Swimming Pool </span>,
        <span className='text-lg '>Beaches </span>,
        <span className='text-lg '>Resorts </span>
      </div>
<div className='py-4'>
<span className='px-6 py-3 bg-blue-400 rounded-lg'> price :5660 Rs</span>
<Link href={"/"} className='mx-4 font-bold text-red-500'>See Details</Link>
</div>
      </div>
        </div>
      
    </div>
    </>
  )
}

export default Hotel