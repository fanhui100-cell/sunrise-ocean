import { useTranslation } from 'react-i18next';
import { Anchor, Calendar } from 'lucide-react';
import HeroBg from '../components/HeroBg';

const CATEGORY_COLOR = {
  '公司動態': 'bg-blue-50 text-blue-700 border-blue-200',
  '項目動態': 'bg-emerald-50 text-emerald-700 border-emerald-200',
  '業務拓展': 'bg-amber-50 text-amber-700 border-amber-200',
  'Company News': 'bg-blue-50 text-blue-700 border-blue-200',
  'Project Update': 'bg-emerald-50 text-emerald-700 border-emerald-200',
  'Business Development': 'bg-amber-50 text-amber-700 border-amber-200',
  '公司动态': 'bg-blue-50 text-blue-700 border-blue-200',
  '项目动态': 'bg-emerald-50 text-emerald-700 border-emerald-200',
  '业务拓展': 'bg-amber-50 text-amber-700 border-amber-200',
};

export default function News() {
  const { t } = useTranslation();
  const items = t('news.items', { returnObjects: true });

  return (
    <div className="min-h-screen pt-20 lg:pt-24">
      {/* Hero */}
      <section
        className="relative py-20 min-h-[320px] flex items-center overflow-hidden"
        style={{ background: 'linear-gradient(150deg, #0d2040 0%, #0a1628 60%, #0e1e38 100%)' }}
      >
        <HeroBg />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center w-full">
          <div className="inline-flex items-center gap-2 border border-gold-500/40 bg-gold-500/8 text-gold-400 text-xs px-5 py-1.5 rounded-full mb-6 uppercase tracking-[0.2em] font-medium">
            <Anchor size={11} />
            <span>{t('news.badge')}</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-5 tracking-tight">
            {t('news.title')}
          </h1>
          <div className="flex items-center justify-center gap-4 mb-5">
            <div className="h-px w-20 bg-gradient-to-r from-transparent to-gold-500/80" />
            <div className="w-1.5 h-1.5 rounded-full bg-gold-500" />
            <div className="h-px w-20 bg-gradient-to-l from-transparent to-gold-500/80" />
          </div>
          <p className="text-white/55 text-base sm:text-lg">{t('news.subtitle')}</p>
        </div>
      </section>

      {/* News Grid */}
      <section className="bg-[#F5F7FA] py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {Array.isArray(items) && items.map((item, i) => {
              const colorClass = CATEGORY_COLOR[item.category] || 'bg-gray-50 text-gray-600 border-gray-200';
              return (
                <div
                  key={i}
                  className="bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col"
                >
                  <div className="h-1 bg-gradient-to-r from-navy-900 via-navy-800 to-gold-500/60" />
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex flex-wrap items-center gap-2 mb-3">
                      <span className={`text-xs px-2.5 py-0.5 rounded-full border font-medium ${colorClass}`}>
                        {item.category}
                      </span>
                      <span className="flex items-center gap-1 text-gray-400 text-xs">
                        <Calendar size={11} />
                        {item.date}
                      </span>
                    </div>
                    <h3 className="font-bold text-navy-900 text-base leading-snug mb-3">
                      {item.title}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed flex-1">
                      {item.excerpt}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
