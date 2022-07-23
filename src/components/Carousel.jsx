import * as React from 'react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { wrap } from 'popmotion';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import portfolioArray from '../utils/portfolioArray';

const variants = {
  enter: direction => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: direction => {
    return {
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
};

const swipeConfidenceThreshold = 10000;
const swipePower = (offset, velocity) => {
  return Math.abs(offset) * velocity;
};

const Carousel = () => {
  const [[page, direction], setPage] = useState([0, 0]);

  const imageIndex = wrap(0, portfolioArray.length, page);

  const paginate = newDirection => {
    setPage([page + newDirection, newDirection]);
  };

  return (
    <div className="flex items-center justify-center lg:h-[725px] sm:h-[650px] h-[450px]   relative">
      <FaChevronLeft className="cursor-pointer" onClick={() => paginate(-1)} />
      <div className="w-[80%] h-[85%] overflow-hidden">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            className="flex flex-col w-[80%] h-[85%] duration-100  absolute"
            key={page}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: 'spring', stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={1}
            onDragEnd={(e, { offset, velocity }) => {
              const swipe = swipePower(offset.x, velocity.x);

              if (swipe < -swipeConfidenceThreshold) {
                paginate(1);
              } else if (swipe > swipeConfidenceThreshold) {
                paginate(-1);
              }
            }}
          >
            <div className=" shadow-md shadow-gray-600 bg-gray-900 rounded-lg  h-full">
              <img
                src={portfolioArray[imageIndex].src}
                alt={portfolioArray[imageIndex].title}
                className="rounded-md "
              />
              <div className="p-4 ">
                <div className="flex  flex-col items-center justify-center mt-4">
                  <p className="">{portfolioArray[imageIndex].title}</p>
                  <p className=" text-center">{portfolioArray[imageIndex].description}</p>
                </div>
                <div className="flex items-center justify-center">
                  <a
                    href={portfolioArray[imageIndex].demo}
                    className=" text-white px-4 py-1 m-6  rounded-md bg-gradient-to-r from-cyan-500 to-blue-500"
                    target="-blank"
                    rel="noreferrer"
                  >
                    Demo
                  </a>
                  <a
                    href={portfolioArray[imageIndex].code}
                    className="text-white px-4 py-1 m-6  rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 "
                    target="-blank"
                    rel="noreferrer"
                  >
                    Code
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
      <FaChevronRight className="cursor-pointer" onClick={() => paginate(1)} />
    </div>
  );
};

export default Carousel;
