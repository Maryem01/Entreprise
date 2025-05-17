import React from "react";
import {
  FaFacebookF,
  FaGoogle,
  FaInstagram,
  FaLinkedinIn,
  FaTimes,
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-slate-800 text-white">
      {/* Top Divider */}
      <div className="border-t border-white/10 mb-10"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-10 pb-12">
        {/* Left: Logo & Description */}
        <div>
          <div className="flex items-center mb-4">
            <div className="bg-white text-slate-800 font-bold text-xl rounded-md px-2 py-1 mr-2">
              B
            </div>
            <h3 className="text-xl font-semibold">Best Plumb Solution</h3>
          </div>
          <p className="text-white/80 text-sm leading-relaxed">
            Best Plumb Solution delivers expert plumbing and heating services with a focus on quality,
            speed, and reliability. From installations to emergency repairs, we’re committed to keeping
            your home or business running smoothly — 24/7.
          </p>
        </div>

        {/* Middle: Quick Links */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm text-white/80">
            <li><a href="#" className="hover:text-amber-500">Home</a></li>
            <li><a href="#" className="hover:text-amber-500">About Us</a></li>
            <li><a href="#" className="hover:text-amber-500">Services</a></li>
            <li><a href="#" className="hover:text-amber-500">Emergency</a></li>
            <li><a href="#" className="hover:text-amber-500">Contact</a></li>
          </ul>
        </div>

        {/* Right: Contact Info */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
          <ul className="text-sm text-white/90 space-y-3">
            <li className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-amber-500" />
              123 Waterway Blvd, Brussels, BE 1000
            </li>
            <li className="flex items-center gap-3">
              <FaEnvelope className="text-amber-500" />
              info@bestplumbsolution.com
            </li>
            <li className="flex items-center gap-3">
              <FaPhoneAlt className="text-amber-500" />
              +32 485 123 456
            </li>
          </ul>

          <p className="text-sm mt-6 text-white/80">Follow us on</p>
          <div className="flex gap-3 mt-3">
            {[FaFacebookF, FaGoogle, FaInstagram, FaLinkedinIn].map((Icon, index) => (
              <a
                key={index}
                href="#"
                className="bg-amber-500 hover:bg-amber-600 text-white p-2 rounded-full"
              >
                <Icon size={14} />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="bg-slate-900 text-gray-400 text-xs text-center py-4">
        © 2025 Best Plumb Solution. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
