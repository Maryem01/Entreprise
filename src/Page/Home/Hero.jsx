import React from 'react';
import NewHeroBg from "../../assets/Gas installatie 2.png";

const Hero = () => {
  return (
    <section
      className="relative w-full h-screen bg-cover bg-center flex items-center justify-center px-8 md:px-25"
      style={{ backgroundImage: `url(${NewHeroBg})` }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60 z-0" />

      {/* Content */}
      <div className="relative z-10 space-y-8 text-center md:text-left text-white max-w-xl mx-auto md:mx-0">
        <p className="font-bold text-[30px] uppercase leading-[1.2]">
          Your trusted plumbing solutions in Belgique
        </p>
        <p>
          With over 20 years of experience, we have built a reputation for
          delivering top-notch plumbing solutions tailored to meet your needs.
        </p>

        <button className="bg-amber-600 hover:bg-slate-900/80 px-6 py-3 rounded-full text-white font-semibold transition duration-300">
          Explore Our Services
          <span className="text-lg"> →</span>
        </button>
      </div>
    </section>
  );
};

export default Hero;
