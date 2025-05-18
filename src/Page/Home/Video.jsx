import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaArrowDown } from "react-icons/fa";
import AnimatedSlideshow from "./AnimatedSlideshow";

import Slide1 from "../../assets/Badkamerrenovatie.png";
import Slide2 from "../../assets/Badkamerrenovatie1.png";
import Slide3 from "../../assets/Badkamerrenovatie2.png";
import Slide4 from "../../assets/Badkamerrenovatie3.png";
import Slide5 from "../../assets/Badkamerrenovatie4.png";

const slides = [
  {
    image: Slide1,
    text: "Badkamerrenovaties",
    description:
      "Ik heb ervaring met het installeren van complete sanitaire systemen en het uitvoeren van volledige badkamerrenovaties. Ik werk aan keukens, toiletten en douches met oog voor een nette afwerking en duurzame kwaliteit. Mijn doel is om moderne, functionele ruimtes te creëren die aansluiten op de wensen van elke klant.",
  },
  {
    image: Slide2,
   
  },
  {
    image: Slide3,
  
  },
  {
    image: Slide4,
  
  },
  {
    image: Slide5,
   
  },
];


const backToFront = {
  hidden: { opacity: 0, scale: 0.9, y: 30 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const Video = () => {
  const [showArrow, setShowArrow] = useState(false);

  useEffect(() => {
    const showHandler = () => {
      setShowArrow(true);
    };
    window.addEventListener("showArrow", showHandler);

    const onScroll = () => {
      const section = document.getElementById("projects");
      if (section) {
        const rect = section.getBoundingClientRect();
        const isOutOfView = rect.bottom < 0 || rect.top > window.innerHeight;
        if (isOutOfView) {
          setShowArrow(false);
        }
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("showArrow", showHandler);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const handleArrowClick = () => {
    const target = document.getElementById("category-two");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
    setShowArrow(false);
  };

  return (
   <section id="projects" className="bg-gray-100 relative pt-16 pb-0">

      <motion.div
        className="container mx-auto px-6 text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={backToFront}
      >
        <h1 className="text-blue-950 text-3xl md:text-4xl font-bold leading-snug">
          Loodgieterij en Installaties van Topkwaliteit
        </h1>
        <p className="text-slate-700 text-base md:text-lg max-w-2xl mx-auto space-y-2 py-6">
         We zijn trots op het transformeren van verouderde ruimtes tot moderne, functionele badkamers.
        </p>
      </motion.div>

      <AnimatedSlideshow slides={slides} reverse={false} />

      {showArrow && (
        <button
          onClick={handleArrowClick}
          className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 bg-amber-500 text-white p-4 rounded-full shadow-lg animate-bounce hover:bg-amber-600 transition"
        >
          <FaArrowDown className="text-2xl" />
        </button>
      )}
    </section>
  );
};

export default Video;
