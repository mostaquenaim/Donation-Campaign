/* eslint-disable react/prop-types */
import { useState } from "react";

const Banner = ({ handleSearch }) => {
  const [searchItem, setSearchItem] = useState("");

  const handleChange = (e) => {
    setSearchItem(e.target.value);
  };

  const handleSubmit = () => {
    handleSearch(searchItem);
  };

  return (
    <div className="relative">
      <div className="top-0 -z-50">
        <img className="w-screen" src="banner.png" alt="Banner" />
        <div className="absolute inset-0 bg-white bg-opacity-[95%] flex flex-col items-center justify-end md:justify-center ">
          <h1 className="text-black md:text-xl lg:text-5xl font-bold p-5">
            I Grow By Helping People In Need
          </h1>
          <div className="join">
            <input
              className="input input-bordered join-item bg-white"
              name="searchInput"
              placeholder="Search here...."
              onChange={handleChange}
              value={searchItem} 
            />
            <button
              className="btn join-item rounded-r-lg bg-rose-500 text-white border-none px-7"
              onClick={handleSubmit}
            >
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
