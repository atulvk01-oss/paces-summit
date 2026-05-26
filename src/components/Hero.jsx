import { motion } from "framer-motion";

import CountdownTimer from "./CountdownTimer";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-6">

      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/20 to-[#031826]"></div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">

        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >

          {/* Small Heading */}
          <p className="uppercase tracking-[6px] text-cyan-400 mb-4">
            Pulmonary & Critical Care Education Society
          </p>

          {/* Main Heading */}
          <h1 className="text-5xl lg:text-7xl font-black leading-tight mb-6 text-white">

            MP –
            <span className="gradient-text">
              {" "}PACES
            </span>

            <br />

            Summit 2026

          </h1>

          {/* Description */}
          <p className="text-gray-300 text-lg mb-8 leading-relaxed">

            India's prestigious pulmonology and critical care academic summit.
            Join eminent speakers and healthcare experts.

          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 mb-10">
            
            {/* Event Brochure */}
            <a
              href="/Event-Brochure.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="border border-cyan-500 text-white px-8 py-4 rounded-full hover:bg-cyan-500/20 transition-all duration-300 hover:scale-105">
                Download Brochure
              </button>
            </a>

          </div>

          {/* Event Details */}
          <div className="flex flex-wrap gap-6 text-sm text-gray-300">

            <div className="glass px-4 py-3 rounded-xl">
              📅 13th - 14th June 2026
            </div>

            <div className="glass px-4 py-3 rounded-xl">
              📍 Hotel Marriott, Indore
            </div>

          </div>

        </motion.div>

        {/* Countdown */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex justify-center"
        >

          <CountdownTimer />

        </motion.div>

      </div>

    </section>
  );
};

export default Hero;