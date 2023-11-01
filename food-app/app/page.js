"use client"
import Image from 'next/image'
import Navbar from './components/navbar'
import Hero from './components/hero'
import Cards from './components/cards'
import Food from './components/food'
import Category from './components/category'

export default function Home() {
  return (
    <>
    <Navbar/>
    <Hero/>
    <Cards />
    <Food />
    <Category/>
    </>
  )
}
