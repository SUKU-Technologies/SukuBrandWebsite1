import { createRequire } from "node:module";
import { PassThrough } from "node:stream";
import { HelmetProvider } from "react-helmet-async";
import { StaticRouter } from "react-router";
import { MotionGlobalConfig } from "framer-motion";
import { AppShell } from "./App.jsx";

const require = createRequire(import.meta.url);
const { renderToPipeableStream } = require("react-dom/server");

MotionGlobalConfig.skipAnimations = true;

export function render(url) {
  const helmetContext = {};

  return new Promise((resolve, reject) => {
    let settled = false;
    const fail = (error) => {
      if (settled) return;
      settled = true;
      reject(error);
    };

    const { pipe } = renderToPipeableStream(
      <HelmetProvider context={helmetContext}>
        <StaticRouter location={url}>
          <AppShell />
        </StaticRouter>
      </HelmetProvider>,
      {
        onAllReady() {
          const pass = new PassThrough();
          const chunks = [];
          pass.on("data", (chunk) => chunks.push(Buffer.from(chunk)));
          pass.on("error", fail);
          pass.on("end", () => {
            if (settled) return;
            settled = true;
            resolve({
              html: Buffer.concat(chunks).toString("utf8"),
              helmet: helmetContext.helmet,
            });
          });
          pipe(pass);
        },
        onShellError: fail,
        onError: fail,
      }
    );
  });
}
