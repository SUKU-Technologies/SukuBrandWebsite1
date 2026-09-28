import { blogsData } from "../data/blogsData.js";

export const SITE_ORIGIN = "https://www.sukutechnologies.com";

export const SOCIAL_PROFILES = [
  "https://web.facebook.com/sukutechnologies",
  "https://x.com/sukutech_",
  "https://www.instagram.com/sukutechnologies_/",
  "https://www.linkedin.com/company/suku-technologies/posts/",
];

const STATIC_ROUTES = [
  { path: "/", changefreq: "weekly", priority: "1.0", lastmod: "2026-09-27" },
  { path: "/about", changefreq: "monthly", priority: "0.8", lastmod: "2026-09-27" },
  { path: "/digital-transformation", changefreq: "monthly", priority: "0.9", lastmod: "2026-09-27" },
  { path: "/digital-visibility", changefreq: "monthly", priority: "0.9", lastmod: "2026-09-27" },
  { path: "/software-solutions", changefreq: "monthly", priority: "0.9", lastmod: "2026-09-27" },
  { path: "/digital-trust", changefreq: "monthly", priority: "0.9", lastmod: "2026-09-28" },
  { path: "/csr", changefreq: "monthly", priority: "0.6", lastmod: "2026-09-27" },
  { path: "/careers", changefreq: "weekly", priority: "0.7", lastmod: "2026-09-27" },
  { path: "/contact", changefreq: "monthly", priority: "0.7", lastmod: "2026-09-27" },
  { path: "/blog", changefreq: "weekly", priority: "0.8", lastmod: "2026-02-10" },
  { path: "/privacy-policy", changefreq: "yearly", priority: "0.3", lastmod: "2026-09-27" },
];

const PAGE_LABELS = {
  "/about": "About Us",
  "/digital-transformation": "Digital Transformation Solutions",
  "/digital-visibility": "Digital Visibility",
  "/software-solutions": "Software Solutions",
  "/digital-trust": "Digital Trust Solutions",
  "/csr": "Corporate Social Responsibility",
  "/careers": "Careers",
  "/contact": "Contact",
  "/blog": "Blog",
  "/privacy-policy": "Privacy Policy",
};

const SERVICE_PAGES = {
  "/digital-transformation": {
    name: "Digital Transformation Solutions",
    description:
      "Analysis and consulting, digital strategy, and change management for businesses adopting new technology.",
  },
  "/digital-visibility": {
    name: "Digital Visibility",
    description:
      "Search visibility, social media marketing, website development, and hosting.",
  },
  "/software-solutions": {
    name: "Software Solutions",
    description:
      "Custom software, web and mobile applications, and maintenance.",
  },
  "/digital-trust": {
    name: "Digital Trust Solutions",
    description:
      "Trust infrastructure and verified professional passports for authenticating businesses and professionals.",
  },
};

export function publicRoutes() {
  const posts = [...blogsData]
    .sort((a, b) => b.date.localeCompare(a.date))
    .map((post) => ({
      path: `/blog/${post.slug}`,
      changefreq: "monthly",
      priority: "0.7",
      lastmod: post.date,
    }));

  return [...STATIC_ROUTES, ...posts];
}

export function normalizePath(pathname = "/") {
  if (!pathname || pathname === "/") return "/";
  const path = pathname.split("?")[0].split("#")[0];
  const trimmed = path.replace(/\/+$/, "");
  return trimmed || "/";
}

export function canonicalUrl(pathname) {
  const path = normalizePath(pathname);
  return path === "/" ? `${SITE_ORIGIN}/` : `${SITE_ORIGIN}${path}`;
}

export function blogFromPath(pathname) {
  const path = normalizePath(pathname);
  const match = path.match(/^\/blog\/([^/]+)$/);
  if (!match) return null;
  return blogsData.find((post) => post.slug === match[1]) || null;
}

export function isIndexablePath(pathname) {
  const path = normalizePath(pathname);
  if (STATIC_ROUTES.some((route) => route.path === path)) return true;
  return Boolean(blogFromPath(path));
}

export function renderSitemap() {
  const urls = publicRoutes()
    .map(
      (route) => `  <url>
    <loc>${canonicalUrl(route.path)}</loc>
    <lastmod>${route.lastmod}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`
    )
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;
}

function crumb(name, path) {
  return { name, path };
}

export function breadcrumbItems(pathname) {
  const path = normalizePath(pathname);
  if (path === "/" || !isIndexablePath(path)) return [];

  const home = crumb("Home", "/");
  const post = blogFromPath(path);
  if (post) {
    return [home, crumb("Blog", "/blog"), crumb("Article", path)];
  }

  const label = PAGE_LABELS[path];
  if (!label) return [];
  return [home, crumb(label, path)];
}

export function structuredData(pathname) {
  const path = normalizePath(pathname);
  const pageUrl = canonicalUrl(path);
  const post = blogFromPath(path);
  const graph = [
    {
      "@type": "Organization",
      "@id": `${SITE_ORIGIN}/#organization`,
      name: "SuKu Technologies",
      url: `${SITE_ORIGIN}/`,
      logo: `${SITE_ORIGIN}/logo.webp`,
      sameAs: SOCIAL_PROFILES,
      ...(path === "/contact"
        ? {
            email: "support@sukutechnologies.com",
            telephone: ["+233242564188", "+233302903220", "+23273860666"],
            address: [
              {
                "@type": "PostalAddress",
                streetAddress: "21 King Tackie Ave, Hilla Limann Hw, North Rid",
                addressCountry: "GH",
              },
              {
                "@type": "PostalAddress",
                streetAddress: "48 Liverpool Street",
                addressLocality: "Freetown",
                addressCountry: "SL",
              },
            ],
          }
        : {}),
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_ORIGIN}/#website`,
      url: `${SITE_ORIGIN}/`,
      name: "SuKu Technologies",
      publisher: { "@id": `${SITE_ORIGIN}/#organization` },
      inLanguage: "en",
    },
  ];

  const crumbs = breadcrumbItems(path);
  if (crumbs.length > 1) {
    graph.push({
      "@type": "BreadcrumbList",
      "@id": `${pageUrl}#breadcrumb`,
      itemListElement: crumbs.map((item, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: item.name,
        item: canonicalUrl(item.path),
      })),
    });
  }

  const service = SERVICE_PAGES[path];
  if (service) {
    graph.push({
      "@type": "Service",
      name: service.name,
      description: service.description,
      url: pageUrl,
      provider: { "@id": `${SITE_ORIGIN}/#organization` },
      areaServed: ["GH", "SL"],
    });
  }

  if (post) {
    graph.push({
      "@type": "Article",
      headline: post.title,
      description: post.excerpt,
      datePublished: post.date,
      image: post.image,
      author: {
        "@type": "Organization",
        name: post.author,
      },
      publisher: { "@id": `${SITE_ORIGIN}/#organization` },
      mainEntityOfPage: pageUrl,
      articleSection: post.category,
      inLanguage: "en",
    });
  }

  return {
    "@context": "https://schema.org",
    "@graph": graph,
  };
}
