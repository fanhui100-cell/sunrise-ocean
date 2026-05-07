import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import './i18n/index.js';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import NavProgress from './components/NavProgress';
import BackToTop from './components/BackToTop';
import CookieBanner from './components/CookieBanner';
import QuickContact from './components/QuickContact';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import News from './pages/News';
import NotFound from './pages/NotFound';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Terms from './pages/Terms';

function RTLHandler() {
  const { i18n } = useTranslation();
  useEffect(() => {
    document.documentElement.dir = i18n.language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);
  return null;
}

export default function App() {
  return (
    <HelmetProvider>
    <BrowserRouter>
      <RTLHandler />
      <ScrollToTop />
      <NavProgress />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/news" element={<News />} />
<Route path="/privacy" element={<PrivacyPolicy />} />
<Route path="/terms" element={<Terms />} />
<Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
        <QuickContact />
        <BackToTop />
        <CookieBanner />
      </div>
    </BrowserRouter>
    </HelmetProvider>
  );
}
