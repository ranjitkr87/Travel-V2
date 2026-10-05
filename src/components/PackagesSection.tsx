import React from 'react';
import { PACKAGES, PackageItem } from '../data/travelData';

interface PackagesSectionProps {
  selectedStyleFilter: string | null;
  onClearFilter: () => void;
  onSelectPackage: (pkg: PackageItem) => void;
}

export const PackagesSection: React.FC<PackagesSectionProps> = ({
  selectedStyleFilter,
  onClearFilter,
  onSelectPackage,
}) => {
  return (
    <section
      id="packages"
      aria-labelledby="packages-heading"
      className="max-w-7xl mx-auto px-5 sm:px-margin space-y-space-md scroll-mt-28"
    >
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div className="space-y-2">
          <span className="inline-block rounded-full bg-secondary-container px-space-md py-1 font-label-sm text-label-sm text-primary-container">
            Curated Escapes
          </span>
          <h2
            id="packages-heading"
            className="font-headline-lg text-headline-lg-mobile sm:text-headline-lg text-primary"
          >
            Signature Journeys Without Rush
          </h2>
          <p className="font-body-md text-body-md text-secondary">
            Every package is thoughtfully paced, bespoke, and tailored directly
            to your preferences.
          </p>
        </div>

        {selectedStyleFilter && (
          <div className="flex items-center gap-2 self-start sm:self-end">
            <span className="font-label-sm text-label-sm text-secondary">
              Highlighting: <strong className="text-primary">{selectedStyleFilter}</strong>
            </span>
            <button
              type="button"
              onClick={onClearFilter}
              className="rounded-full bg-surface-container px-3 py-1 font-label-sm text-label-sm text-primary hover:bg-secondary-container transition-colors"
            >
              Show All
            </button>
          </div>
        )}
      </div>

      {/* Asymmetrical Bento-style Layout */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-space-md">
        {PACKAGES.map((pkg) => {
          const matchesFilter =
            !selectedStyleFilter || pkg.travelStyle.includes(selectedStyleFilter);

          return (
            <article
              key={pkg.id}
              className={`${pkg.colSpan} rounded-[2.5rem] ${pkg.cardBg} p-6 sm:p-space-lg flex flex-col justify-between transition-opacity duration-200 ${
                matchesFilter ? 'opacity-100' : 'opacity-50'
              }`}
            >
              <div>
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  <span className="rounded-full bg-surface-container-lowest px-3 py-1 font-label-sm text-label-sm text-primary font-bold whitespace-nowrap">
                    {pkg.duration}
                  </span>
                  {pkg.isSignature && (
                    <span className="rounded-full bg-secondary-container px-3 py-1 font-label-sm text-label-sm text-primary-container whitespace-nowrap">
                      Signature
                    </span>
                  )}
                </div>
                <h3 className="font-headline-md text-[24px] sm:text-headline-md text-primary font-bold">
                  {pkg.title}
                </h3>
                <p
                  className={`font-body-md text-body-md mt-2 ${
                    pkg.textVariant === 'secondary-container'
                      ? 'text-on-secondary-container'
                      : 'text-secondary'
                  }`}
                >
                  {pkg.description}
                </p>
              </div>

              <div className="mt-6 pt-4 flex flex-wrap items-center justify-between gap-3">
                {pkg.footerMetaType === 'icons' ? (
                  <div className="flex flex-wrap items-center gap-2 text-secondary font-label-sm text-label-sm">
                    <span className="inline-flex items-center gap-1.5">
                      <span
                        className="material-symbols-outlined text-[18px]"
                        aria-hidden="true"
                      >
                        bed
                      </span>
                      <span>Homestay &amp; Villa</span>
                    </span>
                    <span className="mx-1" aria-hidden="true">
                      •
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <span
                        className="material-symbols-outlined text-[18px]"
                        aria-hidden="true"
                      >
                        directions_car
                      </span>
                      <span>Private Chauffeur</span>
                    </span>
                  </div>
                ) : (
                  <span
                    className={`font-label-sm text-label-sm ${
                      pkg.textVariant === 'secondary-container'
                        ? 'text-on-secondary-container'
                        : 'text-secondary'
                    }`}
                  >
                    {pkg.footerLabel}
                  </span>
                )}

                <button
                  type="button"
                  onClick={() => onSelectPackage(pkg)}
                  aria-label={`View itinerary details for ${pkg.title}`}
                  className="rounded-full bg-primary-container text-surface px-space-md py-2 font-label-md text-label-md hover:bg-primary active:scale-[0.98] transition-all whitespace-nowrap cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                >
                  View Details
                </button>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default PackagesSection;
