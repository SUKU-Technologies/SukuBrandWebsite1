import React from "react";
import { motion } from "framer-motion";
import experienceIcon from "../assets/feature-icon1.png";
import dedicatedmembersIcon from "../assets/feature-icon2.png";
import supportIcon from "../assets/feature-icon3.png";

const features = [
  {
    icon: experienceIcon,
    title: "9 Years of Proven Excellence",
    description:
      "Empowering brands with modern digital strategies and dependable execution since 2017",
  },
  {
    icon: dedicatedmembersIcon,
    title: "Dedicated Team",
    description:
      "A passionate, cross-functional team committed to driving your business goals with precision and agility.",
  },
  {
    icon: supportIcon,
    title: "Global Support",
    description:
      "24/7 expert support tailored to meet the needs of businesses operating in diverse global markets.",
  },
];

const Feature = () => {
  return (
    <div className="absolute left-1/2 -translate-x-1/2 top-[90vh] w-full z-30 px-4 md:px-20">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {features.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
            className="group relative bg-white text-center px-10 py-12 rounded-sm shadow-lg transition-all duration-300 flex flex-col items-center min-h-[320px] w-full overflow-hidden"
          >
            {/* Background hover slide-in effect */}
            <div className="absolute inset-0 bg-[#2A8ADE] z-0 transform scale-y-0 origin-top transition-transform duration-500 group-hover:scale-y-100" />

            {/* Content layered above the sliding background */}
            <div className="relative z-10 flex flex-col items-center">
              {/* Circular Icon */}
              <div className="w-20 h-20 rounded-full bg-blue-200/30 group-hover:bg-white transition duration-300 flex items-center justify-center mb-4 shadow-inner">
                <img
                  src={item.icon}
                  alt={item.title}
                  className="w-10 h-10 transition duration-300"
                  loading="lazy"
                />
              </div>

              <h3 className="text-xl font-semibold mt-2 mb-3 text-gray-800 group-hover:text-white transition">
                {item.title}
              </h3>

              <p className="text-gray-600 group-hover:text-white transition mb-6 leading-relaxed">
                {item.description}
              </p>

              {/* Read More + Dots */}
              <div className="relative flex flex-col items-center">
                {/* Dots shown on hover */}
                <div className="hidden group-hover:flex gap-2 mt-2">
                  <div className="w-2 h-2 rounded-full bg-white"></div>
                  <div className="w-2 h-2 rounded-full bg-white"></div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Feature;
