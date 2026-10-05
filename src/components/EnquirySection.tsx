import React, { useState, useEffect } from 'react';

interface EnquirySectionProps {
  prefilledSubject?: string;
}

export const EnquirySection: React.FC<EnquirySectionProps> = ({
  prefilledSubject,
}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (prefilledSubject) {
      setMessage((prev) =>
        prev.includes(prefilledSubject)
          ? prev
          : `I would love to plan a trip around: ${prefilledSubject}. ${prev}`.trim()
      );
    }
  }, [prefilledSubject]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !phone.trim() || !message.trim()) {
      return;
    }
    setSubmitted(true);
  };

  return (
    <section
      id="enquiry"
      aria-labelledby="enquiry-heading"
      className="max-w-4xl mx-auto px-5 sm:px-margin space-y-space-md scroll-mt-28"
    >
      <div className="text-center space-y-2">
        <span className="inline-block rounded-full bg-secondary-container px-space-md py-1 font-label-sm text-label-sm text-primary-container">
          Take the First Step
        </span>
        <h2
          id="enquiry-heading"
          className="font-headline-lg text-headline-lg-mobile sm:text-headline-lg text-primary"
        >
          Ready to Plan Your Trip?
        </h2>
        <p className="font-body-md text-body-md text-secondary max-w-lg mx-auto">
          Tell us where you are dreaming of heading. A member of our small team
          will reply within 24 hours with thoughtful initial thoughts.
        </p>
      </div>

      {submitted ? (
        <div
          role="status"
          aria-live="polite"
          className="rounded-[2.5rem] sm:rounded-[3rem] bg-secondary-container p-8 sm:p-space-xl text-center space-y-4 border border-outline-variant/30"
        >
          <div className="w-14 h-14 rounded-full bg-surface-container-lowest text-primary mx-auto flex items-center justify-center">
            <span className="material-symbols-outlined text-[28px]" aria-hidden="true">
              check_circle
            </span>
          </div>
          <h3 className="font-headline-md text-headline-md text-primary font-bold">
            Warmest thanks, {name}.
          </h3>
          <p className="font-body-md text-body-md text-on-secondary-container max-w-md mx-auto">
            Your note has reached our Fort Kochi desk. One of our route curators
            will write to you at <strong>{email}</strong> or message you on
            WhatsApp (<strong>{phone}</strong>) within 24 hours.
          </p>
          <div className="pt-2">
            <button
              type="button"
              onClick={() => {
                setSubmitted(false);
                setName('');
                setEmail('');
                setPhone('');
                setMessage('');
              }}
              className="rounded-full bg-primary-container text-surface px-space-lg py-space-sm font-label-md text-label-md hover:bg-primary transition-colors cursor-pointer"
            >
              Send Another Note
            </button>
          </div>
        </div>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="rounded-[2.5rem] sm:rounded-[3rem] bg-surface-container p-6 sm:p-space-xl space-y-space-md border border-outline-variant/30"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md">
            {/* Name */}
            <div className="space-y-1.5">
              <label
                htmlFor="enquiry-name"
                className="font-label-md text-label-md text-primary block"
              >
                Your Name
              </label>
              <input
                id="enquiry-name"
                name="name"
                type="text"
                autoComplete="name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. Maya Menon"
                className="w-full rounded-full bg-surface-container-lowest border-0 px-space-md py-3 font-body-md text-body-md text-on-surface placeholder:text-outline focus:outline-none focus:ring-2 focus:ring-primary-container"
              />
            </div>

            {/* Email */}
            <div className="space-y-1.5">
              <label
                htmlFor="enquiry-email"
                className="font-label-md text-label-md text-primary block"
              >
                Email Address
              </label>
              <input
                id="enquiry-email"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="e.g. maya@example.com"
                className="w-full rounded-full bg-surface-container-lowest border-0 px-space-md py-3 font-body-md text-body-md text-on-surface placeholder:text-outline focus:outline-none focus:ring-2 focus:ring-primary-container"
              />
            </div>
          </div>

          {/* Phone */}
          <div className="space-y-1.5">
            <label
              htmlFor="enquiry-phone"
              className="font-label-md text-label-md text-primary block"
            >
              Phone / WhatsApp Number
            </label>
            <input
              id="enquiry-phone"
              name="phone"
              type="tel"
              autoComplete="tel"
              required
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="e.g. +91 98470 12345"
              className="w-full rounded-full bg-surface-container-lowest border-0 px-space-md py-3 font-body-md text-body-md text-on-surface placeholder:text-outline focus:outline-none focus:ring-2 focus:ring-primary-container"
            />
          </div>

          {/* Message */}
          <div className="space-y-1.5">
            <label
              htmlFor="enquiry-message"
              className="font-label-md text-label-md text-primary block"
            >
              Message (Where would you like to go?)
            </label>
            <textarea
              id="enquiry-message"
              name="message"
              rows={4}
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Share your rough dates, preferred travel pace, traveler count, or any specific places you wish to explore..."
              className="w-full rounded-[2rem] bg-surface-container-lowest border-0 p-space-md font-body-md text-body-md text-on-surface placeholder:text-outline focus:outline-none focus:ring-2 focus:ring-primary-container"
            />
          </div>

          {/* Send Button */}
          <div className="pt-2 text-center">
            <button
              type="submit"
              className="rounded-full bg-on-tertiary-container text-on-tertiary px-space-xl py-space-sm font-label-lg text-label-lg hover:opacity-95 active:scale-[0.98] transition-transform duration-150 inline-flex items-center gap-2 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
            >
              <span>SEND ENQUIRY</span>
              <span className="material-symbols-outlined" aria-hidden="true">
                send
              </span>
            </button>
          </div>
        </form>
      )}
    </section>
  );
};

export default EnquirySection;
