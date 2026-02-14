import React, { useState } from "react";
import { motion } from "framer-motion";
import Modal from "react-modal";
import giving from "../../assets/suku-about-banner.webp";
import giving1 from "../../assets/2023-intership-program.webp";
import giving3 from "../../assets/2022-intership-program.webp";
import giving4 from "../../assets/suku-about-banner.webp";

Modal.setAppElement("#root");

const CrsReport = () => {
  const [reports] = useState([
    {
      year: "2024",
      imageUrl: giving,
      pdfUrl: "/pdfs/2023-report.pdf",
    },
    {
      year: "2023",
      imageUrl: giving1,
      pdfUrl: "/pdfs/2023-report.pdf",
    },
    {
      year: "2022",
      imageUrl: giving3,
      pdfUrl: "/pdfs/2023-report.pdf",
    },
    {
      year: "2021",
      imageUrl: giving4,
      pdfUrl: "/pdfs/2023-report.pdf",
    },
  ]);

  const [modalPdf, setModalPdf] = useState(null);
  const [tappedCard, setTappedCard] = useState(null);

  const videoUrl = "https://www.youtube.com/embed/8uXS_494aSo"; 

  const handleMobileTap = (year) => {
    if (tappedCard === year) {
      setTappedCard(null); // Hide overlay if already tapped
    } else {
      setTappedCard(year); // Show overlay
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-16 space-y-16">
      {/* Top Heading */}
      <div className="text-center space-y-3">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          Our CSR REPORTS
        </h2>
        <p className="text-gray-600 text-lg font-medium">
          Social Responsibility Projects
        </p>
      </div>

      {/* Reports Grid */}
      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {reports.map((r) => (
          <motion.div
            key={r.year}
            layout
            className="group relative overflow-hidden border border-gray-200 rounded-xl shadow hover:shadow-lg transition duration-300"
            onClick={() => handleMobileTap(r.year)}
          >
            <motion.img
              src={r.imageUrl}
              alt={`${r.year} CSR Report`}
              layout
              className="w-full h-84 object-cover"
            />

            {/* Hover (desktop) + Tap (mobile) overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{
                opacity: tappedCard === r.year ? 1 : undefined, // mobile tap
              }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 flex items-center justify-center bg-[#032040]/50 text-white z-10 opacity-0 group-hover:opacity-100"
            >
              <button
                className="px-5 py-2 bg-[#2A8ADE] rounded-full font-medium cursor-pointer"
                onClick={(e) => {
                  e.stopPropagation(); // Prevent triggering card tap
                  setModalPdf(r.pdfUrl);
                }}
              >
                Get Report
              </button>
            </motion.div>

            <div className="p-4 bg-white">
              <p className="text-center text-gray-700 font-bold capitalize">
                {r.year} Social Responsibility Report
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Video Section */}
      <div className="mt-12 text-center">
        <h3 className="text-2xl font-semibold mb-6 text-gray-800">
          Watch Our Community Impact
        </h3>
        <div className="mx-auto w-full max-w-5xl rounded-xl overflow-hidden shadow-2xl">
          <iframe
            src={videoUrl}
            title="CSR Community Video"
            frameBorder="0"
            allow="autoplay; encrypted-media; picture-in-picture"
            allowFullScreen
            className="w-full h-[500px] sm:h-[600px] md:h-[550px] lg:h-[500px] xl:h-[650px] rounded-xl"
          />
        </div>
      </div>

      {/* PDF Modal */}
      <Modal
        isOpen={!!modalPdf}
        onRequestClose={() => setModalPdf(null)}
        contentLabel="CSR Report PDF"
        className="relative w-full max-w-6xl mx-auto mt-24 bg-white p-6 rounded-xl shadow-xl outline-none mb-7"
        overlayClassName="fixed inset-0 z-50 bg-black/35 flex items-start justify-center overflow-y-auto"
        shouldCloseOnOverlayClick={true}
        shouldFocusAfterRender={true}
        shouldReturnFocusAfterClose={true}
      >
        <button
          onClick={() => setModalPdf(null)}
          className="absolute top-4 right-4 text-gray-600 text-3xl hover:text-gray-800"
          aria-label="Close"
        >
          &times;
        </button>
        {modalPdf && (
          <iframe
            src={modalPdf}
            title="CSR Report PDF"
            className="w-full h-[80vh] rounded-lg border border-gray-200"
            frameBorder="0"
          />
        )}
      </Modal>
    </div>
  );
};

export default CrsReport;
