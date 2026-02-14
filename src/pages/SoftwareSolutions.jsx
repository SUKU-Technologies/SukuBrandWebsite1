import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { Helmet } from "react-helmet-async";
import {
  FolderOpen,
  BookOpen,
  BarChart,
  ClipboardCheck,
  Map,
  Target,
  UserCheck,
  ArrowRight,
  Home,
} from "lucide-react";
import digiImage from "../assets/softwareSolutions.webp";
import serviceImg1 from "../assets/CSD.webp";
import serviceImg2 from "../assets/Web & Mobile Application Development.webp";
import serviceImg3 from "../assets/Maintenance & Support Services.webp";
import ContactUs from "../components/ContactUs";
import { Link, useLocation } from "react-router-dom";

const services = [
  "Custom Software Development",
  "Web & Mobile Application Development",
  "Maintenance & Support Services",
];

const serviceDetails = {
  "Custom Software Development": {
    description: `
Get tailor-made software designed specifically for your business processes. Whether internal tools or customer-facing apps, we deliver secure, scalable, and efficient solutions that are aligned with your long-term vision.

Our approach is iterative and user-focused—ensuring high performance, seamless integrations, and future scalability. From requirements gathering to post-deployment optimization, we deliver precision-built systems that drive business outcomes.
    `,
    image: serviceImg1,
    features: [
      {
        icon: BarChart,
        title: "Fully Customized Systems",
        desc: "Software tailored exactly to your business requirements and workflows.",
      },
      {
        icon: Map,
        title: "Legacy Integration",
        desc: "Connect seamlessly with your existing tools and databases.",
      },
    ],
    benefits: [
      "Agile, iterative development",
      "Secure and scalable backend architecture",
      "End-to-end deployment support",
    ],
  },

  "Web & Mobile Application Development": {
    description: `
Engage your audience with beautifully crafted, high-performance web and mobile applications—designed with user experience and modern technologies in mind.

We develop responsive, cross-platform apps that are visually compelling, easy to use, and built for scale. Whether you're launching a startup MVP or enhancing enterprise systems, we create digital products that delight and perform.
    `,
    image: serviceImg2,
    features: [
      {
        icon: Target,
        title: "Responsive Web Apps",
        desc: "Seamless user experience across all devices and browsers.",
      },
      {
        icon: ClipboardCheck,
        title: "Native & Hybrid Mobile Development",
        desc: "Built for iOS and Android using robust mobile-first frameworks.",
      },
    ],
    benefits: [
      "Modern UI/UX design",
      "API & database integration",
      "App store deployment support",
    ],
  },

  "Maintenance & Support Services": {
    description: `
Your systems deserve consistent care. We provide ongoing maintenance, performance monitoring, and security support to keep your digital assets running smoothly and securely.

From scheduled updates to incident resolution, our support services ensure your applications stay current, optimized, and available. We operate with a proactive mindset—solving issues before they impact your users.
    `,
    image: serviceImg3,
    features: [
      {
        icon: BookOpen,
        title: "24/7 Monitoring & Uptime",
        desc: "Real-time system oversight to ensure availability and stability.",
      },
      {
        icon: UserCheck,
        title: "Bug Fixing & Optimization",
        desc: "Ongoing improvements and fast resolution of any issues.",
      },
    ],
    benefits: [
      "Regular updates and security patches",
      "SLA-based support plans",
      "Peace of mind and long-term reliability",
    ],
  },
};

