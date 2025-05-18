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
      "Ik installeer en onderhoud verwarmingssystemen zoals condensatieketels, radiatoren, vloerverwarming en energiezuinige warmtepompen. Elke installatie gebeurt veilig, nauwkeurig en volgens de geldende normen. Ik adviseer klanten ook over duurzame verwarmingsopties om energie te besparen en het wooncomfort te verhogen.",
  },
  { image: Slide2 },
  { image: Slide3 },
  { image: Slide4 },
  { image: Slide5 },
];

const CategoryTwo = () => (
  <section id="category-two" className="pt-0 mt-0">
    <AnimatedSlideshow slides={slides} reverse={true} />
  </section>
);

export default CategoryTwo;
