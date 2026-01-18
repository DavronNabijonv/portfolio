import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import en from '../locales/en.json';
import uz from '../locales/uz.json';

const resources = {
  en: { translation: en },
  uz: { translation: uz },
};

i18n
  .use(LanguageDetector)
  .init({
    resources,
    fallbackLng: 'en',
    supportedLngs: ['en', 'uz'],
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
