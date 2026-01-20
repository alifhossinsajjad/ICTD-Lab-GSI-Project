import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "../en/en.json";
import bn from "../bn/bn.json";

i18n
  .use(initReactI18next) 
  .init({
    resources: {
      en: { translation: en },
      bn: { translation: bn },
    },
    lng: "bn",
    fallbackLng: "bn",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
