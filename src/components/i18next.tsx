import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from "./language/english/global_en.json";
import tn from "./language/tamil/global_tn.json";

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      tn: { translation: tn },
    },
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  })
  .then(() => {
    console.log('i18n is initialized');
  });

export default i18n;
