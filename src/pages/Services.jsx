import { useTranslation } from 'react-i18next';
import { Anchor, Ship, Waves, Wrench, Landmark, Construction, ClipboardList } from 'lucide-react';
import HeroBg from '../components/HeroBg';

function OceanPattern() {
  return (
    <svg className="absolute inset-0 w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="grid3" width="60" height="60" patternUnits="userSpaceOnUse">
          <path d="M 60 0 L 0 0 0 60" fill="none" stroke="rgba(201,168,76,0.3)" strokeWidth="0.5" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#grid3)" />
    </svg>
  );
}

const icons = [Anchor, Ship, Waves, Construction, Landmark, Wrench, ClipboardList];

export default function Services() {
  const { t } = useTranslation();
  const services = t('services.items', { returnObjects: true });

  return (
    <div className="min-h-screen pt-20 lg:pt-24">
      {/* Hero Banner */}
      <section className="relative py-20 min-h-[320px] flex items-center overflow-hidden" style={{ background: 'linear-gradient(150deg, #0d2040 0%, #0a1628 60%, #0e1e38 100%)' }}>
        <HeroBg />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 border border-gold-500/40 bg-gold-500/8 text-gold-400 text-xs px-5 py-1.5 rounded-full mb-6 uppercase tracking-[0.2em] font-medium">
            <Anchor size={11} />
            <span>Services</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-5 tracking-tight">
            {t('services.title')}
          </h1>
          <div className="flex items-center justify-center gap-4 mb-5">
            <div className="h-px w-20 bg-gradient-to-r from-transparent to-gold-500/80" />
            <div className="w-1.5 h-1.5 rounded-full bg-gold-500" />
            <div className="h-px w-20 bg-gradient-to-l from-transparent to-gold-500/80" />
          </div>
          <p className="text-white/55 text-base sm:text-lg">{t('services.subtitle')}</p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="bg-[#F5F7FA] py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((svc, i) => {
              const Icon = icons[i] || Anchor;
              return (
                <div
                  key={i}
                  className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 group"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-14 h-14 rounded-xl bg-navy-900 flex items-center justify-center shrink-0 group-hover:bg-navy-800 transition-colors">
                      <Icon size={24} className="text-gold-400" />
                    </div>
                    <div>
                      <span className="text-gold-500 text-xs font-semibold tracking-widest uppercase">
                        0{i + 1}
                      </span>
                      <h3 className="font-bold text-navy-900 text-lg leading-tight">{svc.name}</h3>
                    </div>
                  </div>
                  <div className="h-px bg-gray-100 mb-4" />
                  <p className="text-gray-600 text-sm leading-relaxed">{svc.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-navy-900 py-14">
        <div className="relative max-w-3xl mx-auto px-4 text-center overflow-hidden">
          <OceanPattern />
          <div className="relative z-10">
            <Anchor size={28} className="text-gold-500 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-white mb-3">
              {t('footer.company_zh')}
            </h2>
            <p className="text-white/50 text-sm tracking-widest">{t('footer.tagline')}</p>
          </div>
        </div>
      </section>
    </div>
  );
}

