import "./globals.css";
import { appWithTranslation } from "next-i18next";
import nextI18NextConfig from "../next-i18next.config.js";
import CookieConsentBanner from "../components/CookieConsentBanner";

function App({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <CookieConsentBanner />
    </>
  );
}

export default appWithTranslation(App, nextI18NextConfig);
