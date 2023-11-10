import Image from 'next/image'
import Navbar from './components/navbar'
import Hero from './components/hero'
import Cards from './components/cards'
import {MdCoffeeMaker} from 'react-icons/md'
import {GiForkKnifeSpoon} from 'react-icons/gi'
import {AiOutlineCoffee} from 'react-icons/ai'
import About from './about/page'
import Menu from './menu/page'
import Team from './team/page'
export default function Home() {
  return (
 <main id='home'>
 <Navbar/>
 <Hero/>
 <div  className='md:flex justify-center items-center  px-2 bg-[#101010]'>
 <Cards logo={<MdCoffeeMaker className='text-[#BA9270] mb' size={60}/>} title="Coffee Pack" pera="You can't buy happiness, but you can buy coffee, and that's pretty close."/>
 <Cards logo={<GiForkKnifeSpoon className='text-[#BA9270] mb' size={60}/>} title="Food Menu" pera="You can't buy happiness, but you can buy coffee, and that's pretty close."/>
 <Cards logo={<AiOutlineCoffee className='text-[#BA9270] mb' size={60}/>} title="Coffee Pack" pera="You can't buy happiness, but you can buy coffee, and that's pretty close."/>
 </div>
 <About/>
 <div >
 <Menu/>
 </div>
 <Team/>
 </main>
  )
}
