import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const links = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Digital Transformation", path: "/digital-transformation" },
  { name: "Software Solutions", path: "/software-solutions" },
  { name: "Digital Visibility", path: "/digital-visibility" },
  { name: "Blog", path: "/blog" },
  { name: "Contact", path: "/contact" },
];

const NotFound = () => {
  return (
    <>
      <Helmet defer={false}>
        <title>Page not found | SuKu Technologies</title>
        <meta
          name="description"
          content="The page you requested does not exist on the SuKu Technologies website."
        />
      </Helmet>
      <section className="min-h-[60vh] flex items-center justify-center px-4 py-24 bg-white">
        <div className="max-w-2xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-[#032040] mb-4">
            Page not found
          </h1>
          <p className="text-gray-600 mb-8">
            That address is not on this website. Choose a page below to continue.
          </p>
          <nav aria-label="Helpful pages" className="flex flex-wrap justify-center gap-3">
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="px-4 py-2 rounded-full bg-[#2A8ADE] text-white hover:bg-[#032040] transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>
      </section>
    </>
  );
};

export default NotFound;
