import React from 'react';
import heroImage from '../assets/heroImage3.png';
import { GoArrowRight } from 'react-icons/go';
import { Link } from 'react-scroll';

const Home = () => {
  return (
    <div name="home" className=" w-full bg-gradient-to-b from-black via-black to-blue-800 py-20 ">
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row mt-10">
        <div className="max-w-screen-lg  lg:ml-10 flex flex-col items-center justify-center  px-4 md:flex-row mt-10">
          <div className="flex flex-col justify-center h-full mb-4">
            <p className="text-fuchsia-600">Hi, my name is</p>
            <h1 className="text-4xl sm:text-7xl font-bold text-gray-200 ">Oleh Teslenko</h1>
            <h2 className="text-4xl sm:text-7xl text-gray-400  font-bold ">
              I`m a Front-End Developer
            </h2>
            <p className="text-gray-400 py-4 max-w-md">
              I have 1-year of experience in non-commercial development. I enjoy working on web
              applications using React technology.
            </p>

            <div>
              <Link
                to="portfolio"
                smooth
                duration={500}
                className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
              >
                Potfolio
                <span className="group-hover:rotate-90 duration-300 ">
                  <GoArrowRight size={20} className="ml-1" />
                </span>
              </Link>
            </div>
          </div>
          <div>
            <img src={heroImage} alt="my profile" className="rounded-2xl mx-auto w-2/3 md:w-full" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
