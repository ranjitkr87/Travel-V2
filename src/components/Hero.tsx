import React from 'react';
import { HERO_IMAGES } from '../data/travelData';
import { SmartImage } from './SmartImage';

export const Hero: React.FC = () => {
  return (
    <section
      aria-labelledby="hero-heading"
      className="max-w-7xl mx-auto px-5 sm:px-margin"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-center">
        {/* Left: Copy & CTA */}
        <div className="lg:col-span-6 space-y-space-md">
          <div className="inline-flex items-center gap-2 px-space-md py-1.5 rounded-full bg-secondary-container text-primary-container">
            <span
              className="w-2.5 h-2.5 rounded-full bg-on-tertiary-container"
              aria-hidden="true"
            />
            <span className="font-label-md text-label-md">
              Kerala Roots, Global Horizons
            </span>
          </div>

          <h1
            id="hero-heading"
            className="font-display text-display-mobile sm:text-display text-primary leading-tight tracking-tight"
          >
            LET&apos;S PLAN SOMEWHERE GOOD.
          </h1>

          <p className="font-body-lg text-body-md sm:text-body-lg text-secondary max-w-xl">
            Travel made simple, from Kerala to destinations across India and the
            world. Unhurried itineraries, handpicked backwater stays, and
            authentic cultural voyages crafted with care.
          </p>

          <div className="flex flex-wrap items-center gap-space-md pt-space-xs">
            <a
              href="#packages"
              className="rounded-full bg-on-tertiary-container text-on-tertiary px-space-lg py-space-sm font-label-lg text-label-lg hover:opacity-95 active:scale-[0.98] transition-transform duration-150 inline-flex items-center gap-2 whitespace-nowrap focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
            >
              <span>Explore Journeys</span>
              <span className="material-symbols-outlined" aria-hidden="true">
                explore
              </span>
            </a>
            <a
              href="#fleet"
              className="rounded-full bg-surface-container text-primary px-space-lg py-space-sm font-label-lg text-label-lg hover:bg-surface-variant transition-colors duration-200 whitespace-nowrap focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
            >
              View Fleet
            </a>
          </div>

          {/* Quick trust metric badges */}
          <dl className="pt-space-md flex flex-wrap items-center gap-6 sm:gap-space-lg border-0">
            <div>
              <dd className="font-headline-sm text-headline-sm font-bold text-primary tabular-nums">
                12+ Yrs
              </dd>
              <dt className="font-label-sm text-label-sm text-secondary">
                Coastal Hospitality
              </dt>
            </div>
            <div
              className="w-px h-8 bg-surface-container-highest hidden xs:block"
              aria-hidden="true"
            />
            <div>
              <dd className="font-headline-sm text-headline-sm font-bold text-primary tabular-nums">
                100%
              </dd>
              <dt className="font-label-sm text-label-sm text-secondary">
                Custom Itineraries
              </dt>
            </div>
            <div
              className="w-px h-8 bg-surface-container-highest hidden xs:block"
              aria-hidden="true"
            />
            <div>
              <dd className="font-headline-sm text-headline-sm font-bold text-primary tabular-nums">
                2,400+
              </dd>
              <dt className="font-label-sm text-label-sm text-secondary">
                Mindful Travelers
              </dt>
            </div>
          </dl>
        </div>

        {/* Right: 3-Part Organic Image Composition */}
        <div className="lg:col-span-6 relative flex justify-center py-4 sm:py-6">
          <div className="relative w-full max-w-lg h-[400px] sm:h-[460px]">
            {/* Pebble 1: Large rounded photo of backwaters */}
            <div className="absolute top-0 left-0 sm:left-4 w-64 sm:w-80 h-72 sm:h-80 rounded-[3rem] overflow-hidden bg-surface-container-high border-4 border-surface-container-lowest">
              <SmartImage
                src={HERO_IMAGES.pebble1.src}
                alt={HERO_IMAGES.pebble1.alt}
                priority={true}
                fallbackIcon="sailing"
              />
            </div>

            {/* Pebble 2: Circular photo of travelers overlapping */}
            <div className="absolute top-28 sm:top-36 right-0 sm:right-6 w-40 h-40 sm:w-48 sm:h-48 rounded-full overflow-hidden bg-secondary-container border-4 border-surface-container-lowest z-10">
              <SmartImage
                src={HERO_IMAGES.pebble2.src}
                alt={HERO_IMAGES.pebble2.alt}
                priority={true}
                fallbackIcon="wb_sunny"
              />
            </div>

            {/* Pebble 3: Floating photo of coastal village */}
            <div className="absolute bottom-2 left-10 sm:left-24 w-52 sm:w-56 h-36 sm:h-40 rounded-[2.5rem] overflow-hidden bg-surface-container-highest border-4 border-surface-container-lowest z-20">
              <SmartImage
                src={HERO_IMAGES.pebble3.src}
                alt={HERO_IMAGES.pebble3.alt}
                priority={true}
                fallbackIcon="beach_access"
              />
            </div>

            {/* Floating Badge: KERALA -> WORLD */}
            <a
              href="#destinations"
              aria-label="Explore destinations from Kerala to the World"
              className="absolute -bottom-2 right-4 sm:right-12 z-30 rounded-full bg-primary-container text-surface px-space-md py-2 font-label-md text-label-md flex items-center gap-2 hover:bg-primary transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              <span
                className="material-symbols-outlined text-[16px] text-on-tertiary-container"
                aria-hidden="true"
              >
                flight_takeoff
              </span>
              <span className="whitespace-nowrap">KERALA → WORLD</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
