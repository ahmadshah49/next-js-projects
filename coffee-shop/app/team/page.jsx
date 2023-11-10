import React from 'react'

const Team = (props) => {
    return (
        <div className='bg-[#101010] py-4 px-4'>
            <h1 className='font text-xl text-[#BA9270] text-center '>Our Top Team</h1>
            <h1 className='py-5 text-white text-4xl uppercase  font-bold text-center'>Meet Our Professionals </h1>
            <div className=' rounded flex gap-4 h-full '>
                {/* <img className='object-cover w-[30%] rounded h-[50vh] ' src="https://images.unsplash.com/photo-1581299894007-aaa50297cf16?w=10000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGNoZWZ8ZW58MHx8MHx8fDA%3D" alt="/" />
                <img className=' object-cover w-[30%] rounded h-[50vh] ' src="https://images.unsplash.com/photo-1583394293214-28ded15ee548?w=10000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGNoZWZ8ZW58MHx8MHx8fDA%3D" alt="/" />
                <img className=' object-cover w-[30%] rounded h-[50vh] ' src="https://images.unsplash.com/photo-1592498546551-222538011a27?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="/" /> */}
                <img className=' object-cover w-[30%] rounded h-[50vh] ' src={props.img} alt="/" />

            </div>
        </div>
    )
}

export default Team