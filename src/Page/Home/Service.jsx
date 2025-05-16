import React from "react";
import { motion } from "framer-motion";

import Icon1 from "../../assets/icon-1.png";
import Icon2 from "../../assets/icon-2.png";
import Icon3 from "../../assets/icon-3.png";

const ServiceList = [
  {
    id: 1,
    title: "Emergency Services",
    description:
      "Fast response for urgent plumbing issues, available 24/7 with skilled professionals and reliable solutions.",
    image: Icon1,
  },
  {
    id: 2,
    title: "Bathroom Design",
    description:
      "Modern and custom bathroom planning with expert installations that match style, comfort, and functionality.",
    image: Icon2,
  },
  {
    id: 3,
    title: "Quality Materials",
    description:
      "We use only durable, tested materials to ensure your installations last longer and perform reliably every day.",
    image: Icon3,
  },
  {
    id: 4,
    title: "Repair Services",
    description:
      "From leaks to full system repairs, we restore your plumbing systems efficiently with expert craftsmanship.",
    image: Icon1, // reuse or replace
  },
];

const Service = () => {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-bg-slate-800">
            Our Plumbing Services
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 text-center">
          {ServiceList.map((service, index) => (
            <motion.div
              key={service.id}
              className="flex flex-col items-center space-y-4 p-4 bg-white rounded-xl shadow-md"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="w-20 h-20 flex items-center justify-center bg-slate-800 rounded-full">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-10 h-10 object-contain"
                />
              </div>
              <h3 className="text-lg font-semibold text-slate-800">{service.title}</h3>
              <p className="text-sm text-gray-600 px-2">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Service;
