import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { analytics } from "../services/analytics";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Track page view with analytics (if consent given)
    analytics.trackPageView(pathname, document.title);
  }, [pathname]);

  return null;
};

export default ScrollToTop;