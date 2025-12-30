import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from "../en/en.json"
import bn from "../bn/bn.json";

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {
      en: { translation: en },
      bn: { translation: bn },
    },
    lng: "en",
    fallbackLng: "en",
    interpolation: {
      escapeValue: false, // react already escapes
    },
  });

export default i18n;
