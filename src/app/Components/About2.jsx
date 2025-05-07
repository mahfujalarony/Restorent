import React from 'react';

const About2 = () => {
  return (
    <section
      className="flex flex-col md:flex-row min-h-[100vh] bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url('/images/bg3.jpg')`,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        backgroundBlendMode: 'overlay',
      }}
    >
      <div className="hidden md:block flex-1"></div>

 
      <div className="flex-1 flex flex-col justify-center p-6 md:p-12 bg-opacity-80 bg-gray-900 md:bg-transparent">
        <h3 className="text-red-500 text-lg font-semibold uppercase tracking-wide">
          About Our Restaurant
        </h3>
        <h1 className="mt-4 text-2xl md:text-4xl font-bold text-white">
          We Provide Good Food For Your Family
        </h1>
        <p className="mt-4 text-gray-200 text-base leading-relaxed max-w-lg">
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        <div className="flex flex-col sm:flex-row mt-6 gap-4 max-w-md">
          <input
            type="email"
            placeholder="Your Email"
            className="flex-1 p-3 rounded-lg bg-white text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500"
          />
          <button className="px-6 py-3 bg-red-500 text-white font-semibold rounded-lg hover:bg-red-600 transition duration-300">
            Subscribe
          </button>
        </div>
      </div>
    </section>
  );
};

export default About2;
