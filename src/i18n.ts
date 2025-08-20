import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import enNs1 from "../locales/en.json";
import plNs1 from "../locales/pl.json";

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    detection: {
      order: ["localStorage", "cookie", "navigator"],
      caches: ["localStorage"],
    },
    debug: true,
    resources: {
      en: { ns1: enNs1 },
      pl: { ns1: plNs1 },
    },
    fallbackLng: ["en", "pl"],
    defaultNS: "ns1",
    ns: ["ns1"],
  });

export default i18n;
