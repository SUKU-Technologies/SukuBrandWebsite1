import React from "react";
import { Helmet } from "react-helmet-async";
import Hero from "../components/Hero";
import AboutHome from "../components/AboutHome";
import Feature from "../components/Feature";
import ServicesHome from "../components/ServicesHome";
import PartnerText from "../components/PartnerText";
import HowWeWork from "../components/HowWeWork";
import TestimonialsHome from "../components/TestimonialsHome";

import ContactBanner from "../components/ContactBanner";

const LandingPage = () => {
  return (
    <>
      <Helmet>
        <title>SuKu Technologies - Home | Digital Innovation & Transformation Experts</title>
        <meta name="description" content="Discover SuKu Technologies, your trusted partner for digital transformation, innovative software solutions, and sustainable business growth in Ghana and beyond." />
        <meta name="keywords" content="digital transformation, software development, technology consulting, Ghana, innovation, business solutions" />
        <meta property="og:title" content="SuKu Technologies - Leading Digital Innovation in Ghana" />
        <meta property="og:description" content="Trusted partner for digital transformation and software solutions" />
        <meta property="og:url" content="https://www.sukutechnologies.com/" />
        <meta name="twitter:title" content="SuKu Technologies - Digital Innovation & Transformation Experts" />
        <meta name="twitter:description" content="Discover our innovative digital solutions for business growth" />
      </Helmet>
      <div className="min-h-screen relative bg-[]">
        <Hero />
        <Feature />
        <AboutHome />
        <ServicesHome/>
        <PartnerText/>
        <HowWeWork/>
        <TestimonialsHome/>
        <ContactBanner/>
      </div>
    </>
  );
};

export default LandingPage;
