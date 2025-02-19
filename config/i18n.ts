import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import * as RNLocalize from "react-native-localize";

import uz from "../locales/uz.json";
import ru from "../locales/ru.json";
import en from "../locales/en.json";

const resources = {
  uz: { translation: uz },
  ru: { translation: ru },
  en: { translation: en },
};

const fallbackLang = "uz"; // Default til
const detectedLang = RNLocalize.getLocales()[0]?.languageCode || fallbackLang;

i18n.use(initReactI18next).init({
  resources,
  //   lng: detectedLang, // Brauzer yoki tizim tilini aniqlash
  fallbackLng: fallbackLang,
  interpolation: { escapeValue: false },
});

export default i18n;
