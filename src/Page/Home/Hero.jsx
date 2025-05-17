import React from 'react';
import NewHeroBg from "../../assets/Gas installatie 2.png";

const Hero = () => {
  return (
    <section
      className="w-full h-screen flex items-center justify-center bg-cover bg-center px-6  md:px-20 "
      style={{ backgroundImage: `url(${NewHeroBg})` }}
    >
      <div className="bg-black/60 p-8 md:p-12 rounded-2xl max-w-2xl text-white text-center md:text-left space-y-6">
        <h1 className="text-3xl md:text-4xl font-bold leading-tight uppercase">
          Your Trusted Plumbing Solutions in Belgique
        </h1>

        <p className="text-base md:text-lg text-gray-200">
          With over 20 years of experience, we’ve built a reputation for delivering top-notch plumbing solutions tailored to meet your needs.
        </p>

        <button className="bg-amber-600 hover:bg-amber-700 px-6 py-3 rounded-full text-white font-semibold transition duration-300">
          Explore Our Services <span className="ml-2 text-lg">→</span>
        </button>
      </div>
    </section>
  );
};

export default Hero;