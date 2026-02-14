import React, { useState } from "react";
import JobFilters from "./JobFilters";
import JobCard from "./JobCard";

const jobData = [
  {
    title: "Back-End Developer",
    category: "Development",
    type: "Full time",
    location: "Ghana",
  },
  {
    title: "Junior Software Developer",
    category: "Development",
    type: "Internship",
    location: "Sierra Leone",
  },
  {
    title: "Front-End Developer",
    category: "Development",
    type: "Full time",
    location: "Ghana",
  },
  {
    title: "Senior DevOps Engineer",
    category: "Operations",
    type: "Full time",
    location: "Ghana",
  },
  {
    title: "Business Development Manager",
    category: "Sales and Marketing",
    type: "Contract",
    location: "Sierra Leone",
  },
  {
    title: "Graphic Designer Intern",
    category: "Graphic Design",
    type: "Internship",
    location: "Sierra Leone",
  },
];

const JobList = () => {
  const [filters, setFilters] = useState({
    category: "",
    type: "",
    location: "",
  });

  const filteredJobs = jobData.filter((job) => {
    return (
      (!filters.category || job.category === filters.category) &&
      (!filters.type || job.type === filters.type) &&
      (!filters.location || job.location.includes(filters.location))
    );
  });

  const handleFilterChange = (field, value) => {
    setFilters({ ...filters, [field]: value });
  };

  const handleViewMore = (jobTitle) => {
    console.log(`View more about: ${jobTitle}`);
    // Here you can navigate to a job details page or open a modal
  };

  return (
    <div className="px-4 py-10 max-w-7xl mx-auto">
      <h3 className="text-sm text-blue-600 text-center capitalize font-bold mb-2">
        Join Us
      </h3>
      <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-4">
        Available Job Opportunities at Suku Technologies.
      </h2>

      <JobFilters onFilterChange={handleFilterChange} />

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filteredJobs.map((job, index) => (
          <JobCard
            key={index}
            title={job.title}
            category={job.category}
            location={job.location}
            onViewMore={() => handleViewMore(job.title)}
          />
        ))}
      </div>
    </div>
  );
};

export default JobList;
