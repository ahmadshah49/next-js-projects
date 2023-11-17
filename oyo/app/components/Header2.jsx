import React from 'react'
const Header2 = () => {
    const city=[
        {
            name:"Faislabad"
        },
        {
            name:"Islamabad"
        },
        {
            name:"Lahore"
        },
        {
            name:"Karachi"
        },
        {
            name:"Peshawar"
        },
        {
            name:"Multan"
        },
        {
            name:"Murree"
        }
    ]
  return (
    <div>
<div className='flex justify-between px-16 py-2 bg-gray-200'>
    {
        city.map((city,index)=>{
            return(
                <span key={city.name} className='font-light '>{city.name}</span>
            )
        })
    }
</div>
    </div>
  )
}

export default Header2