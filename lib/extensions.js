import path from "node:path";

import cssnano from "cssnano";
import postcss from "postcss";
import * as SASS from "sass";

const isProduction = process.env.NODE_ENV === "production";

export const sass = {
  outputFileExtension: "css",
  useLayouts: false,
  compile: async function (inputContent, inputPath) {
    let parsed = path.parse(inputPath);
    if (parsed.name.startsWith("_")) {
      return;
    }

    const compiled = SASS.compileString(inputContent, {
      loadPaths: [parsed.dir || ".", this.config.dir.includes],
    });

    let result = compiled.css;
    if (isProduction) {
      const minified = await postcss([cssnano]).process(compiled.css, {
        from: undefined,
      });
      result = minified.content;
    }

    this.addDependencies(inputPath, compiled.loadedUrls);

    return async data => {
      return result;
    };
  },
};
