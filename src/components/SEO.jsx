import { Helmet } from 'react-helmet-async';

const SITE_URL = 'https://sunrise-ocean.vercel.app';
const OG_IMAGE = `${SITE_URL}/images/logo.png`;

export default function SEO({ titleKey, descKey, path = '' }) {
  return (
    <Helmet>
      <title>{titleKey}</title>
      <meta name="description" content={descKey} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={titleKey} />
      <meta property="og:description" content={descKey} />
      <meta property="og:image" content={OG_IMAGE} />
      <meta property="og:url" content={`${SITE_URL}${path}`} />
      <meta property="og:site_name" content="Sunrise Ocean Engineering Limited" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={titleKey} />
      <meta name="twitter:description" content={descKey} />
      <meta name="twitter:image" content={OG_IMAGE} />

      {/* Canonical */}
      <link rel="canonical" href={`${SITE_URL}${path}`} />
    </Helmet>
  );
}
