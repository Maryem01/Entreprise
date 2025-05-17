import React from "react";
import { motion } from "framer-motion";

import Icon1 from "../../assets/icon-1.png";
import Icon2 from "../../assets/icon-2.png";
import Icon3 from "../../assets/icon-3.png";


const ServiceList = [
  {
    id: 1,
    title: "Leak Detection",
    description: "Advanced technology to locate and repair hidden leaks.",
    image: Icon1,
  },
  {
    id: 2,
    title: "Drain Cleaning",
    description: "Effective unclogging and thorough drain cleaning solutions.",
    image: Icon2,
  },
  {
    id: 3,
    title: "Water Heater",
    description: "Professional installation, service and repair of water heaters.",
    image: Icon3,
  },
  {
    id: 1,
    title: "Bathroom and Kitchen",
    description: "Comprehensive plumbing services for kitchens and bathrooms.",
    image: Icon3,
  },
  {
    id: 2,
    title: "Water Filtration",
    description: "Ensure clean, safe water with our reliable filtration systems.",
    image: Icon2,
  },
  {
    id: 3,
    title: "Pipe Repair",
    description: "Reliable repair and replacement services for damaged pipes.",
    image: Icon1,
  },
];

const Service = () => {
  return (
    <section className=" bg-gray-100 py-16">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 ">
            Our Plumbing Services
          </h2>
          
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ">
          {ServiceList.map((service, index) => (
            <motion.div
              key={service.id}
              className="flex flex-col items-start bg-slate-800  p-6 rounded-2xl shadow-md text-white hover:shadow-xl transition"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="w-14 h-14 flex items-center justify-center bg-amber-500 rounded-full mb-4">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-7 h-7 object-contain"
                />
              </div>
              <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
              <p className="text-blue-100 text-sm">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Service;
