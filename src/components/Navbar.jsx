import { motion } from "framer-motion";

import logo from "../assets/logos/paces-logo1.png";

const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 w-full z-50">

      {/* Top Contact Bar */}
      <div className="bg-stone-100 text-red-900">

        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-2 text-sm">

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
        className="bg-white backdrop-blur-md border-b border-cyan-100 shadow-lg"
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
              className="h-16 w-auto object-contain"
            />

            <h1 className="text-2xl font-bold gradient-text">
              MP – PACES Summit 2026
            </h1>

          </a>

          {/* Nav Links */}
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
              className="hover:text-cyan-400 transition duration-300"
            >
              Contact Us
            </a>
          
            

          </div>

          {/* Register Button */}
          <a href="#register">

            <button className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 shadow-lg">

              Register Now

            </button>

          </a>

        </div>

      </motion.nav>

    </div>
  );
};

export default Navbar;