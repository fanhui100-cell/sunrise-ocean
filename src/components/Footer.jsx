import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { MapPin, Anchor, Mail, MessageCircle } from 'lucide-react';

export default function Footer() {
  const { t } = useTranslation();

  const navLinks = [
    { to: '/', label: t('nav.home') },
    { to: '/about', label: t('nav.about') },
    { to: '/services', label: t('nav.services') },
    { to: '/projects', label: t('nav.projects') },
    { to: '/contact', label: t('nav.contact') },
  ];

  return (
    <footer className="bg-navy-900 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-3">
              <Anchor size={20} className="text-gold-500" />
              <span className="text-gold-500 font-bold text-base">金海洋工程有限公司</span>
            </div>
            <p className="text-white/50 text-sm leading-relaxed mb-2">
              Sunrise Ocean Engineering Limited
            </p>
            <p className="text-white/40 text-sm italic">{t('footer.tagline')}</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white/80 font-semibold text-sm mb-4 uppercase tracking-widest">
              {t('footer.links_title')}
            </h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-white/50 hover:text-gold-400 text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Location */}
          <div>
            <h4 className="text-white/80 font-semibold text-sm mb-4 uppercase tracking-widest">
              {t('nav.contact')}
            </h4>
            <div className="space-y-2.5">
              <div className="flex items-start gap-2 text-white/50 text-sm">
                <MapPin size={14} className="mt-0.5 shrink-0 text-gold-500/70" />
                <span>{t('footer.address')}</span>
              </div>
              <div className="flex items-start gap-2 text-white/50 text-sm">
                <Mail size={14} className="mt-0.5 shrink-0 text-gold-500/70" />
                <a
                  href={`mailto:${t('contact.email')}`}
                  className="hover:text-gold-400 transition-colors break-all"
                >
                  {t('contact.email')}
                </a>
              </div>
              <div className="flex items-start gap-2 text-white/50 text-sm">
                <MessageCircle size={14} className="mt-0.5 shrink-0 text-gold-500/70" />
                <a
                  href="https://wa.me/85291670580"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gold-400 transition-colors"
                >
                  +852 9167 0580 (WhatsApp)
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-10 pt-6 text-center">
          <p className="text-white/30 text-xs">{t('footer.copyright')}</p>
        </div>
      </div>
    </footer>
  );
}
