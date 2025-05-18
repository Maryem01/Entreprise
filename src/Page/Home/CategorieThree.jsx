import React from "react";
import AnimatedSlideshow from "./AnimatedSlideshow";

import Slide1 from "../../assets/Gas Installatie 2.png";
import Slide2 from "../../assets/Gas Installatie.png";
import Slide3 from "../../assets/Gas Installatie.png";
import Slide4 from "../../assets/Gas Installatie.png";
import Slide5 from "../../assets/Gas Installatie.png";

const slides = [
  {
    image: Slide1,
    text: "Gasinstallaties",
    description:
      "Ik voer complete gasinstallaties uit voor zowel woningen als industriële gebouwen, zoals ziekenhuizen en militaire sites. Ik werk volgens technische plannen en strikte veiligheidsnormen. Mijn taken omvatten onder andere brandleidingen, afvoer, en gespecialiseerde leidingsystemen, steeds met oog voor precisie en betrouwbaarheid.",
  },
  { image: Slide2 },
  { image: Slide3 },
  { image: Slide4 },
  { image: Slide5 },
];

const CategoryThree = () => (
  <section className="">
    <AnimatedSlideshow slides={slides} reverse={false} />
  </section>
);

export default CategoryThree;
