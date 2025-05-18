import React, { useState } from "react";
import { motion } from "framer-motion";
import NewHeroBg from "../../assets/Contactform.jpg";

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

function OurTeam() {
  const [success, setSuccess] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    formData.append("access_key", "33d991f1-602e-4dd0-85a2-39b6fd89a908");

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(Object.fromEntries(formData)),
    }).then((res) => res.json());

    if (res.success) {
      setSuccess(true);
      e.target.reset();
    }
  };

  return (
    <section
      id="contact"
      className="relative bg-cover bg-center bg-no-repeat py-32 px-4"
      style={{ backgroundImage: `url(${NewHeroBg})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>

      {/* Title and intro */}
      <motion.div
        className="relative z-10 max-w-2xl mx-auto text-center mb-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
      >
        <motion.h2
          className="text-amber-500 text-2xl md:text-3xl font-bold mb-4"
          initial={{ opacity: 0, y: -30, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          Neem Contact met Ons Op
        </motion.h2>
        <motion.p
          className="text-white/80 text-sm md:text-base"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
          viewport={{ once: true }}
        >
          Heeft u vragen over onze diensten of wilt u een offerte aanvragen? Vul het onderstaande formulier in en wij nemen zo snel mogelijk contact met u op.
        </motion.p>
        <motion.p
          className="text-white/80 text-sm md:text-base mt-2"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
          viewport={{ once: true }}
        >
         
        </motion.p>
      </motion.div>

      {/* Centered form */}
      <div className="relative z-10 flex justify-center items-center">
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="bg-white/20 border border-white/30 backdrop-blur-md p-8 rounded-2xl shadow-2xl w-full max-w-lg"
        >
          <form onSubmit={onSubmit} className="space-y-5">
            {[
              { label: "Naam", name: "name", type: "text", placeholder: "volledige naam" },
              { label: "E-mailadres", name: "email", type: "email", placeholder: "email" },
              { label: "Telefoon", name: "phone", type: "tel", placeholder: "telefoonnummer" },
            ].map(({ label, name, type, placeholder }) => (
              <div key={name}>
                <label className="block text-sm font-medium text-white mb-1">{label}</label>
                <input
                  type={type}
                  name={name}
                  required
                  placeholder={placeholder}
                  className="w-full rounded-lg bg-transparent border border-white/30 px-4 py-3 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
              </div>
            ))}

            <div>
              <label className="block text-sm font-medium text-white mb-1">Bericht</label>
              <textarea
                name="message"
                required
                rows="4"
                placeholder="Typ uw bericht..."
                className="w-full rounded-lg bg-transparent border border-white/30 px-4 py-3 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-amber-500"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-amber-500 hover:bg-amber-600 text-white font-semibold px-6 py-3 rounded-full transition"
            >
              Verstuur Bericht
            </button>

            {success && (
              <p className="text-green-400 text-sm mt-4 text-center">
                ✅ Uw bericht is succesvol verzonden!
              </p>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  );
}

export default OurTeam;