import { useState, useEffect, lazy, Suspense } from 'react';
import { useTranslation } from 'react-i18next';
import SEO from '../components/SEO';
import { Anchor, MapPin, X, CheckCircle, ChevronLeft, ChevronRight, Map as MapIcon } from 'lucide-react';
import HeroBg from '../components/HeroBg';

const ProjectMap = lazy(() => import('../components/ProjectMap'));

function OceanPattern() {
  return (
    <svg className="absolute inset-0 w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="grid4" width="60" height="60" patternUnits="userSpaceOnUse">
          <path d="M 60 0 L 0 0 0 60" fill="none" stroke="rgba(201,168,76,0.3)" strokeWidth="0.5" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#grid4)" />
    </svg>
  );
}

function PlaceholderImage({ className = '' }) {
  return (
    <div className={`bg-gradient-to-br from-navy-800 to-navy-900 flex items-center justify-center relative overflow-hidden ${className}`}>
      <OceanPattern />
      <Anchor size={28} className="text-gold-500/40 relative z-10" />
    </div>
  );
}

function SafeImg({ src, alt, className }) {
  const [error, setError] = useState(false);
  if (error) return null;
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      onError={() => setError(true)}
    />
  );
}

const locationColors = {
  '香港': 'bg-blue-50 text-blue-700 border-blue-200',
  '澳門': 'bg-purple-50 text-purple-700 border-purple-200',
  '印度尼西亞': 'bg-green-50 text-green-700 border-green-200',
  '巴基斯坦': 'bg-orange-50 text-orange-700 border-orange-200',
  '越南': 'bg-red-50 text-red-700 border-red-200',
  '孟加拉國': 'bg-teal-50 text-teal-700 border-teal-200',
  '馬來西亞': 'bg-yellow-50 text-yellow-700 border-yellow-200',
  '菲律賓': 'bg-pink-50 text-pink-700 border-pink-200',
  '柬埔寨': 'bg-rose-50 text-rose-700 border-rose-200',
  'Hong Kong': 'bg-blue-50 text-blue-700 border-blue-200',
  'Macao': 'bg-purple-50 text-purple-700 border-purple-200',
  'Indonesia': 'bg-green-50 text-green-700 border-green-200',
  'Pakistan': 'bg-orange-50 text-orange-700 border-orange-200',
  'Vietnam': 'bg-red-50 text-red-700 border-red-200',
  'Bangladesh': 'bg-teal-50 text-teal-700 border-teal-200',
  'Malaysia': 'bg-yellow-50 text-yellow-700 border-yellow-200',
  'Philippines': 'bg-pink-50 text-pink-700 border-pink-200',
  'Cambodia': 'bg-rose-50 text-rose-700 border-rose-200',
};

function getImages(project) {
  if (project.images && project.images.length > 0) return project.images;
  if (project.image) return [project.image];
  return [];
}

