import i18n from 'i18next';

import { initReactI18next } from 'react-i18next';

import LanguageDetector from 'i18next-browser-languagedetector';
import enTranslation from './public/locales/en.json';
import itTranslation from './public/locales/it.json';
import daTranslation from './public/locales/da.json';


i18n

  // detect user language

  // learn more: https://github.com/i18next/i18next-browser-languageDetector

  .use(LanguageDetector)

  // pass the i18n instance to react-i18next.

  .use(initReactI18next)

  // init i18next

  // for all options read: https://www.i18next.com/overview/configuration-options

  .init({
    supportedLngs: ['en', 'it', 'da'],

    debug: true,

    fallbackLng: 'en',

    interpolation: {

      escapeValue: false, // not needed for react as it escapes by default

    },

    resources: {

      en: {

        translation: enTranslation

      },
      it: {

        translation: itTranslation

      },
      da: {

        translation: daTranslation

      }

    }

  });

// Add this function to change language programmatically
export const changeLanguage = (language: string) => {
  return i18n.changeLanguage(language);
};

export default i18n;