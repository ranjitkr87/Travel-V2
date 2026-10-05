import React, { useEffect } from 'react';
import {
  DestinationItem,
  PackageItem,
  JournalArticle,
} from '../data/travelData';
import { SmartImage } from './SmartImage';

interface DetailModalProps {
  selectedDestination: DestinationItem | null;
  selectedPackage: PackageItem | null;
  selectedArticle: JournalArticle | null;
  privacyOpen: boolean;
  onClose: () => void;
  onPlanThisTrip: (subject: string) => void;
}

export const DetailModal: React.FC<DetailModalProps> = ({
  selectedDestination,
  selectedPackage,
  selectedArticle,
  privacyOpen,
  onClose,
  onPlanThisTrip,
}) => {
  const isOpen = Boolean(
    selectedDestination || selectedPackage || selectedArticle || privacyOpen
  );

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-dialog-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-primary/40 backdrop-blur-xs"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl max-h-[88vh] overflow-y-auto rounded-[2.5rem] bg-surface-container-lowest p-6 sm:p-space-lg shadow-[0_16px_36px_rgba(69,27,62,0.18)] space-y-6"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close dialog"
          className="absolute top-5 right-5 w-10 h-10 rounded-full bg-surface-container text-primary hover:bg-secondary-container flex items-center justify-center transition-colors cursor-pointer z-10"
        >
          <span className="material-symbols-outlined text-[20px]" aria-hidden="true">
            close
          </span>
        </button>

        {/* Destination Detail View */}
        {selectedDestination && (
          <div className="space-y-5">
            <div className="h-56 sm:h-64 rounded-[2rem] overflow-hidden">
              <SmartImage
                src={selectedDestination.image}
                alt={selectedDestination.alt}
              />
            </div>

            <div className="space-y-2">
              <span className="inline-block rounded-full bg-secondary-container px-3 py-1 font-label-sm text-label-sm text-primary-container">
                {selectedDestination.badge}
              </span>
              <h3
                id="modal-dialog-title"
                className="font-headline-md text-headline-md text-primary font-bold"
              >
                {selectedDestination.name} — Slow Horizons
              </h3>
              <p className="font-body-md text-body-md text-secondary">
                {selectedDestination.fullStory}
              </p>
            </div>

            <div className="rounded-[2rem] bg-surface-container p-5 space-y-3">
              <h4 className="font-title-md text-title-md text-primary font-bold">
                Signature Experiences
              </h4>
              <ul className="space-y-2">
                {selectedDestination.highlights.map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2.5 font-body-sm text-body-sm text-on-surface"
                  >
                    <span
                      className="material-symbols-outlined text-[18px] text-primary-container shrink-0 mt-0.5"
                      aria-hidden="true"
                    >
                      check_circle
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
              <div className="font-label-sm text-label-sm text-secondary space-y-0.5">
                <p>Best Season: {selectedDestination.bestSeason}</p>
                <p>Recommended Pace: {selectedDestination.idealDuration}</p>
              </div>
              <button
                type="button"
                onClick={() =>
                  onPlanThisTrip(`${selectedDestination.name} Custom Journey`)
                }
                className="rounded-full bg-on-tertiary-container text-on-tertiary px-space-lg py-2.5 font-label-md text-label-md hover:opacity-95 transition-opacity cursor-pointer"
              >
                Plan a {selectedDestination.name} Journey
              </button>
            </div>
          </div>
        )}

        {/* Package Detail View */}
        {selectedPackage && (
          <div className="space-y-5 pr-2">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="rounded-full bg-surface-container px-3 py-1 font-label-sm text-label-sm text-primary font-bold">
                  {selectedPackage.duration}
                </span>
                {selectedPackage.isSignature && (
                  <span className="rounded-full bg-secondary-container px-3 py-1 font-label-sm text-label-sm text-primary-container">
                    Signature
                  </span>
                )}
              </div>
              <h3
                id="modal-dialog-title"
                className="font-headline-md text-headline-md text-primary font-bold"
              >
                {selectedPackage.title}
              </h3>
              <p className="font-body-md text-body-md text-secondary">
                {selectedPackage.description}
              </p>
            </div>

            <div className="space-y-3">
              <h4 className="font-title-md text-title-md text-primary font-bold">
                Sample Slow-Paced Route
              </h4>
              <div className="space-y-3">
                {selectedPackage.itineraryHighlights.map((node, idx) => (
                  <div
                    key={idx}
                    className="rounded-[1.75rem] bg-surface-container p-4 space-y-1"
                  >
                    <span className="font-label-sm text-label-sm text-primary-container">
                      {node.day}
                    </span>
                    <h5 className="font-label-lg text-label-lg text-primary font-bold">
                      {node.title}
                    </h5>
                    <p className="font-body-sm text-body-sm text-secondary">
                      {node.detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[1.75rem] bg-secondary-container p-4 space-y-2">
              <h4 className="font-label-lg text-label-lg text-primary font-bold">
                Every Journey Includes:
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {selectedPackage.inclusions.map((inc, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2 font-body-sm text-body-sm text-primary"
                  >
                    <span
                      className="material-symbols-outlined text-[16px] text-primary-container shrink-0"
                      aria-hidden="true"
                    >
                      verified
                    </span>
                    <span>{inc}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
              <p className="font-body-sm text-body-sm text-secondary">
                100% bespoke — dates &amp; stays tailored to your pace.
              </p>
              <button
                type="button"
                onClick={() =>
                  onPlanThisTrip(
                    `${selectedPackage.title} (${selectedPackage.duration})`
                  )
                }
                className="rounded-full bg-on-tertiary-container text-on-tertiary px-space-lg py-2.5 font-label-md text-label-md hover:opacity-95 transition-opacity cursor-pointer"
              >
                Request Custom Quote
              </button>
            </div>
          </div>
        )}

        {/* Journal Article Reader View */}
        {selectedArticle && (
          <article className="space-y-5 pr-2">
            {selectedArticle.image && (
              <div className="h-56 sm:h-64 rounded-[2rem] overflow-hidden">
                <SmartImage
                  src={selectedArticle.image}
                  alt={selectedArticle.alt || selectedArticle.title}
                />
              </div>
            )}
            <div className="space-y-2">
              <span className="inline-block rounded-full bg-secondary-container px-3 py-1 font-label-sm text-label-sm text-primary-container">
                {selectedArticle.categoryMeta}
              </span>
              <h3
                id="modal-dialog-title"
                className="font-headline-md text-headline-md text-primary font-bold"
              >
                {selectedArticle.title}
              </h3>
            </div>
            <div className="space-y-4 font-body-md text-body-md text-on-surface leading-relaxed">
              {selectedArticle.fullContent.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
            <div className="pt-4 border-t border-surface-container flex items-center justify-between">
              <span className="font-label-sm text-label-sm text-secondary">
                Written by Breeze &amp; Banyan Curators • Fort Kochi
              </span>
              <button
                type="button"
                onClick={() =>
                  onPlanThisTrip(`Inspired by "${selectedArticle.title}"`)
                }
                className="rounded-full bg-primary-container text-surface px-space-md py-2 font-label-md text-label-md hover:bg-primary transition-colors cursor-pointer"
              >
                Plan a Similar Trip
              </button>
            </div>
          </article>
        )}

        {/* Privacy Policy View */}
        {privacyOpen && (
          <div className="space-y-4 pr-2">
            <span className="inline-block rounded-full bg-secondary-container px-3 py-1 font-label-sm text-label-sm text-primary-container">
              Privacy &amp; Trust
            </span>
            <h3
              id="modal-dialog-title"
              className="font-headline-md text-headline-md text-primary font-bold"
            >
              Privacy Policy
            </h3>
            <div className="space-y-3 font-body-sm text-body-sm text-secondary leading-relaxed">
              <p>
                At Breeze &amp; Banyan Travel Collective, we treat your personal
                details with the same care and respect we bring to our
                homestays.
              </p>
              <p>
                <strong className="text-primary">Information We Collect:</strong>{' '}
                When you submit an enquiry, we collect your name, email address,
                phone/WhatsApp number, and travel preferences solely so a human
                coordinator in our Fort Kochi office can craft your custom
                itinerary.
              </p>
              <p>
                <strong className="text-primary">Zero Third-Party Selling:</strong>{' '}
                We never sell, rent, or trade your contact details to automated
                marketing lists or third-party brokers. Details are shared only
                with verified homestay hosts, airlines, or visa consulates
                strictly required to fulfill your confirmed booking.
              </p>
              <p>
                For any privacy questions or data deletion requests, write to us
                at 14/280 Princess Street, Fort Kochi, Kerala 682001 or call +91
                484 256 7890.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DetailModal;
