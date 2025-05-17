import React, { useState, useEffect } from 'react';
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

  // Auto-close menu on scroll (mobile only)
  useEffect(() => {
    const handleScroll = () => {
      if (menuOpen) closeMenu();
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [menuOpen]);

  const navItems = [
    { label: 'HOME', id: 'home' },
    { label: 'PROJECTS', id: 'projects' },
    { label: 'SERVICES', id: 'services' },
    { label: 'CONTACT', id: 'contact' },
  ];

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
              {navItems.map(({ label, id }) => (
                <li key={id}>
                  <button
                    onClick={() => scrollToSection(id)}
                    className={`transition duration-300 ${
                      id === 'home' ? 'text-amber-400' : 'hover:text-amber-400'
                    }`}
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Mobile Menu Icon */}
          <button onClick={toggleMenu} className="md:hidden text-white" aria-label="Toggle Menu">
            {menuOpen ? <RiCloseFill className="text-3xl" /> : <RiMenu3Fill className="text-3xl" />}
          </button>
        </nav>

        {/* Mobile Menu: Glassy, full-width, matching style */}
        {menuOpen && (
          <div className="md:hidden absolute top-16 left-0 w-full bg-slate-900/80 backdrop-blur-md border-t border-white/10 z-40 px-4 py-6 shadow-lg">
            <ul className="flex flex-col items-center gap-5 text-base uppercase font-semibold tracking-wide text-white">
              {navItems.map(({ label, id }) => (
                <li key={id}>
                  <button
                    onClick={() => scrollToSection(id)}
                    className={`transition duration-300 ${
                      id === 'home' ? 'text-amber-400' : 'hover:text-amber-400'
                    }`}
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </header>
    </>
  );
};

export default Navbar;
