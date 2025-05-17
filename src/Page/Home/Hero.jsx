import React from 'react';
import NewHeroBg from "../../assets/Gas installatie 2.png"; // make sure this path is correct

const Hero = () => {
  return (
    <section
      className="w-full h-screen md:flex md:justify-between items-center px-8 md:px-25 bg-cover bg-center"
      style={{ backgroundImage: `url(${NewHeroBg})` }}
    >
      <div className="space-y-8 text-center md:text-left text-white max-w-xl mx-auto md:mx-0 bg-black/50 p-12 rounded-lg">
        <p className="font-bold text-[30px] uppercase leading-[1.2]">
          Your trusted plumbing solutions in Belgique <br />
           </p>
          <p>With over 20 years of experience, we have built a reputation for delivering top-notch plumbing solutions tailored to meet your needs.</p>
       
        <p className="font-bold text-[34px]">
        
        </p>
        <button className="bg-amber-600 hover:bg-slate-900/80 px-6 py-3 rounded-full text-white font-semibold transition duration-300">
          Explore Our Services
          <span className="text-lg">  →</span>
        </button>
      </div>
    </section>
  );
};

export default Hero;
