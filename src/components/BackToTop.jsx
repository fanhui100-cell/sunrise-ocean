import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { ArrowUp } from 'lucide-react';

export default function BackToTop() {
  const { t } = useTranslation();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      title={t('common.back_to_top')}
      className="fixed bottom-6 right-6 z-40 w-11 h-11 bg-navy-900 hover:bg-navy-800 text-gold-400 rounded-full shadow-lg flex items-center justify-center transition-all duration-200 hover:scale-110"
      aria-label={t('common.back_to_top')}
    >
      <ArrowUp size={18} />
    </button>
  );
}
