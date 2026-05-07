import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import {
  Anchor, Ship, Waves, Construction, Landmark, Wrench, ClipboardList,
  ChevronRight, ArrowRight, MapPin
} from 'lucide-react';

function HeroWave() {
  return (
    <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-none">
      <svg viewBox="0 0 1440 80" xmlns="http://www.w3.org/2000/svg" className="w-full">
        <path
          d="M0,40 C240,80 480,0 720,40 C960,80 1200,0 1440,40 L1440,80 L0,80 Z"
          fill="#F5F7FA"
        />
      </svg>
    </div>
  );
}

function OceanPattern() {
  return (
    <svg className="absolute inset-0 w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
          <path d="M 60 0 L 0 0 0 60" fill="none" stroke="rgba(201,168,76,0.3)" strokeWidth="0.5" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#grid)" />
    </svg>
  );
}

function FeaturedProjectCard({ proj }) {
  const [imgError, setImgError] = useState(false);
  const thumb = proj.images && proj.images[0];
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border border-gray-100 group">
      {thumb && !imgError ? (
        <div className="relative h-32 overflow-hidden bg-navy-900">
          <img
            src={thumb}
            alt={proj.nameShort || proj.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
            onError={() => setImgError(true)}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-900/40 to-transparent" />
        </div>
      ) : (
        <div className="bg-gradient-to-br from-navy-800 to-navy-900 h-32 flex items-center justify-center relative overflow-hidden">
          <OceanPattern />
          <Anchor size={32} className="text-gold-500/60 relative z-10" />
        </div>
      )}
      <div className="p-5">
        <div className="flex items-center gap-2 mb-2">
          <span className="bg-navy-900/10 text-navy-900 text-xs px-2 py-0.5 rounded font-medium">
            {proj.category}
          </span>
          <span className="flex items-center gap-1 text-gray-400 text-xs">
            <MapPin size={11} />
            {proj.location}
          </span>
        </div>
        <h3 className="font-semibold text-navy-900 text-sm leading-snug">{proj.nameShort || proj.name}</h3>
      </div>
    </div>
  );
}

