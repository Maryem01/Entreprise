import React from "react";
import { motion } from "framer-motion";
import {
  FaSearch,
  FaTools,
  FaFireAlt,
  FaBath,
  FaTint,
  FaWrench,
} from "react-icons/fa";

const backToFront = {
  hidden: { opacity: 0, scale: 0.85, y: 30 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const ServiceList = [
  {
    id: 1,
    title: "Lekdetectie",
    description: "Geavanceerde technologie om verborgen lekken op te sporen en te herstellen.",
    icon: <FaSearch className="w-6 h-6 text-white" />,
  },
  {
    id: 2,
    title: "Afvoer Ontstoppen",
    description: "Effectieve ontstopping en grondige reiniging van afvoeren.",
    icon: <FaTools className="w-6 h-6 text-white" />,
  },
  {
    id: 3,
    title: "Boiler",
    description: "Professionele installatie, onderhoud en herstelling van boilers.",
    icon: <FaFireAlt className="w-6 h-6 text-white" />,
  },
  {
    id: 4,
    title: "Badkamer en Keuken",
    description: "Volledige loodgietersdiensten voor keuken en badkamer.",
    icon: <FaBath className="w-6 h-6 text-white" />,
  },
  {
    id: 5,
    title: "Waterfiltratie",
    description: "Zeker van zuiver en veilig water met onze filtersystemen.",
    icon: <FaTint className="w-6 h-6 text-white" />,
  },
  {
    id: 6,
    title: "Leidingherstelling",
    description: "Betrouwbare herstelling en vervanging van beschadigde leidingen.",
    icon: <FaWrench className="w-6 h-6 text-white" />,
  },
];

const Service = () => {
  return (
    <section id="services" className="bg-gray-100 py-16">
      <div className="container mx-auto px-6 md:px-12 text-center mb-20">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={backToFront}
          className="text-3xl md:text-4xl font-bold text-slate-800 leading-tight py-6"
        >
          <span className="text-slate-800">Onze Loodgietersdiensten</span>
        </motion.h2>
      </div>

      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {ServiceList.map((service, index) => (
            <motion.div
              key={service.id}
              className="flex flex-col items-start bg-slate-800 p-6 rounded-2xl shadow-md text-white hover:shadow-xl transition"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="w-14 h-14 flex items-center justify-center bg-amber-500 rounded-full mb-4">
                {service.icon}
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
