import Image from 'next/image'
import Hero from './components/hero'
import Navbar from './components/navbar'
import Gallery from './gallery/page'
import { SliderData } from './data/gallery'
export default function Home() {
  return (
    <>
    <Hero title="Captur PhotoGraphy" para="I capture Moments in Nature And Keep Them Alive"/>
    <Navbar/>
    <Gallery slides={SliderData}/>
    </>
  )
}
