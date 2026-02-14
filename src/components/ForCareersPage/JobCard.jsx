import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const JobCard = ({ title, category, location, onViewMore }) => {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:bg-blue-100/40 flex flex-col justify-between"
    >
      <div className="flex flex-col space-y-3">
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        <p className="text-sm text-gray-600">{category}</p>
        <p className="text-sm text-gray-600 font-medium">{location}</p>
      </div>

      {/* View More Button */}
      <button
        onClick={onViewMore}
        className="mt-4 flex items-center gap-2 text-blue-600 text-sm font-medium hover:text-blue-800 transition"
      >
        View More
        <ArrowRight className="w-4 h-4" />
      </button>
    </motion.div>
  );
};

export default JobCard;
