import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { Helmet } from "react-helmet-async";
import {
  ArrowRight,
  FolderOpen,
  Home,
  Shield,
  Fingerprint,
  ExternalLink,
} from "lucide-react";

// TODO: Replace these with your own images for the Digital Trust page
import bannerImage from "../assets/digital trust.webp";
import serviceImg1 from "../assets/Trust Infrastructure Deployment.webp";
import serviceImg2 from "../assets/Verified Professional Passports.webp";
import kadodoLogo from "../assets/kadodo.png";

import ContactUs from "../components/ContactUs";
import { Link, useLocation } from "react-router-dom";

const services = [
  "Trust Infrastructure Deployment",
  "Verified Professional Passports",
];

const serviceDetails = {
  "Trust Infrastructure Deployment": {
    description: `We design and deploy custom, proprietary trust platforms for organizations that need institutional-grade verification of their own — not a shared marketplace, but infrastructure built and branded for them. Whether you're a financial institution vetting borrowers, a marketplace verifying sellers, or a government body authenticating credentials, we build the "verification-as-a-service" backbone your organization needs to operate with confidence at scale.

Drawing on the architecture behind Kadodo Africa — the same systems verifying businesses across Ghana today, we adapt proven trust infrastructure to your specific use case, compliance requirements, and user base. This isn't off-the-shelf software; it's institutional-grade trust architecture, built for organizations where getting verification wrong isn't an option.`,
    image: serviceImg1,
    features: [
      {
        icon: Shield,
        title: "Custom Trust Architecture",
        desc: "Proprietary verification platforms built for your organization, not shared infrastructure.",
      },
      {
        icon: Fingerprint,
        title: "Proven Foundation",
        desc: "Built on the same systems powering Kadodo Africa's verification network.",
      },
    ],
    benefits: [
      "Institutional-grade trust, built for your exact use case",
      "Reduced fraud and identity risk across your platform",
      "Verification infrastructure that scales as you grow",
    ],
  },

  "Verified Professional Passports": {
    description: `Hiring across borders means hiring on trust — and in markets where credential fraud is common, that trust is hard to earn. Our Verified Professional Passports authenticate the credentials, identity, and skill sets of tech talent, giving employers a reliable way to confirm competency before they hire, not after.

Each Professional Passport consolidates a verified record of a candidate's qualifications, work history, and identity into a single trusted profile — reducing hiring friction, eliminating identity fraud in talent sourcing, and giving skilled professionals a credential that travels with them across employers and borders.`,
    image: serviceImg2,
    features: [
      {
        icon: Fingerprint,
        title: "Verified Credentials",
        desc: "Identity, qualifications, and work history authenticated, not self-reported.",
      },
      {
        icon: Shield,
        title: "Portable Trust",
        desc: "One verified profile candidates can carry across employers and markets.",
      },
    ],
    benefits: [
      "Eliminate identity and credential fraud in hiring",
      "Faster, lower-risk talent sourcing",
      "A trusted credential that benefits both employer and professional",
    ],
  },
};

