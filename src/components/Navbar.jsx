import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Menu, X, Globe, ChevronDown, Search } from 'lucide-react';
import SearchModal from './SearchModal';

const LANGS = [
  { code: 'zh', label: '繁體中文' },
  { code: 'zh-CN', label: '简体中文' },
  { code: 'en', label: 'English' },
  { code: 'vi', label: 'Tiếng Việt' },
  { code: 'id', label: 'Bahasa Indonesia' },
  { code: 'ms', label: 'Bahasa Malaysia' },
];

const LANG_SHORT = { zh: '繁', 'zh-CN': '简', en: 'EN', vi: 'VI', id: 'ID', ms: 'MY' };

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const langRef = useRef(null);
  const mobileLangRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  useEffect(() => {
    const handler = (e) => {
      const inDesktop = langRef.current && langRef.current.contains(e.target);
      const inMobile = mobileLangRef.current && mobileLangRef.current.contains(e.target);
      if (!inDesktop && !inMobile) setLangOpen(false);
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  const switchLang = (code) => {
    i18n.changeLanguage(code);
    setLangOpen(false);
  };

  const navLinks = [
    { to: '/', label: t('nav.home') },
    { to: '/about', label: t('nav.about') },
    { to: '/services', label: t('nav.services') },
    { to: '/projects', label: t('nav.projects') },
    { to: '/contact', label: t('nav.contact') },
  ];

  const isActive = (to) => location.pathname === to;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md' : 'bg-white/95 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 lg:h-24">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <img
              src="/images/logo.png"
              alt="Sunrise Ocean Engineering"
              className="h-14 lg:h-16 w-auto object-contain"
            />
            <div className="flex flex-col leading-tight">
              <span className="text-gold-600 font-bold text-base lg:text-lg tracking-wide group-hover:text-gold-500 transition-colors">
                金海洋工程有限公司
              </span>
              <span className="text-navy-900/50 text-xs lg:text-sm tracking-widest group-hover:text-navy-900/80 transition-colors">
                SUNRISE OCEAN ENGINEERING
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`px-4 py-2 text-sm font-medium rounded transition-all duration-200 ${
                  isActive(link.to)
                    ? 'text-gold-600 bg-navy-900/8'
                    : 'text-navy-900/70 hover:text-navy-900 hover:bg-navy-900/8'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <button
              onClick={() => setSearchOpen(true)}
              className="ml-2 p-2 text-navy-900/60 hover:text-navy-900 hover:bg-navy-900/8 rounded transition-colors"
              aria-label="Search"
            >
              <Search size={17} />
            </button>
            <div className="relative ml-1" ref={langRef}>
              <button
                onClick={() => setLangOpen((o) => !o)}
                className="flex items-center gap-1.5 px-3 py-1.5 border border-navy-900/30 text-navy-900 text-sm rounded hover:bg-navy-900/8 transition-all duration-200"
              >
                <Globe size={14} />
                {LANG_SHORT[i18n.language] || '繁'}
                <ChevronDown size={12} className={`transition-transform ${langOpen ? 'rotate-180' : ''}`} />
              </button>
              {langOpen && (
                <div className="absolute right-0 top-full mt-1 bg-navy-900 border border-white/10 rounded-lg shadow-xl overflow-hidden z-50 min-w-[160px]">
                  {LANGS.map((l) => (
                    <button
                      key={l.code}
                      onClick={() => switchLang(l.code)}
                      className={`w-full text-left px-4 py-2.5 text-sm transition-colors ${
                        i18n.language === l.code
                          ? 'bg-gold-500/20 text-gold-400'
                          : 'text-white/70 hover:bg-white/10 hover:text-white'
                      }`}
                    >
                      {l.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Mobile controls */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => setSearchOpen(true)}
              className="p-1.5 text-navy-900/60 hover:text-navy-900 transition-colors"
              aria-label="Search"
            >
              <Search size={18} />
            </button>
            <div className="relative" ref={mobileLangRef}>
              <button
                onClick={() => setLangOpen((o) => !o)}
                className="flex items-center gap-1 px-2.5 py-1.5 border border-navy-900/30 text-navy-900 text-xs rounded hover:bg-navy-900/8 transition-colors"
              >
                <Globe size={12} />
                {LANG_SHORT[i18n.language] || '繁'}
                <ChevronDown size={10} className={`transition-transform ${langOpen ? 'rotate-180' : ''}`} />
              </button>
              {langOpen && (
                <div className="absolute right-0 top-full mt-1 bg-navy-900 border border-white/10 rounded-lg shadow-xl overflow-hidden z-50 min-w-[160px]">
                  {LANGS.map((l) => (
                    <button
                      key={l.code}
                      onClick={() => switchLang(l.code)}
                      className={`w-full text-left px-4 py-2.5 text-xs transition-colors ${
                        i18n.language === l.code
                          ? 'bg-gold-500/20 text-gold-400'
                          : 'text-white/70 hover:bg-white/10 hover:text-white'
                      }`}
                    >
                      {l.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-navy-900/70 hover:text-navy-900 p-1"
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-navy-900/10 px-4 py-3 space-y-1">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`block px-4 py-2.5 text-sm font-medium rounded transition-colors ${
                isActive(link.to)
                  ? 'text-gold-600 bg-navy-900/8'
                  : 'text-navy-900/70 hover:text-navy-900 hover:bg-navy-900/8'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}

      {searchOpen && <SearchModal onClose={() => setSearchOpen(false)} />}
    </nav>
  );
}
