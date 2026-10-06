import { TRANSLATIONS_EN } from './en/translations'
import { TRANSLATIONS_JA } from './ja/translations'
import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'ja',
    resources: {
      en: {
        translation: TRANSLATIONS_EN,
      },
      ja: {
        translation: TRANSLATIONS_JA,
      },
    },
  })
export default i18n
