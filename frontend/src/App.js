import React, { Suspense, lazy } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import ServicesSection from "./components/ServicesSection";
import { Toaster } from "./components/ui/toaster";
import { Helmet } from "react-helmet-async";
import ScrollToTop from "./components/ScrollToTop";
import CookieConsent from "./components/CookieConsent";
import LazyLoad from "./components/LazyLoad";
import { RepairRequestModalProvider } from "./components/RepairRequestModal";
import {
  getOrganizationSchema,
  getWebSiteSchema,
  getSubscriptionServiceSchema,
  getRepairServiceSchema,
  getDiagnosticServiceSchema,
  getSiteNavigationSchema,
  getWPHeaderSchema,
  getWPFooterSchema,
} from "./utils/schemas";

// ── Below-the-fold компоненты главной — грузим только при скролле к ним ─────
// Это уменьшает initial JS-bundle и TBT.
const EquipmentSection = lazy(() => import("./components/EquipmentSection"));
const AboutSection = lazy(() => import("./components/AboutSection"));
const RepairRequestForm = lazy(() => import("./components/RepairRequestForm"));
const Footer = lazy(() => import("./components/Footer"));
const PromoPopup = lazy(() => import("./components/PromoPopup"));

// ── Lazy-loading всех роутов ────────────────────────────────────────────────
// Каждая страница теперь грузится отдельным чанком только при переходе на неё.
// На первой загрузке (главная) экономится ~60% JS-бандла.
const UserAgreement = lazy(() => import("./pages/UserAgreement"));
const PrinterSelection = lazy(() => import("./pages/PrinterSelection"));
const PrinterErrorGuide = lazy(() => import("./pages/PrinterErrorGuide"));
const PrintDefectsGuide = lazy(() => import("./pages/PrintDefectsGuide"));
const TermsOfService = lazy(() => import("./pages/TermsOfService"));
const HpRepair = lazy(() => import("./pages/brands/HpRepair"));
const CanonRepair = lazy(() => import("./pages/brands/CanonRepair"));
const KyoceraRepair = lazy(() => import("./pages/brands/KyoceraRepair"));
const RicohRepair = lazy(() => import("./pages/brands/RicohRepair"));
const KonicaMinoltaRepair = lazy(() => import("./pages/brands/KonicaMinoltaRepair"));
const XeroxRepair = lazy(() => import("./pages/brands/XeroxRepair"));
const Pricing = lazy(() => import("./pages/Pricing"));
const Districts = lazy(() => import("./pages/Districts"));
const AboutUs = lazy(() => import("./pages/AboutUs"));
const SubscriptionService = lazy(() => import("./pages/SubscriptionService"));
const OneTimeRepair = lazy(() => import("./pages/OneTimeRepair"));
const FAQ = lazy(() => import("./pages/FAQ"));
const Contacts = lazy(() => import("./pages/Contacts"));
const Reviews = lazy(() => import("./pages/Reviews"));
const MpsService = lazy(() => import("./pages/MpsService"));
const PokopiynoeObsluzhivanie = lazy(() => import("./pages/PokopiynoeObsluzhivanie"));
const KyoceraRental = lazy(() => import("./pages/KyoceraRental"));
const ComputersAndParts = lazy(() => import("./pages/ComputersAndParts"));
const NotFound = lazy(() => import("./pages/NotFound"));

// Лёгкий fallback пока чанк страницы скачивается
const RouteLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 via-white to-purple-50">
    <div className="flex items-center gap-3 text-purple-600">
      <div className="w-8 h-8 rounded-full border-4 border-purple-200 border-t-purple-600 animate-spin" />
      <span className="text-sm font-medium">Загрузка…</span>
    </div>
  </div>
);

// Резервная высота для скрытых секций — чтобы избежать сдвига макета (CLS)
const SectionPlaceholder = ({ height = "400px" }) => (
  <div style={{ minHeight: height }} aria-hidden="true" />
);

