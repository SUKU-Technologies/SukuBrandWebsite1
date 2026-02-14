import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaMapMarkerAlt,
  FaClock,
  FaEnvelope,
} from "react-icons/fa";

const LocationBanner = () => {
  return (
    <div className=" hidden  w-full md:flex h-12 text-white bg-[#032040] text-sm font-medium overflow-hidden">
      {/* Left Section */}
      <div
        className="flex items-center justify-between px-4 flex-[50%]"
        style={{
          backgroundColor: "#2A8ADE",
          clipPath: "polygon(0 0, 98% 0, 100% 100%, 0% 100%)",
        }}
      >
        <span className="flex items-center gap-2">
          <FaMapMarkerAlt className="text-white" /> 21 King tackie Avenue, North
          Ridge, Ghana
        </span>
        <span className="flex items-center gap-2">
          <FaEnvelope className="text-white" /> info@sukutechnologies.com
        </span>
      </div>

      {/* Right Section */}
      <div className="flex items-center justify-around px-4 flex-[1_1_50%]">
        <span className="flex items-center gap-2">
          <FaClock className="text-white" /> 9.00 am - 5.30 pm
        </span>
        <div className="flex space-x-3">
          <FaFacebookF />
          <FaTwitter />
          <FaInstagram />
        </div>
      </div>
    </div>
  );
};

export default LocationBanner;
