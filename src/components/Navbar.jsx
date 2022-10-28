import React from 'react'
import { FiMenu } from 'react-icons/fi'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
      <div className="w-full px-10">
        <div className="w-full flex justify-between py-5 items-center">
          <div className="logo">
            <h1>MRDATA</h1>
          </div>
          <div className="menu hidden md:flex gap-10 items-center text-sm">
            <Link to='/' className='active text-[#222222] hover:text-orange-400 duration-500'>Home</Link>
            <Link to='/' className='text-[#222222] hover:text-orange-400 duration-500'>Customers</Link>
            <Link to='/' className='text-[#222222] hover:text-orange-400 duration-500'>Why MrData</Link>
            <Link to='/' className='text-[#222222] hover:text-orange-400 duration-500'>Who we are</Link>
            <Link to='/sign-in' className='text-[#222222] hover:text-orange-400 duration-500'>Sign In</Link>
            <Link to='/get-started' className='bg-[#222222] hover:bg-orange-400 duration-500 p-3 text-xs text-white rounded-lg font-bold'>Create a free account</Link>
          </div>

          <FiMenu size={23} className='cursor-pointer hover:text-orange-400 duration-500 md:hidden' />
        </div>
      </div>
    </>
  )
}

export default Navbar