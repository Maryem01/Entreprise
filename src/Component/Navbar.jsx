import React, { useState } from 'react';
import Logo from '../assets/logonav.png';
import { Link } from 'react-router-dom';
import { RiCloseFill, RiMenu3Fill } from 'react-icons/ri';
import ChatModal from '../Page/Home/ChatModal'; // ✅ Make sure path is correct

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false); // ✅ modal state

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      {/* NAVBAR */}
      <header className="fixed top-0 left-0 w-full z-50 bg-slate-900/80 h-16 backdrop-blur-md">
        <nav className="container mx-auto flex justify-between items-center h-full px-4 md:px-10">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/">
             <img
  src={Logo}
  alt="Logo"
  className="h-30 w-auto object-contain"
/>

            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex flex-1 justify-center">
            <ul className="flex gap-10 font-medium items-center text-white text-sm uppercase">
              <li className="relative">
                <Link to="/" className="text-[#f5a623] transition duration-300">Home</Link>
              </li>
              <li><Link to="/about" className="hover:text-[#f5a623] transition duration-300">PROJECTS</Link></li>
              <li><Link to="/service" className="hover:text-[#f5a623] transition duration-300">SERVICES</Link></li>
              <li><button onClick={() => setIsModalOpen(true)} className="hover:text-[#f5a623] transition duration-300">CONTACT</button></li>
            </ul>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <button
              onClick={() => setIsModalOpen(true)} // ✅ open modal
              className=" bg-amber-500 bg hover:bg-white transition duration-300 py-2 px-6 rounded-full text-white bg hover:text-amber-500 font-semibold flex items-center gap-2"
            >
              Contact
              <span className="text-lg">→</span>
            </button>
          </div>

          {/* Mobile Menu Icon */}
          <button onClick={toggleMenu} className="md:hidden text-white" aria-label="Toggle Menu">
            {menuOpen ? <RiCloseFill className="text-3xl" /> : <RiMenu3Fill className="text-3xl" />}
          </button>
        </nav>
      </header>

      {/* MODAL */}
      {isModalOpen && <ChatModal open={isModalOpen} setOpen={setIsModalOpen} />}
    </>
  );
};

export default Navbar;
