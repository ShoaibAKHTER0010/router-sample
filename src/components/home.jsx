import React from 'react';
import { AiFillAndroid } from "react-icons/ai";
import {FaFacebook ,FaInstagram ,FaYoutube} from "react-icons/fa"

const Home = () => {
  return (
    <div className="bg-blue-600 text-white py-20 ">
      <div className="mx-auto flex items-center justify-center flex-col">
        <h1 className="text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-black to-white">Developers</h1>
        <p className="text-lg mb-8">chance to develop your skills fast.</p>
        <button className="bg-white text-blue-550 py-2 px-4 rounded-full hover:bg-blue-300 flex items-center justify-center gap-2 text-center text-[1rem] font-[600]">Get Started <AiFillAndroid /></button>

        
      </div>
      

<div className='flex items-center justify-center  gap-3 py-4'>

<div className="bg-white rounded-full shadow-lg p-3  text-[#000] hover:bg-green-400  duration-100"><FaFacebook /></div>
<div className="bg-white rounded-full shadow-lg p-3  text-[#000] hover:bg-green-400 duration-100"><FaInstagram/></div>
<div className="bg-white rounded-full shadow-lg p-3 text-[#000] hover:bg-green-400 duration-100 "><FaYoutube/></div>
 

</div>
Find The Best Fashion Style For You
    </div>
  );
};

export default Home;