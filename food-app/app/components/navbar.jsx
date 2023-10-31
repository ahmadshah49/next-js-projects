"use client"
import {React,useState} from 'react'
import { AiOutlineClose, AiOutlineMenu,AiFillTag , AiOutlineSearch } from 'react-icons/ai'
import { BsFillCartFill ,BsFillSaveFill } from 'react-icons/bs'
import {TbTruckDelivery} from 'react-icons/tb'
import {FaUserFriends, FaWallet} from 'react-icons/fa'
import {MdFavorite, MdHelp} from 'react-icons/md'
const Navbar = () => {
    const [nav, setNav] = useState(false)
    return (
       <div>
         <div className='max-w-[1640px] flex items-center justify-between p-4'>
            {/* for left */}
            <div className='flex items-center'>
                <div onClick={()=>setNav(!nav)} className='cursor-pointer'>
                    <AiOutlineMenu size={30} />
                </div>
                <h1 className='px-2 text-2xl sm:text-3xl md:text-4xl ' >Best <span className='font-bold'>Eats</span></h1>
                <div className='hidden lg:flex items-center bg-gray-200 p-1 rounded-full'>
                    <p className='bg-black rounded-full text-white px-2'>Delivery</p>
                    <p className='px-2'>Pickup</p>
                </div>
            </div>
            {/* for search */}
            <div className='flex items-center bg-gray-200 w-[200px] md:w-[400px] lg:w-[500px] px-2 rounded-full'>
                <AiOutlineSearch size={25}/>
                <input type="text" placeholder='Search Food' className='bg-transparent py-1 w-full px-1 focus:outline-none'/>
            </div>
            <button className='hidden lg:flex items-center bg-black text-white rounded-full px-4 p-2'><BsFillCartFill size={25} className='px-1'/>Cart</button>
            {/* for cart Button */}
            
        </div>
        {/* for overlay */}
 {nav ? <div className='fixed top-0 left-0 bg-black/75 h-screen w-full z-10'></div>:null}
         {/* sidebar */}
         <div className={nav?'fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300':'fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300'}>
         <AiOutlineClose size={30}onClick={()=>setNav(!nav)} className='cursor-pointer absolute top-4 right-4'/>
         <h1 className='text-2xl p-4'>Best <span className='font-bold'>Eats</span></h1>
         <nav>
         <ul className='flex flex-col p-4 text-gray-800'>
                <li className='text-xl py-4 flex'><TbTruckDelivery size={25} className='mr-4' /> Orders</li>
                <li className='text-xl py-4 flex'><MdFavorite size={25} className='mr-4' /> Favorites</li>
                <li className='text-xl py-4 flex'><FaWallet size={25} className='mr-4' /> Wallet</li>
                <li className='text-xl py-4 flex'><MdHelp size={25} className='mr-4' /> Help</li>
                <li className='text-xl py-4 flex'><AiFillTag size={25} className='mr-4' /> Promotions</li>
                <li className='text-xl py-4 flex'><BsFillSaveFill size={25} className='mr-4' /> Best Ones</li>
                <li className='text-xl py-4 flex'><FaUserFriends size={25} className='mr-4' /> Invite Friends</li>
            </ul>
         </nav>
         </div>
       </div>
    )
}

export default Navbar
