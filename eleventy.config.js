import { RenderPlugin } from "@11ty/eleventy";

import * as extensions from "./src/lib/extensions.js";

export default function (cfg) {
  cfg.setServerOptions({
    port: 1212,
  });

  cfg.addExtension("scss", extensions.sass);

  cfg.addPassthroughCopy({ static: "/", assets: "/_assets" });

  cfg.addPlugin(RenderPlugin);

  cfg.addWatchTarget("./src/lib/styles/");

  return {
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dir: {
      input: "src/pages",
      includes: "../lib/includes",
      data: "../data",
      output: "dist",
    },
  };
}
