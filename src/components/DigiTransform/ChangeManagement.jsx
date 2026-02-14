import React from "react";
import { motion } from "framer-motion";

const ChangeManagement = () => {
  return (
    <section className="relative bg-gradient-to-br from-white via-blue-50 to-white py-20 px-4 md:px-10 overflow-hidden">
      {/* Optional Decorative Background Element */}
      <div className="absolute -top-20 -left-40 w-[150%] h-[300px] bg-blue-100 rounded-[50%] opacity-20 blur-2xl rotate-3 pointer-events-none z-0"></div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.h2
          className="text-4xl md:text-4xl font-bold text-[#032040] mb-6"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Change Management
        </motion.h2>

        <motion.p
          className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          viewport={{ once: true }}
        >
          We empower your organization to navigate change confidently. Our
          consultants develop people-first strategies, helping you manage
          transition, reduce resistance, and unlock long-term value.
        </motion.p>

        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <button className="bg-blue-700 text-white px-8 py-3 rounded-full shadow-md hover:bg-blue-800 transition-all duration-300">
            Start Transformation
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default ChangeManagement;
