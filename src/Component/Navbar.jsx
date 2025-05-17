import React, { useState } from 'react';
import Logo from '../assets/logonav.png';
import { Link, useLocation } from 'react-router-dom';
import { RiCloseFill, RiMenu3Fill } from 'react-icons/ri';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      closeMenu();
    } else {
      window.location.href = `/#${id}`;
    }
  };

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 bg-slate-900/80 h-16 backdrop-blur-md">
        <nav className="container mx-auto flex justify-between items-center h-full px-4 md:px-10">
          <div className="flex items-center">
          <button onClick={() => scrollToSection('home')} className="focus:outline-none">
  <img src={Logo} alt="Logo" className="h-30 w-auto object-contain" />
</button>

          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex flex-1 justify-center">
            <ul className="flex gap-10 font-medium items-center text-white text-sm uppercase">
              <li>
                <button
                  onClick={() => scrollToSection('home')}
                  className="text-[#f5a623] transition duration-300"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('projects')}
                  className="hover:text-[#f5a623] transition duration-300"
                >
                  Projects
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('services')}
                  className="hover:text-[#f5a623] transition duration-300"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="hover:text-[#f5a623] transition duration-300"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Mobile Menu Icon */}
          <button onClick={toggleMenu} className="md:hidden text-white" aria-label="Toggle Menu">
            {menuOpen ? <RiCloseFill className="text-3xl" /> : <RiMenu3Fill className="text-3xl" />}
          </button>
        </nav>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden absolute top-16 left-0 w-full bg-slate-900/95 backdrop-blur-md text-white z-40">
            <ul className="flex flex-col items-center gap-6 py-6 text-sm uppercase font-medium">
              <li>
                <button onClick={() => scrollToSection('home')} className="text-[#f5a623]">
                  HOME
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('projects')} className="hover:text-[#f5a623]">
                  PROJECTS
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('services')} className="hover:text-[#f5a623]">
                  SERVICES
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('contact')} className="hover:text-[#f5a623]">
                  CONTACT
                </button>
              </li>
            </ul>
          </div>
        )}
      </header>
    </>
  );
};

export default Navbar;