const Home = () => {
  // Все JSON-LD склеены в один <script> вместо 8 отдельных —
  // меньше парсинга и меньше head-блокировки рендера.
  const homeJsonLd = [
    getOrganizationSchema(),
    getWebSiteSchema(),
    getSubscriptionServiceSchema(),
    getRepairServiceSchema(),
    getDiagnosticServiceSchema(),
    getSiteNavigationSchema(),
    getWPHeaderSchema(),
    getWPFooterSchema(),
  ];

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Ремонт принтеров в Москве с выездом | ComplexPrint — HP, Canon, Kyocera, Ricoh. Гарантия 6 месяцев</title>
        <meta name="description" content="Профессиональный ремонт и обслуживание лазерных принтеров и МФУ в Москве и МО. Выезд мастера в день обращения, оригинальные запчасти, договор и гарантия 6 месяцев. HP, Canon, Kyocera, Ricoh. Приём заявок 24/7." />
        <link rel="canonical" href="https://complexprint.ru/" />
        <meta name="robots" content="index, follow" />
        <meta httpEquiv="content-language" content="ru" />
        <link rel="alternate" hrefLang="ru" href="https://complexprint.ru/" />

        <script type="application/ld+json">{JSON.stringify(homeJsonLd)}</script>
      </Helmet>
      <Header />
      <main>
        {/* Первый экран — рендерим синхронно (важно для LCP) */}
        <HeroSection />
        <ServicesSection />

        {/* Ниже первого экрана — грузим только при приближении к viewport */}
        <LazyLoad placeholder={<SectionPlaceholder height="500px" />} minHeight="500px">
          <EquipmentSection />
        </LazyLoad>
        <LazyLoad placeholder={<SectionPlaceholder height="400px" />} minHeight="400px">
          <AboutSection />
        </LazyLoad>
        <LazyLoad placeholder={<SectionPlaceholder height="600px" />} minHeight="600px">
          <RepairRequestForm />
        </LazyLoad>
      </main>
      <LazyLoad placeholder={<SectionPlaceholder height="300px" />} minHeight="300px">
        <Footer />
      </LazyLoad>
      <Suspense fallback={null}>
        <PromoPopup />
      </Suspense>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ScrollToTop />
        <RepairRequestModalProvider>
          <Suspense fallback={<RouteLoader />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/user-agreement" element={<UserAgreement />} />
              <Route path="/printer-selection" element={<PrinterSelection />} />
              <Route path="/printer-error-guide" element={<PrinterErrorGuide />} />
              <Route path="/print-defects-guide" element={<PrintDefectsGuide />} />
              <Route path="/terms-of-service" element={<TermsOfService />} />
              <Route path="/remont-printerov-hp" element={<HpRepair />} />
              <Route path="/remont-printerov-canon" element={<CanonRepair />} />
              <Route path="/remont-printerov-kyocera" element={<KyoceraRepair />} />
              <Route path="/remont-printerov-ricoh" element={<RicohRepair />} />
              <Route path="/remont-printerov-konica-minolta" element={<KonicaMinoltaRepair />} />
              <Route path="/remont-printerov-xerox" element={<XeroxRepair />} />
              <Route path="/ceny" element={<Pricing />} />
              <Route path="/rayony-moskvy" element={<Districts />} />
              <Route path="/about-us" element={<AboutUs />} />
              <Route path="/abonentskoe-obsluzhivanie" element={<SubscriptionService />} />
              <Route path="/razovyy-remont" element={<OneTimeRepair />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/reviews" element={<Reviews />} />
              <Route path="/mps-autsorsing-pechati" element={<MpsService />} />
              <Route path="/pokopiynoe-obsluzhivanie" element={<PokopiynoeObsluzhivanie />} />
              <Route path="/arenda-kyocera-m2035dn" element={<KyoceraRental />} />
              <Route path="/komputery-i-komplektuyushchie" element={<ComputersAndParts />} />
              {/* 404 - должен быть последним */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </RepairRequestModalProvider>
      </BrowserRouter>
      <Toaster />
      <CookieConsent />
    </div>
  );
}

export default App;
