import React from 'react';
import experienceArray from '../utils/experienceArray';

const Experience = () => {
  return (
    <div name="experience" className="bg-gradient-to-b from-blue-800  to-black w-full py-20 ">
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <h3 className="text-4xl font-bold border-b-2 border-fuchsia-600 p-2 inline">
            Experience
          </h3>
          <p className="py-6">These are the technologies I've worked with</p>
        </div>

        <ul className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {experienceArray.map(({ id, src, title, style }) => (
            <li
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt={title} className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Experience;
