/** @type {import('next-i18next').UserConfig} */
module.exports = {
  i18n: {
    defaultLocale: "en",
    locales: ["en", "de"],
    localeDetection: false, // Changed from true to false for Next.js core i18n
  },
  localePath:
    typeof window === "undefined"
      ? require("path").resolve("./public/locales")
      : "/locales",
  reloadOnPrerender: process.env.NODE_ENV === "development",
};
