import React from 'react'
import { Link } from 'react-router-dom'
import hero from '../assets/images/hero.jpeg'
import airtel from '../assets/images/brands/airtel.png'
import glo from '../assets/images/brands/glo.png'
import etisalet from '../assets/images/brands/etisalet.png'
import mtn from '../assets/images/brands/mtn.png'

const Hero = () => {
  return (
    <>
        <div className="w-full px-10 mt-20">
            <div className="flex flex-col">
                <div className="w-full grid lg:grid-cols-2">
                    <div>
                        <h1 className='head__text text-[2.60rem] md:text-8xl'>
                            Modern <span className='text-orange-400 shadow'>Data Purchase</span> for Everyone.
                        </h1>
                        <p className='text-sm text-gray-500 mt-4'>Pay one-time low fee and get data supply monthly for 24 months to engage in your business, school activities and on social media platforms.</p>

                        <div className='flex gap-14 items-center mt-10'>
                            <Link to='/' className='bg-[#222222] hover:bg-orange-400 duration-500 p-3 text-xs text-white rounded-lg font-bold'>Create a free account</Link>
                            <Link to='/' className='text-sm text-gray-500 hover:text-black duration-500'>Learn more</Link>
                        </div>

                        <div className="brands mt-16 font-bold">
                            <h1 className='italic'>Brand Data Supply Service</h1>
                            <div className="brand flex gap-3 mt-3 font-bold">
                            <h6 className='text-white bg-yellow-500 w-14 rounded text-center p-1 shadow-lg'>MTN</h6>
                            <h6 className='text-white text-sm bg-red-500 w-14 rounded text-center p-1 shadow-lg'>AIRTEL</h6>
                            <h6 className='text-white bg-green-500 w-14 rounded text-center p-1 shadow-lg'>GLO</h6>
                            <h6 className='text-white bg-blue-500 w-20 rounded text-center p-1 shadow-lg'>9 MOBILE</h6>
                                {/* <img src={ mtn } alt="Mtn Image" className='brand__image' width={60} />
                                <img src={ airtel } alt="Mtn Image" className='brand__image' width={100} />
                                <img src={ glo } alt="Mtn Image" className='brand__image' width={50} />
                                <img src={ etisalet } alt="Mtn Image" className='brand__image' width={50} /> */}
                            </div>
                        </div>
                    </div>

                    <img src={ hero } alt="Hero Image" width={500} className='rounded mt-5 shadow-lg' />
                </div>
               
               <div>
               </div>
            </div>
        </div>
    </>
  )
}

export default Hero