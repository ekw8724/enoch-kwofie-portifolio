import { ArrowRight, ArrowUpRight, BookOpen } from 'lucide-react';
import { FEATURED_PROJECT } from '../data/projects';
import type { ProjectCaseStudy } from '../types/portfolio';

interface FeaturedProjectProps {
  onOpenCaseStudy: (project: ProjectCaseStudy) => void;
  onViewAllProjects: () => void;
}

export function FeaturedProject({ onOpenCaseStudy, onViewAllProjects }: FeaturedProjectProps) {
  return (
    <section
      aria-labelledby="featured-project-heading"
      className="bg-[var(--bg-canvas)] py-14 sm:py-16"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-baseline justify-between gap-4">
          <div>
            <p className="text-xs font-medium text-[var(--text-muted)]">
              Featured Project · Live Hosted Utility
            </p>
            <h2
              id="featured-project-heading"
              className="font-display mt-1.5 text-2xl font-bold tracking-tight text-[var(--text-primary)] sm:text-3xl"
            >
              Featured Work
            </h2>
          </div>

          <button
            type="button"
            onClick={onViewAllProjects}
            className="inline-flex min-h-[40px] items-center gap-1.5 text-sm font-medium text-[var(--accent-primary)] hover:text-[var(--accent-primary-hover)] cursor-pointer"
          >
            View all projects
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </button>
        </div>

        <article className="mt-6 rounded-xl border border-[var(--border-hairline)] bg-[var(--bg-surface)] p-5 sm:p-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-center">
            <div className="min-w-0 lg:col-span-7">
              <p className="break-words text-xs font-medium text-[var(--text-muted)]">
                {FEATURED_PROJECT.tags.join(' · ')}
              </p>

              <h3 className="font-display mt-2 break-words text-2xl font-bold tracking-tight text-[var(--text-primary)] text-balance">
                {FEATURED_PROJECT.title}
              </h3>

              <p className="mt-3 break-words text-base leading-relaxed text-[var(--text-secondary)]">
                {FEATURED_PROJECT.summary}
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-3">
                {FEATURED_PROJECT.liveUrl && (
                  <a
                    href={FEATURED_PROJECT.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-lg bg-[var(--accent-primary)] px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-[var(--accent-primary-hover)] whitespace-nowrap shrink-0"
                  >
                    Live Demo ↗
                  </a>
                )}

                <button
                  type="button"
                  onClick={() => onOpenCaseStudy(FEATURED_PROJECT)}
                  className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-lg border border-[var(--border-hairline)] bg-[var(--bg-canvas)] px-5 py-2.5 text-sm font-medium text-[var(--text-primary)] transition-colors hover:bg-[var(--bg-surface-muted)] whitespace-nowrap shrink-0 cursor-pointer"
                >
                  <BookOpen className="h-4 w-4" aria-hidden="true" />
                  Read Case Study
                </button>
              </div>
            </div>

            <div className="min-w-0 lg:col-span-5">
              <div className="rounded-xl border border-[var(--border-hairline)] bg-[var(--bg-canvas)] p-5">
                <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-[var(--text-muted)]">
                  <span>Suite Modules</span>
                  <span className="font-mono-tech tabular-nums">4 utilities</span>
                </div>

                <ul className="mt-4 divide-y divide-[var(--border-hairline)] border-t border-[var(--border-hairline)]">
                  {FEATURED_PROJECT.architectureNodes.map((moduleName, index) => (
                    <li
                      key={moduleName}
                      className="flex min-w-0 items-center justify-between gap-3 py-2.5 first:pt-3 last:pb-0 text-sm"
                    >
                      <span className="break-words font-medium text-[var(--text-primary)]">{moduleName}</span>
                      <span className="font-mono-tech shrink-0 text-xs text-[var(--text-muted)] tabular-nums">
                        0{index + 1}
                      </span>
                    </li>
                  ))}
                </ul>

                {FEATURED_PROJECT.liveUrl && (
                  <div className="mt-4 border-t border-[var(--border-hairline)] pt-3">
                    <a
                      href={FEATURED_PROJECT.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 font-mono-tech text-xs text-[var(--accent-primary)] hover:text-[var(--accent-primary-hover)] break-all"
                    >
                      network-multitool-app.onrender.com
                      <ArrowUpRight className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
