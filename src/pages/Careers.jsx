import React from "react";
import { Helmet } from "react-helmet-async";
import JoinUs from "../components/ForCareersPage/JoinUs";
import CoreValues from "../components/ForCareersPage/CoreValues";
import Impressions from "../components/ForCareersPage/Impressions";
import JobList from "../components/ForCareersPage/JobList";

const Careers = () => {
  return (
    <>
      <Helmet>
        <title>Careers at SuKu Technologies | Join Our Team</title>
        <meta name="description" content="Explore career opportunities at SuKu Technologies. Join our team of innovators driving digital transformation in Ghana and beyond." />
        <meta name="keywords" content="careers Sukutech, jobs, employment, Ghana, tech jobs, digital transformation, join team" />
        <meta property="og:title" content="Careers at SuKu Technologies | Join Our Team" />
        <meta property="og:description" content="Explore opportunities to join our innovative team" />
        <meta property="og:url" content="https://www.sukutechnologies.com/careers" />
        <meta name="twitter:title" content="Careers at SuKu Technologies | Join Our Team" />
        <meta name="twitter:description" content="Explore opportunities to join our innovative team" />
      </Helmet>
      <div>
        <JoinUs />
        <CoreValues />
        <Impressions />
        <div id="job-list">
          <JobList />
        </div>
      </div>
    </>
  );
};

export default Careers;
