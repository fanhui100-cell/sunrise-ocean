import { useState, useEffect, useRef, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Search, X, ArrowRight, FileText, Briefcase, MapPin } from 'lucide-react';

function buildIndex(t) {
  const items = [];

  [
    { title: t('nav.home'), route: '/', desc: t('hero.subtitle') },
    { title: t('nav.about'), route: '/about', desc: t('about.subtitle') },
    { title: t('nav.services'), route: '/services', desc: t('services.subtitle') },
    { title: t('nav.projects'), route: '/projects', desc: t('projects.subtitle') },
    { title: t('nav.news'), route: '/news', desc: t('news.subtitle') },
    { title: t('nav.contact'), route: '/contact', desc: t('contact.subtitle') },
  ].forEach(p => items.push({ ...p, type: 'page' }));

  const newsItems = t('news.items', { returnObjects: true });
  if (Array.isArray(newsItems)) {
    newsItems.forEach(n => {
      items.push({ type: 'page', title: n.title, desc: n.excerpt, route: '/news' });
    });
  }

  const serviceItems = t('services.items', { returnObjects: true });
  if (Array.isArray(serviceItems)) {
    serviceItems.forEach(s => {
      items.push({ type: 'service', title: s.name, desc: s.desc, route: '/services' });
    });
  }

  const projectItems = t('projects.items', { returnObjects: true });
  if (Array.isArray(projectItems)) {
    projectItems.forEach(p => {
      items.push({
        type: 'project',
        title: p.nameShort || p.name,
        desc: p.desc,
        route: '/projects',
        location: p.location,
        category: p.category,
      });
    });
  }

  return items;
}

const TYPE_ICON = { page: FileText, service: Briefcase, project: MapPin };
const TYPE_COLOR = {
  page: 'bg-blue-50 text-blue-600 border-blue-200',
  service: 'bg-emerald-50 text-emerald-600 border-emerald-200',
  project: 'bg-amber-50 text-amber-600 border-amber-200',
};

export default function SearchModal({ onClose }) {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [query, setQuery] = useState('');
  const inputRef = useRef(null);

  const index = useMemo(() => buildIndex(t), [t]);

  const results = useMemo(() => {
    if (query.trim().length < 1) return [];
    const q = query.toLowerCase();
    return index.filter(item =>
      item.title.toLowerCase().includes(q) ||
      (item.desc && item.desc.toLowerCase().includes(q)) ||
      (item.location && item.location.toLowerCase().includes(q)) ||
      (item.category && item.category.toLowerCase().includes(q))
    ).slice(0, 10);
  }, [index, query]);

  useEffect(() => {
    inputRef.current?.focus();
    const handler = (e) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, [onClose]);

  const handleSelect = (item) => {
    navigate(item.route);
    onClose();
  };

  const typeLabel = {
    page: t('search.type_page'),
    service: t('search.type_service'),
    project: t('search.type_project'),
  };

  return (
    <div
      className="fixed inset-0 z-[200] flex items-start justify-center pt-24 px-4 bg-black/50 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl overflow-hidden"
        onClick={e => e.stopPropagation()}
      >
        {/* Input */}
        <div className="flex items-center gap-3 px-5 py-4 border-b border-gray-100">
          <Search size={18} className="text-gray-400 shrink-0" />
          <input
            ref={inputRef}
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder={t('search.placeholder')}
            className="flex-1 text-base text-gray-800 placeholder-gray-400 outline-none"
          />
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600 p-1 transition-colors">
            <X size={18} />
          </button>
        </div>

        {/* Results */}
        <div className="max-h-[420px] overflow-y-auto">
          {query.trim().length === 0 ? (
            <p className="px-5 py-8 text-center text-gray-400 text-sm">{t('search.hint')}</p>
          ) : results.length === 0 ? (
            <p className="px-5 py-8 text-center text-gray-400 text-sm">{t('search.no_results')}</p>
          ) : (
            <ul className="divide-y divide-gray-50">
              {results.map((item, i) => {
                const Icon = TYPE_ICON[item.type] || FileText;
                return (
                  <li key={i}>
                    <button
                      onClick={() => handleSelect(item)}
                      className="w-full flex items-start gap-3 px-5 py-3.5 hover:bg-gray-50 transition-colors text-left group"
                    >
                      <div className="w-8 h-8 rounded-lg bg-navy-900/5 flex items-center justify-center shrink-0 mt-0.5">
                        <Icon size={15} className="text-navy-900/60" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-wrap items-center gap-2 mb-0.5">
                          <span className="font-medium text-navy-900 text-sm truncate">{item.title}</span>
                          <span className={`text-xs px-2 py-0.5 rounded-full border shrink-0 ${TYPE_COLOR[item.type]}`}>
                            {typeLabel[item.type]}
                          </span>
                          {item.location && (
                            <span className="text-xs text-gray-400 shrink-0">{item.location}</span>
                          )}
                        </div>
                        {item.desc && (
                          <p className="text-xs text-gray-500 line-clamp-1">{item.desc}</p>
                        )}
                      </div>
                      <ArrowRight size={14} className="text-gray-300 group-hover:text-gold-500 mt-1 shrink-0 transition-colors" />
                    </button>
                  </li>
                );
              })}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
