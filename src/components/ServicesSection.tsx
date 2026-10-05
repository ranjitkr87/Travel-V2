import React from 'react';
import { CORE_SERVICES, ServiceItem } from '../data/travelData';

interface ServicesSectionProps {
  onSelectService?: (service: ServiceItem) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onSelectService,
}) => {
  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="max-w-7xl mx-auto px-5 sm:px-margin space-y-space-md scroll-mt-28"
    >
      <div>
        <span className="inline-block rounded-full bg-secondary-container px-space-md py-1 font-label-sm text-label-sm text-primary-container">
          Full Care Support
        </span>
        <h2
          id="services-heading"
          className="font-headline-lg text-headline-lg-mobile sm:text-headline-lg text-primary mt-2"
        >
          Every Detail Taken Care Of
        </h2>
      </div>

      <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-4 gap-space-md">
        {CORE_SERVICES.map((service) => (
          <article
            key={service.id}
            onClick={() => onSelectService && onSelectService(service)}
            onKeyDown={(e) => {
              if ((e.key === 'Enter' || e.key === ' ') && onSelectService) {
                e.preventDefault();
                onSelectService(service);
              }
            }}
            role="button"
            tabIndex={0}
            aria-label={`${service.title}: ${service.description}`}
            className="rounded-[2rem] bg-surface-container p-space-md flex flex-col items-center text-center space-y-2 cursor-pointer hover:bg-surface-container-high transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            <div
              className="w-12 h-12 rounded-full bg-surface-container-lowest flex items-center justify-center text-primary shrink-0"
              aria-hidden="true"
            >
              <span className="material-symbols-outlined">{service.icon}</span>
            </div>
            <h3 className="font-title-md text-title-md text-primary font-bold">
              {service.title}
            </h3>
            <p className="font-body-sm text-body-sm text-secondary">
              {service.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
