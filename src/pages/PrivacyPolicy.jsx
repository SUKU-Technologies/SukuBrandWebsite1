import React from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { Home, Shield, Lock, Eye, FileText, UserCheck, Cookie, Link2, RefreshCw, Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import ContactBanner from "../components/ContactBanner";

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

const slideIn = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut", delay },
  viewport: { once: true },
});

const PrivacyPolicy = () => {
  const sections = [
    {
      id: "introduction",
      icon: Shield,
      title: "1. Introduction",
      content: (
        <>
          <p className="mb-4">
            Welcome to SUKU Technologies Limited ("SUKU", "we", "us", or "our"). We operate at the intersection of
            technology, trade, and industrial policy. We respect your privacy and are committed to protecting your personal
            data.
          </p>
          <p className="mb-4">
            This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our
            website sukutechnologies.com, use our services (including Kadodo Africa), or engage with our consulting arm.
          </p>
          <p className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r">
            <strong>Data Protection Registration:</strong> We are a registered Data Controller with the Data Protection Commission (DPC) of Ghana under the Data Protection Act, 2012 (Act 843).
          </p>
        </>
      ),
    },
    {
      id: "information-collected",
      icon: Eye,
      title: "2. Information We Collect",
      content: (
        <>
          <p className="mb-4">We may collect and process the following categories of data:</p>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
              <span><strong>Personal Identification Information:</strong> Name, email address, phone number, and job title when you fill out a contact form, request a quote, or sign up for our newsletter.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
              <span><strong>Business Information:</strong> Company name, registration details, and industry sector (specifically for AGI members or clients requesting Digital Audits).</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
              <span><strong>Technical Data:</strong> Internet Protocol (IP) address, browser type, time zone setting, and operating system, collected automatically via cookies to improve website performance.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
              <span><strong>Usage Data:</strong> Information about how you use our website, products, and services.</span>
            </li>
          </ul>
        </>
      ),
    },
    {
      id: "how-we-use",
      icon: FileText,
      title: "3. How We Use Your Information",
      content: (
        <>
          <p className="mb-4">We use your data for the following lawful purposes:</p>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { title: "Service Delivery", desc: "To provide software development, digital transformation consulting, and Google Workspace services you requested." },
              { title: "Communication", desc: "To respond to your inquiries, send you invoices, or notify you of technical updates." },
              { title: "Trade Verification (Kadodo Africa)", desc: "To verify the legitimacy of African businesses for intra-continental trade (subject to specific Terms of Service)." },
              { title: "Marketing", desc: "To send you newsletters or industry insights (e.g., \"The State of Tech in Ghana\"). You can unsubscribe at any time." },
              { title: "Compliance", desc: "To fulfill our legal obligations under Ghanaian law or regulatory requirements." },
            ].map((item, idx) => (
              <div key={idx} className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                <h4 className="font-semibold text-blue-900 mb-2">{item.title}</h4>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </>
      ),
    },
    {
      id: "data-sharing",
      icon: UserCheck,
      title: "4. Data Sharing and Disclosure",
      content: (
        <>
          <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-4">
            <p className="text-green-800 font-medium">We do NOT sell your personal data to third parties.</p>
          </div>
          <p className="mb-4">We may share your information only in the following circumstances:</p>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
              <span><strong>Service Providers:</strong> With trusted third-party vendors who assist our operations (e.g., Google Cloud for hosting, Paystack/Hubtel for payments). These partners are bound by confidentiality agreements.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
              <span><strong>Legal Obligations:</strong> If required by law or in response to valid requests by public authorities (e.g., The Data Protection Commission, Ghana Police Service, or Courts).</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
              <span><strong>Business Transfers:</strong> In connection with any merger, sale of company assets, or acquisition of all or a portion of our business to another company.</span>
            </li>
          </ul>
        </>
      ),
    },
    {
      id: "data-security",
      icon: Lock,
      title: "5. Data Security",
      content: (
        <>
          <p className="mb-4">We have implemented appropriate technical and organizational security measures designed to protect the security of any personal information we process.</p>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { title: "Encryption", desc: "All data transmitted between your browser and our servers is encrypted using SSL/TLS (Secure Socket Layer) technology." },
              { title: "Access Control", desc: "Access to your personal data is restricted to employees and contractors on a strict \"need-to-know\" basis." },
              { title: "Internal Audits", desc: "We conduct regular security assessments of our infrastructure." },
            ].map((item, idx) => (
              <div key={idx} className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-900 mb-2">{item.title}</h4>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </>
      ),
    },
    {
      id: "your-rights",
      icon: UserCheck,
      title: "6. Your Data Rights",
      content: (
        <>
          <p className="mb-4">Under Act 843, you have the following rights:</p>
          <div className="space-y-4">
            {[
              { title: "Right to Access", desc: "You can request a copy of the personal data we hold about you." },
              { title: "Right to Correction", desc: "You can ask us to correct any inaccurate or incomplete data." },
              { title: "Right to Deletion (\"Right to be Forgotten\")", desc: "You can request that we erase your personal data, subject to certain legal exceptions (e.g., tax records)." },
              { title: "Right to Object", desc: "You can object to the processing of your personal data for direct marketing purposes." },
            ].map((item, idx) => (
              <div key={idx} className="flex items-start gap-4 bg-gray-50 p-4 rounded-lg">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-blue-600 font-bold text-sm">{idx + 1}</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">{item.title}</h4>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-4 bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r">
            To exercise any of these rights, please contact us at <a href="mailto:privacy@sukutechnologies.com" className="text-blue-600 hover:underline">privacy@sukutechnologies.com</a>. We will respond to your request within 21 days.
          </p>
        </>
      ),
    },
    {
      id: "cookies",
      icon: Cookie,
      title: "7. Cookies Policy",
      content: (
        <>
          <p className="mb-4">Our website uses cookies to enhance your browsing experience.</p>
          <div className="space-y-3">
            <div className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg">
              <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
              <div>
                <strong>Essential Cookies:</strong>
                <p className="text-sm text-gray-600">Necessary for the website to function (e.g., security, load balancing).</p>
              </div>
            </div>
            <div className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg">
              <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
              <div>
                <strong>Analytics Cookies:</strong>
                <p className="text-sm text-gray-600">Help us understand how visitors interact with our site (e.g., Google Analytics).</p>
              </div>
            </div>
          </div>
          <p className="mt-4 text-sm text-gray-600">
            <strong>Control:</strong> You can choose to disable cookies through your browser settings, though this may affect the functionality of our website.
          </p>
        </>
      ),
    },
    {
      id: "third-party",
      icon: Link2,
      title: "8. Third-Party Links",
      content: (
        <p>
          Our website may contain links to third-party websites (e.g., Association of Ghana Industries, African Union, LinkedIn). We are not responsible for the privacy practices or content of those sites. We encourage you to read the privacy policies of any website you visit.
        </p>
      ),
    },
    {
      id: "changes",
      icon: RefreshCw,
      title: "9. Changes to This Policy",
      content: (
        <p>
          We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. The updated version will be indicated by an updated "Last Updated" date at the top of this policy.
        </p>
      ),
    },
  ];

  return (
    <>
      <Helmet>
        <title>Privacy Policy | SUKU Technologies</title>
        <meta name="description" content="SUKU Technologies Privacy Policy - Learn how we collect, use, and protect your personal data in compliance with Ghana's Data Protection Act 2012 (Act 843)." />
        <meta name="keywords" content="privacy policy, data protection, SUKU Technologies, Ghana Data Protection Act, personal data, cookies" />
        <meta property="og:title" content="Privacy Policy | SUKU Technologies" />
        <meta property="og:description" content="Learn how SUKU Technologies protects your personal data and privacy." />
        <meta property="og:url" content="https://www.sukutechnologies.com/privacy-policy" />
      </Helmet>
      <motion.div
        className="w-full"
        variants={pageVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        {/* Banner Section */}
        <div className="relative w-full h-[300px] sm:h-[400px] md:h-[350px] bg-gradient-to-r from-[#06113C] to-blue-800">
          {/* Overlay */}
          <div className="absolute inset-0 flex flex-col items-center justify-center md:items-start px-4 md:px-12 lg:px-20">
            <h1 className="text-white text-3xl sm:text-4xl md:text-6xl font-bold mb-4">
              Privacy Policy
            </h1>

            {/* Breadcrumb box */}
            <div className="inline-flex items-center gap-2 bg-black/50 border border-gray-400 px-4 py-2 rounded-md shadow-md">
              <Home size={16} className="text-blue-400" />
              <Link
                to="/"
                className="text-sm text-gray-200 hover:text-blue-400 transition-colors duration-200"
              >
                Home
              </Link>
              <span className="text-white">→</span>
              <span className="text-sm text-gray-300">Privacy Policy</span>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="bg-gray-50 min-h-screen">
          <div className="max-w-5xl mx-auto px-4 md:px-8 py-12">
            {/* Last Updated */}
            <motion.div {...slideIn(0)} className="mb-12 text-center">
              <div className="inline-flex items-center gap-2 bg-white px-6 py-3 rounded-full shadow-sm border border-gray-200">
                <RefreshCw size={18} className="text-blue-500" />
                <span className="text-gray-600">Last Updated: February 13, 2026</span>
              </div>
            </motion.div>

            {/* Policy Sections */}
            <div className="space-y-8">
              {sections.map((section, index) => (
                <motion.section
                  key={section.id}
                  {...slideIn(index * 0.1)}
                  className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden"
                >
                  <div className="p-6 md:p-8">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                        <section.icon size={20} className="text-blue-600" />
                      </div>
                      <h2 className="text-xl md:text-2xl font-bold text-gray-900">
                        {section.title}
                      </h2>
                    </div>
                    <div className="text-gray-600 leading-relaxed pl-[52px]">
                      {section.content}
                    </div>
                  </div>
                </motion.section>
              ))}
            </div>

            {/* Contact Section */}
            <motion.section {...slideIn(0.5)} className="mt-12 bg-[#06113C] rounded-xl shadow-lg overflow-hidden">
              <div className="p-8 md:p-12">
                <div className="text-center mb-8">
                  <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Mail size={32} className="text-blue-400" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                    10. Contact Us
                  </h2>
                  <p className="text-gray-300">
                    If you have questions or comments about this policy, or if you wish to report a potential data breach, please contact our Data Protection Supervisor:
                  </p>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-white/10 backdrop-blur rounded-lg p-6 text-center">
                    <div className="w-10 h-10 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Mail size={20} className="text-blue-400" />
                    </div>
                    <h3 className="text-white font-semibold mb-1">Email</h3>
                    <a href="mailto:privacy@sukutechnologies.com" className="text-blue-400 hover:underline text-sm">
                      privacy@sukutechnologies.com
                    </a>
                  </div>
                  <div className="bg-white/10 backdrop-blur rounded-lg p-6 text-center">
                    <div className="w-10 h-10 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Phone size={20} className="text-blue-400" />
                    </div>
                    <h3 className="text-white font-semibold mb-1">Phone</h3>
                    <a href="tel:+233302903220" className="text-blue-400 hover:underline text-sm">
                      +233 302 903 220
                    </a>
                  </div>
                  <div className="bg-white/10 backdrop-blur rounded-lg p-6 text-center">
                    <div className="w-10 h-10 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                      <MapPin size={20} className="text-blue-400" />
                    </div>
                    <h3 className="text-white font-semibold mb-1">Address</h3>
                    <p className="text-gray-300 text-sm">
                      21 King Tackie Avenue, North Ridge<br />
                      Accra, Ghana
                    </p>
                  </div>
                </div>

                <div className="mt-8 text-center">
                  <p className="text-gray-400 text-sm">
                    SUKU Technologies Limited - Registered Data Controller with the Data Protection Commission of Ghana
                  </p>
                </div>
              </div>
            </motion.section>
          </div>
        </div>

        <ContactBanner />
      </motion.div>
    </>
  );
};

export default PrivacyPolicy;
