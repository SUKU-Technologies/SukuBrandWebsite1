import React from "react";
import consultImage from "../../assets/consult.jpg";
import { motion } from "framer-motion";

const AnalysisAndConsult = () => {
  return (
    <div className="w-full bg-[#f9f9f9]  py-16 px-4 md:px-10 lg:px-20">
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-10">
        {/* Text Content */}
        <motion.div
          className="w-full md:w-1/2"
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-[#032040] mb-4">
            Analysis & Consultation
          </h2>
          <p className="text-gray-700 font-medium mb-6 leading-relaxed">
            We begin your transformation journey with a comprehensive digital
            analysis and strategic consultation. Our experts identify gaps,
            assess opportunities, and design actionable plans tailored to your
            business needs.
          </p>
          <motion.button
            whileTap={{ scale: 0.95 }}
            className="relative px-7 py-3 text-white font-medium bg-[#2A8ADE] rounded-sm overflow-hidden cursor-pointer group flex items-center gap-3"
          >
            <span className="absolute inset-0 bg-[#032040] transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 ease-out z-0"></span>
            <span className="relative z-10">Talk to Us</span>
          </motion.button>
        </motion.div>

        {/* Image */}
        <motion.div
          className="w-full md:w-1/2"
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
        >
          <img
            src={consultImage}
            alt="Consultation"
            className="w-full h-auto rounded-xl shadow-lg object-cover"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default AnalysisAndConsult;
