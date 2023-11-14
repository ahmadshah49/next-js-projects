import React from 'react'

const Projecs = () => {
    return (
        <div id='page' className='relative justify-items-center content-center px-6 py-8 gap-4 grid md:grid-cols-4 md:h-[50vh] h-auto  text-white  bg-fixed bg-center bg-cover img2'>
            <div className='grad absolute top-0 left-0 right-0 bottom-0 '></div>
            <div className='px-2 z-10 flex justify-center items-center md:items-start sm:py-6 py-8   flex-col md:py-0 w-full  md:h-[300px] md:w-[250px] '>
                <h2 className='font text-xl md:text-[1rem] text-[#BA9270]'>Our Projects</h2>
                <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold py-4 uppercase ' >Why People Chose us</h1>
                <button className='px-2 py-2 text-xs sm:text-lg  font-bold  border hover:bg-[#BA9270] duration-300 '>More Projects</button>
            </div>
            <div className=' p-2 border z-10 flex justify-center items-center w-full md:h-[320px]'>
                <img className='h-[200px] md:h-[300px] object-cover w-full md:w-[250px]' src="https://images.unsplash.com/photo-1532498551838-b7a1cfac622e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTE2fHxjb2ZmZWUlMjB0b2dldGhlcnxlbnwwfHwwfHx8MA%3D%3D" alt="" />
            </div>
            <div className='p-2 border z-10 flex justify-center items-center w-full md:h-[320px]'>
                <img className='h-[200px] md:h-[300px] object-cover w-full md:w-[250px]' src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTkxfHxjb2ZmZWUlMjB0b2dldGhlcnxlbnwwfHwwfHx8MA%3D%3D" alt="" />
            </div>
            <div className=' p-2 border z-10 flex justify-center items-center w-full md:h-[320px]'>
                <img className=' h-[200px] md:h-[300px] object-cover w-full md:w-[250px]' src="https://images.unsplash.com/photo-1664341857920-e9703e2803dd?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTg2fHxjb2ZmZWUlMjB0b2dldGhlcnxlbnwwfHwwfHx8MA%3D%38" alt="" />
            </div>
        </div>
    )
}

export default Projecs