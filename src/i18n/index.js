import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import zh from './zh';
import zhCN from './zh-CN';
import en from './en';
import vi from './vi';
import id from './id';
import ms from './ms';
import ja from './ja';
import ko from './ko';
import es from './es';
import pt from './pt';
import th from './th';
import fil from './fil';
import bn from './bn';
import km from './km';
import ar from './ar';

i18n.use(initReactI18next).init({
  resources: {
    zh: { translation: zh },
    'zh-CN': { translation: zhCN },
    en: { translation: en },
    vi: { translation: vi },
    id: { translation: id },
    ms: { translation: ms },
    ja: { translation: ja },
    ko: { translation: ko },
    es: { translation: es },
    pt: { translation: pt },
    th: { translation: th },
    fil: { translation: fil },
    bn: { translation: bn },
    km: { translation: km },
    ar: { translation: ar },
  },
  lng: 'en',
  fallbackLng: 'en',
  interpolation: { escapeValue: false },
});

export default i18n;
