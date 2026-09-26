export default function (cfg) {
  cfg.setServerOptions({
    port: 1212,
  });

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
