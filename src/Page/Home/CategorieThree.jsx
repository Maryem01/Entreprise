import React from "react";
import AnimatedSlideshow from "./AnimatedSlideshow";

import Slide1 from "../../assets/Gas installatie.png";


const slides = [
  {
    image: Slide1,
    text: "Gasinstallaties",
    description:
      "Ik voer complete gasinstallaties uit voor zowel woningen als industriële gebouwen, zoals ziekenhuizen en militaire sites. Ik werk volgens technische plannen en strikte veiligheidsnormen. Mijn taken omvatten onder andere brandleidingen, afvoer, en gespecialiseerde leidingsystemen, steeds met oog voor precisie en betrouwbaarheid.",
  },
 
];

const CategoryThree = () => (
  <section className="">
    <AnimatedSlideshow slides={slides} reverse={false} />
  </section>
);

export default CategoryThree;
