import { useEffect, useState } from 'react';
import { ArrowRight, Download, Github, Linkedin, Mail, MessageSquare, ShieldCheck } from 'lucide-react';
import { PROFILE } from '../data/profile';
import type { SocialLink } from '../types/portfolio';

interface HeroProps {
  onOpenCV: () => void;
  onHireClick: () => void;
}

function SocialIcon({ id }: { id: SocialLink['id'] }) {
  switch (id) {
    case 'email':
      return <Mail className="h-4 w-4" aria-hidden="true" />;
    case 'linkedin':
      return <Linkedin className="h-4 w-4" aria-hidden="true" />;
    case 'github':
      return <Github className="h-4 w-4" aria-hidden="true" />;
    case 'whatsapp':
      return <MessageSquare className="h-4 w-4" aria-hidden="true" />;
  }
}

export function Hero({ onOpenCV, onHireClick }: HeroProps) {
  const [imageError, setImageError] = useState(false);
  const [lineIndex, setLineIndex] = useState(0);
  const [charCount, setCharCount] = useState(PROFILE.terminalLines[0].length);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(true);

  useEffect(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return;
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (event: MediaQueryListEvent) => {
      setPrefersReducedMotion(event.matches);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  useEffect(() => {
    if (prefersReducedMotion) {
      setCharCount(PROFILE.terminalLines[lineIndex].length);
      return;
    }

    const currentLine = PROFILE.terminalLines[lineIndex];
    if (charCount < currentLine.length) {
      const typeTimer = window.setTimeout(() => {
        setCharCount((prev) => prev + 1);
      }, 28);
      return () => window.clearTimeout(typeTimer);
    }

    const holdTimer = window.setTimeout(() => {
      setLineIndex((prev) => (prev + 1) % PROFILE.terminalLines.length);
      setCharCount(0);
    }, 2800);

    return () => window.clearTimeout(holdTimer);
  }, [charCount, lineIndex, prefersReducedMotion]);

  const activeLine = PROFILE.terminalLines[lineIndex];
  const visibleFocusText = prefersReducedMotion ? activeLine : activeLine.slice(0, charCount);

  return (
    <section id="home" className="scroll-mt-20 border-b border-[var(--border-hairline)] py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-stretch gap-8 lg:grid-cols-12 lg:gap-12">
          {/* Left Column: Typographic Hierarchy & CTAs */}
          <div className="flex min-w-0 flex-col justify-between lg:col-span-7">
            <div className="min-w-0">
              {/* Quiet Unboxed Metadata Kicker (Zero-Pill Discipline) */}
              <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1 text-xs font-medium text-[var(--text-muted)] break-words">
                <span>{PROFILE.location}</span>
                <span aria-hidden="true">·</span>
                <span>Network Engineering &amp; IT Security</span>
                <span aria-hidden="true">·</span>
                <span>{PROFILE.availability}</span>
              </div>

              <h1
                className="font-display mt-5 break-words text-[clamp(2.25rem,4vw,3.5rem)] font-bold leading-[1.08] tracking-tight text-[var(--text-primary)] text-balance"
              >
                {PROFILE.name}
              </h1>

              <p className="mt-3 font-display break-words text-lg font-medium text-[var(--accent-primary)] sm:text-xl">
                {PROFILE.roleTitle}
              </p>

              <p className="mt-5 max-w-2xl break-words text-base leading-relaxed text-[var(--text-secondary)]">
                {PROFILE.tagline}
              </p>

              {/* Non-blocking focus strip respecting prefers-reduced-motion */}
              <div className="mt-6 rounded-lg border border-[var(--border-hairline)] bg-[var(--bg-surface)] px-4 py-3">
                <div className="flex items-center justify-between gap-4 text-xs text-[var(--text-muted)]">
                  <span>Primary operational focus</span>
                  <span className="font-mono-tech tabular-nums shrink-0">
                    {lineIndex + 1}/{PROFILE.terminalLines.length}
                  </span>
                </div>
                <p className="font-mono-tech mt-1.5 min-h-[1.5rem] break-words text-sm text-[var(--text-primary)]">
                  {visibleFocusText}
                  <span className="sr-only">{activeLine}</span>
                </p>
              </div>
            </div>

            <div className="mt-8">
              {/* Primary & Secondary CTAs */}
              <div className="flex flex-wrap items-center gap-3">
                <button
                  type="button"
                  onClick={onHireClick}
                  className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-lg bg-[var(--accent-primary)] px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-[var(--accent-primary-hover)] whitespace-nowrap shrink-0 cursor-pointer"
                >
                  Hire Me
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </button>

                <button
                  type="button"
                  onClick={onOpenCV}
                  className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-lg border border-[var(--border-hairline)] bg-[var(--bg-surface)] px-5 py-2.5 text-sm font-medium text-[var(--text-primary)] transition-colors hover:bg-[var(--bg-surface-muted)] whitespace-nowrap shrink-0 cursor-pointer"
                >
                  <Download className="h-4 w-4" aria-hidden="true" />
                  Download CV
                </button>
              </div>

              {/* Social Links */}
              <div className="mt-6 flex flex-wrap items-center gap-2" aria-label="Direct contact and profiles">
                {PROFILE.socials.map((social) => {
                  const isExternal = social.href.startsWith('http');
                  return (
                    <a
                      key={`${social.id}-${social.label}`}
                      href={social.href}
                      target={isExternal ? '_blank' : undefined}
                      rel={isExternal ? 'noopener noreferrer' : undefined}
                      aria-label={`${social.label}: ${social.displayValue}`}
                      className="inline-flex min-h-[44px] items-center gap-2 rounded-lg border border-[var(--border-hairline)] bg-[var(--bg-surface)] px-3.5 py-2 text-xs font-medium text-[var(--text-secondary)] transition-colors hover:border-[var(--text-muted)] hover:text-[var(--text-primary)] whitespace-nowrap"
                    >
                      <SocialIcon id={social.id} />
                      <span>{social.label}</span>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Column: Matching-Height Portrait Frame */}
          <div className="min-w-0 lg:col-span-5">
            <div className="relative aspect-[4/4] w-full overflow-hidden rounded-xl border border-[var(--border-hairline)] bg-[var(--bg-surface-muted)] lg:aspect-auto lg:h-full lg:min-h-[340px]">
              {!imageError ? (
                <img
                  src={PROFILE.portraitUrl}
                  alt={PROFILE.portraitAlt}
                  width={800}
                  height={800}
                  referrerPolicy="no-referrer"
                  onError={() => setImageError(true)}
                  className="h-full w-full object-cover object-top"
                />
              ) : (
                <div className="flex h-full min-h-[300px] flex-col items-center justify-center gap-3 p-8 text-center">
                  <ShieldCheck className="h-10 w-10 text-[var(--accent-primary)]" aria-hidden="true" />
                  <p className="font-display text-lg font-semibold text-[var(--text-primary)]">{PROFILE.name}</p>
                  <p className="text-sm text-[var(--text-secondary)]">{PROFILE.roleTitle}</p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Full-Width Factual Credential Strip Below Split */}
        <div className="mt-10 grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-[var(--border-hairline)] bg-[var(--border-hairline)] sm:grid-cols-2 lg:mt-12 lg:grid-cols-4">
          {PROFILE.metrics.map((metric) => (
            <div key={metric.label} className="min-w-0 bg-[var(--bg-surface)] p-5">
              <div className="font-display break-words text-2xl font-bold tracking-tight text-[var(--text-primary)] tabular-nums">
                {metric.value}
              </div>
              <div className="mt-1 break-words text-sm font-medium text-[var(--text-primary)]">{metric.label}</div>
              <div className="mt-0.5 break-words text-xs text-[var(--text-muted)]">{metric.detail}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
