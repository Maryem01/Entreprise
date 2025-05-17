import React, { useState } from 'react';
import Logo from '../assets/logonav.png';
import { useLocation } from 'react-router-dom';
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

      if (id === 'projects') {
        setTimeout(() => {
          window.dispatchEvent(new Event('showArrow'));
        }, 600);
      }

      closeMenu();
    } else {
      window.location.href = `/#${id}`;
    }
  };

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 bg-slate-900/80 h-16 backdrop-blur-md shadow-md">
        <nav className="container mx-auto flex justify-between items-center h-full px-4 md:px-10">
          {/* Logo */}
          <div className="flex items-center">
            <button onClick={() => scrollToSection('home')} className="focus:outline-none">
              <img src={Logo} alt="Logo" className="h-30 w-auto object-contain" />
            </button>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex flex-1 justify-center">
            <ul className="flex gap-12 font-semibold items-center text-white text-base uppercase tracking-wide">
              <li>
                <button
                  onClick={() => scrollToSection('home')}
                  className="text-amber-400 transition duration-300"
                >
                  HOME
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('projects')}
                  className="hover:text-amber-400 transition duration-300"
                >
                  PROJECTS
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('services')}
                  className="hover:text-amber-400 transition duration-300"
                >
                  SERVICES
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="hover:text-amber-400 transition duration-300"
                >
                  CONTACT
                </button>
              </li>
            </ul>
          </div>

          {/* Mobile Menu Icon */}
          <button onClick={toggleMenu} className="md:hidden text-white" aria-label="Toggle Menu">
            {menuOpen ? <RiCloseFill className="text-3xl" /> : <RiMenu3Fill className="text-3xl" />}
          </button>
        </nav>

        {/* Mobile Menu (glass box) */}
        {menuOpen && (
          <div className="md:hidden absolute top-20 left-1/2 transform -translate-x-1/2 bg-white/10 backdrop-blur-lg border border-white/10 rounded-xl px-6 py-5 shadow-lg z-40 max-w-xs w-11/12">
            <ul className="flex flex-col items-center gap-4 text-base uppercase font-semibold tracking-wide text-white">
              <li>
                <button onClick={() => scrollToSection('home')} className="text-amber-400">
                  HOME
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('projects')} className="hover:text-amber-400">
                  PROJECTS
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('services')} className="hover:text-amber-400">
                  SERVICES
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('contact')} className="hover:text-amber-400">
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
