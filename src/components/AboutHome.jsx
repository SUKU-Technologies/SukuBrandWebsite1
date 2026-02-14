import React from "react";
import { motion } from "framer-motion";
import aboutShapeIcon from "../assets/about-shape2.png";
import ladyImage from "../assets/Reliable Software Partner2.webp";
import { NavLink } from "react-router-dom";
import { BarLoader } from "react-spinners";

const AboutHome = () => {
  return (
    <div className="w-full min-h-screen bg-white">
      <div className="pt-[1150px] md:pt-[400px] px-6 md:px-20 pb-20">
        <div className="flex flex-col md:flex-row items-start justify-between gap-12">
          {/* Left Div (Image Section with Slide In) */}
          <motion.div
            className="w-full md:w-1/2 bg-gray-100 h-[400px]  bg-cover bg-center "
            style={{ backgroundImage: `url(${ladyImage})` }}
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
          ></motion.div>

          {/* Right Div (Text Content with Slide In) */}
          <motion.div
            className="w-full md:w-1/2"
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            {/* Header */}
            <motion.h3
              className="text-sm text-blue-600 font-semibold mb-2"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              viewport={{ once: true }}
            >
              About Suku Technologies
            </motion.h3>

            {/* Subheader */}
            <motion.h2
              className="text-2xl md:text-3xl font-bold text-gray-800 leading-snug mb-4"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              viewport={{ once: true }}
            >
              Your Flexible and Reliable Software Partner
            </motion.h2>

            {/* Paragraph */}
            <motion.p
              className="text-gray-600 text-sm md:text-base text-justify font-medium leading-relaxed mb-6"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              viewport={{ once: true }}
            >
              Suku Technologies is a leading technology solutions provider
              specializing in software development, digital transformation, and
              brand visibility. Our mission is to empower businesses by
              leveraging cutting-edge technology to optimize operations, enhance
              customer experiences, and drive growth.
            </motion.p>
           

            <div className="w-full md:w-[550px] mx-auto">
              <BarLoader width={"100%"} height={2} color="#4b4bf7" />
            </div>

            {/* Core Values Section */}
            <motion.div
              className="text-center my-12"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <p className="text-sm md:text-base text-gray-600 font-medium">
                At SUKU, our unwavering foundation is built on Excellence,
                Leadership, and Integrity—core values that guide us consistently
                in an ever-evolving business landscape.
              </p>
            </motion.div>

            {/* CTA Section */}
            <motion.div
              className="flex items-center gap-10"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              viewport={{ once: true }}
            >
              {/* Button with hover effect */}
              <div className="relative group">
                <NavLink to="/about">
                  <motion.button
                    whileTap={{ scale: 0.95 }}
                    className="relative px-7 py-3 text-white font-medium bg-[#2A8ADE] rounded-full overflow-hidden cursor-pointer flex items-center gap-2"
                  >
                    <span className="absolute inset-0 bg-[#032040] transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 ease-out z-0"></span>
                    <span className="relative z-10 flex items-center gap-2">
                      Read More
                    </span>
                  </motion.button>
                </NavLink>
              </div>

              {/* Swinging Shape Icon */}
              <motion.img
                src={aboutShapeIcon}
                alt="Swing Shape"
                className="w-18 h-12"
                loading="lazy"
                style={{ transformOrigin: "bottom center" }}
                animate={{ rotate: [-8, 8, -8], y: [0, -2, 0] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AboutHome;
