"use client "
import React from 'react'
import { useState } from 'react'
import { data } from '../data/data.js'

const Food = () => {
    const [foods, setFoods] = useState(data)
    const filterType=(category)=>{
        setFoods(
            data.filter((item)=>{
                return item.category === category
            })
        )

    }
    const filterprice=(price)=>{
        setFoods(
            data.filter((item)=>{
                return item.price === price
            })
        )
    }
    return (
        <div className='max-w-[1640px] mx-auto px-4 py-10'>
            <h1 className='text-orange-600 font-bold text-4xl text-center'>Top Rated Items</h1>
            {/* filter row   */}
            <div className='flex flex-col lg:flex-row justify-between'>
                {/* filter type */}
                <div>
                    <p className='font-bold text-gray-700'>Filter type</p>
                    <div className='flex justify-between flex-wrap'> 
                        <button onClick={()=>setFoods(data)} className='m-1 border p-1 px-3 rounded-xl border-orange-600 text-orange-600 hover:bg-orange-600 duration-500 hover:text-white'>All</button>
                        <button onClick={()=>filterType("burger")} className='m-1 border p-1 px-3 rounded-xl border-orange-600 text-orange-600 hover:bg-orange-600 duration-500 hover:text-white'>Burgers</button>
                        <button onClick={()=>filterType("pizza")}  className='m-1 border p-1 px-3 rounded-xl border-orange-600 text-orange-600 hover:bg-orange-600 duration-500 hover:text-white'>Pizzas</button>
                        <button onClick={()=>filterType("salad")} className='m-1 border p-1 px-3 rounded-xl border-orange-600 text-orange-600 hover:bg-orange-600 duration-500 hover:text-white'>Salad</button>
                        <button onClick={()=>filterType("chicken")} className='m-1 border p-1 px-3 rounded-xl border-orange-600 text-orange-600 hover:bg-orange-600 duration-500 hover:text-white'>Chicken</button>
                    </div>
                </div>
                {/* filter price */}
                <div>
                    <p className='font-bold text-gray-700'>Filter Price</p>
                 <div className='flex justify-between flex-wrap '>
                 <button onClick={()=>setFoods(data)} className='m-1 border p-1 px-3 rounded-xl border-orange-600 text-orange-600 hover:bg-orange-600 duration-500 hover:text-white'>All</button>
                    <button onClick={()=>filterprice('$')} className='m-1 border p-1 px-3 rounded-xl border-orange-600 text-orange-600 hover:bg-orange-600 duration-500 hover:text-white'>$</button>
                    <button onClick={()=>filterprice('$$')} className='m-1 border p-1 px-3 rounded-xl border-orange-600 text-orange-600 hover:bg-orange-600 duration-500 hover:text-white'>$$</button>
                    <button onClick={()=>filterprice('$$$')} className='m-1 border p-1 px-3 rounded-xl border-orange-600 text-orange-600 hover:bg-orange-600 duration-500 hover:text-white'>$$$</button>
                    <button onClick={()=>filterprice('$$$$')} className='m-1 border p-1 px-3 rounded-xl border-orange-600 text-orange-600 hover:bg-orange-600 duration-500 hover:text-white'>$$$$</button>
                 </div>
                </div>
            </div>
           {/*  for foods*/}
           <div className='grid grid-cols-2 lg:grid-cols-4 gap-5 pt-4 '>
            {foods.map((food,index)=>{
                return(
                    <div key={index} 
                    className='border shadow-lg rounded-lg hover:scale-105 duration-300 cursor-pointer' >
                         <img src={food.image} alt={food.name} 
                         className='w-full h-[200px] object-cover rounded-lg'/>
                         <div className='flex justify-between px-2 py-4'>
                            <p className='font-bold px-1'>{food.name}</p>
                            <p><span className='bg-orange-500 p-1 px-1 overflow-hidden rounded-lg text-white' >{food.price}</span></p>
                         </div>
                    </div>
                )
            })}
           </div>
        </div>
    )
}

export default Food
