module.exports = {
  // Type check TypeScript files
  "**/*.(ts|tsx)": () => "npx tsc --noEmit",

  // Prettify only Markdown and JSON files
  "**/*.(md|json)": (filenames) => `npx prettier --write ${filenames.join(" ")}`,

  // Lint & Prettify TS and JS files
  "**/*.(ts|tsx|js)": (filenames) => [`npx prettier --write ${filenames.join(" ")}`, `npx eslint --fix ${filenames.join(" ")}`],

  //Format SCSS files
  "**/*.scss": (filenames) => `npm run stylelint ${filenames.join(" ")}`,
};
