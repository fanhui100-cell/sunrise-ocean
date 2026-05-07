import { Helmet } from 'react-helmet-async';
import { Anchor, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';
import HeroBg from '../components/HeroBg';

const LAST_UPDATED = '7 May 2025';
const COMPANY = 'Sunrise Ocean Engineering Limited';
const EMAIL = 'sunriseoceanengineering@outlook.com';
const SITE = 'https://sunrise-ocean.vercel.app';

const sections = [
  {
    title: '1. About This Policy',
    body: `${COMPANY} ("we", "us", or "our") is committed to protecting your personal information. This Privacy Policy explains what information we collect through our website (${SITE}), how we use it, and your rights in relation to that information.\n\nBy using this website, you agree to the practices described in this policy.`,
  },
  {
    title: '2. Information We Collect',
    body: `We collect information in two ways:\n\n**a) Information you provide directly**\nWhen you fill in a contact or project enquiry form, we collect: your name, email address, phone number, company name, and the details of your enquiry or project requirements. File attachments you upload are also received.\n\n**b) Information collected automatically**\nWhen you visit our website, we may automatically collect: your IP address, browser type and version, pages visited, time spent on each page, and referring URL. This is collected through Google Analytics 4.`,
  },
  {
    title: '3. How We Use Your Information',
    body: `We use the information collected to:\n• Respond to your enquiries and requests\n• Provide project quotations and professional services\n• Improve the content and usability of our website\n• Comply with legal obligations\n\nWe do not sell, rent, or share your personal information with third parties for their marketing purposes.`,
  },
  {
    title: '4. Cookies & Analytics',
    body: `Our website uses cookies and similar tracking technologies.\n\n**Google Analytics 4**: We use Google Analytics to understand how visitors interact with our website. Google Analytics collects anonymised data about your visit. You can opt out by installing the Google Analytics Opt-out Browser Add-on (tools.google.com/dlpage/gaoptout).\n\n**Session cookies**: Used to maintain functionality during your visit and are deleted when you close your browser.\n\nYou can control cookies through your browser settings. Note that disabling cookies may affect some website functionality.`,
  },
  {
    title: '5. Third-Party Services',
    body: `We use the following third-party services that may process your data:\n\n• **Web3Forms** — processes contact form submissions. Your submitted data is transmitted to their servers to deliver messages to us. See web3forms.com/privacy.\n• **Google Analytics** — website analytics. See policies.google.com/privacy.\n• **Google Maps Platform** — interactive project location maps. See policies.google.com/privacy.\n• **Vercel** — website hosting. See vercel.com/legal/privacy-policy.`,
  },
  {
    title: '6. Data Security',
    body: `We implement reasonable technical and organisational measures to protect your personal information against unauthorised access, loss, or disclosure. All data transmitted between your browser and our website is encrypted via HTTPS/TLS.\n\nHowever, no internet transmission is entirely secure. We cannot guarantee absolute security, but we take all reasonable precautions.`,
  },
  {
    title: '7. Data Retention',
    body: `Enquiry and contact form submissions are retained in our email system for as long as is necessary to respond to your enquiry or maintain our business relationship. Website analytics data is retained for 14 months in Google Analytics, after which it is automatically deleted.`,
  },
  {
    title: '8. Your Rights',
    body: `Depending on your jurisdiction, you may have the right to:\n• Access the personal data we hold about you\n• Request correction of inaccurate data\n• Request deletion of your data\n• Object to processing of your data\n• Withdraw consent at any time\n\nTo exercise any of these rights, please contact us at ${EMAIL}.`,
  },
  {
    title: '9. International Transfers',
    body: `Our website and services are operated from Hong Kong. If you access our website from outside Hong Kong, your data may be transferred to and processed in Hong Kong or where our third-party service providers operate. By using this website, you consent to such transfers.`,
  },
  {
    title: '10. Children\'s Privacy',
    body: `Our services are directed at business and professional clients. We do not knowingly collect personal information from individuals under the age of 18. If you believe we have inadvertently collected such information, please contact us and we will delete it promptly.`,
  },
  {
    title: '11. Updates to This Policy',
    body: `We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. When we do, we will update the "Last Updated" date at the top of this page. We encourage you to review this page periodically.`,
  },
  {
    title: '12. Contact Us',
    body: `If you have any questions about this Privacy Policy or how we handle your data, please contact:\n\n${COMPANY}\nFlat/Rm 63, 07/F, Woon Lee Commercial Building,\n7-9 Austin Avenue, Tsim Sha Tsui, Kowloon, Hong Kong\nEmail: ${EMAIL}\nPhone: +852 9167 0580`,
  },
];

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen pt-20 lg:pt-24">
      <Helmet>
        <title>Privacy Policy | Sunrise Ocean Engineering Limited</title>
        <meta name="description" content="Privacy Policy for Sunrise Ocean Engineering Limited — how we collect, use, and protect your personal information." />
        <meta name="robots" content="noindex" />
        <link rel="canonical" href={`${SITE}/privacy`} />
      </Helmet>

      {/* Hero */}
      <section className="relative py-16 min-h-[240px] flex items-center overflow-hidden" style={{ background: 'linear-gradient(150deg, #0d2040 0%, #0a1628 60%, #0e1e38 100%)' }}>
        <HeroBg />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 border border-gold-500/40 bg-gold-500/8 text-gold-400 text-xs px-5 py-1.5 rounded-full mb-6 uppercase tracking-[0.2em] font-medium">
            <Shield size={11} /><span>Legal</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4 tracking-tight">Privacy Policy</h1>
          <p className="text-white/40 text-sm">Last Updated: {LAST_UPDATED}</p>
        </div>
      </section>

      {/* Content */}
      <section className="bg-[#F5F7FA] py-14">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Intro card */}
          <div className="bg-navy-900 rounded-2xl p-6 mb-8 flex items-start gap-4">
            <Anchor size={22} className="text-gold-500 shrink-0 mt-0.5" />
            <div>
              <p className="text-white/80 text-sm font-semibold mb-1">{COMPANY}</p>
              <p className="text-white/45 text-sm leading-relaxed">
                We are committed to protecting your privacy. This policy applies to all visitors and enquirers who interact with our website.
              </p>
            </div>
          </div>

          {/* Sections */}
          <div className="space-y-6">
            {sections.map((sec) => (
              <div key={sec.title} className="bg-white rounded-2xl p-7 border border-gray-100 shadow-sm">
                <h2 className="text-navy-900 font-bold text-base mb-3">{sec.title}</h2>
                <div className="text-gray-600 text-sm leading-relaxed space-y-2">
                  {sec.body.split('\n').map((line, i) => {
                    if (!line.trim()) return <br key={i} />;
                    const parts = line.split(/\*\*(.*?)\*\*/g);
                    return (
                      <p key={i}>
                        {parts.map((part, j) =>
                          j % 2 === 1 ? <strong key={j} className="text-navy-900 font-semibold">{part}</strong> : part
                        )}
                      </p>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          {/* Related link */}
          <div className="mt-8 bg-white rounded-2xl p-5 border border-gray-100 shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <div>
              <p className="text-navy-900 font-semibold text-sm">Terms of Use / 使用條款</p>
              <p className="text-gray-400 text-xs mt-0.5">Rules governing access and use of our website</p>
            </div>
            <Link
              to="/terms"
              className="text-sm text-gold-600 hover:text-gold-700 font-medium transition-colors shrink-0"
            >
              Read Terms →
            </Link>
          </div>

          <div className="mt-8 text-center">
            <Link to="/" className="inline-flex items-center gap-2 text-sm text-navy-900/60 hover:text-gold-600 transition-colors">
              ← Back to Home
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
