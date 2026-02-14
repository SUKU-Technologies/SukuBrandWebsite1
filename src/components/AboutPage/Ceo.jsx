import React, { useState } from "react";
import { motion } from "framer-motion";
import ceoImage from "../../assets/CEO image.webp";

const Ceo = () => {
  const defaultParagraph = `At Suku Technologies, we are driven by Excellence, Leadership, and Integrity. These values guide every project we undertake and define our commitment to client satisfaction. 
Years of experience across local and international sectors have shaped my leadership and deepened my understanding of business challenges. 
We believe effective leadership requires continuous growth to better serve and guide those who rely on us.`;

const missionText = `Hard work and perseverance are key to entrepreneurial success. I strive to stay humble, maximize my potential, and do good along the way.
Leading Suku has been a journey of growth—learning from peers, industry experts, and shaping a culture where everyone can thrive and evolve together.`;


  const philosophyText = `Integrating security into DevOps requires new tools, processes, and collaboration. 
By embedding security expertise within agile workflows, we ensure robust safeguards without slowing down innovation.`;


  const [activeTab, setActiveTab] = useState("default");

  const renderParagraph = () => {
    if (activeTab === "mission") return missionText;
    if (activeTab === "philosophy") return philosophyText;
    return defaultParagraph;
  };

  return (
    <div className="w-full h-[550px] bg-[#f9f9f9] text-white  py-16 px-6 md:px-20 flex flex-col md:flex-row items-center gap-10 overflow-hidden">
      {/* Image Section */}
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full md:w-1/2 flex justify-center"
      >
        <motion.img
          src={ceoImage}
          alt="Tsonam Akpeloo"
          className="rounded-lg w-[32rem] h-[35rem] object-cover"
          // animate={{ y: [0, -10, 0, 10, 0] }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </motion.div>

      {/* Text Section */}
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
        className="w-full md:w-[43%] space-y-6"
      >
        {/* Heading */}
        <h2 className="text-3xl font-bold text-[#032040]">
          Message from the CEO and Founder
        </h2>

        {/* Name */}
        <h3 className="text-2xl font-semibold text-[#00AEEF]">
          TSONAM AKPELOO
        </h3>

        {/* Tabs */}
        <div className="flex gap-4 mt-4">
          <button
            onClick={() => setActiveTab("mission")}
            className={`py-2 px-4 rounded-full text-sm font-medium transition ${
              activeTab === "mission"
                ? "bg-white text-[#032040]"
                : "bg-[#004267] hover:bg-white hover:text-[#032040]"
            }`}
          >
            My Mission
          </button>
          <button
            onClick={() => setActiveTab("philosophy")}
            className={`py-2 px-4 rounded-full text-sm font-medium transition ${
              activeTab === "philosophy"
                ? "bg-white text-[#032040]"
                : "bg-[#004267] hover:bg-white hover:text-[#032040]"
            }`}
          >
            My Philosophy
          </button>
        </div>

        {/* Paragraph */}
        <p className="text-[#032040] text-[15px] leading-relaxed font-medium text-justify whitespace-pre-line">
          {renderParagraph()}
        </p>
      </motion.div>
    </div>
  );
};

export default Ceo;
