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
    title: "Digital Transformation Solutions",
    description:
      "We offer tailored analysis, strategy development, and IT upgrades and advanced analytics implementation to enhance efficiency and drive growth.",
    icon: <FaNetworkWired className="text-blue-800 text-3xl" />,
    link: "/digital-transformation",
    subsections: [
      "Analysis and Consulting",
      "Digital Strategy Development",
      "Change Management & Training",
      "Scaling and Support",
    ],
  },
  {
    id: "02",
    title: "Software Solutions",
    description:
      "We design and develop bespoke software solutions and also provide ongoing technical support, regular updates, and bug fixes to ensure software reliability and peak performance.",
    icon: <FaCode className="text-blue-800 text-3xl" />,
    link: "/software-solutions",
    subsections: [
      "Custom Software Development",
      "Web & Mobile Application Development",
      "Maintenance & Support Services",
    ],
  },
  {
    id: "03",
    title: "Digital Visibility Services",
    description:
      "We design and develop professional, user-friendly websites that effectively represent your brand online, optimize them to rank higher on search engines with secure and reliable hosting solutions.",
    icon: <FaChartLine className="text-blue-800 text-3xl" />,
    link: "/digital-visibility",
    subsections: [
      "SEO (Search Engine Optimization)",
      "Social Media Marketing",
      "Website Design, Development & Maintenance",
      "Domain & Web Hosting Services",
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
          Our IT Services For Business
        </h2>
        <p className="text-2xl md:text-3xl leading-11 font-bold mt-3">
          Ensuring Your Success Trusted <br /> IT Services Source
        </p>
      </div>

      {/* Service Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
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
            <div className="mt-4 relative z-10 overflow-hidden">
              <Link to={service.link}>
                <motion.div
                  initial={{ x: -20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.4 }}
                  className="flex items-center gap-2 text-sm text-white translate-x-[-20px] opacity-0 group-hover:translate-x-0 group-hover:opacity-100 max-sm:translate-x-0 max-sm:opacity-100 transition-all duration-500"
                >
                  <span>Read More</span>
                  <FaArrowRight className="text-blue-900 group-hover:text-white text-sm" />
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
