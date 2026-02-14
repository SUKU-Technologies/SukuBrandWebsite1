import React, { useState, useRef } from "react";
import { NavLink,Link } from "react-router-dom";
import {FiX, FiChevronDown } from "react-icons/fi";
import { IoEllipsisVertical } from "react-icons/io5";
import logo from "../assets/LOGO.webp";
import { motion, AnimatePresence } from "framer-motion";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isServiceOpen, setIsServiceOpen] = useState(false); // mobile
  const [hovering, setHovering] = useState(false); // desktop
  const [iconHover, setIconHover] = useState(false); // icon animation

  const hoverTimeout = useRef(null);

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleServiceMenu = () => setIsServiceOpen(!isServiceOpen);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Service", path: "/digital-transformation" },
    { name: "Contact", path: "/contact" },
    { name: "Careers", path: "/careers" },
    { name: "CSR", path: "/csr" },
  ];

  const serviceSubLinks = [
    {
      name: "Digital Transformation",
      path: "/digital-transformation",
    },
    { name: "Software Solutions", path: "/software-solutions" },
    { name: "Digital Visibility", path: "/digital-visibility" },
  ];

  const activeClass = "text-blue-600 font-semibold";

  const handleMouseEnter = () => {
    clearTimeout(hoverTimeout.current);
    setHovering(true);
    setIconHover(true);
  };

  const handleMouseLeave = () => {
    hoverTimeout.current = setTimeout(() => {
      setHovering(false);
      setIconHover(false);
    }, 250); // delay for closing
  };

  return (
    <header className="sticky top-0 z-40 bg-white shadow transition-all duration-300">
      <nav className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between h-20">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img src={logo} alt="Logo" className="w-35 h-20 object-contain" />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex flex-1 justify-center">
          <ul className="flex items-center gap-10">
            {navLinks.map(({ name, path }) => (
              <li
                key={name}
                className={name === "Service" ? "relative" : ""}
                onMouseEnter={name === "Service" ? handleMouseEnter : undefined}
                onMouseLeave={name === "Service" ? handleMouseLeave : undefined}
              >
                {name === "Service" ? (
                  <>
                    <div className="flex items-center gap-1 text-[#032040] font-medium hover:text-blue-600 transition cursor-pointer capitalize">
                      <span className="relative p-1">{name}</span>
                      <motion.div
                        animate={{ rotate: iconHover ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <FiChevronDown className="mt-[2px] text-sm" />
                      </motion.div>
                    </div>

                    <AnimatePresence>
                      {hovering && (
                        <motion.ul
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.3 }}
                          className="absolute top-full left-0 mt-3 w-64 bg-gray-50 p-4 shadow-xl rounded-md z-50 overflow-hidden"
                          onMouseEnter={handleMouseEnter}
                          onMouseLeave={handleMouseLeave}
                        >
                          {serviceSubLinks.map(({ name, path }) => (
                            <li key={name}>
                              <NavLink
                                to={path}
                                className={({ isActive }) =>
                                  isActive
                                    ? activeClass
                                    : "block px-4 py-2 text-sm text-gray-700 font-medium capitalize hover:bg-blue-50 hover:text-blue-600 transition hover:scale-105"
                                }
                              >
                                {name}
                              </NavLink>
                            </li>
                          ))}
                        </motion.ul>
                      )}
                    </AnimatePresence>
                  </>
                ) : (
                  <NavLink
                    to={path}
                    className={({ isActive }) =>
                      isActive
                        ? activeClass
                        : "relative text-[#032040] font-medium hover:text-blue-600 transition capitalize"
                    }
                  >
                    {name}
                  </NavLink>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* CTA Button */}
        <div className="hidden md:block relative group">
          <NavLink to="/contact">
            <motion.button
              whileTap={{ scale: 0.95 }}
              className="relative px-7 py-3 text-white font-medium bg-[#2A8ADE] rounded-full overflow-hidden cursor-pointer"
            >
              <span className="absolute inset-0 bg-[#032040] transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 ease-out z-0"></span>
              <span className="relative z-10">Get in touch</span>
            </motion.button>
          </NavLink>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? <FiX size={24} /> : <IoEllipsisVertical size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Overlay - blur background + disable clicks */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/30 backdrop-blur-sm z-30"
              onClick={() => setIsOpen(false)} // closes when clicking outside
            />

            {/* Menu Panel */}

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3 }}
              className="fixed top-3 right-2 rounded-sm w-64 h-[70%] bg-white shadow-lg p-6 z-40 flex flex-col items-center justify-center text-medium"
            >
              <ul className="flex flex-col gap-6 mt-10 text-center  w-full">
                {navLinks.map(({ name, path }) => (
                  <li key={name}>
                    {name === "Service" ? (
                      <>
                        <button
                          onClick={toggleServiceMenu}
                          className="w-full flex  items-center justify-center text-gray-700 font-semibold capitalize hover:text-blue-600 transition relative"
                        >
                          {name}
                          <motion.div
                            animate={{ rotate: isServiceOpen ? 180 : 0 }}
                            transition={{ duration: 0.3 }}
                            className="absolute right-0"
                          >
                            <FiChevronDown />
                          </motion.div>
                        </button>
                        <AnimatePresence>
                          {isServiceOpen && (
                            <motion.ul
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.3 }}
                              className="mt-2 space-y-3 text-left pl-4"
                            >
                              {serviceSubLinks.map(({ name, path }) => (
                                <li key={name}>
                                  <NavLink
                                    to={path}
                                    onClick={() => setIsOpen(false)}
                                    className={({ isActive }) =>
                                      isActive
                                        ? activeClass
                                        : "block text-sm text-gray-700 font-medium capitalize hover:text-blue-600 transition"
                                    }
                                  >
                                    {name}
                                  </NavLink>
                                </li>
                              ))}
                            </motion.ul>
                          )}
                        </AnimatePresence>
                      </>
                    ) : (
                      <NavLink
                        to={path}
                        onClick={() => setIsOpen(false)}
                        className={({ isActive }) =>
                          isActive
                            ? activeClass
                            : "text-gray-700 font-semibold capitalize hover:text-blue-600 transition"
                        }
                      >
                        {name}
                      </NavLink>
                    )}
                  </li>
                ))}
                <li>
                  <NavLink to="/contact" onClick={() => setIsOpen(false)}>
                    <button className="w-full bg-[#2A8ADE] text-white py-2 rounded-lg hover:bg-[#032040] transition cursor-pointer">
                      Get In Touch
                    </button>
                  </NavLink>
                </li>
              </ul>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

export default NavBar;
