import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import heroImage from "../assets/Artboard 2.webp";
import heroImage2 from "../assets/Artboard 3.webp";
import { FiArrowRight } from "react-icons/fi";
import RotatingCircle from "./RotatingCircle";
import { NavLink } from "react-router-dom";

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(heroImage);

  useEffect(() => {
    const images = [heroImage, heroImage2];
    let index = 0;

    const interval = setInterval(() => {
      index = (index + 1) % images.length;
      setCurrentImage(images[index]);
    }, 4000); // changes every 4 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="h-screen bg-cover bg-center relative flex items-center justify-center px-4 md:px-16 transition-all duration-1000 ease-in-out"
      style={{ backgroundImage: `url(${currentImage})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 z-0" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 items-center gap-10">
        {/* Left Side - Text Content */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-white space-y-5"
        >
          <h2 className="text-sm uppercase tracking-widest text-[#2A8ADE] font-semibold">
            Empowering Businesses Worldwide
          </h2>
          <h1 className="text-4xl text-center md:text-left md:text-5xl font-bold leading-tight mr-3">
            Powering Growth with Smart IT Solutions
          </h1>
          <p className="text-lg text-gray-200 max-w-lg text-justify">
            We partner with forward-thinking brands across the globe to deliver
            technology-driven solutions that spark growth, boost efficiency, and
            future-proof businesses in the digital era.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col items-center md:flex-row gap-4 mt-6">
            {/* Let's Talk Button */}
            <NavLink to="/contact">
              <motion.button
                whileTap={{ scale: 0.95 }}
                className="relative px-7 py-3 text-white font-medium bg-[#2A8ADE] rounded-full overflow-hidden cursor-pointer group flex items-center gap-3"
              >
                <span className="absolute inset-0 bg-[#032040] transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 ease-out z-0"></span>
                <span className="relative z-10">Let's Talk</span>
                <span className="relative z-10 w-6 h-6 flex items-center justify-center border border-white rounded-full overflow-hidden">
                  <motion.span
                    variants={{
                      initial: { rotate: 0 },
                      hover: { rotate: -90 },
                    }}
                    initial="initial"
                    whileHover="hover"
                    className="group-hover:rotate-[-90deg] transition-transform duration-300 ease-out"
                  >
                    <FiArrowRight className="text-white text-sm" />
                  </motion.span>
                </span>
              </motion.button>
            </NavLink>

            {/* Read More Button */}
            <NavLink to="/digital-transformation">
              <motion.button
                whileTap={{ scale: 0.95 }}
                className="relative px-7 py-3 text-white font-medium bg-[#2A8ADE] rounded-full overflow-hidden cursor-pointer group flex items-center gap-3"
              >
                <span className="absolute inset-0 bg-[#032040] transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 ease-out z-0"></span>
                <span className="relative z-10">Our Services</span>
                <span className="relative z-10 w-6 h-6 flex items-center justify-center border border-white rounded-full overflow-hidden">
                  <motion.span
                    variants={{
                      initial: { rotate: 0 },
                      hover: { rotate: -90 },
                    }}
                    initial="initial"
                    whileHover="hover"
                    className="group-hover:rotate-[-90deg] transition-transform duration-300 ease-out"
                  >
                    <FiArrowRight className="text-white text-sm" />
                  </motion.span>
                </span>
              </motion.button>
            </NavLink>
          </div>
        </motion.div>

        {/* Right Side - Rotating Circle with Image */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
          className="relative w-full flex flex-row items-center justify-center gap-6"
        >
          <div className="absolute z-10 hidden md:block">
            <RotatingCircle />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
