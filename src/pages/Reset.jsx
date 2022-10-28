import React from 'react'
import { FiFacebook, FiGitlab, FiTwitter } from "react-icons/fi";
import { Link } from "react-router-dom";
import homegirl from "../assets/images/homegirl.jpeg";

const Reset = () => {
  return (
    <>
        <div className="w-full py-10">
        <div className="w-full grid lg:grid-cols-2 px-20 items-start gap-10 justify-center">
          <img src={homegirl} alt="Image" className="rounded" width={500} />
          <div className="text">
            <h1 className="head__text text-4xl font-bold">
              Reset
              <span className="text-orange-400 shadow ml-1"> password</span>
            </h1>
            <p className="text-sm text-gray-500 mt-5">
              Welcome there! Kindly provide your details to recover your<br />
              account
            </p>

            <form className="w-full mt-10">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                className="w-full p-2 ring-1 ring-black rounded-md focus:ring-orange-400 outline-none duration-500 mb-7"
              />

              <input
                type="submit"
                value="Reset password"
                className="bg-black p-3 text-white text-sm w-full rounded-md cursor-pointer hover:bg-orange-400 duration-500"
              />
            </form>
            <p className="text-sm mt-5 text-center text-gray-600">Remember your password? <Link to='/sign-in' className="font-extrabold text-orange-400 hover:text-orange-600 duration-500">Login to dashboard</Link></p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Reset