import React, { useEffect, useState,useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import googlePartner from "../assets/google-partner.webp";
import mbcPartner from "../assets/MBC.webp";
import audraPartner from "../assets/audra-partner.webp";
import cbiPartners from "../assets/CBI.webp";
import itcPartners from "../assets/ITC.webp";

const partnerLogos = [
  googlePartner,
  mbcPartner,
  audraPartner,
  cbiPartners,
  itcPartners,
];

// Fade-in animation variant
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay, duration: 0.8, ease: "easeOut" },
  }),
};

// Custom counter component
const AnimatedCounter = ({ value }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  // Extract pure number and suffix (e.g. 10K+ -> 10 + "K+")
  const match = value.match(/^(\d+)([^\d]*)$/);
  const target = match ? parseInt(match[1], 10) : 0;
  const suffix = match ? match[2] : "";

  useEffect(() => {
    if (inView) {
      let start = 0;
      const duration = 1000;
      const stepTime = 16;
      const increment = target / (duration / stepTime);

      const interval = setInterval(() => {
        start += increment;
        if (start >= target) {
          setCount(target);
          clearInterval(interval);
        } else {
          setCount(Math.floor(start));
        }
      }, stepTime);

      return () => clearInterval(interval);
    }
  }, [inView, target]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
};

const PartnerText = () => {
  return (
    <div className="w-full py-16 px-6 md:px-20 bg-white overflow-hidden">
      {/* Text + Stats Section */}
      <motion.div
        className="flex flex-col md:flex-row justify-between items-start gap-10 mb-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* Text Block */}
        <motion.div className="flex-1 space-y-6" variants={fadeIn}>
          <h2 className="text-[#2A8ADE] text-sm font-bold tracking-wide">
            Trusted by Global Brands
          </h2>

          <motion.div
            className="bg-[#F3F8FF] p-6 shadow-md rounded"
            variants={fadeIn}
            custom={0.2}
          >
            <p className="text-[#032040] text-xl md:text-2xl font-semibold leading-relaxed">
              We are in strategic partnership with world-renowned tech
              organizations including Google, Odoo, MBC and more.
            </p>
          </motion.div>

          <motion.div
            className="bg-[#E7F0FB] p-6 shadow-md rounded"
            variants={fadeIn}
            custom={0.4}
          >
            <p className="text-[#032040] text-lg md:text-xl font-medium">
              Our services are designed for the international market — helping
              businesses thrive with robust and scalable tech solutions.
            </p>
          </motion.div>
        </motion.div>

        {/* Stats Cards */}
        <motion.div
          className="flex-1 grid grid-cols-2 gap-6"
          variants={fadeIn}
          custom={0.6}
        >
          {[
            { value: "5000+", label: "Happy Customers" },
            { value: "500+", label: "Projects Delivered" },
            { value: "32", label: "Expert Team Members" },
            { value: "100%", label: "Client Satisfaction" },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              className="text-center bg-[#F3F8FF] p-6 rounded shadow-sm"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 150 }}
            >
              <h3 className="text-3xl font-bold text-[#2A8ADE]">
                <AnimatedCounter value={item.value} />
              </h3>
              <p className="text-[#032040] mt-1 text-sm uppercase">
                {item.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Infinite Partner Carousel */}
      <motion.div
        className="overflow-hidden relative py-6 bg-[#F9FBFF]"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <motion.div
          className="flex gap-16 items-center w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
        >
          {[...partnerLogos, ...partnerLogos].map((logo, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-40 h-24 flex items-center justify-center"
            >
              <img
                src={logo}
                alt={`partner-${index}`}
                className="h-full w-full object-contain grayscale hover:grayscale-0 transition duration-300"
                loading="lazy"
              />
            </div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default PartnerText;
