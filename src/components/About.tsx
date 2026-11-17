import { useState } from 'react';
import { ShieldCheck } from 'lucide-react';
import { ABOUT_DATA, PROFILE } from '../data/profile';
import { PageHeader } from './PageHeader';

interface AboutProps {
  onBackHome: () => void;
}

export function About({ onBackHome }: AboutProps) {
  const [imageError, setImageError] = useState(false);

  return (
    <section id="about" aria-labelledby="about-heading" className="bg-[var(--bg-canvas)]">
      <PageHeader
        eyebrow={ABOUT_DATA.eyebrow}
        title="About Enoch Kwofie"
        description="BTech in Information Technology student at Takoradi Technical University combining hands-on network and systems administration with browser-based diagnostic tooling."
        onBackHome={onBackHome}
      />

      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12 lg:gap-12">
          {/* Left Sidebar: Studio Headshot + 3-Item Quick Highlights */}
          <aside aria-label="Profile photo and quick highlights" className="min-w-0 space-y-6 lg:col-span-4">
            <div className="overflow-hidden rounded-2xl border border-[var(--border-hairline)] bg-[var(--bg-surface)] p-2">
              <div className="aspect-[3/4] w-full overflow-hidden rounded-2xl bg-[var(--bg-surface-muted)]">
                {!imageError ? (
                  <img
                    src={ABOUT_DATA.portraitUrl}
                    alt={ABOUT_DATA.portraitAlt}
                    width={600}
                    height={800}
                    referrerPolicy="no-referrer"
                    onError={() => setImageError(true)}
                    className="h-full w-full rounded-2xl object-cover object-top"
                  />
                ) : (
                  <div className="flex h-full w-full flex-col items-center justify-center gap-3 p-6 text-center">
                    <ShieldCheck className="h-10 w-10 text-[var(--accent-primary)]" aria-hidden="true" />
                    <p className="font-display text-base font-semibold text-[var(--text-primary)]">
                      {PROFILE.name}
                    </p>
                    <p className="text-xs text-[var(--text-muted)]">{PROFILE.location}</p>
                  </div>
                )}
              </div>
            </div>

            {/* 3-Item Quick Highlights Sidebar */}
            <div className="min-w-0 rounded-xl border border-[var(--border-hairline)] bg-[var(--bg-surface)] p-5">
              <h2 className="font-display text-sm font-semibold text-[var(--text-primary)]">
                Quick Highlights
              </h2>

              <dl className="mt-4 divide-y divide-[var(--border-hairline)] border-t border-[var(--border-hairline)]">
                {ABOUT_DATA.quickHighlights.map((item) => (
                  <div key={item.label} className="min-w-0 py-3.5 first:pt-4 last:pb-0">
                    <dt className="text-xs font-medium text-[var(--text-muted)]">{item.label}</dt>
                    <dd className="mt-1 break-words text-sm font-semibold text-[var(--text-primary)]">
                      {item.value}
                    </dd>
                    {item.detail && (
                      <dd className="mt-0.5 break-words text-xs leading-relaxed text-[var(--text-secondary)]">
                        {item.detail}
                      </dd>
                    )}
                  </div>
                ))}
              </dl>
            </div>
          </aside>

          {/* Main Column: Bio & Core Focus */}
          <div className="min-w-0 lg:col-span-8">
            <h2
              id="about-heading"
              className="font-display max-w-2xl break-words text-2xl font-bold tracking-tight text-[var(--text-primary)] sm:text-3xl text-balance"
            >
              {ABOUT_DATA.heading}
            </h2>

            <div className="mt-5 space-y-4 break-words text-base leading-relaxed text-[var(--text-secondary)]">
              {ABOUT_DATA.bioParagraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            {/* Core Focus Section */}
            <div className="mt-10 border-t border-[var(--border-hairline)] pt-8">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="font-display text-lg font-semibold text-[var(--text-primary)]">
                  Core Focus
                </h3>
                <span className="text-xs text-[var(--text-muted)]">3 operational pillars</span>
              </div>

              <div className="mt-5 grid grid-cols-1 gap-4 md:grid-cols-3">
                {ABOUT_DATA.coreFocus.map((item, index) => (
                  <div
                    key={item.title}
                    className="flex min-w-0 flex-col justify-between rounded-xl border border-[var(--border-hairline)] bg-[var(--bg-surface)] p-5"
                  >
                    <div>
                      <span className="font-mono-tech text-xs text-[var(--accent-primary)] tabular-nums">
                        0{index + 1}.
                      </span>
                      <h4 className="font-display mt-2 break-words text-base font-semibold text-[var(--text-primary)]">
                        {item.title}
                      </h4>
                      <p className="mt-2 break-words text-sm leading-relaxed text-[var(--text-secondary)]">
                        {item.description}
                      </p>
                    </div>
                    <p className="mt-4 break-words border-t border-[var(--border-hairline)] pt-3 text-xs font-medium text-[var(--text-muted)]">
                      {item.scope}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Career Objective / Availability */}
            <div className="mt-6 rounded-xl border border-[var(--border-hairline)] bg-[var(--bg-surface)] p-5">
              <h3 className="font-display text-sm font-semibold text-[var(--text-primary)]">
                {ABOUT_DATA.lookingForTitle}
              </h3>
              <p className="mt-1.5 break-words text-sm leading-relaxed text-[var(--text-secondary)]">
                {ABOUT_DATA.lookingForText}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
