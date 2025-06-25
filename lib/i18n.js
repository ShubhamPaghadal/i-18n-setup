"use client";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import HttpBackend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
 
if (!i18n.isInitialized) {
  i18n
    .use(HttpBackend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
      lng:"en",
      fallbackLng: "en",
      ns: ["translation"],
      defaultNS: "translation",
      detection: {
        order: [ "cookie", 'path',"htmlTag", "navigator"],
        caches: ["cookie"],
        lookupCookie: 'lang',
       
      },
      backend: {
        loadPath: "/locales/{{lng}}/{{ns}}.json",
      },
      interpolation: {
        escapeValue: false,
      },
    });
}