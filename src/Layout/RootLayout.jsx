import { Outlet, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import LocationBanner from "../components/LocationBanner";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import JsonLd from "../components/JsonLd";
import {
  SITE_ORIGIN,
  blogFromPath,
  canonicalUrl,
  isIndexablePath,
  normalizePath,
  structuredData,
} from "../seo/site";

const RootLayout = () => {
  const { pathname } = useLocation();
  const path = normalizePath(pathname);
  const indexable = isIndexablePath(path);
  const canonical = canonicalUrl(path);
  const article = blogFromPath(path);

  return (
    <>
      <Helmet defer={false}>
        <meta name="author" content="SuKu Technologies" />
        <meta name="robots" content={indexable ? "index, follow" : "noindex, follow"} />
        {indexable && <link rel="canonical" href={canonical} />}
        <meta property="og:site_name" content="SuKu Technologies" />
        <meta property="og:type" content={article ? "article" : "website"} />
        {indexable && <meta property="og:url" content={canonical} />}
        <meta name="twitter:card" content="summary_large_image" />
        {!article && (
          <meta property="og:image" content={`${SITE_ORIGIN}/logo.webp`} />
        )}
        {!article && (
          <meta name="twitter:image" content={`${SITE_ORIGIN}/logo.webp`} />
        )}
      </Helmet>
      {indexable && <JsonLd data={structuredData(path)} />}
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
