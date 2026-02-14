import React from "react";
import { motion } from "framer-motion";
import contactImage from "../assets/contactUs.webp";
import { Link } from "react-router-dom";

const ContactBanner = () => {
  return (
    <div className="relative w-full h-[45vh] md:h-[60vh] lg:h-[70vh] mt-10">
      {/* Background Image */}
      <img
        src={contactImage}
        alt="Contact Suku Technologies"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-blue-950/40 z-10"></div>

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full px-4 sm:px-6 text-center text-white">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="w-full max-w-screen-xl mx-auto px-4 mb-4 text-balance text-[24px] sm:text-3xl md:text-5xl lg:text-6xl font-bold text-white text-center leading-tight"
        >
          Together, We Build Better Business
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          className="text-sm sm:text-base text-gray-200 max-w-[90%] sm:max-w-xl mb-4"
        >
          Discover tailored digital solutions — from branding to cloud.
        </motion.p>

        {/* CTA Button */}
        <motion.div
          className="relative group"
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Link to="/contact">
            <motion.button
              whileTap={{ scale: 0.95 }}
              className="relative px-6 sm:px-7 py-2.5 sm:py-3 text-sm sm:text-base text-white font-medium bg-[#2A8ADE] rounded-full overflow-hidden cursor-pointer "
            >
              <span className="absolute inset-0 bg-[#032040] transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 ease-out z-0"></span>
              <span className="relative z-10">Contact Us</span>
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactBanner;
