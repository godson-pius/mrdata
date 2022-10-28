import React from 'react'
import { FiArrowLeft } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import success from '../assets/images/success.png'

const ResetSuccess = () => {
  return (
    <>
        <div className="w-full py-[5.6rem] md:py-[4rem] px-5">
            <div className="w-full flex flex-col items-center">
                <img src={ success } alt="" />
                <h1 className='text-3xl font-bold'>New Password</h1>
                <h2 className='text-lg'>Confirmed Successful</h2>

                <p className='text-sm text-gray-500 text-center mt-3 md:w-[26rem] lg:w-96'>You have successfully confirm your new password, Please use your new password when logging in</p>

                <div className="w-full flex items-center gap-1 justify-center mt-5 mb-5 hover:text-orange-400 duration-500">
                    <FiArrowLeft size={15} />
                    <Link to='/sign-in' className='font-bold text-sm'>Go back to login</Link>
                </div>
            </div>
        </div>
    </>
  )
}

export default ResetSuccess