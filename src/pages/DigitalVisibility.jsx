import React, { useState, useRef,useEffect } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { Helmet } from "react-helmet-async";

import digiImage from "../assets/digitalVisibility.webp";
import serviceImg1 from "../assets/SEO.webp";
import serviceImg2 from "../assets/Social Media Marketing.webp";
import serviceImg3 from "../assets/Website Design,Development & Maintenance.webp";
import serviceImg4 from "../assets/Domain & Web Hosting Services.webp";
import ContactUs from "../components/ContactUs"; 
import {
  ArrowRight,
  FolderOpen,
  BarChart,
  ThumbsUp,
  Megaphone,
  Globe,
  Server,
  ShieldCheck,
  ClipboardList,Home
} from "lucide-react";
import { Link,useLocation } from "react-router-dom"; // grabs the location id from the Link

const services = [
  "SEO (Search Engine Optimization)",
  "Social Media Marketing",
  "Website Design,Development & Maintenance",
  "Domain & Web Hosting Services",
];

const serviceDetails = {
  "SEO (Search Engine Optimization)": {
    description: `Be found where it matters most. Our SEO service is engineered to boost your visibility across search engines. We focus on improving your site's speed, structure, and relevance to attract organic traffic and convert visitors into loyal customers. With a technical foundation and a strategic content approach, we help your brand rise in search rankings.`,
    image: serviceImg1,
    features: [
      {
        icon: BarChart,
        title: "Technical SEO Audits",
        desc: "Uncover performance blockers with comprehensive site diagnostics.",
      },
      {
        icon: ClipboardList,
        title: "Keyword & Competitor Analysis",
        desc: "Identify growth opportunities through deep keyword and market research.",
      },
    ],
    benefits: [
      "Improved search engine rankings",
      "Increased organic traffic",
      "Higher on-site engagement",
    ],
  },
  "Social Media Marketing": {
    description: `Connect with your audience where they spend their time. We create and manage dynamic social strategies that promote engagement, build brand loyalty, and drive real business outcomes. Through platform-specific content, targeted ads, and community interaction, we amplify your digital voice.`,
    image: serviceImg2,
    features: [
      {
        icon: Megaphone,
        title: "Creative Campaign Design",
        desc: "Tailored strategies and visuals for each platform to maximize reach.",
      },
      {
        icon: ThumbsUp,
        title: "Growth & Engagement Insights",
        desc: "Real-time tracking and analytics to guide decision-making.",
      },
    ],
    benefits: [
      "Increased brand awareness",
      "Higher audience engagement",
      "Stronger customer loyalty",
    ],
  },
  "Website Design,Development & Maintenance": {
    description: `Your website is your digital storefront. We design and build high-performance websites that blend aesthetics with functionality. From custom UI/UX design to responsive development and maintenance, we ensure your website delivers seamless user experiences that drive conversions.`,
    image: serviceImg3,
    features: [
      {
        icon: Globe,
        title: "Responsive & SEO-Friendly Layouts",
        desc: "Mobile-optimized, fast-loading sites that rank well and perform better.",
      },
      {
        icon: ClipboardList,
        title: "CMS Integration (WordPress, Headless CMS)",
        desc: "Easily manage content using modern platforms like WordPress and Next.js.",
      },
    ],
    benefits: [
      "Faster website performance",
      "Improved user engagement",
      "Easier content management",
    ],
  },
  "Domain & Web Hosting Services": {
    description: `Ensure your digital presence is always live and secure. Our hosting and domain services provide stability, speed, and protection for your business-critical websites. We manage your backend infrastructure so you can focus on growth.`,
    image: serviceImg4,
    features: [
      {
        icon: Server,
        title: "Managed Cloud Hosting",
        desc: "Reliable, scalable hosting solutions for every business size.",
      },
      {
        icon: ShieldCheck,
        title: "SSL & Uptime Monitoring",
        desc: "Continuous protection and performance tracking for peace of mind.",
      },
    ],
    benefits: [
      "Faster loading speeds",
      "Improved site security",
      "Always-on web presence",
    ],
  },
};

const DigitalVisibility = () => {
  const [activeService, setActiveService] = useState(services[0]);

  const descRef = useRef(null);
  const contentRef = useRef(null);
  const iconsRef = useRef(null);
  const benefitsRef = useRef(null);

  const isDescInView = useInView(descRef, { once: true });
  const isContentInView = useInView(contentRef, { once: true });
  const isIconsInView = useInView(iconsRef, { once: true });
  const isBenefitsInView = useInView(benefitsRef, { once: true });

    // created a value that holds the useLocation function
    const location = useLocation();
  
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
        <title>Digital Visibility Services | SEO, Social Media & Web Development | SuKu Technologies</title>
        <meta name="description" content="Boost your online presence with SuKu Technologies' digital visibility services. Expert SEO, social media marketing, website development, and hosting solutions in Ghana." />
        <meta name="keywords" content="SEO, social media marketing, website development, web hosting, digital marketing, online visibility, Ghana" />
        <meta property="og:title" content="Digital Visibility Services | SEO, Social Media & Web Development | SuKu Technologies" />
        <meta property="og:description" content="Boost your online presence with our expert digital visibility services" />
        <meta property="og:url" content="https://www.sukutechnologies.com/digital-visibility" />
        <meta name="twitter:title" content="Digital Visibility Services | SEO, Social Media & Web Development | SuKu Technologies" />
        <meta name="twitter:description" content="Boost your online presence with our expert digital visibility services" />
      </Helmet>
      <div className="w-full min-h-screen">
        {/* ==== Header ==== */}
        <div className="relative w-full h-[350px] overflow-hidden">
          <img
            src={digiImage}
            alt="Digital Visibility"
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
              Digital Visibility
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
              <span className="text-sm text-gray-300">Digital Visibility</span>
            </motion.div>
          </div>
        </div>

      {/* ==== Description ==== */}
      <motion.div
        ref={descRef}
        initial={{ opacity: 0, y: 40 }}
        animate={isDescInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="max-w-5xl mx-auto px-4 text-center py-10"
      >
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
          Strategic Solutions to Grow Your Online Presence
        </h2>
        <p className="text-gray-600 text-base font-medium md:text-lg leading-relaxed">
          Our digital visibility services are tailored to boost your presence
          across channels and improve customer reach.
        </p>
      </motion.div>

      {/* ==== Main Section ==== */}
      <section className="max-w-7xl mx-auto px-4 py-16 flex flex-col lg:flex-row gap-10">
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

        {/* ==== Left Panel ==== */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:w-1/3 space-y-6"
        >
          <div className="bg-gray-100 p-6 rounded-sm">
            <h3 className="text-xl font-semibold mb-6 relative inline-block text-gray-800">
              <span className="border-b-4 border-blue-600 w-full inline-block p-3">
                Digital Visibilty
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

          {/* ==== ContactUs Card ==== */}
          <ContactUs />
        </motion.div>
      </section>
    </div>
      </>
  );
};

export default DigitalVisibility;
