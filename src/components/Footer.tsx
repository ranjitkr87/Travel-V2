import React from 'react';

interface FooterProps {
  onOpenPrivacy: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenPrivacy }) => {
  return (
    <footer
      role="contentinfo"
      className="w-full rounded-t-[2.5rem] sm:rounded-t-xl mt-space-xl bg-surface-container-high"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-margin py-space-xl flex flex-col gap-space-lg">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-space-lg items-start">
          {/* Brand & Address */}
          <div className="md:col-span-5 space-y-4">
            <a
              href="#"
              className="font-headline-md text-headline-md font-bold text-primary inline-flex items-center gap-2 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary rounded-full"
            >
              <span
                className="w-8 h-8 rounded-full bg-secondary-container flex items-center justify-center text-primary-container"
                aria-hidden="true"
              >
                <span className="material-symbols-outlined text-[18px]">spa</span>
              </span>
              <span>Breeze &amp; Banyan</span>
            </a>

            <p className="font-body-md text-body-md text-secondary max-w-sm">
              Bespoke voyages through Kerala’s backwaters, spice plantations,
              and sanctuaries across India and the world.
            </p>

            <address className="not-italic space-y-1.5 text-secondary font-body-sm text-body-sm pt-2">
              <p className="flex items-center gap-2">
                <span
                  className="material-symbols-outlined text-[16px] text-primary-container shrink-0"
                  aria-hidden="true"
                >
                  location_on
                </span>
                <span>14/280 Princess Street, Fort Kochi, Kerala 682001</span>
              </p>
              <p className="flex items-center gap-2">
                <span
                  className="material-symbols-outlined text-[16px] text-primary-container shrink-0"
                  aria-hidden="true"
                >
                  call
                </span>
                <a
                  href="tel:+914842567890"
                  className="hover:text-primary transition-colors"
                >
                  +91 484 256 7890
                </a>
              </p>
              <p className="flex items-center gap-2">
                <span
                  className="material-symbols-outlined text-[16px] text-primary-container shrink-0"
                  aria-hidden="true"
                >
                  chat
                </span>
                <a
                  href="https://wa.me/919447122334"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  WhatsApp: +91 94471 22334
                </a>
              </p>
            </address>
          </div>

          {/* Quick Links */}
          <nav
            aria-label="Footer Discover Links"
            className="md:col-span-4 space-y-3"
          >
            <p className="font-headline-sm text-headline-sm font-bold text-primary">
              Discover
            </p>
            <div className="flex flex-col gap-2 font-label-md text-label-md">
              <a
                className="text-on-surface-variant hover:text-primary transition-colors duration-200 w-fit"
                href="#destinations"
              >
                Kerala Backwaters
              </a>
              <a
                className="text-on-surface-variant hover:text-primary transition-colors duration-200 w-fit"
                href="#destinations"
              >
                Spice Sanctuaries
              </a>
              <a
                className="text-on-surface-variant hover:text-primary transition-colors duration-200 w-fit"
                href="#packages"
              >
                Global Journeys
              </a>
              <a
                className="text-on-surface-variant hover:text-primary transition-colors duration-200 w-fit"
                href="#fleet"
              >
                Our Sustainable Fleet
              </a>
              <a
                className="text-on-surface-variant hover:text-primary transition-colors duration-200 w-fit"
                href="#journal"
              >
                Mindful Travel Journal
              </a>
            </div>
          </nav>

          {/* Touchpoint Pill */}
          <div className="md:col-span-3 space-y-4">
            <p className="font-headline-sm text-headline-sm font-bold text-primary">
              Direct Touch
            </p>
            <p className="font-body-sm text-body-sm text-secondary">
              Prefer talking directly with an itinerary creator? We&apos;re on
              WhatsApp all week.
            </p>
            <a
              className="rounded-full bg-secondary-container text-primary-container px-space-md py-2.5 font-label-md text-label-md inline-flex items-center gap-2 hover:bg-primary-container hover:text-surface transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              href="https://wa.me/919447122334"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span
                className="material-symbols-outlined text-[18px]"
                aria-hidden="true"
              >
                chat
              </span>
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        </div>

        {/* Bottom Bar & Copyright */}
        <div className="pt-space-md border-t border-surface-container flex flex-col sm:flex-row items-center justify-between gap-4 font-body-sm text-body-sm text-on-surface-variant">
          <p>© 2025 Breeze &amp; Banyan Travel Collective. Handcrafted in Kerala.</p>
          <div className="flex flex-wrap items-center gap-6">
            <a
              className="hover:text-primary transition-colors duration-200"
              href="#enquiry"
            >
              Contact Us
            </a>
            <button
              type="button"
              onClick={onOpenPrivacy}
              className="hover:text-primary transition-colors duration-200 cursor-pointer"
            >
              Privacy Policy
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
