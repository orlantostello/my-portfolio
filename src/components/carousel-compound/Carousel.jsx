import { useEffect, useRef, useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import Page from './Page';
import { CarouselContext } from './carousel-context';

export const Carousel = ({ children }) => {
  const [offset, setOffset] = useState(0);
  const [width, setWidth] = useState(450);

  const windowElRef = useRef();

  useEffect(() => {
    const resizeHandler = () => {
      const windowElWidth = windowElRef.current.offsetWidth;

      setWidth(windowElWidth);
      setOffset(0);
    };

    resizeHandler();
    window.addEventListener('resize', resizeHandler);

    return () => {
      window.removeEventListener('resize', resizeHandler);
    };
  }, []);

  const handleLeftArrowClick = () => {
    setOffset(currentOffset => {
      const newOffset = currentOffset + width;
      return Math.min(newOffset, 0);
    });
  };
  const handleRightArrowClick = () => {
    setOffset(currentOffset => {
      const newOffset = currentOffset - width;
      const maxOffset = -(width * (children.length - 1));
      return Math.max(newOffset, maxOffset);
    });
  };

  return (
    <CarouselContext.Provider value={{ width }}>
      <div className="flex items-center justify-center">
        <FaChevronLeft className="cursor-pointer" onClick={handleLeftArrowClick} />
        <div className="w-[80%] h-[85%] overflow-hidden" ref={windowElRef}>
          <div
            className="flex h-full duration-1000 "
            style={{
              transform: `translateX(${offset}px)`,
            }}
          >
            {children}
          </div>
        </div>
        <FaChevronRight className="cursor-pointer" onClick={handleRightArrowClick} />
      </div>
    </CarouselContext.Provider>
  );
};

Carousel.Page = Page;