function ImageGallery({ images }) {
  const [idx, setIdx] = useState(0);
  const [errors, setErrors] = useState({});

  const markError = (i) => setErrors((e) => ({ ...e, [i]: true }));
  const validImages = images.filter((_, i) => !errors[i]);

  if (validImages.length === 0) return <PlaceholderImage className="h-64 rounded-t-2xl" />;

  const currentSrc = images[idx];
  const hasError = errors[idx];

  const prev = () => {
    let next = (idx - 1 + images.length) % images.length;
    while (errors[next] && next !== idx) next = (next - 1 + images.length) % images.length;
    setIdx(next);
  };
  const next = () => {
    let n = (idx + 1) % images.length;
    while (errors[n] && n !== idx) n = (n + 1) % images.length;
    setIdx(n);
  };

  return (
    <div className="relative bg-navy-900 rounded-t-2xl overflow-hidden flex items-center justify-center min-h-[280px]">
      {hasError ? (
        <PlaceholderImage className="h-64 w-full" />
      ) : (
        <img
          key={currentSrc}
          src={currentSrc}
          alt=""
          className="w-full max-h-[70vh] object-contain"
          onError={() => markError(idx)}
        />
      )}

      {images.length > 1 && (
        <>
          <button onClick={prev} className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white rounded-full p-1.5 transition-colors z-10">
            <ChevronLeft size={16} />
          </button>
          <button onClick={next} className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white rounded-full p-1.5 transition-colors z-10">
            <ChevronRight size={16} />
          </button>
          <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-1.5 z-10">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => setIdx(i)}
                className={`w-1.5 h-1.5 rounded-full transition-colors ${i === idx ? 'bg-white' : 'bg-white/40'}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

function ProjectModal({ project, onClose }) {
  const colorClass = locationColors[project.location] || 'bg-gray-50 text-gray-600 border-gray-200';
  const images = getImages(project);

  return (
    <div
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center sm:p-4 bg-black/60 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-t-2xl sm:rounded-2xl max-w-3xl w-full max-h-[92vh] sm:max-h-[90vh] overflow-y-auto shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative">
          {images.length > 0 ? (
            <ImageGallery images={images} />
          ) : (
            <PlaceholderImage className="h-64 rounded-t-2xl" />
          )}
          <button
            onClick={onClose}
            className="absolute top-3 right-3 z-20 bg-black/40 hover:bg-black/60 text-white rounded-full p-1.5 transition-colors"
          >
            <X size={16} />
          </button>
        </div>

        <div className="p-6">
          <div className="flex flex-wrap gap-2 mb-4">
            <span className={`border text-xs px-2.5 py-0.5 rounded-full font-medium ${colorClass}`}>
              <MapPin size={10} className="inline mr-1" />
              {project.location}
            </span>
            <span className="border border-navy-900/20 text-navy-900/70 text-xs px-2.5 py-0.5 rounded-full">
              {project.category}
            </span>
          </div>

          <h2 className="font-bold text-navy-900 text-lg leading-snug mb-4">
            {project.name}
          </h2>

          {project.details && project.details.length > 0 ? (
            <ul className="space-y-3">
              {project.details.map((d, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle size={15} className="text-gold-500 mt-0.5 shrink-0" />
                  <span className="text-gray-600 text-sm leading-relaxed">{d}</span>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-600 text-sm leading-relaxed">{project.desc}</p>
          )}
        </div>
      </div>
    </div>
  );
}

function ProjectCard({ project, onClick, viewDetailsLabel }) {
  const colorClass = locationColors[project.location] || 'bg-gray-50 text-gray-600 border-gray-200';
  const images = getImages(project);
  const hasDetails = (project.details && project.details.length > 0) || images.length > 0;
  const thumb = images[0];
  const [thumbError, setThumbError] = useState(false);
  const [imgLoaded, setImgLoaded] = useState(false);

  return (
    <div
      className={`bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 flex flex-col group ${hasDetails ? 'cursor-pointer hover:-translate-y-1' : ''}`}
      onClick={hasDetails ? onClick : undefined}
    >
      {thumb && !thumbError ? (
        <div className="relative h-44 overflow-hidden bg-navy-900">
          {!imgLoaded && <div className="absolute inset-0 bg-gray-200 animate-pulse" />}
          <img
            src={thumb}
            alt={project.nameShort || project.name}
            className={`w-full h-full object-cover transition-all duration-500 group-hover:scale-105 ${imgLoaded ? 'opacity-100' : 'opacity-0'}`}
            loading="lazy"
            onLoad={() => setImgLoaded(true)}
            onError={() => setThumbError(true)}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-900/40 to-transparent" />
          {images.length > 1 && (
            <div className="absolute top-2 right-2 bg-black/50 text-white text-xs px-2 py-0.5 rounded-full">
              ×{images.length}
            </div>
          )}
        </div>
      ) : (
        <PlaceholderImage className="h-28" />
      )}

      <div className="p-5 flex-1 flex flex-col">
        <div className="flex flex-wrap items-center gap-2 mb-3">
          <span className={`border text-xs px-2.5 py-0.5 rounded-full font-medium ${colorClass}`}>
            <MapPin size={10} className="inline mr-1" />
            {project.location}
          </span>
          <span className="border border-navy-900/20 text-navy-900/70 text-xs px-2.5 py-0.5 rounded-full">
            {project.category}
          </span>
        </div>

        <h3 className="font-bold text-navy-900 text-sm leading-snug mb-2 flex-1">
          {project.nameShort || project.name}
        </h3>

        {hasDetails && (
          <p className="text-gold-500 text-xs font-medium mt-2">{viewDetailsLabel}</p>
        )}
      </div>
    </div>
  );
}

export default function Projects() {
  const { t, i18n } = useTranslation();
  const projects = t('projects.items', { returnObjects: true });
  const [filter, setFilter] = useState('all');
  const [selected, setSelected] = useState(null);
  const [showMap, setShowMap] = useState(true);

  useEffect(() => { setFilter('all'); }, [i18n.language]);

  useEffect(() => {
    const handler = (e) => { if (e.key === 'Escape') setSelected(null); };
    if (selected) document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, [selected]);

  const categories = ['all', ...new Set(projects.map((p) => p.category))];
  const filtered = filter === 'all' ? projects : projects.filter((p) => p.category === filter);
  const isEn = i18n.language === 'en';
  const allLabel = isEn ? 'All' : '全部';

  return (
    <div className="min-h-screen pt-20 lg:pt-24">
      <SEO titleKey={t('seo.projects.title')} descKey={t('seo.projects.description')} path="/projects" />
      {/* Hero */}
      <section className="relative py-20 min-h-[320px] flex items-center overflow-hidden" style={{ background: 'linear-gradient(150deg, #0d2040 0%, #0a1628 60%, #0e1e38 100%)' }}>

        <HeroBg />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 border border-gold-500/40 bg-gold-500/8 text-gold-400 text-xs px-5 py-1.5 rounded-full mb-6 uppercase tracking-[0.2em] font-medium">
            <Anchor size={11} />
            <span>Projects</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-5 tracking-tight">
            {t('projects.title')}
          </h1>
          <div className="flex items-center justify-center gap-4 mb-5">
            <div className="h-px w-20 bg-gradient-to-r from-transparent to-gold-500/80" />
            <div className="w-1.5 h-1.5 rounded-full bg-gold-500" />
            <div className="h-px w-20 bg-gradient-to-l from-transparent to-gold-500/80" />
          </div>
          <p className="text-white/55 text-base sm:text-lg">{t('projects.subtitle')}</p>
        </div>
      </section>

      <section className="bg-[#F5F7FA] py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Map — top, low z-index */}
          <div className="mb-6 flex items-center justify-between gap-3">
            <div>
              <h2 className="text-lg font-bold text-navy-900 flex items-center gap-2">
                <MapIcon size={18} className="text-gold-500" />
                {t('map.title')}
              </h2>
              <p className="text-gray-500 text-xs mt-1">{t('map.subtitle')}</p>
            </div>
            <button
              onClick={() => setShowMap((s) => !s)}
              className="text-sm px-3 py-1.5 rounded border border-navy-900/20 text-navy-900 hover:bg-navy-900/5 transition-colors shrink-0"
            >
              {showMap ? t('map.hide') : t('map.show')}
            </button>
          </div>

          {showMap && (
            <div className="mb-10 relative z-0">
              <Suspense fallback={
                <div className="h-[420px] bg-[#F5F7FA] rounded-2xl border border-gray-200 flex flex-col items-center justify-center gap-3">
                  <div className="w-7 h-7 border-2 border-gold-500/30 border-t-gold-500 rounded-full animate-spin" />
                  <span className="text-gray-400 text-sm">地圖載入中…</span>
                </div>
              }>
                <ProjectMap projects={projects} />
              </Suspense>
            </div>
          )}

          {/* Filter */}
          <div className="flex flex-wrap gap-2 mb-10 justify-center">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors border ${
                  filter === cat
                    ? 'bg-navy-900 text-white border-navy-900'
                    : 'bg-white text-gray-600 border-gray-200 hover:border-navy-900/40 hover:text-navy-900'
                }`}
              >
                {cat === 'all' ? allLabel : cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((proj, i) => (
              <ProjectCard
                key={i}
                project={proj}
                onClick={() => setSelected(proj)}
                viewDetailsLabel={t('common.view_details')}
              />
            ))}
          </div>

          <p className="text-center text-gray-400 text-xs mt-10">{t('projects.note')}</p>
        </div>
      </section>

      {selected && (
        <ProjectModal project={selected} onClose={() => setSelected(null)} />
      )}
    </div>
  );
}
