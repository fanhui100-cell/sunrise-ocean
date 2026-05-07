import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Cookie, X } from 'lucide-react';

const STORAGE_KEY = 'soe-cookie-consent';

export default function CookieBanner() {
  const { t } = useTranslation();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem(STORAGE_KEY)) {
      const timer = setTimeout(() => setVisible(true), 800);
      return () => clearTimeout(timer);
    }
  }, []);

  const handle = (choice) => {
    localStorage.setItem(STORAGE_KEY, choice);
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-navy-900/95 backdrop-blur-sm border-t border-gold-500/30 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4">
        <Cookie size={20} className="text-gold-400 shrink-0 hidden sm:block" />
        <p className="text-sm text-white/80 flex-1 leading-relaxed">{t('cookie.message')}</p>
        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={() => handle('declined')}
            className="px-4 py-1.5 text-sm text-white/60 hover:text-white border border-white/20 hover:border-white/40 rounded transition-colors"
          >
            {t('cookie.decline')}
          </button>
          <button
            onClick={() => handle('accepted')}
            className="px-4 py-1.5 text-sm bg-gold-500 hover:bg-gold-400 text-navy-900 font-semibold rounded transition-colors"
          >
            {t('cookie.accept')}
          </button>
          <button
            onClick={() => handle('dismissed')}
            className="text-white/40 hover:text-white p-1"
            aria-label="Close"
          >
            <X size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}
