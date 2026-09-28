import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { createServer } from "vite";
import { publicRoutes, renderSitemap, isIndexablePath } from "../src/seo/site.js";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const distDir = path.join(root, "dist");

function withTimeout(promise, ms, label) {
  return Promise.race([
    promise,
    new Promise((_, reject) => {
      setTimeout(() => reject(new Error(`Timed out rendering ${label}`)), ms);
    }),
  ]);
}

function helmetHead(helmet) {
  if (!helmet) return "";
  return [
    helmet.title?.toString?.() || "",
    helmet.meta?.toString?.() || "",
    helmet.link?.toString?.() || "",
    helmet.script?.toString?.() || "",
  ]
    .filter(Boolean)
    .join("\n");
}

function loadManifest() {
  const candidates = [
    path.join(distDir, ".vite", "manifest.json"),
    path.join(distDir, "manifest.json"),
  ];
  const manifestPath = candidates.find((candidate) => fs.existsSync(candidate));
  if (!manifestPath) return {};
  return JSON.parse(fs.readFileSync(manifestPath, "utf8"));
}

function rewriteAssetUrls(html, manifest) {
  const replacements = [];
  for (const [key, entry] of Object.entries(manifest)) {
    if (!entry?.file) continue;
    const source = String(entry.src || key).replace(/\\/g, "/");
    if (!source.includes("assets/")) continue;
    const file = String(entry.file).replace(/\\/g, "/");
    const dest = file.startsWith("/") ? file : `/${file}`;
    replacements.push([source, dest]);
    const encoded = encodeURI(source);
    if (encoded !== source) replacements.push([encoded, dest]);
    const htmlEscaped = source.replace(/&/g, "&amp;");
    if (htmlEscaped !== source) replacements.push([htmlEscaped, dest]);
    const encodedEscaped = encodeURI(source).replace(/&/g, "&amp;");
    if (encodedEscaped !== source && encodedEscaped !== encoded && encodedEscaped !== htmlEscaped) {
      replacements.push([encodedEscaped, dest]);
    }
  }

  replacements.sort((a, b) => b[0].length - a[0].length);
  let output = html;
  for (const [source, dest] of replacements) {
    const escaped = source.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    const pattern = new RegExp(`[^"'\\s>]*${escaped}(?:\\?[^"'\\s>]*)?`, "g");
    output = output.replace(pattern, dest);
  }
  return output;
}

const ASSET_MIME = {
  png: "image/png",
  webp: "image/webp",
  jpg: "image/jpeg",
  jpeg: "image/jpeg",
  gif: "image/gif",
  svg: "image/svg+xml",
};

function inlineUnresolvedAssets(html) {
  return html.replace(/\/@fs\/[^"'()\s]+|\/src\/assets\/[^"'()\s]+/g, (raw) => {
    const clean = decodeURIComponent(raw.split("?")[0]).replace(/&amp;/g, "&");
    const marker = "src/assets/";
    const index = clean.indexOf(marker);
    if (index === -1) return raw;
    const absolute = path.join(root, clean.slice(index));
    if (!fs.existsSync(absolute)) return raw;
    const data = fs.readFileSync(absolute);
    const ext = path.extname(absolute).slice(1).toLowerCase();
    const mime = ASSET_MIME[ext] || "application/octet-stream";
    if (data.length <= 4096) {
      return `data:${mime};base64,${data.toString("base64")}`;
    }
    const filename = path.basename(absolute);
    const dest = path.join(distDir, "assets", filename);
    fs.mkdirSync(path.dirname(dest), { recursive: true });
    if (!fs.existsSync(dest)) fs.copyFileSync(absolute, dest);
    return `/assets/${encodeURI(filename)}`;
  });
}

