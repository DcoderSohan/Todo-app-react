import React from "react";

const Navbar = () => {
  return (
    <div className="flex justify-center">
      <div className="nav flex flex-col md:flex-row items-center md:items-start justify-between py-3 px-4 md:px-6 border-b-2 border-gray-400 rounded-md bg-blue-400 m-2 shadow-[0_8px_30px_rgb(0,0,0,0.12)] w-full">
        {/* Logo Section */}
        <div className="logo text-white mb-3 md:mb-0">
          <h1 className="text-2xl md:text-3xl font-semibold font-Poppins">
            iPlanner
          </h1>
        </div>

        {/* Menu Section */}
        <div className="menu text-white flex items-center justify-center gap-3 md:gap-5">
          <ul className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
            <li className="hover:bg-blue-500 rounded-md px-3 py-2 cursor-pointer hover:text-white transition-all duration-300 font-Poppins hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
              <a href="/">Home</a>
            </li>
            <li className="hover:bg-blue-500 rounded-md px-3 py-2 cursor-pointer hover:text-white transition-all duration-300 font-Poppins hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
              <a href="#tasks">Tasks</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
