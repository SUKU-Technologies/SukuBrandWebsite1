import React from "react";
import { Outlet } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import LocationBanner from "../components/LocationBanner";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const RootLayout = () => {
  return (
    <>
      <Helmet>
        <title>SuKu Technologies - Digital Transformation & Software Solutions</title>
        <meta name="description" content="SuKu Technologies offers innovative digital transformation, software solutions, and corporate social responsibility initiatives to drive business growth." />
        <meta name="keywords" content="digital transformation, software solutions, technology consulting, CSR, Ghana, innovation" />
        <meta name="author" content="SuKu Technologies" />
        <meta property="og:title" content="SuKu Technologies - Digital Transformation & Software Solutions" />
        <meta property="og:description" content="Innovative digital transformation and software solutions for businesses" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://www.sukutechnologies.com" />
      </Helmet>
      <div className="flex flex-col min-h-screen">
        {/* Top Banner */}
        <LocationBanner />

        {/* Sticky NavBar handled inside Navbar component */}
        <NavBar />

        {/* Page Content */}
        <main className="flex-grow">
          <Outlet />
        </main>

        <Footer />
      </div>
    </>
  );
};

export default RootLayout;
