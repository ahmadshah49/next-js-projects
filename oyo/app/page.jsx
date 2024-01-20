import Image from 'next/image'
import Header1 from './components/Header1'
import Header2 from './components/Header2'
import Header3 from './components/header3'
import Header4 from './components/Header4'
import Footer from './components/Footer'

export default function Home() {
  return (
   <>
   <head>
    <title>Instagram.</title>
<link rel="icon" href="/icon.png" />
   </head>
   <Header1/>
   <Header2/>
   <Header3/>
   <div className='px-20 py-20'>
    <div>
      <Image src={"/banner1.avif"} width={500} height={500} className='w-full py-10 '/>
    </div>
    <div>
      <Image src={"/banner2.avif"} width={500} height={500} className='w-full py-10 '/>
    </div>
    <Header4/>
   </div>
   <Footer/>
   </>
  )
}
