import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Imp1 from "../../assets/imp1.webp";
import Imp2 from "../../assets/imp2.webp";
import Imp3 from "../../assets/imp3.webp";

const Impressions = () => {
  const images = [
    { id: 1, src: Imp1, alt: "End-of-Year Celebration" },
    { id: 2, src: Imp2, alt: "Team event and networking" },
    { id: 3, src: Imp3, alt: "Company gathering and celebration" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    if (currentIndex < images.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className="bg-white py-16 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h3 className="text-sm text-blue-600 text-center font-bold mb-2">
            More Than Work
          </h3>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 leading-tight">
            Building connections, memories, and impact together
          </h2>
        </div>

        {/* Carousel */}
        <div className="relative overflow-hidden rounded-lg">
          <div className="w-full h-72 sm:h-96 relative group">
            <img
              src={images[currentIndex].src}
              alt={images[currentIndex].alt}
              className="w-full h-full object-cover rounded-lg transition-all duration-500 ease-in-out brightness-50 group-hover:brightness-100"
              loading="lazy"
            />

            {/* Text Overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              <p className="text-white text-lg sm:text-xl font-semibold px-4 text-center opacity-100 group-hover:opacity-0 transition-opacity duration-300">
                {images[currentIndex].alt}
              </p>
            </div>

            {/* Arrows */}
            <button
              onClick={handlePrev}
              disabled={currentIndex === 0}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-md z-10 disabled:opacity-30"
            >
              <ChevronLeft className="w-6 h-6 text-gray-800" />
            </button>
            <button
              onClick={handleNext}
              disabled={currentIndex === images.length - 1}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-md z-10 disabled:opacity-30"
            >
              <ChevronRight className="w-6 h-6 text-gray-800" />
            </button>
          </div>

          {/* Dots */}
          <div className="flex justify-center mt-6 space-x-2">
            {images.map((_, index) => (
              <div
                key={index}
                className={`w-3 h-3 rounded-full ${
                  index === currentIndex ? "bg-blue-600" : "bg-gray-300"
                }`}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Impressions;
