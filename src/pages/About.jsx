import { useTranslation } from 'react-i18next';
import { Anchor, Award, Users, Globe, Shield } from 'lucide-react';
import SEO from '../components/SEO';
import HeroBg from '../components/HeroBg';

function OceanPattern() {
  return (
    <svg className="absolute inset-0 w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="grid2" width="60" height="60" patternUnits="userSpaceOnUse">
          <path d="M 60 0 L 0 0 0 60" fill="none" stroke="rgba(201,168,76,0.3)" strokeWidth="0.5" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#grid2)" />
    </svg>
  );
}

const valueIcons = [Award, Shield, Users, Globe];

export default function About() {
  const { t } = useTranslation();
  const values = t('about.values', { returnObjects: true });

  const stats = [
    { num: '10+', label: t('about.stats.years_label') },
    { num: '50+', label: t('about.stats.projects_label') },
    { num: '8', label: t('about.stats.countries_label') },
    { num: '10+', label: t('about.stats.team_label') },
  ];

  return (
    <div className="min-h-screen pt-20 lg:pt-24">
      <SEO titleKey={t('seo.about.title')} descKey={t('seo.about.description')} path="/about" />
      {/* Hero Banner */}
      <section className="relative py-20 min-h-[320px] flex items-center overflow-hidden" style={{ background: 'linear-gradient(150deg, #0d2040 0%, #0a1628 60%, #0e1e38 100%)' }}>
        <HeroBg />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 border border-gold-500/40 bg-gold-500/8 text-gold-400 text-xs px-5 py-1.5 rounded-full mb-6 uppercase tracking-[0.2em] font-medium">
            <Anchor size={11} />
            <span>About Us</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-5 tracking-tight">
            {t('about.title')}
          </h1>
          <div className="flex items-center justify-center gap-4 mb-5">
            <div className="h-px w-20 bg-gradient-to-r from-transparent to-gold-500/80" />
            <div className="w-1.5 h-1.5 rounded-full bg-gold-500" />
            <div className="h-px w-20 bg-gradient-to-l from-transparent to-gold-500/80" />
          </div>
          <p className="text-white/55 text-base sm:text-lg">{t('about.subtitle')}</p>
        </div>
      </section>

      {/* Company Intro */}
      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-5">
            <p className="text-gray-600 leading-relaxed text-base sm:text-lg">
              {t('about.body1')}
            </p>
            <p className="text-gray-600 leading-relaxed text-base sm:text-lg">
              {t('about.body2')}
            </p>
            <p className="text-gray-600 leading-relaxed text-base sm:text-lg">
              {t('about.body3')}
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-navy-900 py-14">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((s, i) => (
              <div key={i} className="text-center border border-white/10 rounded-xl p-6">
                <div className="text-gold-400 text-3xl font-bold mb-2">{s.num}</div>
                <div className="text-white/50 text-sm leading-snug">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="bg-[#F5F7FA] py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-gold-500 text-xs uppercase tracking-widest font-semibold mb-2">
              Core Values
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold text-navy-900 mb-3">
              {t('about.values_title')}
            </h2>
            <div className="h-0.5 w-12 bg-gold-500 mx-auto" />
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {values.map((v, i) => {
              const Icon = valueIcons[i] || Anchor;
              return (
                <div key={i} className="bg-white rounded-xl p-4 sm:p-6 shadow-sm border border-gray-100 text-center">
                  <div className="w-14 h-14 rounded-full bg-navy-900/5 flex items-center justify-center mx-auto mb-4">
                    <Icon size={24} className="text-navy-900" />
                  </div>
                  <h3 className="font-bold text-navy-900 mb-2 text-base">{v.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{v.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Future Vision */}
      <section className="bg-white py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Anchor size={28} className="text-gold-500 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-navy-900 mb-4">{t('about.future_title')}</h2>
          <p className="text-gray-600 leading-relaxed">{t('about.future_body')}</p>
        </div>
      </section>
    </div>
  );
}

