import React from 'react';
import { TRAVEL_STYLE_TAGS, TRAVEL_STYLE_IMAGE } from '../data/travelData';
import { SmartImage } from './SmartImage';

interface TravelStyleSectionProps {
  selectedStyle: string | null;
  onToggleStyle: (label: string) => void;
}

export const TravelStyleSection: React.FC<TravelStyleSectionProps> = ({
  selectedStyle,
  onToggleStyle,
}) => {
  const activeTagObj = TRAVEL_STYLE_TAGS.find((t) => t.label === selectedStyle);

  return (
    <section
      aria-labelledby="travel-style-heading"
      className="max-w-7xl mx-auto px-5 sm:px-margin"
    >
      <div className="rounded-[2.5rem] sm:rounded-[3rem] bg-surface-container-low p-6 sm:p-space-lg lg:p-space-xl grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-center">
        <div className="lg:col-span-7 space-y-space-md">
          <span className="inline-block rounded-full bg-surface-container px-space-md py-1 font-label-sm text-label-sm text-primary">
            Your Travel Style
          </span>
          <h2
            id="travel-style-heading"
            className="font-headline-lg text-headline-lg-mobile sm:text-headline-lg text-primary"
          >
            Crafted for the Way You Travel
          </h2>
          <p className="font-body-md text-body-md text-secondary">
            No two travelers look for the same memories. Choose your style or
            combine elements across boundaries to make it wholly yours.
          </p>

          {/* Interactive Cloud of Floating Pastel Pill Tags */}
          <div
            role="group"
            aria-label="Filter journeys by travel style"
            className="flex flex-wrap gap-2.5 pt-2"
          >
            {TRAVEL_STYLE_TAGS.map((tag) => {
              const isSelected = selectedStyle === tag.label;
              const baseColor =
                tag.variant === 'secondary'
                  ? 'bg-secondary-container text-primary-container'
                  : tag.variant === 'highest'
                  ? 'bg-surface-container-highest text-primary'
                  : 'bg-surface-container text-primary';

              return (
                <button
                  key={tag.id}
                  type="button"
                  aria-pressed={isSelected}
                  onClick={() => onToggleStyle(tag.label)}
                  className={`rounded-full px-space-md py-2 font-label-md text-label-md cursor-pointer transition-all whitespace-nowrap focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary ${
                    isSelected
                      ? 'bg-primary-container text-surface'
                      : `${baseColor} hover:bg-primary-container hover:text-surface`
                  }`}
                >
                  {tag.label}
                </button>
              );
            })}
          </div>

          {activeTagObj && (
            <div
              role="status"
              aria-live="polite"
              className="rounded-[1.5rem] bg-surface-container p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3"
            >
              <p className="font-body-sm text-body-sm text-primary">
                <strong className="font-bold">{activeTagObj.label}:</strong>{' '}
                {activeTagObj.description}
              </p>
              <a
                href="#enquiry"
                className="font-label-sm text-label-sm text-primary-container underline whitespace-nowrap shrink-0"
              >
                Plan this style →
              </a>
            </div>
          )}
        </div>

        <div className="lg:col-span-5 flex justify-center">
          <div className="relative w-72 h-80 sm:w-88 sm:h-96 rounded-[3rem] overflow-hidden bg-secondary-container border-4 border-surface-container-lowest">
            <SmartImage
              src={TRAVEL_STYLE_IMAGE.src}
              alt={TRAVEL_STYLE_IMAGE.alt}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TravelStyleSection;
