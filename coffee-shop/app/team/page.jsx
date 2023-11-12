import Image from 'next/image'
import React from 'react'

const Team = () => {
    return (
      <div className='grid gap-4 mb-60'>
    <div className='card-artical  relative '>
<img src="https://images.unsplash.com/photo-1581299894007-aaa50297cf16?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGNoZWZ8ZW58MHx8MHx8fDA%3D" className='w-[350px] rounded left-0  right-0 '/>

<div className="card-data w-[280px] bg-black text-white rounded absolute bottom-[-20px]  mx-auto">
    <h1>marcellus h. waddell</h1>
    <p>Senior cheif</p>
</div>
    </div>
      </div>

    )
}

export default Team
