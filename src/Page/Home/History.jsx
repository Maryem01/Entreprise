import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import BannerImg from "../../assets/historyImg.png";
import ChatModal from "../Home/ChatModal"; // ✅ Make sure this path is correct

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const History = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section id ="Über uns" className="bg-slate-800 py-12 md:py-16 text-white">
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
            Over Ons
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Onze Bedrijfsgeschiedenis
          </h2>

          <p className="text-gray-300 leading-relaxed">
            Wij zijn een betrouwbaar team van loodgieters met tientallen jaren gezamenlijke ervaring. Onze reis is gebaseerd op toewijding aan kwaliteit, sterke waarden en langdurige klanttevredenheid.
          </p>

          <ul className="space-y-3 text-sm md:text-base">
            <li className="flex items-start gap-2">
              <FaCheckCircle className="text-amber-500 mt-1" />
              Meer dan 15 jaar praktische loodgieterservaring.
            </li>
            <li className="flex items-start gap-2">
              <FaCheckCircle className="text-amber-500 mt-1" />
             Projecten opgeleverd voor woningen, ziekenhuizen en industrieën.
            </li>
            <li className="flex items-start gap-2">
              <FaCheckCircle className="text-amber-500 mt-1" />
              Gelicentieerde, getrainde en veiligheidsgerichte professionals.
            </li>
            <li className="flex items-start gap-2">
              <FaCheckCircle className="text-amber-500 mt-1" />
              Altijd gericht op betrouwbaarheid en langdurige prestaties.
            </li>
          </ul>

          {/* Contact Us Button */}
          <button
            onClick={() => setIsModalOpen(true)}
            className="mt-8 bg-amber-500 hover:bg-yellow-500 text-white px-6 py-2 rounded-full shadow font-bold"
          >
            Contacteer Ons
          </button>
        </motion.div>
      </div>

      {/* Chat Modal here */}
      {isModalOpen && <ChatModal open={isModalOpen} setOpen={setIsModalOpen} />}
    </section>
  );
};

export default History;
