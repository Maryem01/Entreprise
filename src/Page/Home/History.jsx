import React from "react";
import { motion } from "framer-motion";
import { FaCheckCircle, FaClock, FaUserCheck, FaShieldAlt } from "react-icons/fa";
import BannerImg from "../../assets/historyImg.png";

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const History = () => {
  return (
    <section className="bg-slate-800 py-12 md:py-16 text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center gap-12 md:gap-20">
        
        {/* Image Section */}
        <motion.div
          className="w-full md:w-1/2 flex flex-col items-center md:items-start"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
 <img
  src={BannerImg}
  alt="Company History"
  className="w-full max-w-md h-[400px] object-cover rounded-xl shadow-md mt-20 mb-8"
/>




          {/* Feature Buttons */}
          <motion.div
            className="mt-6 flex flex-wrap gap-4 justify-center md:justify-start"
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
           
          </motion.div>
        </motion.div>

        {/* Text Section */}
        <motion.div
          className="w-full md:w-1/2 space-y-6"
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="text-amber-500 font-semibold text-sm uppercase tracking-wide">
            About Us
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Our Company History
          </h2>

          <p className="text-gray-300 leading-relaxed">
            We are a trusted team of plumbing professionals with decades of combined experience.
            Our journey is built on dedication to quality, strong ethics, and long-term customer satisfaction.
          </p>

          <ul className="space-y-3 text-sm md:text-base">
            <li className="flex items-start gap-2">
              <FaCheckCircle className="text-amber-500 mt-1" />
              Over 15 years of hands-on plumbing experience.
            </li>
            <li className="flex items-start gap-2">
              <FaCheckCircle className="text-amber-500 mt-1" />
              Projects delivered for homes, hospitals, and industries.
            </li>
            <li className="flex items-start gap-2">
              <FaCheckCircle className="text-amber-500 mt-1" />
              Licensed, trained, and safety-focused professionals.
            </li>
            <li className="flex items-start gap-2">
              <FaCheckCircle className="text-amber-500 mt-1" />
              Always focused on reliability and long-term performance.
            </li>
           
<button className="mt-8 bg-amber-500 hover:bg-yellow-500 text-white px-6 py-2 rounded-full shadow font-bold">
  Contact Us
</button>

          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default History;
