import React from 'react';

const About = () => {
  return (
    <section className="bg-gray-100 py-16 shadow-md ">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="lg:w-1/2 mb-8 lg:mb-0">
            <h2 className="text-3xl font-bold mb-4">About Us</h2>
            <p className="text-gray-700 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
          <div className="lg:w-1/2 shadow-md">
            <img src="https://tse2.mm.bing.net/th?id=OIP.WkSDbphBLM3OBwH5qwQ4ZwHaEm&pid=Api&P=0&h=220" alt="About Us" className="w-full h-auto rounded-md" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;