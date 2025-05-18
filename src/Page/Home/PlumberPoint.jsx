import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaClock, FaUserCheck, FaShieldAlt } from "react-icons/fa";

import Img1 from "../../assets/Werwarming.png";
import Img2 from "../../assets/Vloerverwarming1.png";
import Img3 from "../../assets/Badkamerrenovatie.png";
import Img4 from "../../assets/Badkamerrenovatie2.png";
import Img5 from "../../assets/Badkamerrenovatie3.png";
import Img6 from "../../assets/Badkamerrenovatie4.png";
import Img7 from "../../assets/Badkamerrenovatie1.png";
import Img8 from "../../assets/Gas installatie 2.png";
import Img9 from "../../assets/Gas installatie 3.png";
import Img10 from "../../assets/Gas installatie.png";
import Img11 from "../../assets/Sanitair1.png";
import Img12 from "../../assets/Sanitair2.png";
import Img13 from "../../assets/Sanitair3.png";
import Img14 from "../../assets/Wervarming.png";
import Img15 from "../../assets/Vloerverwarming2.png";
import Img16 from "../../assets/Vloerverwarming3.png";
import Img17 from "../../assets/Warmtepomp installatie1.png";

const images = [
  Img1, Img2, Img3, Img4, Img5, Img6, Img7, Img8, Img9,
  Img10, Img11, Img12, Img13, Img14, Img15, Img16, Img17
];

// Animation variant
const backToFront = {
  hidden: { opacity: 0, scale: 0.85, y: 30 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const PlumberPoint = () => {
  const [index, setIndex] = useState(0);
  const [prev, setPrev] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setPrev(index);
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [index]);

  return (
    <section ection id="Why Choose Us" className="bg-gray-100 py-16">
      {/* Heading + Paragraph */}
      <div className="max-w-5xl mx-auto px-4 text-center mb-12">

        {/* Animated heading */}
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={backToFront}
          className="text-3xl md:text-4xl font-bold text-slate-800 leading-tight"
        >
          <span className="text-amber-500">Professionele </span>{" "}
          <span className="text-slate-800">Loodgietersdiensten</span>{" "}
          
          <br />
          <span className="text-slate-800">Voor Uw Woning & Bedrijf</span>
        </motion.h2>

        {/* Animated paragraph */}
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={backToFront}
          className="text-gray-600 mt-10 max-w-3xl mx-auto"
        >
          Wij bieden hoogwaardige oplossingen voor sanitair en verwarming, met een 24/7 nooddienst. Onze erkende vakmensen staan klaar om al uw loodgietersproblemen snel en efficiënt op te lossen.
        </motion.p>

        {/* Animated feature row */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={backToFront}
          className="rounded-xl py-6 px-4 mt-10 flex flex-wrap justify-center items-center gap-4"
        >
          <div className="flex items-center gap-2 bg-slate-800 px-8 py-2 rounded-full shadow text-sm font-semibold text-white">
            <FaClock className="text-amber-500" />
            24/7 Dienstverlening
          </div>
          <div className="flex items-center gap-2 bg-slate-800 px-5 py-2 rounded-full shadow text-sm font-semibold text-white">
            <FaUserCheck className="text-amber-500" />
            Gecertificeerde Experts
          </div>
          <div className="flex items-center gap-2 bg-slate-800 px-5 py-2 rounded-full shadow text-sm font-semibold text-white">
            <FaShieldAlt className="text-amber-500" />
            Gegarandeerd Vakwerk
          </div>
        </motion.div>
      </div>

      {/* Image Slideshow */}
      <div className="relative max-w-4xl h-[400px] mx-auto overflow-hidden rounded-xl shadow-xl">
        {prev !== null && (
          <motion.img
            key={`prev-${prev}`}
            src={images[prev]}
            alt="Previous"
            initial={{ opacity: 1, scale: 1 }}
            animate={{ opacity: 0, scale: 1.1 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full object-cover rounded-xl"
          />
        )}
        <motion.img
          key={`curr-${index}`}
          src={images[index]}
          alt="Current"
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="absolute inset-0 w-full h-full object-cover rounded-xl"
        />
      </div>
    </section>
  );
};

export default PlumberPoint;
