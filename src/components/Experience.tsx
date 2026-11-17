import { useEffect, useState } from 'react';
import { Maximize2, X } from 'lucide-react';
import { EDUCATION_ITEMS, EXPERIENCE_ITEMS } from '../data/experience';
import { PageHeader } from './PageHeader';

interface ExperienceProps {
  onBackHome: () => void;
}

interface ProofLightboxData {
  src: string;
  alt: string;
  caption: string;
}

export function Experience({ onBackHome }: ExperienceProps) {
  const [lightboxImage, setLightboxImage] = useState<ProofLightboxData | null>(null);
  const [failedThumbIds, setFailedThumbIds] = useState<Record<string, boolean>>({});

  useEffect(() => {
    if (!lightboxImage) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setLightboxImage(null);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxImage]);

  return (
    <section id="experience" aria-label="Experience and Education" className="bg-[var(--bg-canvas)]">
      <PageHeader
        eyebrow="Field Experience · Clinical, Retail & Campus Deployments"
        title="Experience & Education"
        description="Hands-on IT infrastructure support, retail network provisioning, and lead campus cabling deployment alongside BTech studies."
        onBackHome={onBackHome}
      />

      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
          {/* Vertical Experience Timeline */}
          <div className="min-w-0 lg:col-span-8">
            <h2 className="font-display text-lg font-semibold text-[var(--text-primary)]">
              Work &amp; Deployment Timeline
            </h2>

            <ol className="relative mt-6 space-y-6 before:absolute before:bottom-3 before:left-2.5 before:top-3 before:w-px before:bg-[var(--border-hairline)] sm:before:left-3">
              {EXPERIENCE_ITEMS.map((item) => {
                const thumbFailed = Boolean(failedThumbIds[item.id]);

                return (
                  <li key={item.id} className="relative min-w-0 pl-8 sm:pl-10">
                    <span
                      aria-hidden="true"
                      className="absolute left-1 top-6 h-3 w-3 rounded-full border-2 border-[var(--accent-primary)] bg-[var(--bg-canvas)] sm:left-1.5"
                    />

                    <article className="min-w-0 rounded-xl border border-[var(--border-hairline)] bg-[var(--bg-surface)] p-5 sm:p-6">
                      <div className="flex flex-wrap items-baseline justify-between gap-2">
                        <h3 className="font-display break-words text-base font-semibold text-[var(--text-primary)]">
                          {item.organization}
                          {item.unit ? ` — ${item.unit}` : ''}
                        </h3>
                        <span className="font-mono-tech text-xs text-[var(--accent-primary)] tabular-nums">
                          {item.period}
                        </span>
                      </div>

                      <p className="mt-1 break-words text-sm font-medium text-[var(--text-secondary)]">
                        {item.role} · {item.location}
                      </p>

                      <ul className="mt-4 list-disc space-y-2 break-words pl-5 text-sm leading-relaxed text-[var(--text-secondary)]">
                        {item.highlights.map((bullet) => (
                          <li key={bullet}>{bullet}</li>
                        ))}
                      </ul>

                      {item.proofImageUrl && !thumbFailed && (
                        <figure className="mt-5 border-t border-[var(--border-hairline)] pt-4">
                          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                            <button
                              type="button"
                              onClick={() =>
                                setLightboxImage({
                                  src: item.proofImageUrl!,
                                  alt: item.proofImageAlt ?? item.organization,
                                  caption: item.proofCaption ?? item.organization,
                                })
                              }
                              aria-label={`Inspect larger photo: ${item.proofCaption ?? item.organization}`}
                              className="group relative h-44 w-full shrink-0 overflow-hidden rounded-lg border border-[var(--border-hairline)] bg-[var(--bg-surface-muted)] sm:h-28 sm:w-40 cursor-pointer"
                            >
                              <img
                                src={item.proofImageUrl}
                                alt={item.proofImageAlt ?? item.organization}
                                loading="lazy"
                                referrerPolicy="no-referrer"
                                onError={() =>
                                  setFailedThumbIds((prev) => ({ ...prev, [item.id]: true }))
                                }
                                className="h-full w-full object-cover object-center transition-transform duration-200 group-hover:scale-105"
                              />
                              <span className="absolute bottom-1.5 right-1.5 inline-flex h-7 w-7 items-center justify-center rounded bg-slate-950/75 text-white">
                                <Maximize2 className="h-3.5 w-3.5" aria-hidden="true" />
                              </span>
                            </button>

                            <figcaption className="min-w-0 break-words text-xs leading-relaxed text-[var(--text-muted)]">
                              <span className="block font-medium text-[var(--text-primary)]">
                                Proof of Work — On-Site Deployment
                              </span>
                              <span className="mt-1 block">
                                {item.proofCaption ?? item.organization}
                              </span>
                            </figcaption>
                          </div>
                        </figure>
                      )}
                    </article>
                  </li>
                );
              })}
            </ol>
          </div>

          {/* Education Column */}
          <aside aria-label="Academic background" className="min-w-0 lg:col-span-4">
            <h2 className="font-display text-lg font-semibold text-[var(--text-primary)]">
              Education
            </h2>

            <ol className="mt-6 space-y-4">
              {EDUCATION_ITEMS.map((edu) => (
                <li
                  key={edu.id}
                  className="min-w-0 rounded-xl border border-[var(--border-hairline)] bg-[var(--bg-surface)] p-5 sm:p-6"
                >
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="font-display break-words text-base font-semibold text-[var(--text-primary)]">
                      {edu.institution}
                    </h3>
                    <span className="font-mono-tech text-xs text-[var(--text-muted)] tabular-nums">
                      {edu.period}
                    </span>
                  </div>
                  <p className="mt-1.5 break-words text-sm leading-relaxed text-[var(--text-secondary)]">
                    {edu.credential}
                  </p>
                  <p className="mt-2 text-xs text-[var(--text-muted)]">{edu.location}</p>
                </li>
              ))}
            </ol>
          </aside>
        </div>
      </div>

      {/* Proof-of-Work Photo Lightbox */}
      {lightboxImage && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={lightboxImage.caption}
          className="fixed inset-0 z-[60] flex items-center justify-center bg-slate-950/80 p-4"
          onClick={() => setLightboxImage(null)}
        >
          <div
            className="w-full max-w-2xl overflow-hidden rounded-xl border border-[var(--border-hairline)] bg-[var(--bg-surface)] shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between gap-4 border-b border-[var(--border-hairline)] px-5 py-3.5">
              <p className="text-sm font-medium text-[var(--text-primary)]">
                {lightboxImage.caption}
              </p>
              <button
                type="button"
                onClick={() => setLightboxImage(null)}
                aria-label="Close photo preview"
                className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-[var(--text-secondary)] hover:bg-[var(--bg-surface-muted)] hover:text-[var(--text-primary)] cursor-pointer"
              >
                <X className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
            <div className="bg-[var(--bg-surface-muted)] p-3">
              <img
                src={lightboxImage.src}
                alt={lightboxImage.alt}
                referrerPolicy="no-referrer"
                className="max-h-[75vh] w-full rounded-lg object-contain"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
