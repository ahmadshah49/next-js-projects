import React from 'react'

const Btn = (props) => {
  return (
    <div>
 <button className='px-3 py-2 text-xs sm:text-lg sm:px-4 sm:py-3  font-bold hover:bg-transparent border duration-300 bg-[#BA9270]'>{props.btn}</button>

    </div>
  )
}

export default Btn