const DigitalTrust = () => {
  const [activeService, setActiveService] = useState(services[0]);

  const descRef = useRef(null);
  const contentRef = useRef(null);
  const iconsRef = useRef(null);
  const benefitsRef = useRef(null);

  const isDescInView = useInView(descRef, { once: true });
  const isContentInView = useInView(contentRef, { once: true });
  const isIconsInView = useInView(iconsRef, { once: true });
  const isBenefitsInView = useInView(benefitsRef, { once: true });

  const location = useLocation();

  useEffect(() => {
    const hash = location.hash;

    if (hash) {
      const sectionFromHash = hash
        .replace("#", "")
        .replace(/-/g, " ")
        .toLowerCase();

      const matchedService = services.find(
        (service) => service.toLowerCase() === sectionFromHash
      );

      if (matchedService) {
        setActiveService(matchedService);

        const el = document.getElementById(hash.replace("#", ""));
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      }
    }
  }, [location]);

  const current = serviceDetails[activeService];

  return (
    <>
      <Helmet>
        <title>Digital Trust Solutions | SuKu Technologies</title>
        <meta name="description" content="Digital trust solutions from SuKu Technologies. Our services include trust infrastructure deployment and verified professional passports to help you do business with confidence." />
        <meta name="keywords" content="digital trust, verification, trust infrastructure, professional passports, authentication, Ghana, Kadodo Africa" />
        <meta property="og:title" content="Digital Trust Solutions | SuKu Technologies" />
        <meta property="og:description" content="Authenticate businesses, professionals, and platforms with confidence" />
        <meta property="og:url" content="https://www.sukutechnologies.com/digital-trust" />
        <meta name="twitter:title" content="Digital Trust Solutions | SuKu Technologies" />
        <meta name="twitter:description" content="Authenticate businesses, professionals, and platforms with confidence" />
      </Helmet>
      <div className="w-full min-h-screen">
        {/* ==== Header Section ==== */}
        <div className="relative w-full h-[350px] overflow-hidden">
          {/* TODO: Replace banner image — currently using CBI.webp as placeholder */}
          <img
            src={bannerImage}
            alt="Digital Trust Solutions"
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div
            className="
              absolute inset-0 bg-blue-800/65
              flex flex-col items-center justify-center
              md:items-start
              px-4 md:px-12 lg:px-20
            "
          >
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-white text-center md:text-left text-3xl sm:text-4xl md:text-6xl font-bold mb-4"
            >
              Digital Trust Solutions
            </motion.h1>

            {/* Breadcrumb box */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="inline-flex items-center gap-2 bg-black/50 border border-gray-400 px-4 py-2 rounded-md shadow-md"
            >
              <Home size={16} className="text-blue-600" />

              <Link
                to="/"
                className="text-sm text-gray-200 hover:text-blue-700 transition-colors duration-200"
              >
                Home
              </Link>
              <span className="text-white">→</span>
              <span className="text-sm text-gray-300">Service</span>
              <span className="text-white">→</span>
              <span className="text-sm text-gray-300">
                Digital Trust Solutions
              </span>
            </motion.div>
          </div>
        </div>

        {/* ==== Description Section ==== */}
        <motion.div
          ref={descRef}
          initial={{ opacity: 0, y: 40 }}
          animate={isDescInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto px-4 text-center py-10"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
            Building the Infrastructure of Trust
          </h2>
          <p className="text-gray-600 text-base font-medium md:text-lg leading-relaxed">
            In markets where verification is scarce and fraud is costly, trust
            is a competitive advantage. Our Digital Trust Solutions authenticate
            the businesses, professionals, and platforms you rely on — so you
            can do business with confidence.
          </p>
        </motion.div>

        {/* ==== Main Section ==== */}
        <section className="max-w-7xl mx-auto px-4 md:py-16 flex flex-col lg:flex-row gap-10">
          {/* ==== Right Panel ==== */}
          <motion.div
            ref={contentRef}
            initial={{ opacity: 0, y: 40 }}
            animate={isContentInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="lg:w-2/3 space-y-10"
          >
            {/* Dynamic Image */}
            <AnimatePresence mode="wait">
              <div
                id={activeService.replace(/\s+/g, "-").toLowerCase()}
              ></div>
              <motion.img
                key={activeService}
                src={current.image}
                alt={activeService}
                initial={{ opacity: 0, scale: 0.95, x: 60 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                exit={{ opacity: 0, scale: 0.95, x: -30 }}
                transition={{
                  duration: 0.9,
                  ease: [0.22, 1, 0.36, 1],
                  delay: 0.1,
                }}
                className="rounded-md overflow-hidden w-full h-[400px] object-cover"
              />
            </AnimatePresence>

            {/* Tab Content */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeService}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ type: "spring", stiffness: 100 }}
                className="space-y-5"
              >
                <h4 className="text-2xl text-center md:text-left md:text-3xl font-bold text-gray-800">
                  {activeService}
                </h4>
                {current.description
                  .trim()
                  .split("\n\n")
                  .map((para, idx) => (
                    <p
                      key={idx}
                      className="text-gray-600 leading-relaxed font-medium text-justify mb-4"
                    >
                      {para.trim()}
                    </p>
                  ))}
              </motion.div>
            </AnimatePresence>

            {/* Icon Boxes */}
            <motion.div
              ref={iconsRef}
              initial={{ opacity: 0, y: 40 }}
              animate={isIconsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {current.features.map((feat, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ scale: 1.03 }}
                  transition={{ type: "spring", stiffness: 120 }}
                  className="flex items-start gap-4 p-6 bg-gray-100 rounded-md shadow-sm"
                >
                  <feat.icon className="w-10 h-10 text-blue-600" />
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-2">
                      {feat.title}
                    </h4>
                    <p className="text-base text-gray-600 font-medium leading-7">
                      {feat.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Benefits Section */}
            <motion.div
              ref={benefitsRef}
              initial={{ opacity: 0, y: 40 }}
              animate={isBenefitsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="bg-slate-50 rounded-2xl shadow-sm p-6 md:p-8 space-y-5"
            >
              <h4 className="text-2xl md:text-3xl font-semibold text-slate-800">
                What Are the Benefits?
              </h4>
              <ul className="space-y-3">
                {current.benefits.map((benefit, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-3 text-slate-700 text-[1rem] md:text-[1.05rem] font-medium leading-relaxed"
                  >
                    <span className="text-blue-500 mt-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </span>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>

          {/* ==== Left Panel ==== */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/3 space-y-6"
          >
            {/* Tabs */}
            <div className="bg-gray-100 p-6 rounded-sm">
              <h3 className="text-xl font-semibold mb-6 text-gray-800">
                Digital Trust Solutions
              </h3>
              <ul className="space-y-4">
                {/* Tab: Trust Infrastructure Deployment */}
                <motion.li
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    setActiveService(services[0]);
                    if (window.innerWidth < 768) {
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }
                  }}
                  className={`relative overflow-hidden group flex items-center justify-between cursor-pointer rounded-sm p-4 transition-all duration-300 ${
                    activeService === services[0]
                      ? "bg-blue-600 text-white"
                      : "bg-white text-gray-700 hover:text-white"
                  }`}
                >
                  <span
                    className="absolute inset-0 bg-blue-600 group-hover:w-full group-hover:opacity-100 transition-all duration-500 ease-in-out left-0 top-0 w-0 opacity-0"
                    aria-hidden="true"
                  ></span>
                  <div className="relative z-10 flex items-center gap-2 group-hover:text-white">
                    <FolderOpen size={20} />
                    <span className="font-medium">
                      Trust Infrastructure Deployment
                    </span>
                  </div>
                  {activeService === services[0] && (
                    <span className="relative z-10">
                      <ArrowRight size={18} />
                    </span>
                  )}
                </motion.li>

                {/* External Card: Kadodo Africa */}
                <a
                  href="https://kadodoafrica.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative flex flex-col rounded-sm p-4 bg-[#032040] text-white hover:bg-[#0a2a5e] transition-all duration-300 group"
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <img src={kadodoLogo} alt="Kadodo Africa" className="w-8 h-8 object-contain rounded" />
                      <div>
                        <span className="font-medium block leading-tight">
                          Kadodo Africa
                        </span>
                        <span className="text-xs text-blue-300 font-normal">
                          Our flagship verification platform
                        </span>
                      </div>
                    </div>
                    <ExternalLink
                      size={16}
                      className="text-blue-400 group-hover:text-white transition-colors flex-shrink-0"
                    />
                  </div>
                  <p className="text-xs text-gray-300 leading-relaxed">
                    Kadodo Africa authenticates the legal, physical, and professional standing of businesses across the continent. Over 150 businesses verified in Ghana since launch.
                  </p>
                </a>

                {/* Tab: Verified Professional Passports */}
                <motion.li
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    setActiveService(services[1]);
                    if (window.innerWidth < 768) {
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }
                  }}
                  className={`relative overflow-hidden group flex items-center justify-between cursor-pointer rounded-sm p-4 transition-all duration-300 ${
                    activeService === services[1]
                      ? "bg-blue-600 text-white"
                      : "bg-white text-gray-700 hover:text-white"
                  }`}
                >
                  <span
                    className="absolute inset-0 bg-blue-600 group-hover:w-full group-hover:opacity-100 transition-all duration-500 ease-in-out left-0 top-0 w-0 opacity-0"
                    aria-hidden="true"
                  ></span>
                  <div className="relative z-10 flex items-center gap-2 group-hover:text-white">
                    <FolderOpen size={20} />
                    <span className="font-medium">
                      Verified Professional Passports
                    </span>
                  </div>
                  {activeService === services[1] && (
                    <span className="relative z-10">
                      <ArrowRight size={18} />
                    </span>
                  )}
                </motion.li>
              </ul>
            </div>

            {/* Contact Section */}
            <ContactUs />
          </motion.div>
        </section>
      </div>
    </>
  );
};

export default DigitalTrust;
