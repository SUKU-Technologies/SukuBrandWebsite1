import React from "react";
import { motion } from "framer-motion";
import arrowDown from "../assets/porcess-shape1.png";
import arrowUp from "../assets/porcess-shape2.png";
import planning1 from "../assets/planning.webp";
import planning2 from "../assets/planning2.webp";
import planning3 from "../assets/planning3.webp";

const steps = [
  {
    number: 1,
    label: "Start A Project",
    description:
      "Initiate your tech journey with a clear roadmap. We collaborate to define your goals, gather requirements, and lay the foundation for a successful solution.",
    icon: planning1,
  },
  {
    number: 2,
    label: "Project Analysis",
    description:
      "Our experts conduct an in-depth technical analysis, evaluate system requirements, and design scalable solutions tailored to your business needs.",
    icon: planning2,
  },
  {
    number: 3,
    label: "Deliver to Success",
    description:
      "We implement, test, and launch your project with precision—ensuring quality, performance, and a smooth transition from concept to deployment.",
    icon: planning3,
  },
];

// Animation variants
const cardVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      delay: i * 0.3,
      ease: "easeOut",
    },
  }),
};

const HowWeWork = () => {
  return (
    <div className="w-full min-h-screen bg-[#032040] text-white py-16 px-4 flex flex-col items-center">
      {/* Header */}
      <div className="text-center mb-14">
        <h2 className="text-sm font-bold text-[#2A8ADE] mb-4">
          Working Process
        </h2>
        <p className="text-3xl font-bold">We Follow the Easy Working Steps</p>
      </div>

      {/* Steps */}
      <div className="relative flex flex-wrap justify-center gap-16 md:gap-28">
        {steps.map((step, index) => (
          <motion.div
            key={step.number}
            custom={index}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="flex flex-col items-center relative"
          >
            {/* Image Circle */}
            <div className="relative w-64 h-64 flex items-center justify-center">
              {/* Rotating Dashed Circle */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{
                  repeat: Infinity,
                  duration: 12 + index * 2,
                  ease: "linear",
                }}
                className="absolute w-64 h-64 border-4 border-dashed border-blue-700 rounded-full flex items-center justify-center"
              />

              {/* Static Inner Image (Zoom on Hover) */}
              <motion.div
                whileHover={{ scale: 1.08 }}
                transition={{ duration: 0.4 }}
                className="absolute w-[90%] h-[90%] rounded-full overflow-hidden z-10"
              >
                <img
                  src={step.icon}
                  alt={`Step ${step.number}`}
                  className="w-full h-full object-cover rounded-full"
                  loading="lazy"
                />
              </motion.div>
            </div>

            {/* Number Badge */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3 + index * 0.2, duration: 0.4 }}
              className="absolute -top-4 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center z-10"
            >
              {step.number}
            </motion.div>

            {/* Label */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + index * 0.2, duration: 0.5 }}
              className="mt-6 text-2xl font-semibold text-center"
            >
              {step.label}
            </motion.p>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + index * 0.2, duration: 0.5 }}
              className="mt-2 text-sm leading-6 text-gray-300 text-center max-w-xs"
            >
              {step.description}
            </motion.p>

            {/* Arrow */}
            {index === 0 && (
              <img
                src={arrowDown}
                alt="Arrow Down"
                className="absolute top-32 -right-36 w-44 h-6 hidden md:block"
              />
            )}
            {index === 1 && (
              <img
                src={arrowUp}
                alt="Arrow Up"
                className="absolute top-32 -right-36 w-44 h-6 hidden md:block"
              />
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default HowWeWork;
