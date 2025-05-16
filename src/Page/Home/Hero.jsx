import React from 'react';
import NewHeroBg from "../../assets/Gas installatie 2.png"; // make sure this path is correct

const Hero = () => {
  return (
    <section
      className="w-full h-screen md:flex md:justify-between items-center px-8 md:px-12 bg-cover bg-center"
      style={{ backgroundImage: `url(${NewHeroBg})` }}
    >
      <div className="space-y-6 text-center md:text-left text-white max-w-2xl mx-auto md:mx-0 bg-black/50 p-6 rounded-lg">
        <h2 className="font-bold text-[44px] uppercase leading-[1.2]">
          Call us For Any <br />
          <span className="font-light">Plumbing Needs</span>
        </h2>
        <p className="font-bold text-[34px]">
          <a href="/">+-----------------</a>
        </p>
        <button className="bg-amber-300 hover:bg-amber-600 px-6 py-3 rounded-full text-white font-semibold transition duration-300">
          Request Service
        </button>
      </div>
    </section>
  );
};

export default Hero;
