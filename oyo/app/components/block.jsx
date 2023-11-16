import React from 'react'

const Block = (props) => {
    return (
        <div className='flex items-center px-4  border-l border-gray-200 w-60 h-full'>
            <span className='px-4'>{props.icon}</span>
            <div>
                <h1 className='font-semibold'>{props.heading}</h1>
                <p className='text-xs line-clamp-1'>{props.title}</p>
            </div>
        </div>
    )
}

export default Block