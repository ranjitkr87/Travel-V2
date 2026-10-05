import React, { useState, useEffect } from 'react';

interface HeaderProps {
  activeSection: string;
}

export const Header: React.FC<HeaderProps> = ({ activeSection }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Close mobile menu on window resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const navLinks = [
    { href: '#destinations', label: 'Destinations', id: 'destinations' },
    { href: '#packages', label: 'Packages', id: 'packages' },
    { href: '#services', label: 'Services', id: 'services' },
    { href: '#fleet', label: 'Fleet', id: 'fleet' },
    { href: '#about', label: 'About', id: 'about' },
  ];

  return (
    <header
      role="banner"
      className="fixed top-space-md inset-x-0 mx-auto w-[92%] max-w-7xl rounded-[2rem] md:rounded-full z-50 bg-surface-container-lowest/95 backdrop-blur-md shadow-[0_16px_36px_rgba(69,27,62,0.07)] transition-all duration-200"
    >
      <div className="flex justify-between items-center px-4 sm:px-space-lg py-space-sm w-full">
        {/* Brand Logo */}
        <a
          href="#"
          aria-label="Breeze & Banyan — Home"
          className="font-headline-md text-[20px] sm:text-headline-md font-bold tracking-tight text-primary flex items-center gap-2 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary rounded-full shrink-0"
        >
          <span
            className="w-8 h-8 rounded-full bg-secondary-container flex items-center justify-center text-primary-container shrink-0"
            aria-hidden="true"
          >
            <span className="material-symbols-outlined text-[18px]">spa</span>
          </span>
          <span className="whitespace-nowrap">Breeze &amp; Banyan</span>
        </a>

        {/* Desktop Nav Links */}
        <nav aria-label="Main Navigation" className="hidden md:flex items-center gap-space-lg">
          {navLinks.map((link) => {
            const isActive =
              activeSection === link.id ||
              (activeSection === '' && link.id === 'destinations');
            return (
              <a
                key={link.id}
                href={link.href}
                aria-current={isActive ? 'page' : undefined}
                className={`font-label-lg text-label-lg transition-colors duration-200 whitespace-nowrap focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary rounded-md ${
                  isActive
                    ? 'text-primary font-bold'
                    : 'text-secondary font-medium hover:text-primary-container'
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Trailing Action & Mobile Menu Button */}
        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href="#enquiry"
            className="rounded-full bg-primary-container text-surface px-4 sm:px-space-lg py-2.5 sm:py-space-sm font-label-lg text-[14px] sm:text-label-lg hover:bg-primary active:scale-[0.98] transition-all duration-150 inline-flex items-center gap-1.5 whitespace-nowrap focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
          >
            <span>Contact Us</span>
            <span className="material-symbols-outlined text-[16px]" aria-hidden="true">
              arrow_forward
            </span>
          </a>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation-drawer"
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            className="md:hidden w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-primary hover:bg-secondary-container transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            <span className="material-symbols-outlined text-[20px]" aria-hidden="true">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Responsive Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <nav
          id="mobile-navigation-drawer"
          aria-label="Mobile Navigation"
          className="md:hidden px-6 pb-5 pt-2 border-t border-surface-container flex flex-col gap-2"
        >
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="py-2.5 px-4 rounded-full font-label-lg text-label-lg text-primary hover:bg-secondary-container transition-colors flex items-center justify-between"
            >
              <span>{link.label}</span>
              <span className="material-symbols-outlined text-[16px] text-secondary" aria-hidden="true">
                chevron_right
              </span>
            </a>
          ))}
        </nav>
      )}
    </header>
  );
};
