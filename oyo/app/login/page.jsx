import React from 'react'

const Login = () => {
    return (
        <div className='flex relative h-screen justify-center items-center bg-login-background bg-no-repeat bg-cover '>
            <div className='absolute top-0 left-0 text-white bottom-0 right-0 bg-black/25'></div>
            <div className='flex justify-center items-center text-white mx-24   z-10 w-[50%]'>
                <div >
                    <p className='font-bold text-5xl'>There's a smarter way to OYO around</p>
                    <p className='font-bold'>Sign up with your phone number and get exclusive access to discounts and savings on OYO stays and with our many travel partners.</p>
                </div>
            </div>
            <div className='z-10  pb-4 bg-white  mr-32 text-white  items-center w-[50%]'>
                <div className='w-full px-10 font-bold py-2 bg-gradient-to-l from-red-500 to-red-400'>Sign up & Get 500Rs OYO Money</div>
                <h1 className='text-4xl font-bold pl-8 text-black py-8'>Login / Signup</h1>
                <p className='pl-8 py-2 text-black font-bold'>Please enter your phone number to continue </p>
                <input className='ml-8 pl-4 mt-2 border outline-none text-black border-gray-500 w-96 py-2' type="text" placeholder='Enter Your Name' />
                <input className='ml-8 pl-4 mt-2 border outline-none text-black border-gray-500 w-96 py-2' type="email" placeholder='Enter Your Email' />
                <input className='ml-8 pl-4 mt-2 border outline-none text-black border-gray-500 w-96 py-2' type="password" placeholder='Enter Your Password ' />
                <button
                    type="submit"
                    className=" ml-8 w-96 py-4  text-lg font-bold bg-red-500 hover:cursor-pointer hover:bg-red-600 text-white my-5 rounded-lg"
                >
                    Sign up
                </button>
                <div className='text-black ml-8 py-2  '>Already have an account ? <span className='text-red-500 border-b border-red-500 py-1 font-bold' >Login</span></div>
            </div>
            <div>

            </div>
        </div>
    )
}

export default Login