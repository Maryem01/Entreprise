import React from "react";
import AnimatedSlideshow from "./AnimatedSlideshow";

import Slide1 from "../../assets/Warmtepomp installatie1.png";
import Slide2 from "../../assets/Gas installatie.png";
import Slide3 from "../../assets/Warmtepomp installatie1.png";

const slides = [
  {
    image: Slide1,
    text: "Technische Installaties & Industriële Projecten",
    description:
      "I carry out technical installations for both homes and industrial sites like hospitals and military bases. I follow detailed plans and safety standards while working with teams on large-scale projects. My tasks include fire lines, drainage, and specialized piping systems.",
  },
  { image: Slide2 },
  { image: Slide3 },
];

const CategoryThree = () => (
  <section className="bg-gray-50 py-20">
    <AnimatedSlideshow slides={slides} reverse={false} />
  </section>
);

export default CategoryThree;