export default function Home() {
  const { t } = useTranslation();
  const services = t('services.items', { returnObjects: true });
  const projects = t('projects.items', { returnObjects: true });

  const icons = [Anchor, Ship, Waves, Construction, Landmark, Wrench, ClipboardList];

  const featuredProjects = projects.slice(0, 3);

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative min-h-screen flex items-center bg-gradient-to-b from-navy-900 via-navy-800 to-navy-700 overflow-hidden">
        <OceanPattern />

        {/* Decorative circles */}
        <div className="absolute top-1/4 right-10 w-96 h-96 rounded-full bg-gold-500/5 blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 left-10 w-64 h-64 rounded-full bg-blue-500/10 blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-32 text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 border border-gold-500/30 bg-gold-500/10 text-gold-400 text-xs px-4 py-1.5 rounded-full mb-8 uppercase tracking-widest">
            <Anchor size={12} />
            <span>Hong Kong · Marine Engineering</span>
          </div>

          {/* Company Name */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-3 leading-tight">
            {t('hero.company_zh')}
          </h1>
          <h2 className="text-lg sm:text-xl lg:text-2xl font-light text-gold-400 mb-6 tracking-widest uppercase">
            {t('hero.company_en')}
          </h2>

          {/* Divider */}
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-16 bg-gold-500/40" />
            <Anchor size={16} className="text-gold-500" />
            <div className="h-px w-16 bg-gold-500/40" />
          </div>

          <p className="text-white/60 text-sm sm:text-base tracking-widest mb-4">
            {t('hero.tagline')}
          </p>
          <p className="text-white/50 text-sm sm:text-base max-w-2xl mx-auto mb-10 leading-relaxed">
            {t('hero.subtitle')}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/about"
              className="inline-flex items-center gap-2 bg-gold-500 hover:bg-gold-400 text-navy-900 font-semibold px-8 py-3.5 rounded transition-colors duration-200"
            >
              {t('hero.cta_about')}
              <ArrowRight size={16} />
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 border border-white/30 hover:border-white/60 text-white/80 hover:text-white px-8 py-3.5 rounded transition-colors duration-200"
            >
              {t('hero.cta_services')}
              <ChevronRight size={16} />
            </Link>
          </div>
        </div>

        <HeroWave />
      </section>

      {/* Services Overview */}
      <section className="bg-[#F5F7FA] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-gold-500 text-xs uppercase tracking-widest font-semibold mb-2">
              {t('services.title')}
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold text-navy-900 mb-3">
              {t('services.subtitle')}
            </h2>
            <div className="h-0.5 w-16 bg-gold-500 mx-auto" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {services.map((svc, i) => {
              const Icon = icons[i] || Anchor;
              return (
                <div
                  key={i}
                  className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100 group"
                >
                  <div className="w-12 h-12 rounded-lg bg-navy-900/5 group-hover:bg-navy-900/10 flex items-center justify-center mb-4 transition-colors">
                    <Icon size={22} className="text-navy-900" />
                  </div>
                  <h3 className="font-semibold text-navy-900 mb-2 text-base">{svc.name}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed line-clamp-3">{svc.desc}</p>
                </div>
              );
            })}
          </div>

          <div className="text-center mt-10">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-navy-900 font-semibold border-b-2 border-gold-500 pb-0.5 hover:text-gold-600 transition-colors"
            >
              {t('common.view_all')}
              <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: decorative block */}
            <div className="relative">
              <div className="bg-navy-900 rounded-2xl p-10 text-white relative overflow-hidden">
                <OceanPattern />
                <div className="relative z-10">
                  <Anchor size={32} className="text-gold-500 mb-4" />
                  <h3 className="text-2xl font-bold mb-2">{t('about.title')}</h3>
                  <p className="text-white/60 text-sm leading-relaxed mb-6">
                    {t('about.subtitle')}
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { num: '10+', label: t('about.stats.years_label') },
                      { num: '50+', label: t('about.stats.projects_label') },
                      { num: '8', label: t('about.stats.countries_label') },
                      { num: '10+', label: t('about.stats.team_label') },
                    ].map((s, i) => (
                      <div key={i} className="border border-white/10 rounded-lg p-3 text-center">
                        <div className="text-gold-400 text-xl font-bold">{s.num}</div>
                        <div className="text-white/50 text-xs mt-1 leading-tight">{s.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Right: text */}
            <div>
              <p className="text-gold-500 text-xs uppercase tracking-widest font-semibold mb-3">
                {t('about.title')}
              </p>
              <h2 className="text-2xl sm:text-3xl font-bold text-navy-900 mb-4">
                {t('about.subtitle')}
              </h2>
              <div className="h-0.5 w-12 bg-gold-500 mb-6" />
              <p className="text-gray-600 leading-relaxed mb-4 text-sm sm:text-base">
                {t('about.body1')}
              </p>
              <p className="text-gray-600 leading-relaxed mb-8 text-sm sm:text-base">
                {t('about.body2')}
              </p>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 bg-navy-900 hover:bg-navy-800 text-white px-6 py-3 rounded transition-colors font-medium"
              >
                {t('common.learn_more')}
                <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="bg-[#F5F7FA] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-gold-500 text-xs uppercase tracking-widest font-semibold mb-2">
              {t('projects.title')}
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold text-navy-900 mb-3">
              {t('projects.subtitle')}
            </h2>
            <div className="h-0.5 w-16 bg-gold-500 mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredProjects.map((proj, i) => (
              <FeaturedProjectCard key={i} proj={proj} />
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 text-navy-900 font-semibold border-b-2 border-gold-500 pb-0.5 hover:text-gold-600 transition-colors"
            >
              {t('common.view_all')}
              <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-navy-900 py-16">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <Anchor size={28} className="text-gold-500 mx-auto mb-4" />
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
            {t('footer.company_zh')}
          </h2>
          <p className="text-white/50 text-sm mb-2">{t('footer.company_en')}</p>
          <p className="text-gold-400 text-sm tracking-widest mb-6">{t('footer.tagline')}</p>
          <div className="flex items-center justify-center gap-2 text-white/50 text-sm mb-8">
            <MapPin size={14} className="text-gold-500/70" />
            <span>{t('footer.address')}</span>
          </div>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-gold-500 hover:bg-gold-400 text-navy-900 font-semibold px-8 py-3 rounded transition-colors duration-200"
          >
            {t('common.contact_us')}
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}
