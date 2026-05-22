import { motion } from "framer-motion";
import { useState } from "react";

import logo from "../assets/logos/paces-logo1.jpeg";

const Navbar = () => {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="fixed top-0 left-0 w-full z-50">

      {/* Top Contact Bar */}
      <div className="bg-stone-100 text-red-900">

        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-2 text-sm px-4 py-2">

          <div className="flex flex-wrap gap-6 items-center">

            <p>
              📞 +91 97119 05636
            </p>

          </div>

          <div>

            <p>
              📅 13th - 14th June 2026
            </p>

          </div>

        </div>

      </div>

      {/* Main Navbar */}
      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white backdrop-blur-md border-b border-cyan-100 shadow-lg relative"
      >

        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

          {/* Logo + Title */}
          <a
            href="#home"
            className="flex items-center gap-4"
          >

            <img
              src={logo}
              alt="PACES Logo"
              className="h-14 md:h-16 w-auto object-contain"
            />

            <h1 className="text-lg md:text-2xl font-bold gradient-text">
              MP – PACES Summit 2026
            </h1>

          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex gap-8 text-sm font-medium text-gray-700">

            <a
              href="#home"
              className="hover:text-cyan-500 transition-all duration-300"
            >
              Home
            </a>

            <a
              href="#about"
              className="hover:text-cyan-500 transition-all duration-300"
            >
              About Us
            </a>

            <a
              href="#speakers"
              className="hover:text-cyan-500 transition-all duration-300"
            >
              Speakers
            </a>

            <a
              href="#organising"
              className="hover:text-cyan-500 transition-all duration-300"
            >
              Organising Body
            </a>

            <a
              href="#contact"
              className="hover:text-cyan-500 transition-all duration-300"
            >
              Contact Us
            </a>

          </div>

          {/* Right Side */}
          <div className="flex items-center gap-4">

            {/* Register Button */}
            <a
              href="#register"
              className="hidden md:block"
            >

              <button className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 shadow-lg">

                Register Now

              </button>

            </a>

            {/* Hamburger */}
            <button
              className="md:hidden text-3xl text-gray-700"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              ☰
            </button>

          </div>

        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden bg-white shadow-lg border-t border-gray-200">

            <div className="flex flex-col items-center gap-6 py-6 text-gray-700 font-medium">

              <a
                href="#home"
                onClick={() => setMenuOpen(false)}
                className="hover:text-cyan-500 transition-all duration-300"
              >
                Home
              </a>

              <a
                href="#about"
                onClick={() => setMenuOpen(false)}
                className="hover:text-cyan-500 transition-all duration-300"
              >
                About Us
              </a>

              <a
                href="#speakers"
                onClick={() => setMenuOpen(false)}
                className="hover:text-cyan-500 transition-all duration-300"
              >
                Speakers
              </a>

              <a
                href="#organising"
                onClick={() => setMenuOpen(false)}
                className="hover:text-cyan-500 transition-all duration-300"
              >
                Organising Body
              </a>

              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="hover:text-cyan-500 transition-all duration-300"
              >
                Contact Us
              </a>

              {/* Mobile Register Button */}
              <a
                href="#register"
                onClick={() => setMenuOpen(false)}
              >

                <button className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 shadow-lg">

                  Register Now

                </button>

              </a>

            </div>

          </div>
        )}

      </motion.nav>

    </div>
  );
};

export default Navbar;