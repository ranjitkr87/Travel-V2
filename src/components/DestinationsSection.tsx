import React, { useRef } from 'react';
import { DESTINATIONS, DestinationItem } from '../data/travelData';
import { SmartImage } from './SmartImage';

interface DestinationsSectionProps {
  onSelectDestination: (destination: DestinationItem) => void;
}

export const DestinationsSection: React.FC<DestinationsSectionProps> = ({
  onSelectDestination,
}) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (!scrollContainerRef.current) return;
    if (e.key === 'ArrowRight') {
      scrollContainerRef.current.scrollBy({ left: 320, behavior: 'smooth' });
    } else if (e.key === 'ArrowLeft') {
      scrollContainerRef.current.scrollBy({ left: -320, behavior: 'smooth' });
    }
  };

  return (
    <section
      id="destinations"
      aria-labelledby="destinations-heading"
      className="max-w-7xl mx-auto px-5 sm:px-margin space-y-space-md scroll-mt-28"
    >
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <span className="inline-block rounded-full bg-surface-container px-space-md py-1 font-label-sm text-label-sm text-primary">
            Curated Horizons
          </span>
          <h2
            id="destinations-heading"
            className="font-headline-lg text-headline-lg-mobile sm:text-headline-lg text-primary mt-2"
          >
            Where do your thoughts drift?
          </h2>
        </div>
        <p className="font-body-md text-body-md text-secondary max-w-md">
          From the quiet canals of Alleppey to the old alleys of Kyoto and
          coastlines of the Mediterranean, explore journeys built around your
          natural cadence.
        </p>
      </div>

      {/* Horizontal Flow Cards with generous rounded corners */}
      <div
        ref={scrollContainerRef}
        onKeyDown={handleKeyDown}
        role="region"
        aria-label="Destination regions carousel"
        tabIndex={0}
        className="flex gap-space-md overflow-x-auto no-scrollbar pb-4 pt-2 snap-x snap-mandatory focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary rounded-[2.5rem]"
      >
        {DESTINATIONS.map((dest) => (
          <article
            key={dest.id}
            onClick={() => onSelectDestination(dest)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                onSelectDestination(dest);
              }
            }}
            role="button"
            tabIndex={0}
            aria-label={`Explore ${dest.name} (${dest.badge}): ${dest.description}`}
            className={`flex-none w-72 sm:w-80 rounded-[2.5rem] ${dest.cardBg} p-4 space-y-4 snap-start cursor-pointer hover:-translate-y-1 transition-transform duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary`}
          >
            <div className="h-64 rounded-[2rem] overflow-hidden">
              <SmartImage src={dest.image} alt={dest.alt} />
            </div>
            <div className="px-2 pb-2">
              <div className="flex justify-between items-center gap-2">
                <h3 className="font-headline-sm text-headline-sm text-primary font-bold">
                  {dest.name}
                </h3>
                <span className="rounded-full bg-surface-container-lowest px-3 py-1 font-label-sm text-label-sm text-primary-container whitespace-nowrap">
                  {dest.badge}
                </span>
              </div>
              <p
                className={`font-body-sm text-body-sm mt-1 ${
                  dest.textVariant === 'secondary-container'
                    ? 'text-on-secondary-container'
                    : 'text-secondary'
                }`}
              >
                {dest.description}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default DestinationsSection;
