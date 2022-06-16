import React from 'react';
import { Link } from 'react-scroll';
import sidebarLinksArray from '../utils/sidebarLinksArray';

const Sidebar = () => {
  return (
    <div className="hidden md:flex flex-col top-[35%] right-0 fixed lg:right-4 ">
      <ul className="">
        {sidebarLinksArray.map(({ link, id, child, style }) =>
          link !== 'footer' ? (
            <li
              key={id}
              className={
                'flex justify-between items-center w-16 h-14 px-4  bg-gradient-to-r from-black to-blue-900 cursor-pointer' +
                ' ' +
                style
              }
            >
              <Link
                to={link}
                smooth
                duration={500}
                className="flex justify-between items-center w-full text-white"
                activeClass=""
              >
                {child}
              </Link>
            </li>
          ) : (
            <li
              key={id}
              className={
                'flex justify-between items-center w-16 h-14 px-4  bg-gradient-to-r from-black to-blue-900 cursor-pointer' +
                ' ' +
                style
              }
            >
              <Link
                to={link}
                smooth
                duration={500}
                className="flex justify-between items-center w-full text-white"
                activeClass=""
                onClick={() =>
                  window.scrollTo({
                    top: document.documentElement.scrollHeight,
                    behavior: 'smooth',
                  })
                }
              >
                {child}
              </Link>
            </li>
          ),
        )}
      </ul>
    </div>
  );
};

export default Sidebar;
