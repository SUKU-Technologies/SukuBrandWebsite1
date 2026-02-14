import React from "react";
import { Home } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import bgImage from "../../assets/contact-bg.webp";

const ContactHeader = () => {
  return (
    <motion.div
      className="relative w-full h-[300px] sm:h-[400px] md:h-[300px] text-white"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* Background image */}
      <img
        src={bgImage}
        alt="Contact banner"
        className="w-full h-full object-cover"
        loading="lazy"
      />

      {/* Overlay */}
      <div
        className="
      absolute inset-0 bg-blue-800/35 
      flex flex-col items-center justify-center 
      md:items-start 
      px-0 md:px-12 lg:px-20
    "
      >
        <h1 className="text-white text-3xl sm:text-4xl md:text-6xl font-bold">
          Contact Us
        </h1>

        {/* Breadcrumbs */}
        <div className="inline-flex items-center gap-2 bg-black/40 border border-gray-400 px-4 py-2 rounded-md shadow-md w-fit mt-6">
          <Home size={16} className="text-blue-600" />
          <Link
            to="/"
            className="text-sm text-gray-200 hover:text-blue-700 transition-colors duration-200"
          >
            Home
          </Link>
          <span className="text-white">→</span>
          <span className="text-sm text-gray-300">Contact Us</span>
        </div>
      </div>
    </motion.div>
  );
};

export default ContactHeader;
