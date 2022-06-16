import React from 'react';
import { BsArrowUpCircle } from 'react-icons/bs';
import { Link } from 'react-scroll';

const ReturnToTop = () => {
  return (
    <button className="right-1 bottom-6 fixed md:right-7 md:bottom-10">
      <Link to="home" smooth duration={500}>
        <BsArrowUpCircle className="fill-white" size={30} />
      </Link>
    </button>
  );
};

export default ReturnToTop;
