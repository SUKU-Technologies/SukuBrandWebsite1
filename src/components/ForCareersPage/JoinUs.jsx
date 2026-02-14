import React from "react";
import TeamImage from "../../assets/JoinUs.webp";

const JoinUs = () => {
  return (
    <section className="bg-white py-16 px-4 md:px-8 lg:px-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative">

        {/* Decorative dots */}
        <div className="absolute bottom-8 right-16 w-20 h-20 bg-[#1a222e] rounded-lg transform rotate-45 z-10"></div>
        <div className="absolute bottom-4 right-8 w-14 h-14 bg-[#0a58ca] rounded-full z-10"></div>

        <div className="flex flex-col lg:flex-row items-center justify-between relative z-20 h-full">
          {/* Text Content */}
          <div className="flex-1 max-w-lg mb-8 lg:mb-0">
            <h2 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              <span className="text-gray-800">Want to </span>
              <span className="text-blue-600"> join us?</span>
            </h2>

            <p className="text-gray-600 text-lg leading-relaxed mb-8 max-w-md">
              Are you looking for a new challenge in your career path, or
              interested in developing yourself in a dynamic team and an
              inspiring workplace? You have come to the right place!
            </p>

            <a
              href="#job-list"
              className="bg-blue-600 hover:bg-gray-800 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg inline-block"
            >
              Discover More
            </a>
          </div>

          {/* Image */}
          <div className="flex-1 flex justify-end relative">
            <div className="relative z-30">
              <div className=" p-2  transform transition-transform duration-300">
                <img
                  src={TeamImage}
                  alt="Team photo"
                  className="w-full max-w-lg h-[400px] lg:h-[450px] object-cover rounded-2xl"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinUs;
