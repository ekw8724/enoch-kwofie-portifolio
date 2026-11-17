import { useEffect } from 'react';
import { ArrowUpRight, ExternalLink, X } from 'lucide-react';
import type { ProjectCaseStudy } from '../types/portfolio';

interface CaseStudyModalProps {
  project: ProjectCaseStudy | null;
  onClose: () => void;
}

export function CaseStudyModal({ project, onClose }: CaseStudyModalProps) {
  useEffect(() => {
    if (!project) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="case-study-title"
      className="fixed inset-0 z-[60] flex items-center justify-center bg-slate-950/70 p-4"
      onClick={onClose}
    >
      <div
        className="flex max-h-[90vh] w-full max-w-3xl flex-col overflow-hidden rounded-xl border border-[var(--border-hairline)] bg-[var(--bg-surface)] shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4 border-b border-[var(--border-hairline)] px-6 py-4">
          <div>
            <p className="text-xs text-[var(--text-muted)]">
              {project.category} · {project.timeframe} · {project.tags.join(' · ')}
            </p>
            <h2
              id="case-study-title"
              className="font-display mt-1 text-xl font-bold text-[var(--text-primary)]"
            >
              {project.title}
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close case study"
            className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg text-[var(--text-secondary)] hover:bg-[var(--bg-surface-muted)] hover:text-[var(--text-primary)] cursor-pointer"
          >
            <X className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>

        <div className="min-w-0 space-y-6 overflow-y-auto px-5 py-6 text-sm leading-relaxed text-[var(--text-secondary)] sm:px-6">
          <div className="min-w-0">
            <h3 className="font-display text-sm font-semibold text-[var(--text-primary)]">Problem</h3>
            <p className="mt-1 break-words">{project.problem}</p>
          </div>

          <div className="min-w-0">
            <h3 className="font-display text-sm font-semibold text-[var(--text-primary)]">Approach</h3>
            <p className="mt-1 break-words">{project.approach}</p>
          </div>

          <div className="min-w-0">
            <h3 className="font-display text-sm font-semibold text-[var(--text-primary)]">
              Architecture
            </h3>
            <p className="mt-1 break-words">{project.architecture}</p>
            <div className="mt-3 flex flex-wrap items-center gap-2 rounded-lg border border-[var(--border-hairline)] bg-[var(--bg-canvas)] p-3">
              {project.architectureNodes.map((node, idx) => (
                <span
                  key={node}
                  className="inline-flex items-center gap-2 text-xs font-medium text-[var(--text-primary)]"
                >
                  <span className="font-mono-tech break-words rounded border border-[var(--border-hairline)] bg-[var(--bg-surface)] px-2.5 py-1">
                    {node}
                  </span>
                  {idx < project.architectureNodes.length - 1 && (
                    <span aria-hidden="true" className="text-[var(--text-muted)]">
                      →
                    </span>
                  )}
                </span>
              ))}
            </div>
          </div>

          {project.deployment && (
            <div className="min-w-0">
              <h3 className="font-display text-sm font-semibold text-[var(--text-primary)]">
                Deployment
              </h3>
              <p className="mt-1 break-words">{project.deployment}</p>
            </div>
          )}

          <div className="min-w-0">
            <h3 className="font-display text-sm font-semibold text-[var(--text-primary)]">
              {project.codeTitle}
            </h3>
            <pre className="font-mono-tech mt-2 max-w-full overflow-x-auto rounded-lg border border-[var(--border-hairline)] bg-[var(--bg-canvas)] p-4 text-xs text-[var(--text-primary)]">
              <code>{project.codeSnippet}</code>
            </pre>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="rounded-lg border border-[var(--border-hairline)] bg-[var(--bg-canvas)] p-4">
              <h3 className="font-display text-sm font-semibold text-[var(--text-primary)]">Result</h3>
              <p className="mt-1 text-xs leading-relaxed">{project.result}</p>
            </div>
            <div className="rounded-lg border border-[var(--border-hairline)] bg-[var(--bg-canvas)] p-4">
              <h3 className="font-display text-sm font-semibold text-[var(--text-primary)]">
                Lessons Learned
              </h3>
              <p className="mt-1 text-xs leading-relaxed">{project.lessonsLearned}</p>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-4 border-t border-[var(--border-hairline)] pt-4">
            <p className="text-xs text-[var(--text-muted)]">
              Tools: {project.tools.join(' · ')}
            </p>

            <div className="flex flex-wrap items-center gap-3">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[40px] items-center gap-1.5 rounded-lg bg-[var(--accent-primary)] px-4 py-2 text-xs font-medium text-white transition-colors hover:bg-[var(--accent-primary-hover)]"
                >
                  Live Demo
                  <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                </a>
              )}
              {project.repoUrl && (
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[40px] items-center gap-1.5 rounded-lg border border-[var(--border-hairline)] bg-[var(--bg-canvas)] px-3.5 py-2 text-xs font-medium text-[var(--text-primary)] transition-colors hover:bg-[var(--bg-surface-muted)]"
                >
                  GitHub
                  <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
