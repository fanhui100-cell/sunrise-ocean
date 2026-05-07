import { Helmet } from 'react-helmet-async';
import { Anchor, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';
import HeroBg from '../components/HeroBg';

const LAST_UPDATED = '7 May 2025';
const COMPANY = 'Sunrise Ocean Engineering Limited';
const COMPANY_ZH = '金海洋工程有限公司';
const EMAIL = 'sunriseoceanengineering@outlook.com';
const SITE = 'https://sunrise-ocean.vercel.app';

const sections = [
  {
    title: '1. Acceptance of Terms',
    body: `By accessing or using the website at ${SITE} (the "Website"), you agree to be bound by these Terms of Use ("Terms"). If you do not agree to these Terms, please do not use the Website.\n\nThese Terms apply to all visitors, users, and others who access the Website. ${COMPANY} reserves the right to modify these Terms at any time, and such modifications shall be effective immediately upon posting.`,
  },
  {
    title: '2. About This Website',
    body: `This Website is operated by ${COMPANY} (${COMPANY_ZH}), a professional engineering company incorporated in Hong Kong (BR No. 78096706-000-05-26-A). The Website is intended to provide general information about our engineering services, project experience, and contact details for business enquiries.`,
  },
  {
    title: '3. Permitted Use',
    body: `You may use this Website for lawful purposes only. You agree not to:\n\n• Use the Website in any way that violates applicable local, national, or international laws or regulations\n• Transmit any unsolicited or unauthorised advertising or promotional material\n• Attempt to gain unauthorised access to any part of the Website or its related systems\n• Use automated tools (bots, scrapers, crawlers) to extract data from the Website without our prior written consent\n• Reproduce, duplicate, copy, or re-sell any part of the Website in contravention of these Terms\n• Engage in any conduct that restricts or inhibits anyone's use or enjoyment of the Website`,
  },
  {
    title: '4. Intellectual Property',
    body: `All content on this Website — including but not limited to text, graphics, logos, images, project descriptions, and page layouts — is the property of ${COMPANY} or its content suppliers and is protected by Hong Kong and international copyright laws.\n\nYou may view and print pages from the Website for your own personal, non-commercial reference. All other use, including reproduction, modification, distribution, or republication of any content, requires our prior written permission.\n\n"Sunrise Ocean Engineering Limited", "金海洋工程有限公司", and associated logos are trademarks of the Company. Nothing on this Website grants any licence to use these marks.`,
  },
  {
    title: '5. No Professional Advice',
    body: `The information provided on this Website is for general informational purposes only and does not constitute professional engineering, legal, financial, or other specialist advice.\n\nWhile we endeavour to keep information accurate and up to date, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, or suitability of any information on the Website.\n\nAny reliance you place on such information is strictly at your own risk. For professional engineering services, please contact us directly through the enquiry form or by email.`,
  },
  {
    title: '6. Enquiries and Communications',
    body: `Submitting an enquiry form or sending an email to us does not constitute a contract, agreement, or commitment of any kind. All project engagements are subject to a formal written agreement between ${COMPANY} and the client.\n\nWe will endeavour to respond to all genuine business enquiries within 1–2 working days, but cannot guarantee response times. We reserve the right not to respond to enquiries that are unsolicited, abusive, or outside our service scope.`,
  },
  {
    title: '7. Third-Party Links and Services',
    body: `This Website may contain links to third-party websites (such as WhatsApp, WeChat, Google Maps) for your convenience. These links do not signify our endorsement of those sites. We have no control over the content or availability of linked sites and accept no responsibility for them or for any loss or damage that may arise from your use of them.\n\nThird-party services embedded in this Website (Google Analytics, Google Maps, Web3Forms) operate under their own terms of service and privacy policies.`,
  },
  {
    title: '8. Disclaimer of Warranties',
    body: `This Website is provided on an "as is" and "as available" basis without any warranties of any kind, either express or implied, including but not limited to implied warranties of merchantability, fitness for a particular purpose, or non-infringement.\n\n${COMPANY} does not warrant that the Website will be uninterrupted, error-free, or free of viruses or other harmful components. We do not warrant the accuracy or completeness of any information on the Website.`,
  },
  {
    title: '9. Limitation of Liability',
    body: `To the fullest extent permitted by law, ${COMPANY}, its directors, employees, and agents shall not be liable for any direct, indirect, incidental, consequential, or punitive damages arising from:\n\n• Your use of, or inability to use, this Website\n• Any errors, mistakes, or inaccuracies in the Website content\n• Unauthorised access to or use of our servers\n• Any interruption or cessation of transmission to or from the Website\n• Any bugs, viruses, or other harmful code transmitted through the Website\n\nSome jurisdictions do not allow the exclusion of certain warranties or limitation of liability; in such jurisdictions, our liability shall be limited to the maximum extent permitted by law.`,
  },
  {
    title: '10. Privacy',
    body: `Your use of this Website is also governed by our Privacy Policy, which is incorporated into these Terms by reference. Please review our Privacy Policy at ${SITE}/privacy to understand our practices regarding the collection and use of your personal information.`,
  },
  {
    title: '11. Governing Law and Jurisdiction',
    body: `These Terms shall be governed by and construed in accordance with the laws of the Hong Kong Special Administrative Region. Any disputes arising in connection with these Terms or the Website shall be subject to the exclusive jurisdiction of the courts of Hong Kong SAR.\n\nIf any provision of these Terms is found to be invalid or unenforceable, the remaining provisions shall continue in full force and effect.`,
  },
  {
    title: '12. Changes to These Terms',
    body: `We reserve the right to revise these Terms of Use at any time. Changes will be effective immediately upon posting to the Website. The "Last Updated" date at the top of this page will reflect the most recent revision. Your continued use of the Website following any changes constitutes acceptance of the new Terms.`,
  },
  {
    title: '13. Contact Us',
    body: `If you have any questions about these Terms of Use, please contact:\n\n${COMPANY} (${COMPANY_ZH})\nFlat/Rm 63, 07/F, Woon Lee Commercial Building,\n7-9 Austin Avenue, Tsim Sha Tsui, Kowloon, Hong Kong\nEmail: ${EMAIL}\nPhone: +852 9167 0580`,
  },
];

export default function Terms() {
  return (
    <div className="min-h-screen pt-20 lg:pt-24">
      <Helmet>
        <title>Terms of Use | Sunrise Ocean Engineering Limited</title>
        <meta name="description" content="Terms of Use for the Sunrise Ocean Engineering Limited website — rules governing access and use of our website." />
        <meta name="robots" content="noindex" />
        <link rel="canonical" href={`${SITE}/terms`} />
      </Helmet>

      {/* Hero */}
      <section
        className="relative py-16 min-h-[240px] flex items-center overflow-hidden"
        style={{ background: 'linear-gradient(150deg, #0d2040 0%, #0a1628 60%, #0e1e38 100%)' }}
      >
        <HeroBg />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 border border-gold-500/40 bg-gold-500/8 text-gold-400 text-xs px-5 py-1.5 rounded-full mb-6 uppercase tracking-[0.2em] font-medium">
            <FileText size={11} /><span>Legal</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2 tracking-tight">Terms of Use</h1>
          <p className="text-white/40 text-sm mt-3">使用條款 · Last Updated: {LAST_UPDATED}</p>
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
                Please read these Terms of Use carefully before using our website. By accessing this site you agree to be bound by these terms.
              </p>
            </div>
          </div>

          {/* Sections */}
          <div className="space-y-5">
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
                          j % 2 === 1
                            ? <strong key={j} className="text-navy-900 font-semibold">{part}</strong>
                            : part
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
              <p className="text-navy-900 font-semibold text-sm">Privacy Policy / 隱私權政策</p>
              <p className="text-gray-400 text-xs mt-0.5">How we collect and use your personal data</p>
            </div>
            <Link
              to="/privacy"
              className="text-sm text-gold-600 hover:text-gold-700 font-medium transition-colors shrink-0"
            >
              Read Policy →
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