const SoftwareSolutions = () => {
  const [activeService, setActiveService] = useState(services[0]);

  // created a value the grabs the function of the useLocation
  const location = useLocation();

  const descRef = useRef(null);
  const contentRef = useRef(null);
  const iconsRef = useRef(null);
  const benefitsRef = useRef(null);

  const isDescInView = useInView(descRef, { once: true });
  const isContentInView = useInView(contentRef, { once: true });
  const isIconsInView = useInView(iconsRef, { once: true });
  const isBenefitsInView = useInView(benefitsRef, { once: true });

  // When URL hash changes, update the active tab

  useEffect(() => {
    const hash = location.hash;

    if (hash) {
      // extract the section name from hash
      const sectionFromHash = hash
        .replace("#", "")
        .replace(/-/g, " ")
        .toLowerCase();

      // try to match it with one of the services
      const matchedService = services.find(
        (service) => service.toLowerCase() === sectionFromHash
      );

      if (matchedService) {
        setActiveService(matchedService);

        // optional: scroll to it manually
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
        <title>Software Solutions | Custom Development, Web & Mobile Apps | SuKu Technologies</title>
        <meta name="description" content="Expert software solutions from SuKu Technologies. Custom software development, web & mobile applications, and maintenance services in Ghana." />
        <meta name="keywords" content="custom software development, web applications, mobile apps, software maintenance, Ghana, technology solutions" />
        <meta property="og:title" content="Software Solutions | Custom Development, Web & Mobile Apps | SuKu Technologies" />
        <meta property="og:description" content="Expert software solutions to power your business growth" />
        <meta property="og:url" content="https://www.sukutechnologies.com/software-solutions" />
        <meta name="twitter:title" content="Software Solutions | Custom Development, Web & Mobile Apps | SuKu Technologies" />
        <meta name="twitter:description" content="Expert software solutions to power your business growth" />
      </Helmet>
      <div className="w-full min-h-screen">
        {/* Header Section */}
        <div className="relative w-full h-[350px] overflow-hidden">
          <img
            src={digiImage}
            alt="Software Solutions"
            loading="lazy"
            className="w-full h-full object-cover"
          />

          <div
            className="
      absolute inset-0 bg-blue-800/65 
      flex flex-col items-center justify-center 
      md:items-start 
      px-0 md:px-12 lg:px-20
    "
          >
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-white text-3xl sm:text-4xl md:text-6xl font-bold mb-4"
            >
              Software Solutions
            </motion.h1>

            {/* Breadcrumb box */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.3 }} // delay so it comes after heading
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
              <span className="text-sm text-gray-300">Software Solutions</span>
            </motion.div>
          </div>
        </div>

      {/* Description Section */}
      <motion.div
        ref={descRef}
        initial={{ opacity: 0, y: 40 }}
        animate={isDescInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="max-w-5xl mx-auto px-4 text-center py-10"
      >
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
          Building Scalable Digital Products for Modern Businesses
        </h2>
        <p className="text-gray-600 text-base font-medium md:text-lg leading-relaxed">
          We design, build, and maintain digital products that solve real
          problems. From custom software to mobile applications, we deliver
          scalable and user-friendly systems built around your business model.
        </p>
      </motion.div>

      {/* Main Section */}
      <section className="max-w-7xl mx-auto px-4 py-16 flex flex-col lg:flex-row gap-10">
        {/* Right Panel */}
        <motion.div
          ref={contentRef}
          initial={{ opacity: 0, y: 40 }}
          animate={isContentInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="lg:w-2/3 space-y-10"
        >
          {/* Dynamic Image */}
          <AnimatePresence mode="wait">
            <div id={activeService.replace(/\s+/g, "-").toLowerCase()}></div>
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
                delay: 0.1, // delay entry for better pacing
              }}
              className="rounded-md overflow-hidden  w-full h-[400px] object-cover"
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
                    {/* Icon (e.g., Lucide Check or Heroicons) */}
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

        {/* Left Panel (Tabs + ContactUs) */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:w-1/3 space-y-6"
        >
          <div className="bg-gray-100 p-6 rounded-sm">
            <h3 className="text-xl font-semibold mb-6 relative inline-block text-gray-800">
              <span className="border-b-4 border-blue-600 w-full inline-block p-3">
                Software Solutions
              </span>
            </h3>

            <ul className="space-y-4">
              {services.map((service) => (
                <motion.li
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 150 }}
                  key={service}
                  onClick={() => {
                    setActiveService(service);
                    // scroll to top when a tab is clicked
                    if (window.innerWidth < 760) {
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }
                  }}
                  className={`relative overflow-hidden group flex items-center justify-between cursor-pointer rounded-sm p-4 transition-all duration-300 ${
                    activeService === service
                      ? "bg-blue-600 text-white"
                      : "bg-white text-gray-700 hover:text-white"
                  }`}
                >
                  <span
                    className="absolute inset-0 bg-blue-600 group-hover:w-full group-hover:opacity-100 transition-all duration-500 ease-in-out left-0 top-0 w-0 opacity-0"
                    aria-hidden="true"
                  ></span>

                  <div className="relative z-10 flex items-center gap-2 transition-all duration-300 group-hover:text-white">
                    <FolderOpen
                      size={20}
                      className="text-blue-900 group-hover:text-white"
                    />
                    <span className="font-medium">{service}</span>
                  </div>
                  {activeService === service && (
                    <span className="relative z-10">
                      <ArrowRight size={18} />
                    </span>
                  )}
                </motion.li>
              ))}
            </ul>
          </div>

          {/* ContactUs section below tabs */}
          <ContactUs />
        </motion.div>
      </section>
    </div>
      </>
  );
};

export default SoftwareSolutions;
