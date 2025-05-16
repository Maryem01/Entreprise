import React, { useState } from 'react';
import Logo from '../assets/logonav.png';
import { Link } from 'react-router-dom';
import { RiCloseFill, RiMenu3Fill } from 'react-icons/ri';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-slate-900/80 h-20 backdrop-blur-md">
      <nav className="container mx-auto flex justify-between items-center h-full px-6 md:px-12">
        {/* Logo */}
        <div>
          <Link to="/">
            <img
              src={Logo}
              alt="Logo"
              className="h-16 w-auto max-h-[64px] object-contain"
            />
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex flex-1 justify-center">
          <ul className="flex gap-8 font-semibold items-center text-white">
            <li><Link to="/" className="hover:text-amber-300 transition duration-300">About</Link></li>
            <li><Link to="/why" className="hover:text-amber-300 transition duration-300">Why Choose Us</Link></li>
            <li><Link to="/service" className="hover:text-amber-300 transition duration-300">Services</Link></li>
            <li><Link to="/reviews" className="hover:text-amber-300 transition duration-300">Reviews</Link></li>
            <li><Link to="/faqs" className="hover:text-amber-300 transition duration-300">FAQs</Link></li>
          </ul>
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
          <button className="bg-amber-300 hover:bg-amber-600 transition duration-300 py-2 px-5 rounded text-black font-semibold">
            Request Service
          </button>
        </div>

        {/* Mobile Menu Icon */}
        <button onClick={toggleMenu} className="md:hidden text-white" aria-label="Toggle Menu">
          {menuOpen ? (
            <RiCloseFill className="text-3xl" />
          ) : (
            <RiMenu3Fill className="text-3xl" />
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-slate-900 text-white text-center w-full shadow py-4 transition-all duration-300">
          <ul className="flex flex-col gap-4 font-semibold">
            {['About', 'Why Choose Us', 'Services', 'Reviews', 'FAQs'].map((item, idx) => (
              <li key={idx}>
                <Link
                  to={`/${item.toLowerCase().replace(/\s+/g, '')}`}
                  onClick={closeMenu}
                  className="hover:text-amber-300 transition duration-300"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
          <button
            onClick={closeMenu}
            className="bg-amber-500 hover:bg-amber-600 transition duration-300 mt-4 py-2 px-6 rounded text-black font-semibold"
          >
            Request Service
          </button>
        </div>
      )}
    </header>
  );
};

export default Navbar;
