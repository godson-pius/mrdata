import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <>
        <div className="w-full bg-pink-400 text-white">
            <div className="w-full flex flex-col items-center justify-center h-screen">
                <h1 className='head__text text-9xl p-2 shadow'>Ooops!</h1>
                <p className='mt-5 text-oramge-400 text-xl'>Page not found</p>
                <Link to='/' className='font-extrabold text-black hover:text-orange-200 duration-500 text-sm'>Return back</Link>
            </div>
        </div>
    </>
  )
}

export default NotFound