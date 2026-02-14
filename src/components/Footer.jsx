import React from "react";
import { motion } from "framer-motion";
import {
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  ArrowUp,
  CircleArrowRight,
  ArrowRight,
  Mail,
} from "lucide-react";
import { Link } from "react-router-dom";
import logo from '../assets/LOGO.webp'

const slideIn = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut", delay },
  viewport: { once: true },
});

const Footer = () => {
  return (
    <footer className="bg-[#06113C] text-white pt-16 pb-10 relative">
      <div className="px-4 md:px-8 lg:px-16">
        <div className="flex flex-col md:flex-row md:justify-between gap-y-10 md:gap-x-10">
          {/* Column 1 */}
          <motion.div className="md:w-1/4" {...slideIn(0)}>
              <Link to='/'>
                <img className="w-[50%] mb-3 rounded-sm" src={logo} alt=" brand logo" loading="lazy"/>
              </Link>
            <p className="text-sm text-gray-300 leading-relaxed">
              Suku Technologies is a leading technology solutions provider
              specializing in software development, digital transformation, and
              brand visibility.
            </p>
            <Link to="/about">
              <button className="mt-6 relative overflow-hidden group bg-blue-500 text-white px-6 py-2 rounded shadow-lg transition-all cursor-pointer">
                <span className="relative z-10 flex items-center gap-2">
                  Discover More <ArrowRight size={16} />
                </span>
                <span className="absolute top-0 left-0 w-full h-full bg-[#06113C] group-hover:w-0 group-hover:left-full transition-all duration-500 ease-in-out z-0"></span>
                <span className="absolute inset-0 border border-blue-500 rounded group-hover:opacity-100 opacity-0 transition-all duration-500 ease-in-out"></span>
              </button>
            </Link>
          </motion.div>

          {/* Column 2 */}
          <motion.div className="md:w-[18%]" {...slideIn(0.1)}>
            <h3 className="text-xl font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              {[
                { name: "About Us", path: "/about" },
                { name: "Contact", path: "/contact" },
                { name: "Careers", path: "/careers" },
              ].map((item, idx) => (
                <li
                  key={idx}
                  className="transition-all hover:translate-x-2 hover:text-blue-400 cursor-pointer flex items-center gap-2"
                >
                  <CircleArrowRight size={14} className="text-blue-600" />
                  <Link to={item.path}> {item.name}</Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Column 3 - UPDATED SERVICE SECTION */}
          <motion.div className="md:w-[18%]" {...slideIn(0.2)}>
            <h3 className="text-xl font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              {[
                {
                  name: "Digital Transformation Solutions",
                  path: "/digital-transformation",
                },
                { name: "Software Solutions", path: "/software-solutions" },
                {
                  name: "Digital Visibility Services",
                  path: "/digital-visibility",
                },
              ].map((item, idx) => (
                <li
                  key={idx}
                  className="transition-all hover:translate-x-2 hover:text-blue-400 cursor-pointer flex items-center gap-2"
                >
                  <CircleArrowRight size={14} className="text-blue-600" />
                  <Link to={item.path}>{item.name}</Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Column 4 */}
          <motion.div className="md:w-1/4" {...slideIn(0.3)}>
            <h3 className="text-xl font-semibold mb-4">Newsletter</h3>
            <p className="text-sm text-gray-300 mb-4">
              Subscribe to our newsletter for updates
            </p>
            <div className="relative">
              <input
                type="email"
                placeholder="Enter Your E-Mail*"
                className="w-full py-2 px-4 pr-10 rounded bg-[#0B1C47] text-white focus:outline-none"
              />
              <span className="absolute right-3 top-2.5 text-gray-400">
                <Mail size={16} />
              </span>
            </div>
            <button className="mt-4 relative overflow-hidden group bg-blue-500 text-white px-6 py-2 rounded shadow-lg transition-all">
              <span className="relative z-10">Subscribe</span>
              <span className="absolute top-0 left-1/2 w-0 h-full bg-[#06113C] group-hover:w-full group-hover:left-0 transition-all duration-500 ease-in-out"></span>
              <span className="absolute inset-0 border border-blue-500 rounded group-hover:opacity-100 opacity-0 transition-all duration-500 ease-in-out"></span>
            </button>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          className="mt-12 border-t border-gray-700 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-400"
          {...slideIn(0.4)}
        >
          <div className="flex items-center gap-4">
            <p>© 2025 Sukutech. Designed By Suku Technologies</p>
            <span className="hidden md:inline text-gray-600">|</span>
            <Link to="/privacy-policy" className="hover:text-blue-400 transition-colors">
              Privacy Policy
            </Link>
          </div>
          <div className="flex gap-4">
            {[
              {
                Icon: Facebook,
                to: "https://web.facebook.com/sukutechnologies",
              },
              { Icon: Twitter, to: "https://x.com/sukutech_" },
              {
                Icon: Instagram,
                to: "https://www.instagram.com/sukutechnologies_/",
              },
              {
                Icon: Linkedin,
                to: "https://www.linkedin.com/company/suku-technologies/posts/",
              },
            ].map(({Icon, to}, i) => (
              <Link
               to={to}
                key={i}
                target="_blank"
                className="p-2 bg-[#0B1C47] rounded-full hover:bg-blue-500 transition"
              >
                <Icon size={16} className="text-white" />
              </Link>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Scroll to Top */}
      <div className="absolute right-6 bottom-6 animate-[bounce_2s_infinite] cursor-pointer">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="p-2 rounded-full bg-blue-500 hover:bg-white group transition "
        >
          <ArrowUp className="text-white group-hover:text-blue-500" size={20} />
        </button>
      </div>
    </footer>
  );
};

export default Footer;
