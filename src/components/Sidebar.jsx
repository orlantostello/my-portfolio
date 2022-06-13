import React from 'react';
import { AiOutlineHome } from 'react-icons/ai';
import { AiOutlineUser } from 'react-icons/ai';
import { TiGroupOutline } from 'react-icons/ti';
import { RiContactsBookLine } from 'react-icons/ri';
import { BsArrowDownCircle } from 'react-icons/bs';
import { MdHighQuality } from 'react-icons/md';
import { Link } from 'react-scroll';

const Sidebar = () => {
  const links = [
    {
      id: 1,
      link: 'home',
      child: (
        <>
          <AiOutlineHome size={30} />
        </>
      ),
      style: 'rounded-t-full',
    },
    {
      id: 2,
      link: 'about',
      child: (
        <>
          <AiOutlineUser size={30} />
        </>
      ),
    },
    {
      id: 3,
      link: 'portfolio',
      child: (
        <>
          <TiGroupOutline size={30} />
        </>
      ),
    },
    {
      id: 4,
      link: 'experience',
      child: (
        <>
          <MdHighQuality size={30} />
        </>
      ),
    },
    {
      id: 5,
      link: 'contacts',
      child: (
        <>
          <RiContactsBookLine size={30} />
        </>
      ),
    },
    {
      id: 5,
      link: 'footer',
      child: (
        <>
          <BsArrowDownCircle size={30} />
        </>
      ),
      style: 'rounded-b-full',
    },
  ];
  return (
    <div className="hidden md:flex flex-col top-[35%] right-0 fixed lg:right-4 ">
      <ul className="">
        {links.map(({ link, id, child, style }) => (
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
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
