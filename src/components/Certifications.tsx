import { useState } from 'react';
import { Award, ShieldCheck } from 'lucide-react';
import { CERTIFICATION_ITEMS, COURSEWORK_TRACKS } from '../data/experience';
import { PageHeader } from './PageHeader';

interface CertificationsProps {
  onBackHome: () => void;
}

function CertificationBadge({
  badgeImage,
  name,
}: {
  badgeImage?: string;
  name: string;
}) {
  const [failed, setFailed] = useState(false);

  if (badgeImage && !failed) {
    return (
      <div className="flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-lg border border-[var(--border-hairline)] bg-[var(--bg-canvas)] p-1">
        <img
          src={badgeImage}
          alt={`${name} badge`}
          loading="lazy"
          referrerPolicy="no-referrer"
          onError={() => setFailed(true)}
          className="h-full w-full object-contain"
        />
      </div>
    );
  }

  return (
    <div
      aria-hidden="true"
      className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border border-[var(--border-hairline)] bg-[var(--bg-canvas)] text-[var(--accent-primary)]"
    >
      {name.includes('ICIP') ? (
        <ShieldCheck className="h-6 w-6" />
      ) : (
        <Award className="h-6 w-6" />
      )}
    </div>
  );
}

export function Certifications({ onBackHome }: CertificationsProps) {
  return (
    <section
      id="certifications"
      aria-label="Certifications and Verified Coursework"
      className="bg-[var(--bg-canvas)]"
    >
      <PageHeader
        eyebrow="Verified Credentials & Specialization Tracks"
        title="Certifications & Trainings"
        description="Industry-recognized credentials in IT support, critical infrastructure protection, cybersecurity, project management, and data analytics."
        onBackHome={onBackHome}
      />

      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        {/* Main Specialization & Certification Cards */}
        <div>
          <h2 className="font-display text-lg font-semibold text-[var(--text-primary)]">
            Main Specializations &amp; Certifications
          </h2>

          <div className="mt-5 grid grid-cols-1 gap-6 md:grid-cols-2">
            {CERTIFICATION_ITEMS.map((cert) => (
              <article
                key={cert.id}
                className="flex min-w-0 flex-col justify-between rounded-xl border border-[var(--border-hairline)] bg-[var(--bg-surface)] p-5 sm:p-6"
              >
                <div className="min-w-0">
                  <div className="flex items-start gap-4">
                    <CertificationBadge badgeImage={cert.badgeImage} name={cert.name} />

                    <div className="min-w-0 flex-1">
                      <p className="break-words text-xs font-medium text-[var(--text-muted)]">
                        {cert.issuer}
                      </p>
                      <h3 className="font-display mt-1 break-words text-base font-semibold leading-snug text-[var(--text-primary)]">
                        {cert.name}
                      </h3>
                    </div>
                  </div>

                  {cert.notes && (
                    <p className="mt-4 break-words text-sm leading-relaxed text-[var(--text-secondary)]">
                      {cert.notes}
                    </p>
                  )}

                  <div className="mt-4 flex flex-wrap items-center gap-x-2.5 gap-y-1 text-xs text-[var(--text-muted)]">
                    <span className="font-mono-tech tabular-nums">Issued: {cert.issuedDate}</span>
                    {cert.expiresDate && (
                      <>
                        <span aria-hidden="true">·</span>
                        <span className="font-mono-tech tabular-nums">
                          Expires: {cert.expiresDate}
                        </span>
                      </>
                    )}
                    {cert.credentialId && (
                      <>
                        <span aria-hidden="true">·</span>
                        <span className="font-mono-tech break-all tabular-nums">ID: {cert.credentialId}</span>
                      </>
                    )}
                  </div>
                </div>

                <div className="mt-5 flex flex-wrap items-center justify-between gap-4 border-t border-[var(--border-hairline)] pt-4">
                  {cert.verificationUrl ? (
                    <a
                      href={cert.verificationUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex min-h-[40px] items-center justify-center rounded-lg bg-[var(--accent-primary)] px-4 py-2 text-xs font-medium text-white transition-colors hover:bg-[var(--accent-primary-hover)] whitespace-nowrap"
                    >
                      Verify Credential ↗
                    </a>
                  ) : (
                    <span className="text-xs font-medium text-[var(--text-muted)]">
                      Certificate on file
                    </span>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Track-Organized Specialization Coursework */}
        <div className="mt-12 space-y-10 border-t border-[var(--border-hairline)] pt-10">
          {COURSEWORK_TRACKS.map((track) => (
            <div key={track.id} className="min-w-0">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h2 className="font-display break-words text-lg font-semibold text-[var(--text-primary)]">
                  {track.title}
                </h2>
                <span className="text-xs text-[var(--text-muted)]">{track.status}</span>
              </div>

              <ul className="mt-4 divide-y divide-[var(--border-hairline)] overflow-hidden rounded-xl border border-[var(--border-hairline)] bg-[var(--bg-surface)]">
                {track.courses.map((course) => (
                  <li
                    key={course.id}
                    className="flex min-w-0 flex-col justify-between gap-3 px-4 py-4 sm:flex-row sm:items-center sm:gap-6 sm:px-5"
                  >
                    <div className="min-w-0">
                      <h3 className="break-words text-sm font-medium text-[var(--text-primary)]">
                        {course.title}
                      </h3>
                      <p className="mt-0.5 break-words text-xs text-[var(--text-muted)]">
                        {course.issuer} ·{' '}
                        <span className="font-mono-tech tabular-nums">{course.completedDate}</span>
                      </p>
                    </div>

                    {course.verificationUrl ? (
                      <a
                        href={course.verificationUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex min-h-[40px] shrink-0 items-center justify-center rounded-lg border border-[var(--border-hairline)] bg-[var(--bg-canvas)] px-3.5 py-2 text-xs font-medium text-[var(--accent-primary)] transition-colors hover:bg-[var(--bg-surface-muted)] hover:text-[var(--accent-primary-hover)] whitespace-nowrap"
                      >
                        Verify ↗
                      </a>
                    ) : (
                      <span className="shrink-0 text-xs font-medium text-[var(--text-muted)]">
                        Completed
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
