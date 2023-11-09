import React from 'react'
import List from '../components/list'
import {FaPizzaSlice} from 'react-icons/fa'
import {GiPeanut} from 'react-icons/gi'
const Menu = () => {
  return (
    <div id="Menu"  className='bg-[#101010] py-16'>
        <h1 className='font text-xl text-[#BA9270] text-center '>Our Top Menu</h1>
        <h1 className='py-5 text-white text-4xl uppercase  font-bold text-center'>Our top menu list</h1>
        <div className='px-4 grid md:grid-cols-2 gap-8 md:gap-6 py-16'>
            <List icon={<FaPizzaSlice size={50} className='text-[#BA9270]'/>} title="Cook Hot Got Pizza" pera="1/3 Milk Foam, 1/3 hot Milk ,1/3 espresso"/>
            <List icon={<GiPeanut size={50} className='text-[#BA9270]'/>} title="Paella With seafood" pera="1/3 Milk Foam, 1/3 hot Milk ,1/3 espresso"/>
            <List icon={<FaPizzaSlice size={50} className='text-[#BA9270]'/>} title="Cook Hot Got Pizza" pera="1/3 Milk Foam, 1/3 hot Milk ,1/3 espresso"/>
            <List icon={<FaPizzaSlice size={50} className='text-[#BA9270]'/>} title="Cook Hot Got Pizza" pera="1/3 Milk Foam, 1/3 hot Milk ,1/3 espresso"/>
            <List icon={<FaPizzaSlice size={50} className='text-[#BA9270]'/>} title="Cook Hot Got Pizza" pera="1/3 Milk Foam, 1/3 hot Milk ,1/3 espresso"/>
            <List icon={<FaPizzaSlice size={50} className='text-[#BA9270]'/>} title="Cook Hot Got Pizza" pera="1/3 Milk Foam, 1/3 hot Milk ,1/3 espresso"/>
        </div>
    </div>
  )
}

export default Menu