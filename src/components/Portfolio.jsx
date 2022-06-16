import React from 'react';
import portfolioArray from '../utils/portfolioArray';

import CarouselCompound from './carousel-compound';

const Portfolio = () => {
  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black  to-blue-800 w-full text-white  py-20 "
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <h3 className="text-4xl font-bold inline  border-b-2 border-fuchsia-600">Portfolio</h3>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="flex flex-col ">
          <CarouselCompound infinite>
            {portfolioArray.map(({ id, src, demo, code, description, title }) => (
              <div key={id}>
                <CarouselCompound.Page>
                  <div className=" shadow-md shadow-gray-600 bg-gray-900 rounded-lg ">
                    <img src={src} alt={title} className="rounded-md " />
                    <div className="p-4">
                      <div className="flex  flex-col items-center justify-center mt-4">
                        <p className="">{title}</p>
                        <p className=" text-center">{description}</p>
                      </div>
                      <div className="flex items-center justify-center">
                        <a
                          href={demo}
                          className=" text-white px-4 py-1 m-6  rounded-md bg-gradient-to-r from-cyan-500 to-blue-500"
                          target="-blank"
                          rel="noreferrer"
                        >
                          Demo
                        </a>
                        <a
                          href={code}
                          className="text-white px-4 py-1 m-6  rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 "
                          target="-blank"
                          rel="noreferrer"
                        >
                          Code
                        </a>
                      </div>
                    </div>
                  </div>
                </CarouselCompound.Page>
              </div>
            ))}
          </CarouselCompound>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
