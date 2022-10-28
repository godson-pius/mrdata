import React from "react";
import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import Customrule from "../components/Customrule";
import homegirl from "../assets/images/homegirl.jpeg";
import homegirltwo from "../assets/images/homegirltwo.jpeg";
import absoluteline from "../assets/images/absoluteline.png";
import absoluteline2 from "../assets/images/absoluteline2.png";
import { FiOctagon } from "react-icons/fi";
import How from "../components/How";

const Home = () => {
  return (
    <>
      <div className="w-full">
        <Hero />

        {/* bridge */}
        <div className="flex flex-col py-24 px-10 gap-8">
          <div className="flex items-center gap-5 mb-10 md:mb-14">
            <h1 className="head__text text-2xl md:text-6xl w-[35rem]">
              Bridge to students in school <span className="text-orange-400 shadow">network data.</span>
            </h1>
            <Customrule />
          </div>
          <div className="w-full flex items-center gap-10">
            <img
              src={homegirl}
              alt="Hero Image"
              width={500}
              className="rounded mt-5 shadow-lg hidden lg:block"
            />

            {/* Absoluet Line */}
            <img src={ absoluteline2 } alt="" width={35} />

            <div className="flex flex-col gap-8">
              <div className="home__text flex items-start gap-3">
                <div className="text">
                  <h1 className="font-bold text-lg">
                    Keep up with school projects
                  </h1>
                  <p className="text-sm text-gray-500 mt-1">
                    Pay one-time low fee and get data supply monthly for 24
                    months to engage in your business, school activities and on
                    social media platforms.
                  </p>
                </div>
              </div>{" "}
              <hr />
              <div className="home__text flex items-start gap-3">
                <div className="text">
                  <h1 className="font-bold text-lg">
                    Tertiary Institution Benefits
                  </h1>
                  <p className="text-sm text-gray-500 mt-1">
                    Pay one-time low fee and get data supply monthly for 24
                    months to engage in your business, school activities and on
                    social media platforms.
                  </p>
                </div>
              </div>{" "}
              <hr />
              <div className="home__text flex items-start gap-3">
                <div className="text">
                  <h1 className="font-bold text-lg">
                    Be updated with courses informations
                  </h1>
                  <p className="text-sm text-gray-500 mt-1">
                    Pay one-time low fee and get data supply monthly for 24
                    months to engage in your business, school activities and on
                    social media platforms.
                  </p>
                </div>
              </div>{" "}
              <hr />
              <div className="home__text flex items-start gap-3">
                <div className="text">
                  <h1 className="font-bold text-lg">
                    Don't miss any class online
                  </h1>
                  <p className="text-sm text-gray-500 mt-1">
                    Pay one-time low fee and get data supply monthly for 24
                    months to engage in your business, school activities and on
                    social media platforms.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div></div>
        </div>

        {/* How our system works */}
        <How />

        {/* what people say */}
        <div className="flex flex-col py-20 px-10">
          <div className="flex items-center gap-20 justify-center mb-16">
          <Customrule />
          <h1 className="head__text text-3xl md:text-6xl w-[35rem]">
            What people are <span className="text-orange-400 shadow">saying.</span>
          </h1>
          </div>
          <div className="w-full flex items-start gap-10">
            <img
              src={homegirl}
              alt="Hero Image"
              width={500}
              className="rounded mt-5 shadow-lg hidden lg:block"
            />

            {/* Absoluet Line */}
            <img src={ absoluteline } alt="" width={35} />

            <div className="w-full flex flex-col gap-8">

              <div className="each home__text shadow-lg p-5 rounded-lg">
                <div className="w-full text">
                  <div className="w-full flex items-center justify-between">
                    <img src={ homegirltwo } alt="Testifier Image" width={45} className='rounded-lg' />
                    <h1 className="font-black">Angel Anderson</h1>
                  </div>

                  <p className="text-sm mt-5 text-gray-500">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum a ex labore natus dolore. Earum magni labore ipsam, porro reprehenderit nesciunt molestiae reiciendis adipisci consequuntur doloribus dolorum officia perspiciatis delectus?</p>
                </div>
              </div> 

              <div className="each home__text shadow-lg p-5 rounded-lg">
                <div className="w-full text">
                  <div className="w-full flex items-center justify-between">
                    <img src={ homegirltwo } alt="Testifier Image" width={45} className='rounded-lg' />
                    <h1 className="font-black">Angel Anderson</h1>
                  </div>

                  <p className="text-sm mt-5 text-gray-500">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum a ex labore natus dolore. Earum magni labore ipsam, porro reprehenderit nesciunt molestiae reiciendis adipisci consequuntur doloribus dolorum officia perspiciatis delectus?</p>
                </div>
              </div> 

              <div className="each home__text shadow-lg p-5 rounded-lg">
                <div className="w-full text">
                  <div className="w-full flex items-center justify-between">
                    <img src={ homegirltwo } alt="Testifier Image" width={45} className='rounded-lg' />
                    <h1 className="font-black">Angel Anderson</h1>
                  </div>

                  <p className="text-sm mt-5 text-gray-500">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum a ex labore natus dolore. Earum magni labore ipsam, porro reprehenderit nesciunt molestiae reiciendis adipisci consequuntur doloribus dolorum officia perspiciatis delectus?</p>
                </div>
              </div>

            </div>
          </div>

          <div></div>
        </div>
      </div>
    </>
  );
};

export default Home;
