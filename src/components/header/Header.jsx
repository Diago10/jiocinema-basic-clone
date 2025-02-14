import JCLogo from "../../assets/jc_logo_v2.svg";
import crown from "../../assets/crown.svg";
import searchIcon from "../../assets/ic_search.svg";
import voiceSearchIcon from "../../assets/voice-search.svg";
import jioIcon from "../../assets/jio-logo.png";
import { useEffect, useState } from "react";
import Show from "../show/Show";
import { FaCircleUser } from "react-icons/fa6";

const Header = (props) => {
  const navLinks = ["Home", "Sports", "Movies", "TV Shows", "More"];
  const [searchTitle, setSearchTitle] = useState("");
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [searchVisible, setSearchVisible] = useState(false); // For small-screen input toggle

  const toggleSearch = () => {
    setSearchVisible(!searchVisible); // Toggle search visibility for small screens
  };

  useEffect(() => {
    if (searchTitle !== "") {
      const filtered = props.movies.filter((movie) =>
        movie.name.toUpperCase().startsWith(searchTitle.toUpperCase())
      );
      setFilteredMovies(filtered);
    } else {
      setFilteredMovies([]);
    }
  }, [searchTitle, props.movies]);

  return (
    <>
      <header className="w-full h-[70px] bg-black flex justify-between border-b border-gray-600 pl-2">
        <nav className="flex gap-[30px] h-[70px] w-full">
          <div className="flex w-fit gap-3 items-center">
            <img
              src={JCLogo}
              className="hidden md:flex cursor-pointer"
              alt="logo"
            />
            <img
              className="lg:hidden md:hidden h-[40px] cursor-pointer"
              src={jioIcon}
              alt="icon"
            />
            <div className="border-2 border-yellow-700 py-1 px-1  rounded-full cursor-pointer font-bold flex gap-2">
              <img src={crown} alt="icon" className="size-3.5 lg:size-5" />
              <p className="text-xs lg:text-[15px]">Go Premium</p>
            </div>
          </div>
          <div className="hidden lg:flex gap-4 items-center font-bold">
            {navLinks.map((link) => (
              <div
                key={link}
                className="py-4 cursor-pointer hover:border-b-4 hover:border-pink-600"
              >
                {link}
              </div>
            ))}
          </div>
        </nav>

        <div className="flex items-center h-[70px] absolute right-0 pr-2">
          {/* Large Screen Input */}
          <div className="hidden md:flex items-center gap-3 bg-gray-800 rounded-full px-3">
            <img src={searchIcon} alt="search icon" />
            <input
              type="text"
              value={searchTitle}
              onChange={(e) => setSearchTitle(e.target.value)}
              className="bg-gray-800 text-white rounded-full p-1 focus:outline-none"
              placeholder="Movies, Shows and more"
            />
            <div className="hidden md:flex h-[40px] w-[40px] rounded-full justify-center items-center cursor-pointer">
              <img src={voiceSearchIcon} alt="voice search icon" />
            </div>
          </div>

          {/* Small Screen Search Icon */}
          <div
            className="flex md:hidden items-center cursor-pointer"
            onClick={toggleSearch}
          >
            <img src={searchIcon} alt="search icon" />
          </div>

          {/* User Icon */}
          <FaCircleUser className="size-12 pl-3 cursor-pointer" />
        </div>
      </header>

      {/* Small Screen Input */}
      {searchVisible && (
        <div className="w-full bg-black p-4 fixed top-[70px] z-10">
          <input
            type="text"
            value={searchTitle}
            onChange={(e) => setSearchTitle(e.target.value)}
            className="w-full bg-gray-800 text-white rounded-full p-2 focus:outline-none"
            placeholder="Search Movies, Shows, etc."
          />
        </div>
      )}

      {/* Filtered Movies Section */}
      {filteredMovies.length > 0 && (
        <div className="pt-20 w-full h-[100vh] bg-gray-700/50 fixed z-10 flex gap-3 flex-wrap p-3 scrollable  ">
          {filteredMovies.map((movie) => (
            <Show key={movie.id} movie={movie} />
          ))}
        </div>
      )}
    </>
  );
};

export default Header;
