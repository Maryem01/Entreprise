import React from "react";
import { motion } from "framer-motion";
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
      "I am experienced in installing complete sanitary systems and handling full bathroom renovations. I work on kitchens, toilets, and showers with a focus on clean finishes and lasting quality. My goal is to deliver modern, functional spaces that meet each client’s needs.",
  },
  { image: Slide2 },
  { image: Slide3 },
  { image: Slide4 },
  { image: Slide5 },
];

// Zoom from back to front animation
const backToFront = {
  hidden: {
    opacity: 0,
    scale: 0.85,
    y: 30,
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const Video = () => (
  <section className="bg-gray-100">
    <div className="text-center mb-6 px-6">
      <motion.h1
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={backToFront}
        className="text-blue-950 text-3xl md:text-4xl font-bold leading-snug pt-12 pb-2"
      >
        Plumbing and Installations Quality Services
      </motion.h1>
    </div>

    <AnimatedSlideshow slides={slides} reverse={false} />
  </section>
);

export default Video;
