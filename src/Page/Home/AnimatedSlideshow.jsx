import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

const AnimatedSlideshow = ({ slides, reverse = false }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [imageVisible, setImageVisible] = useState(false);
  const [textVisible, setTextVisible] = useState(false);

  const imageRef = useRef(null);
  const textRef = useRef(null);

  // Auto-switch slides
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [slides.length]);

  // Animate image when in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setImageVisible(entry.isIntersecting),
      { threshold: 0.4 }
    );
    if (imageRef.current) observer.observe(imageRef.current);
    return () => {
      if (imageRef.current) observer.unobserve(imageRef.current);
    };
  }, []);

  // Animate text when in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setTextVisible(entry.isIntersecting),
      { threshold: 0.4 }
    );
    if (textRef.current) observer.observe(textRef.current);
    return () => {
      if (textRef.current) observer.unobserve(textRef.current);
    };
  }, []);

  return (
    <section className="relative bg-gray-100 py-10 overflow-hidden">
      <div
        className={`container mx-auto flex flex-col md:flex-row items-center justify-center gap-x-8 ${
          reverse ? "md:flex-row-reverse" : ""
        }`}
      >
        {/* Image Section */}
        <motion.div
          ref={imageRef}
          initial={{ opacity: 0, x: reverse ? 100 : -100 }}
          animate={{
            opacity: imageVisible ? 1 : 0,
            x: imageVisible ? 0 : reverse ? 100 : -100,
          }}
          transition={{ duration: 1 }}
          className="w-full md:w-1/2 p-4 md:p-6"
        >
          <div className="relative w-full h-[350px] flex justify-center items-center">
            <motion.img
              src={slides[currentSlide].image}
              alt={`Slide ${currentSlide}`}
              className="w-full h-full object-cover rounded-xl shadow-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: imageVisible ? 1 : 0 }}
              transition={{ duration: 1, delay: 0.2 }}
            />
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition ${
                    index === currentSlide
                      ? "bg-amber-500"
                      : "bg-gray-300 hover:bg-gray-400"
                  }`}
                />
              ))}
            </div>
          </div>
        </motion.div>

        {/* Text Section */}
        
        <motion.div
          ref={textRef}
          initial={{ opacity: 0, x: reverse ? -100 : 100 }}
          animate={{
            opacity: textVisible ? 1 : 0,
            x: textVisible ? 0 : reverse ? -100 : 100,
          }}
          transition={{ duration: 1 }}
          className="w-full md:w-1/2 p-4 md:p-6 text-center md:text-left space-y-6"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-blue-950">
            {slides[0].text}
          </h2>
          <p className="text-slate-600 text-base leading-relaxed">
            {slides[0].description || ""}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AnimatedSlideshow;
