import React from "react";
import { motion } from "framer-motion";
import {
  FaArrowRight,
  FaNetworkWired,
  FaCode,
  FaChartLine,
  FaChevronRight,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const services = [
  {
    id: "01",
    title: "Digital Transformation & AI Evolution",
    description:
      "Strategic modernization and workforce readiness — we help you plan and adopt the systems that keep you competitive.",
    icon: <FaNetworkWired className="text-blue-800 text-3xl" />,
    link: "/digital-transformation",
    subsections: [
      "Analysis and Consulting",
      "Digital Strategy Development",
      "Google Workspace Implementation & Migration",
      "AI Transition & Reskilling Programs",
    ],
  },
  {
    id: "02",
    title: "TECHNOLOGY",
    description:
      "Bespoke engineering and dependable upkeep — we build your systems, then keep them running at peak performance.",
    icon: <FaCode className="text-blue-800 text-3xl" />,
    link: "/software-solutions",
    subsections: [
      "Custom Software Development",
      "Web & Mobile Application Development",
      "Workspace Security, Compliance & Governance",
      "Maintenance & Support Services",
    ],
  },
  {
    id: "03",
    title: "PLATFORMS",
    description:
      "Brand authority and technical reach — we put you in front of the right audience and keep you there.",
    icon: <FaChartLine className="text-blue-800 text-3xl" />,
    link: "/digital-visibility",
    subsections: [
      "AI-Enhanced SEO (Search Engine Optimization)",
      "Intelligent Social Media Marketing",
      "Website Design & Development",
      "Domain & Web Hosting Services",
    ],
  },
  {
    id: "04",
    title: "Digital Trust Solutions",
    description:
      "Verification infrastructure for the continent — we authenticate the businesses, professionals, and talent you do business with.",
    icon: <FaCode className="text-blue-800 text-3xl" />,
    link: "/digital-trust",
    subsections: [
      "Trust Infrastructure Deployment",
      "Kadodo Africa Verification Platform",
      "Verified Professional Passports",
    ],
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
  }),
};

const ServicesHome = () => {
  return (
    <div className="bg-[#032040] min-h-screen text-white py-16 px-10">
      {/* Heading */}
      <div className="text-center max-w-2xl mx-auto mb-16">
        <h2 className="text-sm font-semibold text-[#2A8ADE]">
          What We Offer
        </h2>
        <p className="text-2xl md:text-3xl leading-11 font-bold mt-3">
          Solutions Built for Growth, Trust, and Scale 
        </p>
      </div>

      {/* Service Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <motion.div
            key={index}
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={cardVariants}
            className="group relative overflow-hidden bg-gray-100 p-7 min-h-[480px] rounded-lg shadow-lg flex flex-col items-start transition duration-300"
          >
            {/* Background Hover Layer */}
            <div className="absolute inset-0 bg-blue-800 w-0 group-hover:w-full max-sm:w-full transition-all duration-500 ease-in-out z-0"></div>

            {/* Icon */}
            <div className="flex items-center mb-4 relative z-10 bg-white group-hover:bg-blue-200 max-sm:bg-blue-200 p-4 rounded-full">
              {service.icon}
            </div>

            {/* ID Number */}
            <p className="transition-all duration-300 group-hover:bg-[#032040] group-hover:text-white max-sm:bg-[#032040] max-sm:text-white bg-blue-200 text-blue-900 font-semibold px-4 py-2 text-2xl absolute -right-4 rounded-l-full z-10">
              {service.id}
            </p>

            {/* Title */}
            <h3 className="text-xl text-black font-bold leading-8 mb-2 transition-all duration-300 group-hover:text-white max-sm:text-white relative z-10">
              {service.title}
            </h3>

            {/* Description */}
            <p className="text-sm leading-6 text-gray-600 font-medium transition-all duration-300 group-hover:text-gray-200 max-sm:text-gray-200 relative z-10 mb-4">
              {service.description}
            </p>

            {/* Subsections */}
            <ul className="relative z-10 mt-4 space-y-3">
              {service.subsections.map((item, i) => (
                <Link
                  to={`${service.link}#${item
                    .replace(/\s+/g, "-")
                    .toLowerCase()}`}
                  key={i}
                  className="flex items-start gap-3 text-sm font-medium text-gray-700 group-hover:text-gray-200 max-sm:text-gray-200 transition-all duration-300 hover:text-blue-200 cursor-pointer hover:font-bold uppercase"
                >
                  <FaChevronRight className="text-blue-500 mt-1 text-xs group-hover:translate-x-1 transition duration-300" />
                  <span>{item}</span>
                </Link>
              ))}
            </ul>

            {/* Read More with Link */}
            <div className="mt-4 relative z-10 overflow-visible">
              <Link to={service.link}>
                <motion.div
                  initial={{ x: -20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.4 }}
                  className="flex items-center gap-2 text-sm text-blue-600 font-semibold translate-x-0 opacity-100 group-hover:text-white group-hover:translate-x-0 group-hover:opacity-100 max-sm:translate-x-0 max-sm:opacity-100 transition-all duration-300"
                >
                  <span>Read More</span>
                  <FaArrowRight className="text-blue-600 group-hover:text-white text-sm transition-colors duration-300" />
                </motion.div>
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ServicesHome;
