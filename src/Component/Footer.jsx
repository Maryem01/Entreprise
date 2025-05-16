import React from "react";
import {
  FaFacebookF,
  FaGoogle,
  FaInstagram,
  FaLinkedinIn,
  FaTimes,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-slate-800 text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-10 pb-12">
        {/* Left: Logo & Description */}
        <div>
          <div className="flex items-center mb-4">
            {/* Logo image or icon */}
            <div className="bg-white text-slate-800 font-bold text-xl rounded-md px-2 py-1 mr-2">
              B
            </div>
            <h3 className="text-xl font-semibold">plumbsolution</h3>
          </div>
          <p className="text-gray-300 text-sm leading-relaxed">
            PlumbFusion is a results-driven plumbing marketing agency focusing
            on helping tradespeople boost visibility and generate quality leads
            through Google Ads, SEO, and optimized landing pages.
          </p>
        </div>

        {/* Middle: Quick Links */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><a href="#" className="hover:text-amber-500">Home</a></li>
            <li><a href="#" className="hover:text-amber-500">About</a></li>
            <li><a href="#" className="hover:text-amber-500">Services</a></li>
            <li><a href="#" className="hover:text-amber-500">Testimonials</a></li>
          </ul>
        </div>

        {/* Right: Contact Info */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
          <ul className="text-sm text-gray-300 space-y-2">
            <li>129 Newcastle Road, New York</li>
            <li>house@gmail.com</li>
            <li>+7 123 456 789</li>
          </ul>

          <p className="text-sm mt-4">Follow us on</p>
          <div className="flex gap-3 mt-2">
            <a href="#" className="bg-amber-500 hover:bg-amber-600 text-white p-2 rounded-full">
              <FaFacebookF size={14} />
            </a>
            <a href="#" className="bg-amber-500 hover:bg-amber-600 text-white p-2 rounded-full">
              <FaGoogle size={14} />
            </a>
            <a href="#" className="bg-amber-500 hover:bg-amber-600 text-white p-2 rounded-full">
              <FaInstagram size={14} />
            </a>
            <a href="#" className="bg-amber-500 hover:bg-amber-600 text-white p-2 rounded-full">
              <FaLinkedinIn size={14} />
            </a>
            <a href="#" className="bg-amber-500 hover:bg-amber-600 text-white p-2 rounded-full">
              <FaTimes size={14} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="bg-slate-900 text-gray-400 text-xs text-center py-4">
        Copyright © 2025 PlumbFusion. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
