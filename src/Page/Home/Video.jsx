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
    text: "Sanitaire Installaties & Badkamerrenovaties",
    description:
      "I am experienced in installing complete sanitary systems and handling full bathroom renovations. I work on kitchens, toilets, and showers with a focus on clean finishes and lasting quality. My goal is to deliver modern, functional spaces that meet each client’s needs.",
  },
  { image: Slide2 },
  { image: Slide3 },
  { image: Slide4 },
  { image: Slide5 },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const Video = () => (
  <section className="bg-gray-100 ">
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="text-center mb-12 px-6"
    >
      <h1 className="text-3xl md:text-4xl font-bold text-slate-800">
        Plumbing and Installations Quality Services
      </h1>
    </motion.div>

    <AnimatedSlideshow slides={slides} reverse={false} />
  </section>
);

export default Video;
