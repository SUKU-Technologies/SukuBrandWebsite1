import React from "react";
import MissionVisionImage from "../../assets/mission and vision.webp";
import { FaStar, FaUserTie, FaBalanceScale } from "react-icons/fa"; // Icons for Excellence, Leadership, Integrity

const coreValues = [
  {
    icon: <FaStar className="text-5xl text-[#2A8ADE]" />,
    title: "Excellence",
    description:
      "We deliver high-quality results by embracing innovation, precision, and continuous improvement.",
  },
  {
    icon: <FaUserTie className="text-5xl text-[#2A8ADE]" />,
    title: "Leadership",
    description:
      "We lead with vision and integrity, empowering others to shape a better digital future.",
  },
  {
    icon: <FaBalanceScale className="text-5xl text-[#2A8ADE]" />,
    title: "Integrity",
    description:
      "We uphold honesty and accountability to build trust through ethical practices.",
  },
];


const VisionAndMission = () => {
  return (
    <div className="w-full min-h-screen bg-white px-4 py-10">
      {/* Heading */}
      <div className="max-w-6xl mx-auto mb-8">
        <h2 className="text-sm font-bold text-[#2A8ADE] text-left capitalize tracking-widest">
          Our Driving Purpose
        </h2>
      </div>

      {/* Vision & Mission */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left: Vision & Mission */}
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-bold md:text-4xl text-[#032040] capitalize mb-2">
              Our Vision
            </h3>
            <p className="text-gray-900 font-medium text-base text-justify leading-relaxed">
              To be the leading technology consulting partner, empowering
              businesses worldwide to achieve unparalleled digital success
              through innovative, reliable, and accessible solutions.
            </p>
          </div>

          <div>
            <h3 className="text-2xl md:text-4xl font-bold text-[#032040] capitalize mb-2">
              Our Mission
            </h3>
            <p className="text-gray-900 font-medium text-base text-justify leading-relaxed">
              Our mission is to transform businesses into digital leaders by
              delivering customized software solutions, driving comprehensive
              digital transformations, ensuring secure business verification,
              and enhancing brand visibility. We are committed to excellence,
              innovation, and client success, providing cost-effective and
              scalable solutions that enable our clients to thrive in the
              competitive digital landscape.
            </p>
          </div>
        </div>

        {/* Right: Image */}
        <div className="w-full h-full">
          <img
            src={MissionVisionImage}
            alt="Mission and Vision"
            className="w-full h-auto  object-cover "
          />
        </div>
      </div>

      {/* Core Values */}
      <div className="max-w-6xl mx-auto mt-20">
        <h3 className="text-2xl md:text-4xl font-bold text-[#032040] text-center capitalize mb-6">
          Our Core Values
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
          {coreValues.map((value, index) => (
            <div key={index} className="space-y-4">
              <div className="w-16 h-16 mx-auto flex items-center justify-center rounded-full bg-[#032040] text-white text-3xl">
                {value.icon}
              </div>
              <h4 className="text-lg font-bold text-[#032040] uppercase">
                {value.title}
              </h4>
              <p className="text-gray-800 text-base font-medium text-justify px-4">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VisionAndMission;
