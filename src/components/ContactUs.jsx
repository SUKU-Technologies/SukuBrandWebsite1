import React from "react";
import { BsEnvelopeFill, BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const ContactUs = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
      className="bg-gradient-to-br from-[#012247] to-[#3f4c58] w-full px-4 py-8 sm:px-6 md:px-10 rounded-md shadow flex flex-col items-center text-center space-y-5"
    >
      {/* Heading */}
      <p className="text-lg sm:text-xl md:text-2xl font-medium text-white">
        Call Us Anytime
      </p>

      {/* Phone Number */}
      <span className="text-xl sm:text-2xl md:text-3xl font-bold text-white flex items-center gap-3">
        +233 24 256 4188
      </span>

      {/* Email */}
      <span className="text-base sm:text-lg md:text-xl text-white font-medium flex items-center gap-3">
        <BsEnvelopeFill className="text-blue-200" size={24} />
        info@sukutechnologies.com
      </span>

      {/* CTA Button */}
      <div className="relative group mt-4">
        <motion.button
          whileTap={{ scale: 0.95 }}
          className="relative w-full sm:w-auto px-6 py-3 sm:px-8 sm:py-3 text-sm sm:text-base text-white font-medium bg-[#2A8ADE] rounded-full overflow-hidden"
        >
          <span className="absolute inset-0 bg-blue-950 transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 ease-out z-0" />
          <Link
            to="/contact"
            className="relative z-10 flex items-center justify-center gap-2"
          >
            Contact Us <BsArrowRight />
          </Link>
        </motion.button>
      </div>
    </motion.div>
  );
};

export default ContactUs;
