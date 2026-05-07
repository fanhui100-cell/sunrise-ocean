import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Anchor, Home } from 'lucide-react';

export default function NotFound() {
  const { t } = useTranslation();
  return (
    <div className="min-h-screen pt-20 lg:pt-24 bg-gradient-to-b from-navy-900 via-navy-800 to-navy-900 flex items-center">
      <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-16">
        <Anchor size={48} className="text-gold-500 mx-auto mb-6" />
        <div className="text-7xl sm:text-8xl font-bold text-gold-400 mb-2 tracking-tight">404</div>
        <div className="flex items-center justify-center gap-3 mb-6">
          <div className="h-px w-12 bg-gold-500/40" />
          <Anchor size={14} className="text-gold-500" />
          <div className="h-px w-12 bg-gold-500/40" />
        </div>
        <h1 className="text-2xl sm:text-3xl font-bold text-white mb-3">
          {t('notfound.title')}
        </h1>
        <p className="text-white/60 mb-8 leading-relaxed">{t('notfound.subtitle')}</p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 bg-gold-500 hover:bg-gold-400 text-navy-900 font-semibold px-8 py-3 rounded transition-colors"
        >
          <Home size={16} />
          {t('notfound.back_home')}
        </Link>
      </div>
    </div>
  );
}

