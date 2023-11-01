import React from 'react'

const Cards = () => {
    return (
        <div className='p-4 py-16 mx-auto max-w-[1640px] grid md:grid-cols-3 gap-10'>
            <div className='rounded-xl relative'>
                {/* card */}
                <div className='absolute w-full h-full bg-black/50 text-white rounded-xl px-2 py-8'>
                    {/* overlay */}
                    <p className='font-bold text-2xl px-2 pt-2 md:pt-2' >Sun's Out, BOGO's </p>
                    <p className='px-2'>Through 8/26</p>
                    <button className='p-2 rounded-xl font-bold cursor-pointer border-white bg-white text-black mx-2 absolute bottom-4'>Order Now</button>
                </div>
                <img className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl' 
                src="https://images.unsplash.com/photo-1613769049987-b31b641f25b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fGJyZWFrZmFzdHxlbnwwfDB8MHx8&auto=format&fit=crop&w=800&q=60" alt="" />
            </div>

            {/* 2 */}
            <div className='rounded-xl relative'>
                {/* card */}
                <div className='absolute w-full h-full bg-black/50 text-white rounded-xl px-2 py-8'>
                    {/* overlay */}
                    <p  ><span className='font-bold text-2xl px-2 pt-2 md:pt-2 overflow-hidden'>New Restaurants</span> </p>
                    <p className='px-2'>Added Daily</p>
                    <button className='p-2 rounded-xl font-bold cursor-pointer border-white bg-white text-black mx-2 absolute bottom-4'>Order Now</button>
                </div>
                <img className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl' 
                src="https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGJicXxlbnwwfDB8MHx8&auto=format&fit=crop&w=800&q=60" alt="SomeThing Went Wronge" />
            </div>

            {/* 3 */}
            <div className='rounded-xl relative'>
                {/* card */}
                <div className='absolute w-full h-full bg-black/50 text-white rounded-xl px-2 py-8'>
                    {/* overlay */}
                    <p className='font-bold text-2xl px-2 pt-2 md:pt-2' >We Deliver Desserts Too </p>
                    <p className='px-2'>Tasty Treats</p>
                    <button className='p-2 rounded-xl font-bold cursor-pointer border-white bg-white text-black mx-2 absolute bottom-4'>Order Now</button>
                </div>
                <img className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl' 
                src="https://images.unsplash.com/photo-1559715745-e1b33a271c8f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGRlc3NlcnR8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60" alt="" />
            </div>
        </div>
    )
}

export default Cards
