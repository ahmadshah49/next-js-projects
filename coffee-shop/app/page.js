import Image from 'next/image'
import Navbar from './components/navbar'
import Hero from './components/hero'
import Cards from './components/cards'

export default function Home() {
  return (
 <>
 <Navbar/>
 <Hero/>
 <div>
  <Cards/>
 </div>
 </>
  )
}
