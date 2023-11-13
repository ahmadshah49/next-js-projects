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
import Play from './autoplay/page'
import Projecs from './projecs/page'
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
 <div className='px-4 bg-[#101010] grid sm:grid-cols-2 md:grid-cols-3 gap-6 justify-center place-items-center '>
 <Team title="marcelluss h. " chef="Senior Chef" img="https://images.unsplash.com/photo-1581299894007-aaa50297cf16?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGNoZWZ8ZW58MHx8MHx8fDA%3D" />
 <Team title="marcelluss h. " chef="Senior Chef" img="https://images.unsplash.com/photo-1583394293214-28ded15ee548?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGNoZWZ8ZW58MHx8MHx8fDA%3D" />
 <Team title="marcelluss h. " chef="Senior Chef" img="https://images.unsplash.com/photo-1592498546551-222538011a27?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
 </div>
 <Play/>
 <Projecs/>
 </main>
  )
}
