import React from "react";
import { motion } from "framer-motion";
import {
  FaGraduationCap,
  FaUniversity,
  FaRobot,
  FaLeaf,
  FaLock,
  FaUniversalAccess,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const principles = [
  {
    title: "Learning and Development",
    description:
      "We bridge the gap between theory and practice by offering learning paths to aspiring IT professionals—from senior high internships to university placements and bootcamp training.",
    icon: (
      <FaGraduationCap className="text-4xl text-[#2A8ADE]" />
    ),
  },
  {
    title: "University & Industry Collaboration",
    description:
      "We partner with universities to offer early internships, co-create curricula, and engage in training programs that align academic knowledge with real-world tech demands.",
    icon: <FaUniversity className="text-4xl text-[#2A8ADE]" />,
  },
  {
    title: "Ethical AI & Transparency",
    description:
      "We uphold fairness, accountability, and transparency in AI development by following strict ethical standards and responsible practices in all our innovations.",
    icon: <FaRobot className="text-4xl text-[#2A8ADE]" />,
  },
  {
    title: "Environmental Sustainability",
    description:
      "We reduce our digital footprint through eco-friendly operations, promote sustainable technology use, and actively support environmental awareness initiatives.",
    icon: <FaLeaf className="text-4xl text-[#2A8ADE]" />,
  },
  {
    title: "Data Privacy & Security",
    description:
      "We safeguard sensitive data with advanced security protocols, ensuring client and user information is protected against breaches and cyber threats.",
    icon: <FaLock className="text-4xl text-[#2A8ADE]" />,
  },
  {
    title: "Digital Inclusion & Accessibility",
    description:
      "We build inclusive solutions that ensure access to technology for all users—regardless of ability or background—while advocating for accessibility industry-wide.",
    icon: <FaUniversalAccess className="text-4xl text-[#2A8ADE]" />,
  },
];


const CrsPrinciples = () => {
  return (
    <section className="max-w-6xl mx-auto px-4 py-16 space-y-16">
      {/* Top Section */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-6">
        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.4 }}
          className="hidden md:block relative group"
        >
          <Link to='/contact'>
          <motion.button
            whileTap={{ scale: 0.95 }}
            className="relative px-7 py-3 text-white font-medium bg-[#2A8ADE] rounded-full overflow-hidden cursor-pointer"
            >
            <span className="absolute inset-0 bg-[#032040] transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 ease-out z-0"></span>
            <span className="relative z-10">Join Us</span>
          </motion.button>
            </Link>
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
          className="text-3xl md:text-4xl font-bold text-gray-800 text-right"
        >
          Our CSR Principles
        </motion.h2>
      </div>

      {/* Principle Cards */}
      <div className="grid md:grid-cols-3 gap-10">
        {principles.map((item, index) => (
          <motion.div
            key={index}
            whileHover={{ y: -4 }}
            className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:bg-blue-100/40"
          >
            <div className="flex flex-col items-center space-y-4 text-center">
              {item.icon}
              <h3 className="text-xl font-semibold text-gray-800">
                {item.title}
              </h3>
              <p className="text-gray-600 text-base font-medium leading-relaxed">
                {item.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default CrsPrinciples;
