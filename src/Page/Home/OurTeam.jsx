import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaClock, FaPhoneAlt, FaTools, FaUserCheck } from "react-icons/fa";

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
    <section className="bg-slate-800 py-16">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-12 items-center">

        {/* Left Column: Contact Form */}
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-transparent border border-white/20 p-8 rounded-xl shadow-xl max-w-lg w-full mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 text-center">
            Contact Us
          </h2>

          <form onSubmit={onSubmit} className="space-y-4">
            {[
              { label: "Name", name: "name", type: "text", placeholder: "Your full name" },
              { label: "Email", name: "email", type: "email", placeholder: "your@email.com" },
              { label: "Phone", name: "phone", type: "number", placeholder: "Your phone" },
            ].map(({ label, name, type, placeholder }) => (
              <div key={name}>
                <label className="block text-sm font-medium text-white mb-1">
                  {label}
                </label>
                <input
                  type={type}
                  name={name}
                  required
                  placeholder={placeholder}
                  className="w-full border border-white/20 rounded bg-transparent px-4 py-3 text-sm text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
              </div>
            ))}

            <div>
              <label className="block text-sm font-medium text-white mb-1">
                Message
              </label>
              <textarea
                name="message"
                required
                rows="5"
                placeholder="Type your message here..."
                className="w-full border border-white/20 rounded bg-transparent px-4 py-3 text-sm text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-amber-500"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-amber-500 hover:bg-amber-600 text-white font-semibold px-6 py-3 rounded-full transition"
            >
              Send Message
            </button>

            {success && (
              <p className="text-green-400 text-sm mt-4 text-center">
                ✅ Your message has been sent successfully!
              </p>
            )}
          </form>
        </motion.div>

        {/* Right Column: Emergency Info */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeIn}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-white max-w-xl mx-auto"
        >
          <h3 className="text-3xl md:text-2xl font-bold text-amber-500 mb-6 flex items-center gap-3">
            <FaTools className="text-amber-500" />
            24/7 Emergency Plumbing Services
          </h3>

          <div className="space-y-6 text-white/80 text-base md:text-md leading-relaxed">
            <div className="flex items-start gap-3">
          
              <p>
                Plumbing issues can happen anytime — a sudden leak at night or a blocked drain on a weekend.
                That’s why we offer round-the-clock service to make sure you’re never left dealing with it alone.
                Our certified technicians are available 24/7 to respond fast and fix the issue properly.
              </p>
            </div>

            <div className="flex items-start gap-3">
              
              <p>
                Need urgent help? Just fill in the contact form with a short description of your problem and your phone number.
                One of our experts will get in touch with you shortly. We prioritize emergency calls to ensure your property and comfort are protected.
              </p>
            </div>

            <div className="flex items-start gap-3">
           
              <p>
                With years of experience and fully licensed professionals, you can trust that our service is both safe and efficient.
                We take pride in quality workmanship, transparency, and fast response — no matter the time or day.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default OurTeam;
