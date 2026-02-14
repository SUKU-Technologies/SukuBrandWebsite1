import React from "react";
import { motion } from "framer-motion";

// Latest Google SVG logo (inline SVG for full control)
const GoogleLogo = () => (
  <svg
    width="30"
    height="30"
    viewBox="0 0 256 262"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill="#4285F4"
      d="M255.68 133.33c0-11.1-.93-19.2-2.93-27.6H130v52.14h70.44c-1.4 11.3-8.98 28.2-25.7 39.5l-.24 1.55 37.34 28.8 2.58.26c23.7-21.9 37.26-54.2 37.26-94.65z"
    />
    <path
      fill="#34A853"
      d="M130 261c33.7 0 62.1-11.1 82.8-30.15l-39.5-30.45c-10.6 7.4-25.02 12.6-43.34 12.6-33.3 0-61.5-21.96-71.6-52.3l-1.48.12-38.66 29.6-.5 1.44C37.9 229.88 80.4 261 130 261z"
    />
    <path
      fill="#FBBC05"
      d="M58.4 160.7c-2.56-7.6-4.02-15.7-4.02-24 0-8.3 1.46-16.4 3.86-24l-.06-1.62-39.1-30.4-1.3.64C9.5 98.82 0 118.45 0 138.8c0 20.4 9.5 39.9 25.8 57.5l32.6-25.6z"
    />
    <path
      fill="#EA4335"
      d="M130 51.8c23.3 0 39 10 47.9 18.3l35-34.5C192.1 13.2 163.7 0 130 0 80.4 0 37.9 31.1 25.8 81.3l33 25.6C68.5 73.75 96.7 51.8 130 51.8z"
    />
  </svg>
);

const RotatingCircle = () => {
  return (
    <div className="relative w-24 h-24 md:w-40 md:h-40
    ">
      {/* Blurred Outer Background */}
      <div className="absolute inset-0 backdrop-blur-sm bg-white/10 rounded-full z-0" />

      {/* Rotating Circular Text */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
        className="absolute inset-0 flex items-center justify-center"
      >
        <svg className="w-full h-full" viewBox="0 0 200 200">
          <defs>
            <path
              id="circlePath"
              d="M100,100 m-78,0 a 78,78 0 1,1 156,0 a 78,78 0 1,1 -156,0"
            />
          </defs>
          <text fill="white" fontSize="10" fontWeight="bold" letterSpacing="2">
            <textPath href="#circlePath" startOffset="0%">
              Certified Google Partner • Certified Google Partner • Certified
              Google Partner •
            </textPath>
          </text>
        </svg>
      </motion.div>

      {/* Inner White Circle with Google Logo */}
      <div className="absolute top-1/2 left-1/2 w-12 h-12 md:w-16 md:h-16 rounded-full bg-white flex items-center justify-center z-10 -translate-x-1/2 -translate-y-1/2 shadow-lg">
        <GoogleLogo />
      </div>
    </div>
  );
};

export default RotatingCircle;
