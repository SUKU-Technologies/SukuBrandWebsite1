import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaPlay, FaTimes, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import VtfImage from "../assets/testimonial1.webp";
import AmanexImage from "../assets/testimonial.webp"

const testimonials = [
  {
    product: "ERP System,VTF Programmes App & Google Mail",
    name: " Linda Adjei",
    role: "Executive Director of the Vocational Training for Females Programme, an NGO",
    text: "Suku Technologies took the time to understand our unique challenges and co-created digital tools, including a robust ERP system and a redesigned website, that truly fit our mission. Their solutions have transformed our data management, reporting, and communication. More than just technical experts, they’ve become trusted partners who continue to support us",
    thumbnail: VtfImage,
    video: "https://youtu.be/3DSw0ZUR2q0",
    url: "https://vtfprogramme.com.gh",
    websiteName: 'VTF Programmes App'
  },
  {
    product: "Amanex App",
    name: "Eric Amanquanor",
    role: "CEO of Amanex Company",
    text: "Partnering with Suku Technologies was one of our best decisions. They redesigned our website, built a solid social media strategy, and boosted our brand visibility across Africa. More than tech experts, they’re trusted partners in our growth, constantly aligning their support with our vision and future goals.",
    thumbnail: AmanexImage,
    video: "https://youtu.be/NYp60RMNXn0",
    url: "https://amanexpnp.com/",
    websiteName: 'Amanex Plastics App '
  },
];

const TestimonialsHome = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const visibleTestimonials = testimonials.slice(
    currentIndex,
    currentIndex + 3
  );

  const nextSlide = () => {
    if (currentIndex < testimonials.length - 3) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <section className="bg-white py-20 px-6 md:px-12 lg:px-24 w-full relative">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-base font-bold text-[#2A8ADE] mb-4">
          What Our Clients Say
        </h2>
        <p className="text-[#032040] text-2xl md:text-4xl font-bold mb-14 max-w-3xl mx-auto">
          Customer’s Awesome Feedback About Our Services
        </p>

        {/* Arrow Controls */}
        {currentIndex > 0 && (
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white shadow-lg p-4 rounded-full hover:bg-gray-100"
          >
            <FaChevronLeft size={20} />
          </button>
        )}
        {currentIndex < testimonials.length - 3 && (
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white shadow-lg p-4 rounded-full hover:bg-gray-100"
          >
            <FaChevronRight size={20} />
          </button>
        )}

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {visibleTestimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-2xl  shadow-md hover:shadow-2xl transition-all duration-300 text-left flex flex-col"
            >
              {/* Thumbnail with Play Button */}
              <div className="relative">
                <img
                  src={item.thumbnail}
                  alt={item.product}
                  className="w-full h-64 object-cover "
                  loading="lazy"
                />
                <div className="absolute bottom-4 right-4 group">
                  <button
                    onClick={() => setSelectedVideo(item.video)}
                    className="bg-white rounded-full p-4 shadow-lg cursor-pointer group-hover:bg-blue-600 transition-colors duration-300"
                  >
                    <FaPlay className="text-blue-600 text-lg group-hover:text-white transition-colors duration-300" />
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="p-8 flex flex-col">
                <h4 className="text-xl font-bold text-gray-900 mb-2">
                  {item.product}
                </h4>
                <p className="text-base font-semibold text-gray-800">
                  {item.name}
                </p>
                <p className="text-sm text-gray-500 mb-6">{item.role}</p>
                <p className="text-gray-700 text-base leading-relaxed text-justify">
                  "{item.text}"
                </p>
              </div>

              <div className="w-full h-6  p-3 mb-4 font-bold flex flex-row items-center justify-end hover:text-blue-800">
                <Link to={item.url} target="_blank">
                  <p>{item.websiteName}</p>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Video Modal with AnimatePresence */}
      <AnimatePresence>
        {selectedVideo && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-95 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedVideo(null)}
              className="absolute top-6 right-6 bg-white rounded-full p-3 shadow-md z-50"
            >
              <FaTimes className="text-gray-800 text-2xl" />
            </button>

            {/* Video Container */}
            <motion.div
              initial={{ y: "100vh", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: "100vh", opacity: 0 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="w-full h-full flex items-center justify-center p-6"
            >
              <div className="w-full max-w-4xl aspect-video">
                <iframe
                  width="100%"
                  height="100%"
                  src={
                    selectedVideo.replace(
                      "youtu.be/",
                      "www.youtube.com/embed/"
                    ) + "?autoplay=1"
                  }
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default TestimonialsHome;
