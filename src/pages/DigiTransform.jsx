import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { Helmet } from "react-helmet-async";
import {
  ArrowRight,
  FolderOpen,
  BarChart,
  Target,
  BookOpen,
  Map,
  UserCheck,
  ClipboardCheck,Home
} from "lucide-react";
import digiImage from "../assets/digitalTransfrom.webp";
import serviceImg1 from "../assets/A&C.webp";
import serviceImg2 from "../assets/Digital Strategy Development.webp";
import serviceImg3 from "../assets/Change Management & Training.webp";
import ContactUs from "../components/ContactUs";
import { Link, useLocation } from "react-router-dom"; // grabs the location id from the Link

const services = [
  "Analysis & Consulting",
  "Digital Strategy Development",
  "Change Management & Training",
];

const serviceDetails = {
  "Analysis & Consulting": {
    description: `
Our Analysis & Consulting service helps you discover new possibilities by examining the full spectrum of your business landscape. We combine rigorous process diagnostics, digital readiness evaluations, and stakeholder interviews to uncover operational gaps, customer friction points, and untapped opportunities. With a focus on actionable intelligence, we craft data-backed recommendations tailored to your business model, goals, and market conditions.

We don’t just deliver insight—we shape strategy. Whether it's identifying performance bottlenecks, aligning digital tools with business objectives, or uncovering efficiencies in the customer journey, our analysis drives meaningful transformation. This service equips your leadership with clarity, confidence, and a strong foundation for smart, future-focused decisions.
    `,
    image: serviceImg1,
    features: [
      {
        icon: BarChart,
        title: "Business Process Analysis",
        desc: "Gain insight into operational gaps and streamline for maximum efficiency.",
      },
      {
        icon: Map,
        title: "Customer Journey Mapping",
        desc: "Understand user behavior across touchpoints to optimize service delivery.",
      },
    ],
    benefits: [
      "Data-driven decision-making",
      "Improved business clarity",
      "Customer-centric strategies",
    ],
  },

  "Digital Strategy Development": {
    description: `
Digital transformation without a strategy is just noise. Our Digital Strategy Development service is designed to create a structured, phased plan that connects your vision with measurable digital outcomes. We evaluate your current digital maturity, prioritize opportunities for innovation, and identify the right mix of platforms, technologies, and delivery models that will support scalable, sustainable growth.

From cost-benefit analysis to technology roadmapping, we help you build a future-proof digital foundation. We align cross-functional teams and define success metrics so that every investment supports your long-term business goals. With this service, you'll move beyond buzzwords and start building digital capabilities that are real, relevant, and revenue-driving.
    `,
    image: serviceImg2,
    features: [
      {
        icon: Target,
        title: "Goal-driven Roadmap",
        desc: "Strategically align your goals with actionable steps and outcomes.",
      },
      {
        icon: ClipboardCheck,
        title: "Technology Recommendations",
        desc: "Select the best-fit digital tools and systems for sustainable growth.",
      },
    ],
    benefits: [
      "Aligned digital investments",
      "Improved tech ROI",
      "Efficient implementation paths",
    ],
  },

  "Change Management & Training": {
    description: `
True digital transformation is powered by people. Our Change Management & Training service ensures that your team is equipped, engaged, and enthusiastic about embracing new ways of working. We work closely with your leaders and end-users to develop structured onboarding plans, tailored training programs, and post-launch support that minimize resistance and maximize impact.

We focus on building an adaptive culture where continuous learning and change are embraced. From executive coaching to team workshops and self-service learning portals, we provide the tools and guidance needed to help your organization transition smoothly. This people-first approach empowers your workforce to deliver on the promise of your technology investments.
    `,
    image: serviceImg3,
    features: [
      {
        icon: BookOpen,
        title: "Employee Enablement",
        desc: "Hands-on training sessions to equip your team with necessary skills.",
      },
      {
        icon: UserCheck,
        title: "Post-Implementation Coaching",
        desc: "Support mechanisms to guide teams beyond the launch phase.",
      },
    ],
    benefits: [
      "Smooth change adoption",
      "Confident and trained staff",
      "Long-term success sustainability",
    ],
  },
};

const DigiTransform = () => {
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
        <title>Digital Transformation Solutions | SuKu Technologies</title>
        <meta name="description" content="Expert digital transformation solutions from SuKu Technologies. Our services include analysis & consulting, digital strategy development, and change management & training to drive business growth." />
        <meta name="keywords" content="digital transformation, digital strategy, business consulting, change management, Ghana, technology solutions" />
        <meta property="og:title" content="Digital Transformation Solutions | SuKu Technologies" />
        <meta property="og:description" content="Expert digital transformation solutions to drive business growth" />
        <meta property="og:url" content="https://www.sukutechnologies.com/digital-transformation" />
        <meta name="twitter:title" content="Digital Transformation Solutions | SuKu Technologies" />
        <meta name="twitter:description" content="Expert digital transformation solutions to drive business growth" />
      </Helmet>
      <div className="w-full min-h-screen">
        {/* ==== Header Section ==== */}
        <div className="relative w-full h-[350px] overflow-hidden">
          <img
            src={digiImage}
            alt="Digital Transformation"
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
              className="text-white text-center md:text-left   text-3xl sm:text-4xl md:text-6xl font-bold mb-4"
            >
              Digital Transformation Solutions
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
              <span className="text-sm text-center text-gray-300">
                Digital Transformation Solutions
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
          Empowering Businesses through Innovation
        </h2>
        <p className="text-gray-600 text-base font-medium md:text-lg leading-relaxed">
          Our Digital Transformation Solutions help organizations align
          technology with business goals. From strategic analysis and planning
          to change enablement and operational agility, we empower you to thrive
          in the digital era.
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
              Digital Transformation
            </h3>
            <ul className="space-y-4">
              {services.map((service) => (
                <motion.li
                  key={service}
                  onClick={() => {
                    setActiveService(service);
                    // scroll to top when a tab is clicked
                    if (window.innerWidth < 768){
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }
                  }}
                  whileTap={{ scale: 0.95 }}
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
                  <div className="relative z-10 flex items-center gap-2 group-hover:text-white">
                    <FolderOpen size={20} />
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

          {/* Contact Section */}
          <ContactUs />
        </motion.div>
      </section>
    </div>
      </>
  );
};

export default DigiTransform;
