import React from "react";
import AnimatedSlideshow from "./AnimatedSlideshow";
import Slide1 from "../../assets/Sanitair3.png";
import Slide2 from "../../assets/Sanitair2.png";
import Slide3 from "../../assets/Sanitair3.png";
import Slide4 from "../../assets/Sanitair2.png";
import Slide5 from "../../assets/Sanitair3.png";

const slides = [
  {
    image: Slide1,
    text: "Sanitaire Installaties",
    description:
      "Ik verzorg volledige sanitaire installaties voor zowel nieuwbouw als renovaties. Dit omvat badkamers, keukens, toiletten en douches. Ik werk met oog voor detail, nette afwerking en duurzame kwaliteit. Elk project wordt afgestemd op de wensen van de klant om een moderne en functionele oplossing te garanderen.",
  },
  { image: Slide2 },
  { image: Slide3 },
  { image: Slide4 },
  { image: Slide5 },
];

const CategoryFour = () => <AnimatedSlideshow slides={slides} reverse={true} />;

export default CategoryFour;
