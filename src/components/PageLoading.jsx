import React, { useEffect, useState } from "react";
import Icon from "../assets/LOGO.webp";
import { BarLoader } from "react-spinners";

const PageLoading = ({ onFinish }) => {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Keep loader for 5 seconds
    const timer = setTimeout(() => {
      setFadeOut(true);

      // After fade animation completes, trigger onFinish
      setTimeout(() => {
        if (onFinish) onFinish();
      }, 500); // fade duration
    }, 5000); // 5 seconds

    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div
      className={`flex flex-col items-center justify-center h-screen bg-white gap-6 transition-opacity duration-500 ${
        fadeOut ? "opacity-0" : "opacity-100"
      }`}
    >
      {/* Logo */}
      <img src={Icon} alt="Logo" className="w-40 h-25 animate-pulse" loading="lazy" />

      {/* FadeLoader spinner */}
      <BarLoader color="#2563eb" height={3} width={140} radius={2} margin={2} speedMultiplier={2} />
    </div>
  );
};

export default PageLoading;
