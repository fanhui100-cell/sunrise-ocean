import { Helmet } from 'react-helmet-async';
import { Anchor, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import HeroBg from '../components/HeroBg';

const SITE = 'https://sunrise-ocean.vercel.app';

export default function PrivacyPolicy() {
  const { t } = useTranslation();
  const sections = t('privacy.sections', { returnObjects: true });

  return (
    <div className="min-h-screen pt-20 lg:pt-24">
      <Helmet>
        <title>{t('privacy.meta_title')}</title>
        <meta name="description" content={t('privacy.meta_desc')} />
        <meta name="robots" content="noindex" />
        <link rel="canonical" href={`${SITE}/privacy`} />
      </Helmet>

      {/* Hero */}
      <section className="relative py-16 min-h-[240px] flex items-center overflow-hidden" style={{ background: 'linear-gradient(150deg, #0d2040 0%, #0a1628 60%, #0e1e38 100%)' }}>
        <HeroBg />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 border border-gold-500/40 bg-gold-500/8 text-gold-400 text-xs px-5 py-1.5 rounded-full mb-6 uppercase tracking-[0.2em] font-medium">
            <Shield size={11} /><span>Legal</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4 tracking-tight">{t('privacy.title')}</h1>
          <p className="text-white/40 text-sm">{t('terms.last_updated_label')}: {t('privacy.last_updated')}</p>
        </div>
      </section>

      {/* Content */}
      <section className="bg-[#F5F7FA] py-14">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Intro card */}
          <div className="bg-navy-900 rounded-2xl p-6 mb-8 flex items-start gap-4">
            <Anchor size={22} className="text-gold-500 shrink-0 mt-0.5" />
            <div>
              <p className="text-white/80 text-sm font-semibold mb-1">Sunrise Ocean Engineering Limited</p>
              <p className="text-white/45 text-sm leading-relaxed">{t('privacy.intro')}</p>
            </div>
          </div>

          {/* Sections */}
          <div className="space-y-6">
            {Array.isArray(sections) && sections.map((sec, i) => (
              <div key={i} className="bg-white rounded-2xl p-7 border border-gray-100 shadow-sm">
                <h2 className="text-navy-900 font-bold text-base mb-3">{sec.title}</h2>
                <div className="text-gray-600 text-sm leading-relaxed space-y-2">
                  {sec.body.split('\n').map((line, j) => {
                    if (!line.trim()) return <br key={j} />;
                    const parts = line.split(/\*\*(.*?)\*\*/g);
                    return (
                      <p key={j}>
                        {parts.map((part, k) =>
                          k % 2 === 1 ? <strong key={k} className="text-navy-900 font-semibold">{part}</strong> : part
                        )}
                      </p>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          {/* Related link */}
          <div className="mt-8 bg-white rounded-2xl p-5 border border-gray-100 shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <div>
              <p className="text-navy-900 font-semibold text-sm">Terms of Use / 使用條款</p>
              <p className="text-gray-400 text-xs mt-0.5">{t('privacy.terms_link_desc')}</p>
            </div>
            <Link
              to="/terms"
              className="text-sm text-gold-600 hover:text-gold-700 font-medium transition-colors shrink-0"
            >
              {t('privacy.read_terms')} →
            </Link>
          </div>

          <div className="mt-8 text-center">
            <Link to="/" className="inline-flex items-center gap-2 text-sm text-navy-900/60 hover:text-gold-600 transition-colors">
              ← {t('common.back_home')}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
