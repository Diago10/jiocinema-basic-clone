import React, { useRef, useState, useEffect } from "react";
import FeaturedShow from "../featured-show/FeaturedShow";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Featured = (props) => {
  const scrollContainerRef = useRef(null);
  const [showLeftSlider, setShowLeftSlider] = useState(false);
  const [showRightSlider, setShowRightSlider] = useState(true);

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setShowLeftSlider(scrollLeft > 0);
      setShowRightSlider(scrollLeft < scrollWidth - clientWidth);
    }
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener("scroll", handleScroll);
      handleScroll(); // Initial check
    }
    return () => {
      if (container) {
        container.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  // Function to handle scrolling left
  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft -= 200; // Adjust the value as needed
    }
  };

  // Function to handle scrolling right
  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft += 200; // Adjust the value as needed
    }
  };

  return (
    <section className="w-full bg-black overflow-hidden relative">
      <h1 className="md:text-lg lg:text-2xl font-bold pl-4 pb-4 text-white">
        Hot Right Now 🔥
      </h1>

      <div>
        {/* Scrollable Container */}
        <div className="relative w-full flex gap-4 overflow-x-auto whitespace-nowrap px-4 pb-4 scrollable" ref={scrollContainerRef}>
          {/* Map through movies */}
          {props.movies.map((movie) => {
            return <FeaturedShow key={movie.id} movie={movie} />;
          })}
        </div>
        
        {/* Left Scroll Button */}
        {showLeftSlider && (
          <button onClick={scrollLeft} className="absolute top-1/2 left-0 z-10 transform -translate-y-1/2 bg-black rounded-full p-2">
            <FaChevronLeft className="text-white" />
          </button>
        )}

        {/* Right Scroll Button */}
        {showRightSlider && (
          <button onClick={scrollRight} className="absolute top-1/2 right-0 z-10 transform -translate-y-1/2 bg-black rounded-full p-2">
            <FaChevronRight className="text-white" />
          </button>
        )}

        {/* Left Blur */}
        <div className={`absolute top-0 left-0 w-12 h-full bg-gradient-to-r from-black via-black/80 to-transparent pointer-events-none ${showLeftSlider ? 'block' : 'hidden'}`}></div>

        {/* Right Blur */}
        <div className={`absolute top-0 right-0 w-12 h-full bg-gradient-to-l from-black via-black/80 to-transparent pointer-events-none ${showRightSlider ? 'block' : 'hidden'}`}></div>
      </div>
    </section>
  );
};

export default Featured;