import React from "react";
import AnimatedSlideshow from "./AnimatedSlideshow";

import Slide1 from "../../assets/Warmtepomp installatie1.png";
import Slide2 from "../../assets/Vloerverwarming2.png";
import Slide3 from "../../assets/Vloerverwarming3.png";
import Slide4 from "../../assets/Wervarming.png";
import Slide5 from "../../assets/Werwarming.png";

const slides = [
  {
    image: Slide1,
    text: "Verwarming & Warmtepompen",
    description:
      "I install and maintain heating systems including boilers, radiators, and energy-efficient heat pumps. Every installation is done safely and precisely to ensure long-term performance. I also advise clients on sustainable heating options that reduce energy use.",
  },
  { image: Slide2 },
  { image: Slide3 },
  { image: Slide4 },
  { image: Slide5 },
 
  
];

const CategoryTwo = () => (
  <section className="">
    <AnimatedSlideshow slides={slides} reverse={true} />
  </section>
);

export default CategoryTwo;
