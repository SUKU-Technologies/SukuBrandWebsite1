import React from "react";
import { motion } from "framer-motion";
import aboutImage1 from "../../assets/about-images (1).webp";
import { Link } from "react-router-dom";

const AboutWhoWeAre = () => {
  return (
    <div className="w-full bg-[#f9f9f9] py-16 px-4 md:px-12">
      <div className="flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Left Content */}
        <div className="md:w-1/2">
          <h4 className="text-sm text-blue-600 capitalize font-bold mb-2">
            Our Story, Our Purpose
          </h4>
          <h2 className="text-2xl md:text-4xl text-center font-bold capitalize text-gray-900 mb-4">
            A Legacy of Innovation and Impact
          </h2>
          <p className="text-gray-700 font-medium text-base text-justify leading-relaxed mb-6">
            Since 2017, Suku Technologies has been empowering businesses through
            innovative software, digital transformation, and brand visibility
            solutions. Our expert team delivers tailored, results-driven
            strategies that enhance operations and customer experiences. Guided
            by experience and a commitment to excellence, we build lasting
            partnerships through technology and trust.
          </p>

          {/* CTA Button */}
          <div className="relative group inline-block">
            <Link to="/contact">
              <motion.button
                whileTap={{ scale: 0.95 }}
                className="relative px-7 py-3 text-white font-medium bg-[#2A8ADE] rounded-full overflow-hidden cursor-pointer"
              >
                <span className="absolute inset-0 bg-[#032040] transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 ease-out z-0"></span>
                <span className="relative z-10">Talk To Us</span>
              </motion.button>
            </Link>
          </div>
        </div>

        {/* Right Image */}
        <div className="md:w-1/2">
          <motion.img
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            src={aboutImage1}
            alt="About Suku Technologies"
            className="w-full h-[500px]"
          />
        </div>
      </div>

      {/* Bottom Section: Partnership Text */}
      <div className="w-full mx-auto flex flex-col items-center  justify-center text-center">
        <h3 className="text-2xl md:text-4xl font-bold capitalize text-gray-900 mb-4">
          Strategic Collaborations Built on Trust and Innovation
        </h3>
        <p className="text-gray-700 text-justify font-medium text-base  leading-relaxed ">
          At Suku Technologies, we are committed to building long-term,
          strategic partnerships rooted in transparency, agility, and
          collaboration. Our client-first approach allows us to tailor flexible
          engagement models that align with diverse business needs and goals. We
          combine meticulous attention to detail with a clear focus on the
          bigger picture—empowering our clients with innovative digital
          solutions that drive sustainable growth and measurable impact.
        </p>
      </div>
    </div>
  );
};

export default AboutWhoWeAre;
