import React, { useRef } from 'react';
import { STORIES } from '../data/travelData';

export const StoriesSection: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollNext = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 380, behavior: 'smooth' });
    }
  };

  return (
    <section
      aria-labelledby="stories-heading"
      className="max-w-7xl mx-auto px-5 sm:px-margin space-y-space-md"
    >
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <span className="inline-block rounded-full bg-surface-container px-space-md py-1 font-label-sm text-label-sm text-primary">
            Real Voices
          </span>
          <h2
            id="stories-heading"
            className="font-headline-lg text-headline-lg-mobile sm:text-headline-lg text-primary mt-2"
          >
            Stories From The Road
          </h2>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={scrollNext}
            aria-label="Scroll stories right"
            className="text-secondary hover:text-primary font-label-md text-label-md transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary rounded-full"
          >
            Scroll to explore →
          </button>
        </div>
      </div>

      <div
        ref={scrollRef}
        role="region"
        aria-label="Traveler testimonials"
        tabIndex={0}
        className="flex gap-space-md overflow-x-auto no-scrollbar pb-4 snap-x snap-mandatory focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary rounded-[2.5rem]"
      >
        {STORIES.map((story) => (
          <blockquote
            key={story.id}
            className={`flex-none w-80 sm:w-96 rounded-[2.5rem] ${story.cardBg} ${
              story.hasBorder ? 'border-2 border-surface-container' : ''
            } p-6 sm:p-space-lg flex flex-col justify-between space-y-4 snap-start`}
          >
            <p className="font-body-lg text-body-md sm:text-body-lg text-primary italic">
              {story.quote}
            </p>
            <footer className="flex items-center gap-3 pt-2">
              <div
                aria-hidden="true"
                className={`w-12 h-12 rounded-full ${story.avatarBg} flex items-center justify-center font-bold ${story.avatarText} shrink-0`}
              >
                {story.initials}
              </div>
              <div>
                <cite className="not-italic font-label-lg text-label-lg text-primary font-bold block">
                  {story.author}
                </cite>
                <p className={`font-label-sm text-label-sm ${story.metaText}`}>
                  {story.tripMeta}
                </p>
              </div>
            </footer>
          </blockquote>
        ))}
      </div>
    </section>
  );
};

export default StoriesSection;
