import type { ReactNode } from 'react';
import { Moon, Sun } from 'lucide-react';
import { PROFILE } from '../data/profile';
import type { ThemeMode } from '../hooks/useTheme';
import type { PageRoute } from '../types/portfolio';
import { getScrollBehavior } from '../utils/scrollToSection';
import { Navbar } from './Navbar';

interface LayoutProps {
  children: ReactNode;
  activePage: PageRoute;
  onNavigate: (page: PageRoute) => void;
  theme: ThemeMode;
  onToggleTheme: () => void;
}

export function Layout({ children, activePage, onNavigate, theme, onToggleTheme }: LayoutProps) {
  const handleBackToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: getScrollBehavior(),
    });
  };

  return (
    <div className="flex min-h-screen flex-col overflow-x-hidden bg-[var(--bg-canvas)] text-[var(--text-primary)]">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[70] focus:rounded-lg focus:bg-[var(--accent-primary)] focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-white"
      >
        Skip to main content
      </a>

      <Navbar activePage={activePage} onNavigate={onNavigate} />

      <main id="main-content" className="min-w-0 flex-1">
        {children}
      </main>

      <footer className="border-t border-[var(--border-hairline)] bg-[var(--bg-surface)] py-8 no-print">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-4 px-4 text-xs text-[var(--text-muted)] sm:flex-row sm:items-center sm:px-6 lg:px-8">
          <p className="break-words">
            © {new Date().getFullYear()} {PROFILE.name}. {PROFILE.location}.
          </p>
          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            <a
              href={`mailto:${PROFILE.email}`}
              className="py-1 break-all hover:text-[var(--text-primary)] transition-colors"
            >
              {PROFILE.email}
            </a>
            <button
              type="button"
              onClick={onToggleTheme}
              aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
              className="inline-flex min-h-[36px] items-center gap-1.5 rounded-lg border border-[var(--border-hairline)] bg-[var(--bg-canvas)] px-3 py-1.5 text-xs font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors cursor-pointer"
            >
              {theme === 'dark' ? (
                <>
                  <Sun className="h-3.5 w-3.5" aria-hidden="true" />
                  Light mode
                </>
              ) : (
                <>
                  <Moon className="h-3.5 w-3.5" aria-hidden="true" />
                  Dark mode
                </>
              )}
            </button>
            <button
              type="button"
              onClick={handleBackToTop}
              className="py-1 hover:text-[var(--text-primary)] transition-colors cursor-pointer"
            >
              Back to top
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}
