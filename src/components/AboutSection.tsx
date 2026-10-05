import React from 'react';
import { ABOUT_IMAGE } from '../data/travelData';
import { SmartImage } from './SmartImage';

export const AboutSection: React.FC = () => {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="max-w-7xl mx-auto px-5 sm:px-margin scroll-mt-28"
    >
      <div className="rounded-[2.5rem] sm:rounded-[3rem] bg-surface-container p-6 sm:p-space-lg lg:p-space-xl grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-center">
        <div className="lg:col-span-6 space-y-space-md">
          <span className="inline-block rounded-full bg-secondary-container px-space-md py-1 font-label-sm text-label-sm text-primary-container">
            Our Origin
          </span>
          <h2
            id="about-heading"
            className="font-headline-lg text-headline-lg-mobile sm:text-headline-lg text-primary"
          >
            Born under Kerala&apos;s Banyan Trees
          </h2>
          <p className="font-body-md text-body-md text-secondary leading-relaxed">
            Breeze &amp; Banyan started in Fort Kochi with an uncomplicated
            idea: travel shouldn&apos;t feel like a checklist. Too many people
            return from vacations more fatigued than when they left.
          </p>
          <p className="font-body-md text-body-md text-secondary leading-relaxed">
            We are a small collective of Kerala-born curators who prioritize
            relaxed pacing, genuine homestays, and community connections.
            Whether you want a three-day escape to the silent backwaters or a
            carefully routed trip across the Indian subcontinent and beyond, we
            look after you with the gentle warmth of an old friend.
          </p>
          <div className="pt-2 flex flex-wrap items-center gap-4 sm:gap-space-lg">
            <div className="flex items-center gap-2">
              <span
                className="material-symbols-outlined text-primary-container"
                aria-hidden="true"
              >
                verified
              </span>
              <span className="font-label-md text-label-md text-primary">
                Kerala Tourism Accredited
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span
                className="material-symbols-outlined text-primary-container"
                aria-hidden="true"
              >
                handshake
              </span>
              <span className="font-label-md text-label-md text-primary">
                Direct Artisan Partnerships
              </span>
            </div>
          </div>
        </div>

        <div className="lg:col-span-6 flex justify-center">
          <div className="w-full max-w-md h-80 sm:h-96 rounded-[2.5rem] sm:rounded-[3rem] overflow-hidden bg-surface-container-highest border-4 border-surface-container-lowest">
            <SmartImage src={ABOUT_IMAGE.src} alt={ABOUT_IMAGE.alt} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
