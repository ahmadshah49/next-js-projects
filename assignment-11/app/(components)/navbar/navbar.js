import React from 'react'
import Link from 'next/link'
import{FaSearch}from 'react-icons/fa';
import './navbar.css'
const Navbar = () => {
  return (
    <>
     <nav>
        <h1>LOGO.</h1>
        <ul>
            <li><Link href={'/'}>Home</Link></li>
            <li><Link href={'/about'}>About</Link></li>
            <li><Link href={'/pages'}>Pages</Link></li>
            <li><Link href={'/services'}>Services</Link></li>
            <li><Link href={'/protfolio'}>Protofolio</Link></li>
            <li><Link href={'/blog'}>Blog</Link></li>
            <li><Link href={'/contact'}>Contact</Link></li>
        </ul>
        <div>
         <span>Search</span>
         <span><FaSearch/></span>
        </div>
     </nav>
    </>
  )
}

export default Navbar
