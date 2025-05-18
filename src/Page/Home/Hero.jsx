import React, { useEffect, useState } from 'react';
import NewHeroBg from "../../assets/Gas installatie2.png";

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = NewHeroBg;
    img.onload = () => {
      setIsLoaded(true);
    };
  }, []);

  const handleScrollToServices = () => {
    const section = document.getElementById('services');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (!isLoaded) {
    return (
      <section className="w-full h-screen flex items-center justify-center bg-black">
        <div className="text-white text-lg animate-pulse">Afbeelding laden...</div>
      </section>
    );
  }

  return (
    <section
      id="home"
      className="w-full h-screen flex items-center justify-center bg-cover bg-center px-6 md:px-20"
      style={{ backgroundImage: `url(${NewHeroBg})` }}
    >
      <div className="bg-black/60 p-8 md:p-12 rounded-2xl max-w-2xl text-white text-center md:text-left space-y-6">
        <h1 className="text-3xl md:text-4xl font-bold leading-tight uppercase">
          Uw Betrouwbare Loodgietersoplossing in België
        </h1>

        <p className="text-base md:text-lg text-gray-200">
          Met meer dan 20 jaar ervaring hebben we een sterke reputatie opgebouwd in het leveren van loodgietersdiensten op maat van uw noden.
        </p>

        <button
          onClick={handleScrollToServices}
          className="bg-amber-600 hover:bg-amber-700 px-6 py-3 rounded-full text-white font-semibold transition duration-300"
        >
          Bekijk Onze Diensten <span className="ml-2 text-lg">→</span>
        </button>
      </div>
    </section>
  );
};

export default Hero;
