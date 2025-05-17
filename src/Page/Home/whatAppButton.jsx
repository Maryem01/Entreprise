import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppButton = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div className="relative w-16 h-16 flex items-center justify-center">
        {/* Slower sonar ring */}
        <span className="absolute w-14 h-14 rounded-full bg-green-400 opacity-75 animate-ping pointer-events-none slow-ping" />

        {/* WhatsApp button */}
        <a
          href="https://wa.me/32485481543"
          target="_blank"
          rel="noopener noreferrer"
          className="z-10 bg-green-500 p-4 rounded-full shadow-lg text-white hover:scale-110 transition-transform duration-100"
          aria-label="Chat on WhatsApp"
        >
          <FaWhatsapp className="text-3xl" />
        </a>
      </div>
    </div>
  );
};

export default WhatsAppButton;
