import React, { useState } from "react";
import { motion } from "framer-motion";
import BannerImg from "../../assets/puzzle.png";

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

function OurTeam() {
  const [success, setSuccess] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("access_key", "33d991f1-602e-4dd0-85a2-39b6fd89a908");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      setSuccess(true);
      event.target.reset();
    }
  };

  return (
    <section className="relative bg-slate-800 py-16">
      <div className="max-w-6xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 items-center gap-12">

        {/* Left Side - Image */}
        <div className="space-y-4">
          <div className="rounded-xl overflow-hidden">
            <img src={BannerImg} alt="Working" className="w-full h-auto rounded-xl shadow-xl" />
          </div>
        </div>

        {/* Right Side - Transparent Form */}
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white/5 backdrop-blur-lg p-8 rounded-xl shadow-2xl border border-white/10"
        >
          <h2 className="text-2xl font-bold text-white mb-6 text-center">
            Get My Free Report
          </h2>

          <form onSubmit={onSubmit} className="space-y-4">
            {[
              { name: "name", label: "Full Name", type: "text" },
              { name: "business", label: "Business Name", type: "text" },
              { name: "zip", label: "City / Zip Code", type: "text" },
              { name: "website", label: "Website (Optional)", type: "url" },
              { name: "phone", label: "Phone", type: "text" },
              { name: "email", label: "Email", type: "email" },
            ].map(({ name, label, type }) => (
              <div key={name}>
                <label className="block text-sm font-medium text-white mb-1">
                  {label}
                </label>
                <input
                  type={type}
                  name={name}
                  required={name !== "website"}
                  placeholder={label}
                  className="w-full border border-white/30 rounded px-4 py-3 bg-transparent text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
              </div>
            ))}

            <button
              type="submit"
              className="w-full bg-[#f5a623] hover:bg-yellow-500 text-white font-bold px-6 py-3 rounded-full transition"
            >
              SEND MY REPORT
            </button>

            {success && (
              <p className="text-green-400 text-sm mt-4 text-center">
                ✅ Your message has been sent successfully!
              </p>
            )}
          </form>
        </motion.div>
      </div>
      <div className="w-full h-[2px] bg-white/10 my-20" />

    </section>
  );
}

export default OurTeam;
