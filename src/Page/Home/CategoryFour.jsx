import React from "react";
import AnimatedSlideshow from "./AnimatedSlideshow";
import Slide1 from "../../assets/Warmtepomp installatie1.png";
import Slide2 from "../../assets/Gas installatie.png";
import Slide3 from "../../assets/Warmtepomp installatie1.png";

const slides = [
  { image: Slide1, text: "Projectopvolging & Klantenservice",description: "I manage projects from planning to final delivery, ensuring smooth coordination and quality control. I handle material planning, timelines, and client communication with care. My focus is on providing reliable, organized service and clear guidance throughout the process." },
  { image: Slide2,  },
  { image: Slide3, },
];

const CategoryFour = () => <AnimatedSlideshow slides={slides} reverse={true} />;

export default CategoryFour;
