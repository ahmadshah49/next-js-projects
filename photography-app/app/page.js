import Image from 'next/image'
import Hero from './components/hero'
import Navbar from './components/navbar'
import Gallery from './gallery/page'

export default function Home() {
  return (
    <>
    <Hero title="Captur PhotoGraphy" para="I capture Moments in Nature And Keep Them Alive"/>
    <Navbar/>
    <Gallery/>
    </>
  )
}
