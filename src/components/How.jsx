import React from 'react'
import { Link } from 'react-router-dom'

const How = () => {
  return (
    <>
        <div className="w-full bg-black py-20 text-white">
            <div className="w-full">
                <h1 className='head__text text-2xl md:text-6xl text-center'>4 Fantastic ways our platform <br /> works to <span className='text-orange-400 font-bold shadow'>send data</span> to our customers</h1>
                <p className='text-center text-xs md:text-sm mt-5'>The awesome ways to take advantage of this platform to receive data monthly for the next <br /> 24 months with a one-time fee payment when we start distributing data</p>
            </div>

            <div className="w-full grid md:grid-cols-2 lg:grid-cols-4 px-20 mt-20 gap-10 mb-10">

              <div className="info bg-gray-800 p-5 rounded-lg shadow-2xl shadow-gray-800">
                <h1 className='text-2xl text-orange-200 font-extrabold'>MRDATA.</h1>
                <h4 className='font-bold text-md mt-3'>Awaits your data</h4>
                <p className='text-sm mt-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est debitis natus ducimus nam illo aliquid asperiores nihil quisquam hic facere error harum, dolorum, blanditiis corporis cum pariatur ut distinctio laboriosam sequi nostrum velit eligendi nisi?.</p>
              </div>

              <div className="info bg-gray-800 p-5 rounded-lg shadow-2xl shadow-gray-800">
                <h1 className='text-2xl text-orange-200 font-extrabold'>MRDATA.</h1>
                <h4 className='font-bold text-md mt-3'>Awaits your data</h4>
                <p className='text-sm mt-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est debitis natus ducimus nam illo aliquid asperiores nihil quisquam hic facere error harum, dolorum, blanditiis corporis cum pariatur ut distinctio laboriosam sequi nostrum velit eligendi nisi?.</p>
              </div>

              <div className="info bg-gray-800 p-5 rounded-lg shadow-2xl shadow-gray-800">
                <h1 className='text-2xl text-orange-200 font-extrabold'>MRDATA.</h1>
                <h4 className='font-bold text-md mt-3'>Awaits your data</h4>
                <p className='text-sm mt-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est debitis natus ducimus nam illo aliquid asperiores nihil quisquam hic facere error harum, dolorum, blanditiis corporis cum pariatur ut distinctio laboriosam sequi nostrum velit eligendi nisi?.</p>
              </div>

              <div className="info bg-gray-800 p-5 rounded-lg shadow-2xl shadow-gray-800">
                <h1 className='text-2xl text-orange-200 font-extrabold'>MRDATA.</h1>
                <h4 className='font-bold text-md mt-3'>Awaits your data</h4>
                <p className='text-sm mt-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est debitis natus ducimus nam illo aliquid asperiores nihil quisquam hic facere error harum, dolorum, blanditiis corporis cum pariatur ut distinctio laboriosam sequi nostrum velit eligendi nisi?.</p>
              </div>

            </div>

            <Link to='/' className='bg-white hover:bg-orange-400 duration-500 p-3 text-xs text-[#222222] rounded-lg font-bold flex justify-center mx-40 md:mx-52 lg:mx-[30rem] hover:text-white'>Create a free account</Link>
        </div>
    </>
  )
}

export default How