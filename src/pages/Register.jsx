import React from 'react'
import { FiFacebook, FiGitlab, FiTwitter } from "react-icons/fi";
import { Link } from "react-router-dom";
import register from "../assets/images/register.png";

const Register = () => {
  return (
    <>
        <div className="w-full py-10">
        <div className="w-full grid lg:grid-cols-2 px-20 items-start gap-14 justify-center">
          <img src={register} alt="Image" className="rounded shadow lg:h-[27rem]" width={700} />
          <div className="text">
            <h1 className="head__text text-4xl font-bold">
              Create
              <span className="text-orange-400 shadow ml-1"> account</span>
            </h1>
            <p className="text-sm text-gray-500 mt-5">
              Welcome there! You are among thousands of people who will <br />
              receive the subscribed data when we hit a million subscribers.
            </p>

            <form className="w-full mt-10">

            <input
                type="text"
                name="name"
                id="name"
                placeholder="Fullname"
                className="w-full p-2 ring-1 ring-black rounded-md focus:ring-orange-400 outline-none duration-500 mb-5"
              />

              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                className="w-full p-2 ring-1 ring-black rounded-md focus:ring-orange-400 outline-none duration-500 mb-5"
              />

              <input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                className="w-full p-2 ring-1 ring-black rounded-md focus:ring-orange-400 outline-none duration-500"
              />

              <input
                type="submit"
                value="Create account"
                className="bg-black p-3 text-white text-sm w-full mt-10 rounded-md cursor-pointer hover:bg-orange-400 duration-500"
              />
              <p className='text-gray-600 text-sm text-center mt-4'>Creating your account shows you accept our <Link to='/terms' className='text-black font-bold underline'>terms and conditions</Link></p>
            </form>

            <p className="text-center mt-10 text-gray-500">Or</p>
            <div className="login__social flex justify-center mt-5 gap-5">
              <div className="cover bg-black p-2 rounded-full text-white flex justify-center duration-500 hover:bg-orange-400 hover:shadow-lg">
                <Link to="/">
                  <FiFacebook size={20} />
                </Link>
              </div>

              <div className="cover bg-black p-2 rounded-full text-white flex justify-center duration-500 hover:bg-orange-400 hover:shadow-lg">
                <Link to="/">
                  <FiGitlab size={20} />
                </Link>
              </div>

              <div className="cover bg-black p-2 rounded-full text-white flex justify-center duration-500 hover:bg-orange-400 hover:shadow-lg">
                <Link to="/">
                  <FiTwitter size={20} />
                </Link>
              </div>
            </div>

            <p className="text-sm mt-5 text-center text-gray-600">Have an account? <Link to='/sign-in' className="font-extrabold text-orange-400 hover:text-orange-600 duration-500">Login here</Link></p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Register