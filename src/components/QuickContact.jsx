import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { X, ArrowUp } from 'lucide-react';

const WHATSAPP_NUMBER = '85291670580';
const WECHAT_ID = 'Wu63863';

function WhatsAppIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
    </svg>
  );
}

function WeChatIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M8.691 2.188C3.891 2.188 0 5.476 0 9.53c0 2.212 1.17 4.203 3.002 5.55a.59.59 0 01.213.665l-.39 1.48c-.019.07-.048.141-.048.213 0 .163.13.295.29.295a.328.328 0 00.183-.064l1.93-1.114a.864.864 0 01.43-.124c.082 0 .156.012.227.034 1.4.43 2.97.677 4.598.677a8.42 8.42 0 00.836-.046c-.225-.65-.346-1.34-.346-2.054 0-3.756 3.36-6.81 7.503-6.81.13 0 .26.005.388.012-.685-3.343-4.213-5.945-8.225-5.945zm-2.876 4.13c.547 0 .996.444.996.992 0 .55-.45.998-.996.998-.55 0-.998-.448-.998-.998 0-.548.448-.991.998-.991zm5.79 0c.55 0 .996.443.996.991a.997.997 0 01-.996.998c-.547 0-.996-.448-.996-.998 0-.548.45-.991.996-.991z"/>
      <path d="M16.952 11.367c-3.473 0-6.293 2.503-6.293 5.585 0 3.082 2.82 5.587 6.293 5.587 1.396 0 2.687-.213 3.835-.578.061-.018.122-.027.182-.027.118 0 .241.034.358.103l1.685.97a.273.273 0 00.155.054c.137 0 .242-.115.242-.246a.456.456 0 00-.04-.18l-.327-1.221a.499.499 0 01.17-.566 5.353 5.353 0 002.522-4.527c0-3.082-2.82-5.585-6.292-5.585h-.49zm-2.097 3.452c.45 0 .814.366.814.814a.815.815 0 01-1.628 0c0-.448.365-.814.814-.814zm4.793 0c.45 0 .814.366.814.814a.815.815 0 01-1.628 0c0-.448.364-.814.814-.814z"/>
    </svg>
  );
}

export default function QuickContact() {
  const { t } = useTranslation();
  const [showWeChat, setShowWeChat] = useState(false);
  const [showBackTop, setShowBackTop] = useState(false);

  // Track scroll for back-to-top visibility
  useEffect(() => {
    const onScroll = () => setShowBackTop(window.scrollY > 400);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Scroll-lock body when modal is open
  useEffect(() => {
    document.body.style.overflow = showWeChat ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [showWeChat]);

  // Close modal on Escape key
  useEffect(() => {
    if (!showWeChat) return;
    const onKey = (e) => { if (e.key === 'Escape') setShowWeChat(false); };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [showWeChat]);

  const btnBase = 'w-11 h-11 rounded-full shadow-lg flex items-center justify-center transition-all duration-200 active:scale-95 hover:scale-110';

  return (
    <>
      {/* Fixed action stack — bottom-24 on mobile keeps it above cookie banner */}
      <div className="fixed bottom-24 sm:bottom-8 right-4 sm:right-6 z-50 flex flex-col gap-2.5 items-center">
        {showBackTop && (
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className={`${btnBase} bg-navy-900/80 hover:bg-navy-900 backdrop-blur-sm text-gold-400`}
            aria-label={t('common.back_to_top')}
          >
            <ArrowUp size={17} />
          </button>
        )}
        <a
          href={`https://wa.me/${WHATSAPP_NUMBER}`}
          target="_blank"
          rel="noopener noreferrer"
          className={`${btnBase} bg-[#25D366] hover:bg-[#1ea855] text-white`}
          aria-label={t('quick.whatsapp')}
        >
          <WhatsAppIcon size={20} />
        </a>
        <button
          onClick={() => setShowWeChat(true)}
          className={`${btnBase} bg-[#07C160] hover:bg-[#06ad56] text-white`}
          aria-label={t('quick.wechat')}
        >
          <WeChatIcon size={20} />
        </button>
      </div>

      {/* WeChat modal */}
      {showWeChat && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
          role="dialog"
          aria-modal="true"
          aria-label={t('quick.wechat_tip')}
          onClick={() => setShowWeChat(false)}
        >
          <div
            className="bg-white rounded-2xl p-6 max-w-xs w-full text-center shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowWeChat(false)}
              className="absolute top-3 right-3 text-gray-400 hover:text-gray-700 p-1 rounded-full hover:bg-gray-100 transition-colors"
              aria-label="Close"
            >
              <X size={18} />
            </button>
            <div className="flex items-center justify-center gap-2 mb-4 text-navy-900">
              <WeChatIcon size={20} />
              <h3 className="font-semibold">{t('quick.wechat_tip')}</h3>
            </div>
            <img
              src="/images/wechat-qr.jpg"
              alt="WeChat QR Code"
              className="w-full max-w-[220px] mx-auto rounded-lg"
              loading="lazy"
            />
            <div className="mt-3 bg-gray-50 rounded-lg border border-gray-200 px-4 py-2">
              <p className="text-xs text-gray-400 mb-0.5">WeChat ID</p>
              <p className="text-navy-900 font-bold text-base tracking-widest select-all">{WECHAT_ID}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
