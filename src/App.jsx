import "./App.css";
import { Toaster } from "react-hot-toast";
import PageLoading from "./components/PageLoading";
import { lazy, Suspense, useState, useEffect } from "react";

//Layouts components
import RootLayout from "./Layout/RootLayout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";


// SEO Meta Tags
import { HelmetProvider } from "react-helmet-async";

// Components
import CookieConsent from "./components/CookieConsent";

//Lazy-loaded pages components
const LandingPage = lazy(() => import("./pages/LandingPage"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const Careers = lazy(() => import("./pages/Careers"));
const DigitalTransform = lazy(() => import("./pages/DigiTransform"));
const DigitalVisibility = lazy(() => import("./pages/DigitalVisibility"));
const SoftwareSolutions = lazy(() => import("./pages/SoftwareSolutions"));
const CRS = lazy(() => import("./pages/CRS"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));

function App() {
  const [showLoader, setShowLoader] = useState(false);

  useEffect(() => {
    const visited = localStorage.getItem("visited");
    if (!visited) {
      setShowLoader(true); // show loader only first time
    }
  }, []);

  if (showLoader) {
    return (
      <PageLoading
        onFinish={() => {
          localStorage.setItem("visited", "true");
          setShowLoader(false);
        }}
      />
    );
  }

  return (
    <>
      {/* Toaster Configuration */}
      <Toaster
        toastOptions={{
          success: {
            style: {
              background: "#4caf50",
              color: "#fff",
              fontWeight: "bold",
              padding: "12px 20px",
              borderRadius: "8px",
            },
            iconTheme: {
              primary: "#fff",
              secondary: "#4caf50",
            },
          },
          error: {
            style: {
              background: "#f44336",
              color: "#fff",
              fontWeight: "bold",
              padding: "12px 20px",
              borderRadius: "8px",
            },
            iconTheme: {
              primary: "#fff",
              secondary: "#f44336",
            },
          },
        }}
        position="top-right"
        reverseOrder={false}
      />

      {/* Routing with Lazy Loading */}
      <HelmetProvider>
        <BrowserRouter>
          <ScrollToTop />
          <Suspense fallback={<PageLoading />}>
            <Routes>
              <Route path="/" element={<RootLayout />}>
                <Route index element={<LandingPage />} />
                <Route path="/about" element={<About />} />
                <Route
                  path="/digital-transformation"
                  element={<DigitalTransform />} />
                <Route
                  path="/digital-visibility"
                  element={<DigitalVisibility />} />
                <Route
                  path="/software-solutions"
                  element={<SoftwareSolutions />} />
                <Route path="csr" element={<CRS />} />
                <Route path="/careers" element={<Careers />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              </Route>
            </Routes>
          </Suspense>
        </BrowserRouter>
      </HelmetProvider>
      <CookieConsent />
    </>
  );
}

export default App;