import React from 'react';
import { FLEET_TIERS, FleetItem } from '../data/travelData';

interface FleetSectionProps {
  onSelectFleet?: (fleet: FleetItem) => void;
}

export const FleetSection: React.FC<FleetSectionProps> = ({ onSelectFleet }) => {
  return (
    <section
      id="fleet"
      aria-labelledby="fleet-heading"
      className="max-w-7xl mx-auto px-5 sm:px-margin space-y-space-md scroll-mt-28"
    >
      <div className="space-y-2">
        <span className="inline-block rounded-full bg-surface-container px-space-md py-1 font-label-sm text-label-sm text-primary">
          Breeze Chauffeurs
        </span>
        <h2
          id="fleet-heading"
          className="font-headline-lg text-headline-lg-mobile sm:text-headline-lg text-primary"
        >
          FIND THE RIGHT RIDE.
        </h2>
        <p className="font-body-md text-body-md text-secondary">
          Clean, well-maintained vehicles driven by courteous, experienced local
          drivers who prioritize safe and gentle transit.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-space-md">
        {FLEET_TIERS.map((tier) => {
          const isHighlighted = tier.isHighlighted;
          const iconBg =
            tier.id === 'private-travel'
              ? 'bg-surface-container-lowest text-primary'
              : tier.id === 'small-groups'
              ? 'bg-surface-container text-primary-container'
              : 'bg-secondary-container text-primary-container';

          return (
            <article
              key={tier.id}
              onClick={() => onSelectFleet && onSelectFleet(tier)}
              onKeyDown={(e) => {
                if ((e.key === 'Enter' || e.key === ' ') && onSelectFleet) {
                  e.preventDefault();
                  onSelectFleet(tier);
                }
              }}
              role="button"
              tabIndex={0}
              aria-label={`${tier.title} — ${tier.subtitle}. Click to enquire about this vehicle tier.`}
              className={`rounded-[2.5rem] p-space-md space-y-4 cursor-pointer hover:-translate-y-1 transition-transform duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary ${
                isHighlighted
                  ? 'bg-secondary-container'
                  : 'bg-surface-container-lowest border-2 border-surface-container'
              }`}
            >
              <div
                className={`w-12 h-12 rounded-full flex items-center justify-center ${iconBg}`}
                aria-hidden="true"
              >
                <span className="material-symbols-outlined">{tier.icon}</span>
              </div>

              <div>
                <h3 className="font-headline-sm text-headline-sm text-primary font-bold">
                  {tier.title}
                </h3>
                <p
                  className={`font-body-sm text-body-sm mt-1 ${
                    isHighlighted ? 'text-on-secondary-container' : 'text-secondary'
                  }`}
                >
                  {tier.subtitle}
                </p>
              </div>

              <div
                className={`space-y-2 pt-2 border-t ${
                  isHighlighted
                    ? 'border-surface-container-high'
                    : 'border-surface-container'
                }`}
              >
                <div
                  className={`flex items-center gap-2 font-label-sm text-label-sm ${
                    isHighlighted ? 'text-primary' : 'text-on-surface'
                  }`}
                >
                  <span
                    className={`material-symbols-outlined text-[16px] ${
                      isHighlighted ? 'text-primary-container' : 'text-secondary'
                    }`}
                    aria-hidden="true"
                  >
                    {tier.capacityIcon}
                  </span>
                  <span>{tier.capacity}</span>
                </div>

                <div
                  className={`flex items-center gap-2 font-label-sm text-label-sm ${
                    isHighlighted ? 'text-primary' : 'text-on-surface'
                  }`}
                >
                  <span
                    className={`material-symbols-outlined text-[16px] ${
                      isHighlighted ? 'text-primary-container' : 'text-secondary'
                    }`}
                    aria-hidden="true"
                  >
                    luggage
                  </span>
                  <span>{tier.luggage}</span>
                </div>

                <div
                  className={`flex items-center gap-2 font-label-sm text-label-sm ${
                    isHighlighted ? 'text-primary' : 'text-on-surface'
                  }`}
                >
                  <span
                    className={`material-symbols-outlined text-[16px] ${
                      isHighlighted ? 'text-primary-container' : 'text-secondary'
                    }`}
                    aria-hidden="true"
                  >
                    route
                  </span>
                  <span>{tier.bestFor}</span>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default FleetSection;
