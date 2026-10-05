/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, Suspense, lazy } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import {
  DestinationItem,
  PackageItem,
  JournalArticle,
  FleetItem,
  ServiceItem,
} from './data/travelData';

// Code-split below-the-fold sections for optimal bundle size & initial page load performance
const DestinationsSection = lazy(() => import('./components/DestinationsSection'));
const PackagesSection = lazy(() => import('./components/PackagesSection'));
const FleetSection = lazy(() => import('./components/FleetSection'));
const ServicesSection = lazy(() => import('./components/ServicesSection'));
const TravelStyleSection = lazy(() => import('./components/TravelStyleSection'));
const WhyUsSection = lazy(() => import('./components/WhyUsSection'));
const StoriesSection = lazy(() => import('./components/StoriesSection'));
const JournalSection = lazy(() => import('./components/JournalSection'));
const AboutSection = lazy(() => import('./components/AboutSection'));
const EnquirySection = lazy(() => import('./components/EnquirySection'));
const Footer = lazy(() => import('./components/Footer'));
const DetailModal = lazy(() => import('./components/DetailModal'));

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('destinations');
  const [selectedStyleFilter, setSelectedStyleFilter] = useState<string | null>(null);
  const [selectedDestination, setSelectedDestination] = useState<DestinationItem | null>(null);
  const [selectedPackage, setSelectedPackage] = useState<PackageItem | null>(null);
  const [selectedArticle, setSelectedArticle] = useState<JournalArticle | null>(null);
  const [privacyOpen, setPrivacyOpen] = useState<boolean>(false);
  const [prefilledSubject, setPrefilledSubject] = useState<string>('');

  // Dynamic SEO canonical URL synchronization & scroll spy for navigation
  useEffect(() => {
    const canonicalLink = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (canonicalLink && typeof window !== 'undefined') {
      canonicalLink.href = window.location.origin + window.location.pathname;
    }

    const handleScroll = () => {
      const sectionIds = ['destinations', 'packages', 'fleet', 'services', 'about', 'enquiry'];
      const scrollPosition = window.scrollY + 220;

      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleToggleStyle = (label: string) => {
    setSelectedStyleFilter((prev) => (prev === label ? null : label));
  };

  const closeAllModals = () => {
    setSelectedDestination(null);
    setSelectedPackage(null);
    setSelectedArticle(null);
    setPrivacyOpen(false);
  };

  const handlePlanTrip = (subject: string) => {
    closeAllModals();
    setPrefilledSubject(subject);
    const enquiryEl = document.getElementById('enquiry');
    if (enquiryEl) {
      enquiryEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectFleet = (fleet: FleetItem) => {
    handlePlanTrip(`${fleet.title} — ${fleet.subtitle}`);
  };

  const handleSelectService = (service: ServiceItem) => {
    handlePlanTrip(`${service.title} Assistance`);
  };

  return (
    <div className="min-h-screen bg-background text-on-surface selection:bg-secondary-container selection:text-primary-container">
      {/* Accessible Skip-to-Content Link for Keyboard & Screen Reader Users */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded-full focus:bg-primary focus:text-on-primary focus:px-6 focus:py-3 focus:font-label-lg"
      >
        Skip to main content
      </a>

      {/* 1. Floating Top Navigation Bar */}
      <Header activeSection={activeSection} />

      {/* Main Content Canvas */}
      <main
        id="main-content"
        role="main"
        className="pt-28 sm:pt-32 space-y-12 sm:space-y-space-xl overflow-hidden"
      >
        {/* 2. Organic Hero Section */}
        <Hero />

        <Suspense
          fallback={
            <div
              className="max-w-7xl mx-auto px-margin py-12 text-center font-label-md text-secondary"
              aria-live="polite"
            >
              Curating slow travel horizons...
            </div>
          }
        >
          {/* 3. Destinations (Curated Horizons) */}
          <DestinationsSection onSelectDestination={setSelectedDestination} />

          {/* 4. Tour Packages (Asymmetric Rounded Panels, No Prices) */}
          <PackagesSection
            selectedStyleFilter={selectedStyleFilter}
            onClearFilter={() => setSelectedStyleFilter(null)}
            onSelectPackage={setSelectedPackage}
          />

          {/* 5. Fleet ("FIND THE RIGHT RIDE.") */}
          <FleetSection onSelectFleet={handleSelectFleet} />

          {/* 6. Services (Fluid List of 8 Core Services) */}
          <ServicesSection onSelectService={handleSelectService} />

          {/* 7. Travel Types (Cloud of Floating Pastel Pill Tags Beside Photography) */}
          <TravelStyleSection
            selectedStyle={selectedStyleFilter}
            onToggleStyle={handleToggleStyle}
          />

          {/* 8. Why Breeze & Banyan (Three Organic Info Blocks Paired with Photography) */}
          <WhyUsSection />

          {/* 9. Stories From The Road (Horizontally Scrolling Testimonial Cards) */}
          <StoriesSection />

          {/* 10. Travel Journal / Guides */}
          <JournalSection onSelectArticle={setSelectedArticle} />

          {/* 11. About Us (Human-centered Kerala Roots) */}
          <AboutSection />

          {/* 12. Ready to Plan Your Trip (Minimalist Enquiry Form) */}
          <EnquirySection prefilledSubject={prefilledSubject} />
        </Suspense>
      </main>

      {/* 13. Footer */}
      <Suspense fallback={null}>
        <Footer onOpenPrivacy={() => setPrivacyOpen(true)} />
      </Suspense>

      {/* Interactive Itinerary, Destination, & Essay Modal */}
      <Suspense fallback={null}>
        <DetailModal
          selectedDestination={selectedDestination}
          selectedPackage={selectedPackage}
          selectedArticle={selectedArticle}
          privacyOpen={privacyOpen}
          onClose={closeAllModals}
          onPlanThisTrip={handlePlanTrip}
        />
      </Suspense>
    </div>
  );
}
