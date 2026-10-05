import React from 'react';
import { JOURNAL_ARTICLES, JournalArticle } from '../data/travelData';
import { SmartImage } from './SmartImage';

interface JournalSectionProps {
  onSelectArticle: (article: JournalArticle) => void;
}

export const JournalSection: React.FC<JournalSectionProps> = ({
  onSelectArticle,
}) => {
  const featured = JOURNAL_ARTICLES.find((a) => a.isFeatured) || JOURNAL_ARTICLES[0];
  const guides = JOURNAL_ARTICLES.filter((a) => !a.isFeatured);

  return (
    <section
      id="journal"
      aria-labelledby="journal-heading"
      className="max-w-7xl mx-auto px-5 sm:px-margin space-y-space-md scroll-mt-28"
    >
      <div className="space-y-2">
        <span className="inline-block rounded-full bg-secondary-container px-space-md py-1 font-label-sm text-label-sm text-primary-container">
          Slow Notes
        </span>
        <h2
          id="journal-heading"
          className="font-headline-lg text-headline-lg-mobile sm:text-headline-lg text-primary"
        >
          Mindful Travel Journal
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-stretch">
        {/* Left: Featured Story */}
        <article
          onClick={() => onSelectArticle(featured)}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              onSelectArticle(featured);
            }
          }}
          role="button"
          tabIndex={0}
          aria-label={`Read Featured Essay: ${featured.title}`}
          className="lg:col-span-7 rounded-[2.5rem] sm:rounded-[3rem] bg-secondary-container p-6 sm:p-space-xl flex flex-col justify-between cursor-pointer hover:opacity-95 transition-opacity focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
        >
          <div className="space-y-4">
            <span className="inline-block rounded-full bg-surface-container-lowest px-space-md py-1 font-label-sm text-label-sm text-primary-container font-bold">
              Featured Essay
            </span>
            {featured.image && (
              <div className="h-60 sm:h-80 rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden">
                <SmartImage
                  src={featured.image}
                  alt={featured.alt || featured.title}
                />
              </div>
            )}
            <h3 className="font-headline-lg text-headline-lg-mobile sm:text-headline-lg text-primary font-bold">
              {featured.title}
            </h3>
            <p className="font-body-md text-body-md text-on-secondary-container">
              {featured.summary}
            </p>
          </div>

          <div className="pt-6 flex items-center gap-2 text-primary font-label-md text-label-md">
            <span>Read Story</span>
            <span
              className="material-symbols-outlined text-[16px]"
              aria-hidden="true"
            >
              arrow_forward
            </span>
          </div>
        </article>

        {/* Right: 3 Curated Guide Reads */}
        <div className="lg:col-span-5 flex flex-col justify-between gap-space-md">
          {guides.map((guide) => (
            <article
              key={guide.id}
              onClick={() => onSelectArticle(guide)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  onSelectArticle(guide);
                }
              }}
              role="button"
              tabIndex={0}
              aria-label={`Read guide: ${guide.title}`}
              className={`rounded-[2.5rem] ${guide.cardBg} p-6 sm:p-space-md space-y-2 cursor-pointer hover:-translate-y-0.5 transition-transform duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary`}
            >
              <span className={`font-label-sm text-label-sm ${guide.metaColor} block`}>
                {guide.categoryMeta}
              </span>
              <h4 className="font-title-md text-title-md text-primary font-bold">
                {guide.title}
              </h4>
              <p className={`font-body-sm text-body-sm ${guide.bodyColor}`}>
                {guide.summary}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JournalSection;
