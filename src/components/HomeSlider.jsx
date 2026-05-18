import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative w-full h-screen overflow-hidden"
    >

      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        loop={true}
        className="h-screen"
      >

        {/* ====================== Slide 1 ====================== */}
        <SwiperSlide>

          <div className="relative w-full h-screen overflow-hidden">

            {/* Background Image */}
            <img
              src="/slider/slide1.jpeg"
              alt="PACES Summit"
              className="w-full h-full object-cover scale-100 brightness-125 contrast-110 saturate-125"
            />

            {/* Very Light Overlay */}
            <div className="absolute inset-0 bg-black/15"></div>

            {/* Soft Glow Effect */}
            <div className="absolute inset-0 bg-cyan-400/5"></div>

          </div>

        </SwiperSlide>

        {/* ====================== Slide 2 ====================== */}
        <SwiperSlide>

          <div className="relative w-full h-screen overflow-hidden">

            {/* Background Image */}
            <img
              src="/slider/slider2.png"
              alt="Medical Conference"
              className="w-full h-full object-cover"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/30"></div>

            {/* Content */}
            <div className="absolute inset-0 flex items-center justify-center text-center text-white px-6">

              <motion.div
                initial={{ opacity: 0, y: 80 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
              >

                <h2 className="text-5xl lg:text-7xl font-black mb-8">
                  Eminent National Speakers
                </h2>

                <p className="text-xl max-w-3xl mx-auto leading-10 text-gray-200">
                  Join renowned pulmonologists and healthcare experts
                  from across India for insightful discussions and innovation.
                </p>

              </motion.div>

            </div>

          </div>

        </SwiperSlide>

      </Swiper>

    </section>
  );
};

export default Hero;