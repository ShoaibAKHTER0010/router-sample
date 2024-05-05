import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="w-full bg-[#6B5D5D] p-4">
      <div className="container mx-auto flex justify-between items-center ">
        <div className="text-white text-lg font-bold"><span className="text-red-500">C</span>ode.<span className="text-green-500">N</span>ode</div>
        <div className="hidden md:flex space-x-4 items-center list-none">
          <li > <Link to="/"  className="text-white  hover:text-black">Home</Link></li>
          <li > <Link to="/about"  className="text-white  hover:text-black">About</Link></li>
          <li > <Link to="/skills"  className="text-white  hover:text-black">Skills</Link></li>
          <li > <Link to="/reviews"  className="text-white  hover:text-black">Reviews</Link></li>
          <li > <Link to="/contact"  className="text-white  hover:text-black">Contact</Link></li>
          
          <button
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md transition-all duration-300"
    >
      Join Now
    </button>
        </div>
        {/* Add a responsive menu button for small screens */}
        <div className="md:hidden">
          <button className="text-white">
            <svg
              className="h-6 w-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M4 6h16M4 12h16m-7 6h7"className='hover:bg-blue-500'></path>
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;