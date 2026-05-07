import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import zh from './zh';
import zhCN from './zh-CN';
import en from './en';
import vi from './vi';
import id from './id';
import ms from './ms';

i18n.use(initReactI18next).init({
  resources: {
    zh: { translation: zh },
    'zh-CN': { translation: zhCN },
    en: { translation: en },
    vi: { translation: vi },
    id: { translation: id },
    ms: { translation: ms },
  },
  lng: 'zh',
  fallbackLng: 'en',
  interpolation: { escapeValue: false },
});

export default i18n;
