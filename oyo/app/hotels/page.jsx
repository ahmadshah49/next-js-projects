import React from 'react'
import Hotel from '../components/hotel'
import Header1 from '../components/Header1'
const Hotels = () => {
  return (
    <>
        <Header1/>
    <div className='m-5'>
        <Hotel/>
        <Hotel/>
        <Hotel/>
    </div>
    </>
  )
}

export default Hotels