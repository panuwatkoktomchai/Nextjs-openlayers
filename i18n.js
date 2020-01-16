const NextI18Next = require("next-i18next").default;

module.exports = new NextI18Next({
  defaultLanguage: "th",
  otherLanguages: ["en"],
  defaultNS: ["common"],  
  ignoreRoutes: [],
  //SSR
  //myapp.com         ---> Homepage in defaultLanguage
  //myapp.com/en     ---> Homepage in English
  localeSubpaths: {
    th: 'th',
    en: 'en',
  },
  // workaround until next-i18next support public path
  // https://github.com/isaachinman/next-i18next/issues/523
  localePath: typeof window === "undefined" ? "public/static/locales" : "locales"
});