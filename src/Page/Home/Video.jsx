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
  { image: Slide2, text: "Modern Design", description: "Creating bathrooms with sleek, contemporary aesthetics." },
  { image: Slide3, text: "Functional Layouts", description: "Optimizing space for both style and usability." },
  { image: Slide4, text: "Premium Finishes", description: "Using high-quality materials for durability and elegance." },
  { image: Slide5, text: "Tailored Solutions", description: "Custom bathroom designs to suit your personal needs." },
];

// Section entrance animation
const backToFront = {
  hidden: {
    opacity: 0,
    scale: 0.9,
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
  <section className="bg-gray-100 py-12">
    <motion.div
      className="container mx-auto px-6 text-center"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={backToFront}
    >
      <h1 className="text-blue-950 text-3xl md:text-4xl font-bold leading-snug mb-8">
        Plumbing and Installations Quality Services
      </h1>
    </motion.div>

    <AnimatedSlideshow slides={slides} reverse={false} />
  </section>
);

export default Video;
