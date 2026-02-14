import React from "react";
import { Helmet } from "react-helmet-async";
import ContactHeader from "../components/ForContactPage/ContactHeader";
import ContactInfo from "../components/ForContactPage/ContactInfo";
import ContactForm from "../components/ForContactPage/ContactForm";

const Contact = () => {
  return (
    <>
      <Helmet>
        <title>Contact SuKu Technologies | Get in Touch</title>
        <meta name="description" content="Get in touch with SuKu Technologies. Reach out for inquiries, partnerships, or to learn more about our digital transformation and software solutions services." />
        <meta name="keywords" content="contact Sukutech, contact form, get in touch, support, inquiry, Ghana, Accra" />
        <meta property="og:title" content="Contact SuKu Technologies | Get in Touch" />
        <meta property="og:description" content="Reach out to us for inquiries about our digital transformation services" />
        <meta property="og:url" content="https://www.sukutechnologies.com/contact" />
        <meta name="twitter:title" content="Contact SuKu Technologies | Get in Touch" />
        <meta name="twitter:description" content="Get in touch with us for inquiries about our services" />
      </Helmet>
      <div>
        <ContactHeader />
        <ContactInfo />
        <ContactForm />
      </div>
    </>
  );
};

export default Contact;
