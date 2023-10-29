import Analytics from '@/components/analytics'
import Cards from '@/components/cards'
import Hero from '@/components/hero'
import Newsletter from '@/components/newsletter '
import Image from 'next/image'

export default function Home() {
  return (
   <>
   <Hero/>
   <Analytics/>
   <Newsletter/>
   <Cards/>
   </>
  )
}
