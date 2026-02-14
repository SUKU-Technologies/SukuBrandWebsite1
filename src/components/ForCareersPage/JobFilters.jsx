import React from "react";

const JobFilters = ({ onFilterChange }) => {
  const selectClasses =
    "w-[48%] sm:w-auto text-gray-600 text-sm sm:text-base rounded-lg px-3 py-2 shadow-md focus:outline-none focus:ring-0 focus:border-transparent bg-white border border-gray-100 appearance-none";

  return (
    <div className="flex flex-wrap gap-3 justify-center mb-8">
      <select
        className={selectClasses}
        onChange={(e) => onFilterChange("category", e.target.value)}
      >
        <option>All Job Category</option>
        <option>Development</option>
        <option>Operations</option>
        <option>Sales and Marketing</option>
        <option>Graphic Design</option>
      </select>

      <select
        className={selectClasses}
        onChange={(e) => onFilterChange("type", e.target.value)}
      >
        <option>All Job Type</option>
        <option>Full time</option>
        <option>Internship</option>
        <option>Contract</option>
      </select>

      <select
        className={selectClasses}
        onChange={(e) => onFilterChange("location", e.target.value)}
      >
        <option>All Job Location</option>
        <option>Ghana</option>
        <option>Sierra Leone</option>
      </select>
    </div>
  );
};

export default JobFilters;
