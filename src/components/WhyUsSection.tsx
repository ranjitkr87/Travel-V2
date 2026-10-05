import React from 'react';
import { PROMISE_BLOCKS } from '../data/travelData';
import { SmartImage } from './SmartImage';

export const WhyUsSection: React.FC = () => {
  return (
    <section
      aria-labelledby="why-us-heading"
      className="max-w-7xl mx-auto px-5 sm:px-margin space-y-space-md"
    >
      <div className="text-center max-w-2xl mx-auto space-y-2">
        <span className="inline-block rounded-full bg-secondary-container px-space-md py-1 font-label-sm text-label-sm text-primary-container">
          Our Promise
        </span>
        <h2
          id="why-us-heading"
          className="font-headline-lg text-headline-lg-mobile sm:text-headline-lg text-primary"
        >
          Why Travel With Us?
        </h2>
        <p className="font-body-md text-body-md text-secondary">
          We are not a booking bot. We are local hosts, listeners, and route
          planners based out of Fort Kochi.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-space-md">
        {PROMISE_BLOCKS.map((block) => (
          <article
            key={block.id}
            className={`rounded-[2.5rem] ${block.cardBg} p-6 sm:p-space-lg space-y-4 flex flex-col justify-between`}
          >
            <div className="h-44 rounded-[2rem] overflow-hidden">
              <SmartImage src={block.image} alt={block.alt} />
            </div>
            <div>
              <h3 className="font-headline-sm text-headline-sm text-primary font-bold">
                {block.title}
              </h3>
              <p
                className={`font-body-md text-body-md mt-2 ${
                  block.textVariant === 'secondary-container'
                    ? 'text-on-secondary-container'
                    : 'text-secondary'
                }`}
              >
                {block.description}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default WhyUsSection;
