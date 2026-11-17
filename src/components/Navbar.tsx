import { useEffect, useRef, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { NAV_ITEMS, PROFILE } from '../data/profile';
import type { PageRoute } from '../types/portfolio';

interface NavbarProps {
  activePage: PageRoute;
  onNavigate: (page: PageRoute) => void;
}

export function Navbar({ activePage, onNavigate }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const toggleButtonRef = useRef<HTMLButtonElement>(null);
  const drawerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mobileOpen) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const drawerEl = drawerRef.current;
    const focusableSelector =
      'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])';

    const focusTimer = window.setTimeout(() => {
      const firstFocusable = drawerEl?.querySelector<HTMLElement>(focusableSelector);
      firstFocusable?.focus();
    }, 10);

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        setMobileOpen(false);
        toggleButtonRef.current?.focus();
        return;
      }

      if (event.key === 'Tab' && drawerEl) {
        const focusables = Array.from(
          drawerEl.querySelectorAll<HTMLElement>(focusableSelector),
        );
        if (focusables.length === 0) {
          return;
        }

        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        const active = document.activeElement;

        if (event.shiftKey) {
          if (active === first || !drawerEl.contains(active)) {
            event.preventDefault();
            last.focus();
          }
        } else if (active === last || !drawerEl.contains(active)) {
          event.preventDefault();
          first.focus();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.clearTimeout(focusTimer);
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [mobileOpen]);

  const handlePageSelect = (page: PageRoute) => {
    setMobileOpen(false);
    onNavigate(page);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--border-hairline)] bg-[var(--bg-canvas)] no-print">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-8 px-4 sm:px-6 lg:px-8">
        {/* Zone 1: Single-element Brand Wordmark */}
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            handlePageSelect('home');
          }}
          aria-current={activePage === 'home' ? 'page' : undefined}
          className="font-display text-lg font-bold tracking-tight text-[var(--text-primary)] whitespace-nowrap shrink-0"
        >
          {PROFILE.name}
        </a>

        {/* Zone 2: 5 single-line page navigation links */}
        <nav aria-label="Primary" className="hidden md:flex items-center gap-6">
          {NAV_ITEMS.map((item) => {
            const isActive = activePage === item.id;
            return (
              <a
                key={item.id}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handlePageSelect(item.id);
                }}
                aria-current={isActive ? 'page' : undefined}
                className={`relative py-2 text-sm font-medium transition-colors whitespace-nowrap shrink-0 ${
                  isActive
                    ? 'text-[var(--accent-primary)]'
                    : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                }`}
              >
                {item.label}
                <span
                  aria-hidden="true"
                  className={`absolute inset-x-0 bottom-0 h-0.5 transition-opacity ${
                    isActive ? 'bg-[var(--accent-primary)] opacity-100' : 'opacity-0'
                  }`}
                />
              </a>
            );
          })}
        </nav>

        {/* Zone 3: Contact Action + Mobile Menu Trigger */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              handlePageSelect('contact');
            }}
            aria-current={activePage === 'contact' ? 'page' : undefined}
            className="hidden sm:inline-flex min-h-[40px] items-center justify-center rounded-lg bg-[var(--accent-primary)] px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-[var(--accent-primary-hover)] whitespace-nowrap shrink-0"
          >
            Contact
          </a>

          <button
            ref={toggleButtonRef}
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-navigation-drawer"
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-[var(--border-hairline)] bg-[var(--bg-surface)] text-[var(--text-primary)] md:hidden cursor-pointer"
          >
            {mobileOpen ? (
              <X className="h-5 w-5" aria-hidden="true" />
            ) : (
              <Menu className="h-5 w-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileOpen && (
        <div
          className="fixed inset-0 top-16 z-50 bg-slate-950/50 md:hidden"
          onClick={() => {
            setMobileOpen(false);
            toggleButtonRef.current?.focus();
          }}
        >
          <div
            ref={drawerRef}
            id="mobile-navigation-drawer"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
            className="border-b border-[var(--border-hairline)] bg-[var(--bg-surface)] px-4 py-4 shadow-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <nav aria-label="Mobile" className="flex flex-col gap-1">
              <a
                href="#home"
                onClick={(e) => {
                  e.preventDefault();
                  handlePageSelect('home');
                }}
                aria-current={activePage === 'home' ? 'page' : undefined}
                className={`flex min-h-[44px] items-center rounded-lg px-3 text-base font-medium transition-colors ${
                  activePage === 'home'
                    ? 'bg-[var(--accent-subtle)] text-[var(--accent-primary)]'
                    : 'text-[var(--text-secondary)] hover:bg-[var(--bg-surface-muted)] hover:text-[var(--text-primary)]'
                }`}
              >
                Home
              </a>
              {NAV_ITEMS.map((item) => {
                const isActive = activePage === item.id;
                return (
                  <a
                    key={item.id}
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handlePageSelect(item.id);
                    }}
                    aria-current={isActive ? 'page' : undefined}
                    className={`flex min-h-[44px] items-center rounded-lg px-3 text-base font-medium transition-colors ${
                      isActive
                        ? 'bg-[var(--accent-subtle)] text-[var(--accent-primary)]'
                        : 'text-[var(--text-secondary)] hover:bg-[var(--bg-surface-muted)] hover:text-[var(--text-primary)]'
                    }`}
                  >
                    {item.label}
                  </a>
                );
              })}
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  handlePageSelect('contact');
                }}
                aria-current={activePage === 'contact' ? 'page' : undefined}
                className="mt-2 flex min-h-[44px] w-full items-center justify-center rounded-lg bg-[var(--accent-primary)] px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-[var(--accent-primary-hover)]"
              >
                Contact
              </a>
              <button
                type="button"
                onClick={() => {
                  setMobileOpen(false);
                  toggleButtonRef.current?.focus();
                }}
                className="mt-1 flex min-h-[44px] w-full items-center justify-center rounded-lg border border-[var(--border-hairline)] px-4 py-2 text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] cursor-pointer"
              >
                Close Menu
              </button>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
