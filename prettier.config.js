/* @type {import("prettier").Config}*/
export default {
  useTabs: false,
  tabWidth: 2,
  singleQuote: false,
  trailingComma: "all",
  printWidth: 100,
  arrowParens: "avoid",
  singleAttributePerLine: true,
  plugins: ["@ianvs/prettier-plugin-sort-imports", "prettier-plugin-jinja-template"],
  importOrder: [
    "<BUILTIN_MODULES>",
    "",
    "<THIRD_PARTY_MODULES>",
    "",
    "^(?!.*[.]css$)[./].*$",
    "",
    "\\.css$",
  ],
  overrides: [
    {
      files: ["*.html", "*.njk"],
      options: {
        parser: "jinja-template",
      },
    },
  ],
};
