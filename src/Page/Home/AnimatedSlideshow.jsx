import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const AnimatedSlideshow = ({ slides, reverse = false }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [imageVisible, setImageVisible] = useState(false);
  const [textVisible, setTextVisible] = useState(false);

  const imageRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [slides.length]);

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
    <section className="relative bg-gray-100 py-20 overflow-hidden">
      <div
        className={`container mx-auto flex flex-col md:flex-row items-center justify-center px-6 md:px-12 gap-y-14 gap-x-12 ${
          reverse ? "md:flex-row-reverse" : ""
        }`}
      >
        {/* Image Block */}
        <motion.div
          ref={imageRef}
          variants={fadeInUp}
          initial="hidden"
          animate={imageVisible ? "visible" : "hidden"}
          transition={{ duration: 0.8 }}
          className="relative w-full md:w-1/2 max-w-sm h-[300px]"
        >
          <div className="relative w-full h-full flex justify-center items-center">
            <motion.img
              src={slides[currentSlide].image}
              alt={`Slide ${currentSlide}`}
              className="w-full h-full object-cover rounded-xl shadow-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: imageVisible ? 1 : 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            />
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
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

        {/* Text Block */}
        <motion.div
          ref={textRef}
          variants={fadeInUp}
          initial="hidden"
          animate={textVisible ? "visible" : "hidden"}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full md:w-1/2 text-center md:text-left px-4"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4 text-balance">
            {slides[0].text}
          </h2>
          <p className="text-slate-600 leading-relaxed text-sm md:text-base">
            {slides[0].description || ""}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AnimatedSlideshow;
