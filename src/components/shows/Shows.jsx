import React, { useRef, useState, useEffect } from "react";
import Show from "../show/Show";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Shows = (props) => {
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
      scrollContainerRef.current.scrollLeft -= 160; // Adjust the value as needed
    }
  };

  // Function to handle scrolling right
  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft += 160; // Adjust the value as needed
    }
  };

  return (
    <section className="w-full bg-black px-3 py-10">
      {/* Section Title */}
      <h1 className="md:text-lg lg:text-2xl pb-2 font-bold text-white">
        {props.title}
      </h1>

      {/* Scrollable Container */}
      <div className="relative">
        {showLeftSlider && (
          <button onClick={scrollLeft} className="absolute top-1/2 left-0 z-10 bg-black rounded-full p-2">
            <FaChevronLeft className="text-white" />
          </button>
        )}
        <div
          ref={scrollContainerRef}
          className="flex relative overflow-x-auto whitespace-nowrap gap-4 scrollable"
        >
          {props.movies.map((movie) => (
            <Show key={movie.id} movie={movie} />
          ))}
        </div>
        {showRightSlider && (
          <button onClick={scrollRight} className="absolute top-1/2 right-0 z-10 bg-black rounded-full p-2">
            <FaChevronRight className="text-white" />
          </button>
        )}
        {/* Left Gradient Overlay */}
        <div className={`absolute top-0 left-0 w-12 h-full bg-gradient-to-r from-black via-black/30 to-transparent pointer-events-none ${showLeftSlider ? 'block' : 'hidden'}`}></div>
        {/* Right Gradient Overlay */}
        <div className={`absolute top-0 right-0 w-12 h-full bg-gradient-to-l from-black via-black/30 to-transparent pointer-events-none ${showRightSlider ? 'block' : 'hidden'}`}></div>
      </div>
    </section>
  );
};

export default Shows;