function outputFileFor(routePath) {
  if (routePath === "/") return path.join(distDir, "index.html");
  return path.join(distDir, routePath.replace(/^\//, ""), "index.html");
}

export async function prerender() {
  const templatePath = path.join(distDir, "index.html");
  if (!fs.existsSync(templatePath)) {
    throw new Error("dist/index.html is missing. Run the client build before prerendering.");
  }

  const template = fs.readFileSync(templatePath, "utf8");
  if (!/<div id="root">\s*<\/div>/.test(template)) {
    throw new Error("dist/index.html is not a fresh Vite shell. Run the client build again before prerendering.");
  }
  const manifest = loadManifest();
  const vite = await createServer({
    configFile: path.join(root, "vite.config.js"),
    server: { middlewareMode: true },
    appType: "custom",
    logLevel: "error",
  });

  try {
    const { render } = await vite.ssrLoadModule("/src/entry-server.jsx");
    const routes = publicRoutes().map((route) => route.path);
    const only = process.env.PRERENDER_ONLY;
    const jobs = only ? [only] : [...routes, "/__not-found__"];

    for (const routePath of jobs) {
      const { html, helmet } = await withTimeout(render(routePath), 30000, routePath);
      const head = helmetHead(helmet);
      const indexable = isIndexablePath(routePath);
      const expectedText = {
        "/": "Powering Growth with Smart IT Solutions",
        "/about": "A Legacy of Innovation and Impact",
        "/contact": "Contact Us",
        "/blog": "Our Blog",
        "/__not-found__": "Page not found",
      }[routePath];
      if (expectedText && !html.includes(expectedText)) {
        throw new Error(`Prerendered ${routePath} is missing its page content`);
      }
      if (!html.includes("<h1")) {
        throw new Error(`Prerendered ${routePath} is missing an h1`);
      }
      if (indexable && !head.includes('rel="canonical"')) {
        throw new Error(`Prerendered ${routePath} is missing a canonical URL`);
      }
      if (!indexable && !head.includes("noindex")) {
        throw new Error(`Prerendered ${routePath} is missing noindex`);
      }

      const body = inlineUnresolvedAssets(rewriteAssetUrls(html, manifest));
      if (body.includes("/@fs/") || body.includes("/src/assets/")) {
        throw new Error(`Prerendered ${routePath} still points at source asset URLs`);
      }

      let page = template.replace(
        /<!--seo:start-->[\s\S]*?<!--seo:end-->/,
        `<!--seo:start-->\n${head}\n<!--seo:end-->`
      );
      if (!/<div id="root">\s*<\/div>/.test(page)) {
        throw new Error("The HTML shell has no empty root element to prerender into");
      }
      page = page.replace(
        /<div id="root">\s*<\/div>/,
        `<div id="root">${body}</div>`
      );
      if (!page.includes("data-prerender-visibility")) {
        page = page.replace(
          "</head>",
          '<style data-prerender-visibility>#root, #root * { opacity: 1 !important; }</style>\n</head>'
        );
      }

      const destination =
        routePath === "/__not-found__"
          ? path.join(distDir, "404.html")
          : outputFileFor(routePath);
      fs.mkdirSync(path.dirname(destination), { recursive: true });
      fs.writeFileSync(destination, page);
      if (expectedText && !fs.readFileSync(destination, "utf8").includes(expectedText)) {
        throw new Error(`Saved ${routePath} does not contain its page content`);
      }
      console.log(`prerendered ${routePath} -> ${path.relative(root, destination)}`);
    }
  } finally {
    await vite.close();
  }

  const sitemap = renderSitemap();
  fs.writeFileSync(path.join(distDir, "sitemap.xml"), sitemap);
  fs.writeFileSync(path.join(root, "public", "sitemap.xml"), sitemap);

  const robotsPath = path.join(distDir, "robots.txt");
  if (!fs.existsSync(robotsPath)) {
    throw new Error("dist/robots.txt was not emitted");
  }
  const robots = fs.readFileSync(robotsPath, "utf8");
  if (!robots.includes("Sitemap: https://www.sukutechnologies.com/sitemap.xml")) {
    throw new Error("robots.txt is missing the sitemap declaration");
  }
}

const invokedDirectly = process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url);
if (invokedDirectly) {
  prerender().catch((error) => {
    console.error(error);
    process.exit(1);
  });
}
