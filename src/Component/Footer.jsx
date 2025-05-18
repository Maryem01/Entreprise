import React from "react";
import {
  FaFacebookF,
  FaGoogle,
  FaInstagram,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
} from "react-icons/fa";

const Footer = () => {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      if (id === "projects") {
        const observer = new IntersectionObserver(
          (entries, observer) => {
            const [entry] = entries;
            if (entry.isIntersecting) {
              window.dispatchEvent(new Event("showArrow"));
              observer.disconnect();
            }
          },
          { threshold: 0.6 }
        );
        observer.observe(section);
      }
    } else {
      window.location.href = `/#${id}`;
    }
  };

  return (
    <footer className="bg-slate-800 text-white">
      {/* Divider */}
      <div className="border-t border-white/10 mb-10"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Logo and Description */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center">
              <div className="bg-white text-slate-800 font-bold text-xl rounded-md px-2 py-1 mr-2">
                B
              </div>
              <h3 className="text-xl font-semibold">Best Plumb Solution</h3>
            </div>
            <p className="text-white/80 text-sm leading-relaxed">
              Best Plumb Solution levert professionele loodgieters- en verwarmingsdiensten met focus op kwaliteit,
              snelheid en betrouwbaarheid. Van installaties tot dringende herstellingen — wij zorgen ervoor dat uw woning
              of bedrijf vlot blijft functioneren, 24/7.
            </p>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col gap-4">
            <h4 className="text-lg font-semibold">Contactgegevens</h4>
            <ul className="text-sm text-white/90 space-y-3">
              <li className="flex items-center gap-3">
                <FaMapMarkerAlt className="text-amber-500" />
                <span>123 Waterway Blvd, Brussel, BE 1000</span>
              </li>
              <li className="flex items-center gap-3">
                <FaEnvelope className="text-amber-500" />
                <span>info@bestplumbsolution.com</span>
              </li>
              <li className="flex items-center gap-3">
                <FaPhoneAlt className="text-amber-500" />
                <span>+32 485 123 456</span>
              </li>
            </ul>
          </div>

          {/* Social Icons */}
          <div className="flex flex-col justify-between gap-4 md:items-end">
            <div className="mt-1 md:mt-0">
              <h4 className="text-lg font-semibold mb-2">Volg ons</h4>
              <div className="flex gap-4">
                {[FaFacebookF, FaGoogle, FaInstagram, FaLinkedinIn].map((Icon, index) => (
                  <a
                    key={index}
                    href="#"
                    className="bg-amber-500 hover:bg-amber-600 text-white p-2 rounded-full transition"
                  >
                    <Icon size={16} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="bg-slate-900 text-gray-400 text-xs text-center py-4">
        © 2025 Best Plumb Solution. Alle rechten voorbehouden.
      </div>
    </footer>
  );
};

export default Footer;
