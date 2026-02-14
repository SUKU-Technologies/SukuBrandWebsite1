import React from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import CrsImage from "../assets/CrsBanner.webp";
import CrsPrinciples from "../components/Crs/CrsPrinciples";
import CrsReport from "../components/Crs/CrsReport";
import { Link } from "react-router-dom";
import { Home } from "lucide-react";

const pageVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
  exit: {
    opacity: 0,
    y: 30,
    transition: {
      duration: 0.3,
      ease: "easeIn",
    },
  },
};

const CRS = () => {
  return (
    <>
      <Helmet>
        <title>Corporate Social Responsibility | CSR Initiatives | SuKu Technologies</title>
        <meta name="description" content="Discover SuKu Technologies' commitment to corporate social responsibility. Learn about our CSR principles, initiatives, and community impact in Ghana and beyond." />
        <meta name="keywords" content="corporate social responsibility, CSR, community impact, sustainability, Ghana, social initiatives" />
        <meta property="og:title" content="Corporate Social Responsibility | CSR Initiatives | SuKu Technologies" />
        <meta property="og:description" content="Discover our commitment to corporate social responsibility and community impact" />
        <meta property="og:url" content="https://www.sukutechnologies.com/csr" />
        <meta name="twitter:title" content="Corporate Social Responsibility | CSR Initiatives | SuKu Technologies" />
        <meta name="twitter:description" content="Discover our commitment to corporate social responsibility" />
      </Helmet>
      <motion.div
        className="w-full"
        variants={pageVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        {/* Banner Section */}
        <div className="relative w-full h-[300px] sm:h-[400px] md:h-[350px]">
          <img
            src={CrsImage}
            alt="About Banner"
            className="w-full h-full object-cover"
            loading="lazy"
          />

          {/* Overlay */}
          <div
            className="
      absolute inset-0 bg-blue-800/65 
      flex flex-col items-center justify-center 
      md:items-start 
      px-0 md:px-12 lg:px-20
    "
          >
            <h1 className="text-white  text-center text-3xl sm:text-4xl md:text-6xl font-bold">
              Corporate Social Responsibility (CSR)
            </h1>

            {/* Breadcrumb box */}
            <div className="inline-flex items-center gap-2 bg-black/50 border border-gray-400 px-4 py-2 rounded-md shadow-md mt-5">
              <Home size={16} className="text-blue-600" />

              <Link
                to="/"
                className="text-sm text-gray-200 hover:text-blue-700 transition-colors duration-200"
              >
                Home
              </Link>

              <span className="text-white">→</span>
              <span className="text-sm text-gray-300">CSR</span>
            </div>
          </div>
        </div>

      {/* ==== Description ==== */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-5xl mx-auto px-4 text-center py-10"
      >
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
          Beyond Profit: Our Commitment to Society
        </h2>
        <p className="text-gray-600 text-base font-medium md:text-lg leading-relaxed">
          At SUKU Technologies, we believe in making a positive impact in the
          communities where we work and live. We build a business that is not
          only profitable but contributes to the well-being of other communities
          and makes a lasting difference in the world.
        </p>
      </motion.div>

      {/* Content Section */}
      <CrsPrinciples />
      <CrsReport />
    </motion.div>
      </>
  );
};

export default CRS;
