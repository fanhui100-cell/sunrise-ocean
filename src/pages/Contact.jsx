import { useState, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { Anchor, MapPin, Mail, Building2, Phone, MessageCircle, Send, CheckCircle, AlertCircle, Loader2, Plus, FileUp, X, Shield } from 'lucide-react';
import HeroBg from '../components/HeroBg';
import SEO from '../components/SEO';

function FAQAccordion({ items }) {
  const [open, setOpen] = useState(null);
  return (
    <div className="space-y-3">
      {items.map((item, i) => (
        <div key={i} className="border border-gray-200 rounded-xl overflow-hidden">
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-gray-50 transition-colors"
          >
            <span className="font-semibold text-navy-900 text-sm pr-4 leading-snug">{item.q}</span>
            <span className={`shrink-0 w-6 h-6 rounded-full border border-navy-900/20 flex items-center justify-center transition-transform duration-200 ${open === i ? 'rotate-45 bg-navy-900 border-navy-900' : 'bg-white'}`}>
              <Plus size={13} className={open === i ? 'text-white' : 'text-navy-900/60'} />
            </span>
          </button>
          {open === i && (
            <div className="px-5 pb-4 pt-3 text-gray-600 text-sm leading-relaxed border-t border-gray-100">
              {item.a}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

const WEB3FORMS_ACCESS_KEY = '9296c430-0efe-40ce-8b23-22c7befa302d';

function OceanPattern() {
  return (
    <svg className="absolute inset-0 w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="grid5" width="60" height="60" patternUnits="userSpaceOnUse">
          <path d="M 60 0 L 0 0 0 60" fill="none" stroke="rgba(201,168,76,0.3)" strokeWidth="0.5" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#grid5)" />
    </svg>
  );
}

const inputClass = 'w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-navy-900/50 focus:ring-2 focus:ring-navy-900/10 transition';

export default function Contact() {
  const { t, i18n } = useTranslation();
  const [activeTab, setActiveTab] = useState('general');

  // General inquiry
  const [form, setForm] = useState({ name: '', email: '', company: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setError('');
    try {
      const payload = {
        access_key: WEB3FORMS_ACCESS_KEY,
        subject: `[Sunrise Ocean 官網詢問] ${form.subject || form.name}`,
        from_name: 'Sunrise Ocean Website',
        ...form,
      };
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (data.success) setSubmitted(true);
      else setError(data.message || 'Submit failed');
    } catch (err) {
      setError(err.message || 'Network error');
    } finally {
      setSubmitting(false);
    }
  };

  // Project inquiry
  const [pForm, setPForm] = useState({ name: '', company: '', email: '', phone: '', location: '', type: '', message: '' });
  const [selectedServices, setSelectedServices] = useState([]);
  const [pSubmitted, setPSubmitted] = useState(false);
  const [pSubmitting, setPSubmitting] = useState(false);
  const [pError, setPError] = useState('');
  const fileRef = useRef(null);
  const [fileName, setFileName] = useState('');

  const handlePChange = (e) => setPForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const toggleService = (svc) =>
    setSelectedServices((prev) => prev.includes(svc) ? prev.filter((s) => s !== svc) : [...prev, svc]);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    if (file.size > 10 * 1024 * 1024) {
      setPError(i18n.language === 'en' ? 'File size must be under 10MB' : '文件大小不能超過 10MB');
      e.target.value = '';
      setFileName('');
    } else {
      setFileName(file.name);
      setPError('');
    }
  };

  const handlePSubmit = async (e) => {
    e.preventDefault();
    setPSubmitting(true);
    setPError('');
    try {
      const formData = new FormData();
      formData.append('access_key', WEB3FORMS_ACCESS_KEY);
      formData.append('subject', `[項目詢價] ${pForm.name} - ${pForm.company}`);
      formData.append('from_name', 'Sunrise Ocean Website');
      Object.entries(pForm).forEach(([k, v]) => formData.append(k, v));
      formData.append('required_services', selectedServices.join(' / ') || '-');
      if (fileRef.current?.files[0]) formData.append('attachment', fileRef.current.files[0]);
      const res = await fetch('https://api.web3forms.com/submit', { method: 'POST', body: formData });
      const data = await res.json();
      if (data.success) setPSubmitted(true);
      else setPError(data.message || 'Submit failed');
    } catch (err) {
      setPError(err.message || 'Network error');
    } finally {
      setPSubmitting(false);
    }
  };

  const resetPForm = () => {
    setPSubmitted(false);
    setPForm({ name: '', company: '', email: '', phone: '', location: '', type: '', message: '' });
    setSelectedServices([]);
    setFileName('');
    if (fileRef.current) fileRef.current.value = '';
  };

  const infoItems = [
    { icon: MapPin, label: t('contact.address_label'), value: t('contact.address') },
    { icon: Mail, label: t('contact.email_label'), value: t('contact.email'), href: `mailto:${t('contact.email')}` },
    { icon: Phone, label: t('contact.phone_label'), value: '+852 9167 0580', href: 'tel:+85291670580' },
    { icon: MessageCircle, label: 'WhatsApp', value: '+852 9167 0580', href: 'https://wa.me/85291670580' },
    { icon: Building2, label: t('contact.business_label'), value: t('contact.business') },
    { icon: Shield, label: 'BR No.', value: '78096706-000-05-26-A' },
  ];

  const serviceNames = t('services.items', { returnObjects: true }).map((s) => s.name);
  const typeOptions = t('inquiry.type_options', { returnObjects: true });

  return (
    <div className="min-h-screen pt-20 lg:pt-24">
      <SEO titleKey={t('seo.contact.title')} descKey={t('seo.contact.description')} path="/contact" />

      {/* Hero */}
      <section className="relative py-20 min-h-[320px] flex items-center overflow-hidden" style={{ background: 'linear-gradient(150deg, #0d2040 0%, #0a1628 60%, #0e1e38 100%)' }}>
        <HeroBg />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 border border-gold-500/40 bg-gold-500/8 text-gold-400 text-xs px-5 py-1.5 rounded-full mb-6 uppercase tracking-[0.2em] font-medium">
            <Anchor size={11} /><span>Contact</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-5 tracking-tight">{t('contact.title')}</h1>
          <div className="flex items-center justify-center gap-4 mb-5">
            <div className="h-px w-20 bg-gradient-to-r from-transparent to-gold-500/80" />
            <div className="w-1.5 h-1.5 rounded-full bg-gold-500" />
            <div className="h-px w-20 bg-gradient-to-l from-transparent to-gold-500/80" />
          </div>
          <p className="text-white/55 text-base sm:text-lg">{t('contact.subtitle')}</p>
        </div>
      </section>

      {/* Main */}
      <section className="bg-[#F5F7FA] py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">

            {/* Left Info */}
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-navy-900 rounded-2xl p-8 text-white relative overflow-hidden">
                <OceanPattern />
                <div className="relative z-10">
                  <Anchor size={28} className="text-gold-500 mb-4" />
                  <h3 className="font-bold text-lg mb-1">{t('footer.company_zh')}</h3>
                  <p className="text-white/50 text-sm mb-5">{t('footer.company_en')}</p>
                  <p className="text-gold-400 text-xs tracking-widest mb-6">{t('footer.tagline')}</p>
                  <div className="space-y-4">
                    {infoItems.map((item, i) => {
                      const Icon = item.icon;
                      return (
                        <div key={i} className="flex items-start gap-3">
                          <div className="w-8 h-8 rounded-lg bg-gold-500/10 flex items-center justify-center shrink-0 mt-0.5">
                            <Icon size={15} className="text-gold-400" />
                          </div>
                          <div className="min-w-0">
                            <div className="text-white/40 text-xs mb-0.5">{item.label}</div>
                            {item.href
                              ? <a href={item.href} className="text-white/80 text-sm hover:text-gold-400 transition-colors break-all">{item.value}</a>
                              : <div className="text-white/80 text-sm">{item.value}</div>}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                <h4 className="font-bold text-navy-900 text-sm mb-3">{t('contact.about_title')}</h4>
                <p className="text-gray-500 text-sm leading-relaxed">{t('contact.about_text')}</p>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                <h4 className="font-bold text-navy-900 text-sm mb-4">{t('contact.business_label')}</h4>
                <div className="flex flex-wrap gap-2">
                  {t('contact.coverage_regions', { returnObjects: true }).map((c) => (
                    <span key={c} className="bg-navy-900/5 text-navy-900 text-xs px-3 py-1 rounded-full border border-navy-900/10">{c}</span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Forms */}
            <div className="lg:col-span-3">
              {/* Tab switcher */}
              <div className="flex bg-white rounded-xl border border-gray-100 shadow-sm p-1 mb-5 gap-1">
                <button
                  onClick={() => setActiveTab('general')}
                  className={`flex-1 py-2.5 px-4 rounded-lg text-sm font-medium transition-all duration-200 ${activeTab === 'general' ? 'bg-navy-900 text-white shadow-sm' : 'text-gray-500 hover:text-navy-900'}`}
                >
                  {t('inquiry.tab_general')}
                </button>
                <button
                  onClick={() => setActiveTab('project')}
                  className={`flex-1 py-2.5 px-4 rounded-lg text-sm font-medium transition-all duration-200 ${activeTab === 'project' ? 'bg-gold-500 text-navy-900 shadow-sm' : 'text-gray-500 hover:text-navy-900'}`}
                >
                  {t('inquiry.tab_project')}
                </button>
              </div>

              {activeTab === 'general' ? (
                /* General Inquiry */
                <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-xl bg-navy-900/5 flex items-center justify-center">
                      <Send size={18} className="text-navy-900" />
                    </div>
                    <h2 className="text-xl font-bold text-navy-900">{t('contact.form_title')}</h2>
                  </div>
                  {submitted ? (
                    <div className="flex flex-col items-center justify-center py-16 text-center">
                      <CheckCircle size={48} className="text-green-500 mb-4" />
                      <p className="text-gray-700 font-medium text-lg mb-2">{t('contact.form_success')}</p>
                      <p className="text-gray-400 text-sm mb-8">{i18n.language === 'en' ? 'We will get back to you shortly.' : '我們將盡快與您聯繫。'}</p>
                      <button
                        onClick={() => { setSubmitted(false); setForm({ name: '', email: '', company: '', subject: '', message: '' }); }}
                        className="inline-flex items-center gap-2 text-navy-900 border border-navy-900/30 px-5 py-2.5 rounded-lg text-sm hover:bg-navy-900/5 transition-colors"
                      >
                        <Send size={14} />
                        {i18n.language === 'en' ? 'Send Another Inquiry' : '重新發送詢問'}
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1.5">{t('contact.form_name')} <span className="text-red-400">*</span></label>
                          <input type="text" name="name" required value={form.name} onChange={handleChange} placeholder={t('contact.placeholder_name')} className={inputClass} />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1.5">{t('contact.form_email')} <span className="text-red-400">*</span></label>
                          <input type="email" name="email" required value={form.email} onChange={handleChange} placeholder={t('contact.placeholder_email')} className={inputClass} />
                        </div>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1.5">{t('contact.form_company')}</label>
                          <input type="text" name="company" value={form.company} onChange={handleChange} placeholder={t('contact.placeholder_company')} className={inputClass} />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1.5">{t('contact.form_subject')} <span className="text-red-400">*</span></label>
                          <input type="text" name="subject" required value={form.subject} onChange={handleChange} placeholder={t('contact.placeholder_subject')} className={inputClass} />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1.5">{t('contact.form_message')} <span className="text-red-400">*</span></label>
                        <textarea name="message" required rows={5} value={form.message} onChange={handleChange} placeholder={t('contact.placeholder_message')} className={`${inputClass} resize-none`} />
                      </div>
                      {error && (
                        <div className="flex items-start gap-2 p-3 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
                          <AlertCircle size={16} className="mt-0.5 shrink-0" /><span>{error}</span>
                        </div>
                      )}
                      <button type="submit" disabled={submitting} className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-navy-900 hover:bg-navy-800 text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-200 disabled:opacity-60 disabled:cursor-not-allowed">
                        {submitting ? <Loader2 size={15} className="animate-spin" /> : <Send size={15} />}
                        {t('contact.form_submit')}
                      </button>
                    </form>
                  )}
                </div>
              ) : (
                /* Project Inquiry */
                <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-xl bg-gold-500/10 flex items-center justify-center">
                      <FileUp size={18} className="text-gold-600" />
                    </div>
                    <h2 className="text-xl font-bold text-navy-900">{t('inquiry.form_title')}</h2>
                  </div>

                  {pSubmitted ? (
                    <div className="flex flex-col items-center justify-center py-16 text-center">
                      <CheckCircle size={48} className="text-green-500 mb-4" />
                      <p className="text-gray-700 font-medium text-lg mb-2">{t('inquiry.success')}</p>
                      <p className="text-gray-400 text-sm mb-8">{t('inquiry.success_note')}</p>
                      <button onClick={resetPForm} className="inline-flex items-center gap-2 text-navy-900 border border-navy-900/30 px-5 py-2.5 rounded-lg text-sm hover:bg-navy-900/5 transition-colors">
                        <Send size={14} />{t('inquiry.send_another')}
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handlePSubmit} className="space-y-5">
                      {/* Name + Company */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1.5">{t('inquiry.name')} <span className="text-red-400">*</span></label>
                          <input type="text" name="name" required value={pForm.name} onChange={handlePChange} placeholder={t('inquiry.placeholder_name')} className={inputClass} />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1.5">{t('inquiry.company')} <span className="text-red-400">*</span></label>
                          <input type="text" name="company" required value={pForm.company} onChange={handlePChange} placeholder={t('inquiry.placeholder_company')} className={inputClass} />
                        </div>
                      </div>

                      {/* Email + Phone */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1.5">{t('inquiry.email')} <span className="text-red-400">*</span></label>
                          <input type="email" name="email" required value={pForm.email} onChange={handlePChange} placeholder={t('inquiry.placeholder_email')} className={inputClass} />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1.5">{t('inquiry.phone')}</label>
                          <input type="tel" name="phone" value={pForm.phone} onChange={handlePChange} placeholder={t('inquiry.placeholder_phone')} className={inputClass} />
                        </div>
                      </div>

                      {/* Location + Type */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1.5">{t('inquiry.location')}</label>
                          <input type="text" name="location" value={pForm.location} onChange={handlePChange} placeholder={t('inquiry.placeholder_location')} className={inputClass} />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1.5">{t('inquiry.type')}</label>
                          <select name="type" value={pForm.type} onChange={handlePChange} className={`${inputClass} bg-white`}>
                            <option value="">{t('inquiry.type_placeholder')}</option>
                            {typeOptions.map((opt) => <option key={opt} value={opt}>{opt}</option>)}
                          </select>
                        </div>
                      </div>

                      {/* Services checkboxes */}
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">{t('inquiry.services')}</label>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {serviceNames.map((svc) => (
                            <label key={svc} className={`flex items-center gap-2.5 px-3 py-2.5 rounded-lg border cursor-pointer transition-all text-sm select-none ${selectedServices.includes(svc) ? 'border-gold-500 bg-gold-500/5 text-navy-900' : 'border-gray-200 hover:border-gray-300 text-gray-600'}`}>
                              <div className={`w-4 h-4 rounded border flex items-center justify-center shrink-0 transition-colors ${selectedServices.includes(svc) ? 'bg-gold-500 border-gold-500' : 'border-gray-300 bg-white'}`}>
                                {selectedServices.includes(svc) && (
                                  <svg className="w-2.5 h-2.5 text-white" viewBox="0 0 10 8" fill="none">
                                    <path d="M1 4L3.5 6.5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                  </svg>
                                )}
                              </div>
                              <input type="checkbox" className="sr-only" checked={selectedServices.includes(svc)} onChange={() => toggleService(svc)} />
                              {svc}
                            </label>
                          ))}
                        </div>
                      </div>

                      {/* Message */}
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1.5">{t('inquiry.message')}</label>
                        <textarea name="message" rows={4} value={pForm.message} onChange={handlePChange} placeholder={t('inquiry.placeholder_message')} className={`${inputClass} resize-none`} />
                      </div>

                      {/* File upload */}
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1.5">{t('inquiry.file')}</label>
                        <input ref={fileRef} type="file" accept=".pdf,.doc,.docx,.dwg,.xls,.xlsx" onChange={handleFileChange} className="sr-only" id="inquiry-file" />
                        <label htmlFor="inquiry-file" className="flex items-center gap-3 w-full border border-dashed border-gray-300 rounded-lg px-4 py-3 cursor-pointer hover:border-gold-500 hover:bg-gold-500/3 transition-colors">
                          <FileUp size={18} className="text-gray-400 shrink-0" />
                          <div className="min-w-0 flex-1">
                            {fileName
                              ? <span className="text-sm text-navy-900 font-medium truncate block">{fileName}</span>
                              : <span className="text-sm text-gray-400">{t('inquiry.file_hint')}</span>}
                          </div>
                          {fileName && (
                            <button type="button" onClick={(e) => { e.preventDefault(); setFileName(''); if (fileRef.current) fileRef.current.value = ''; }} className="shrink-0 text-gray-400 hover:text-red-500 transition-colors">
                              <X size={15} />
                            </button>
                          )}
                        </label>
                      </div>

                      {pError && (
                        <div className="flex items-start gap-2 p-3 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
                          <AlertCircle size={16} className="mt-0.5 shrink-0" /><span>{pError}</span>
                        </div>
                      )}

                      <button type="submit" disabled={pSubmitting} className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gold-500 hover:bg-gold-400 text-navy-900 font-semibold px-8 py-3 rounded-lg transition-colors duration-200 disabled:opacity-60 disabled:cursor-not-allowed">
                        {pSubmitting ? <Loader2 size={15} className="animate-spin" /> : <Send size={15} />}
                        {t('inquiry.submit')}
                      </button>
                    </form>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-gold-500 text-xs uppercase tracking-widest font-semibold mb-2">FAQ</p>
            <h2 className="text-2xl font-bold text-navy-900 mb-2">{t('faq.title')}</h2>
            <p className="text-gray-500 text-sm">{t('faq.subtitle')}</p>
            <div className="h-0.5 w-12 bg-gold-500 mx-auto mt-4" />
          </div>
          <FAQAccordion items={t('faq.items', { returnObjects: true })} />
        </div>
      </section>
    </div>
  );
}
