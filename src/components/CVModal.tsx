import { useEffect } from 'react';
import { Download, Printer, X } from 'lucide-react';
import { PROFILE } from '../data/profile';

interface CVModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CVModal({ isOpen, onClose }: CVModalProps) {
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="cv-modal-title"
      className="fixed inset-0 z-[60] flex items-center justify-center bg-slate-950/70 p-4"
      onClick={onClose}
    >
      <div
        className="flex max-h-[90vh] w-full max-w-3xl flex-col overflow-hidden rounded-xl border border-[var(--border-hairline)] bg-[var(--bg-surface)] shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[var(--border-hairline)] px-4 py-4 sm:px-5">
          <div className="min-w-0">
            <h2 id="cv-modal-title" className="font-display break-words text-lg font-semibold text-[var(--text-primary)]">
              Curriculum Vitae — {PROFILE.name}
            </h2>
            <p className="break-words text-xs text-[var(--text-muted)]">
              {PROFILE.roleTitle} · {PROFILE.location}
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <button
              type="button"
              onClick={() => window.print()}
              className="inline-flex min-h-[40px] items-center gap-2 rounded-lg border border-[var(--border-hairline)] bg-[var(--bg-canvas)] px-3 py-2 text-xs font-medium text-[var(--text-primary)] transition-colors hover:bg-[var(--bg-surface-muted)] whitespace-nowrap cursor-pointer"
            >
              <Printer className="h-4 w-4" aria-hidden="true" />
              Print
            </button>
            <a
              href={PROFILE.cvImageUrl}
              download="Enoch-Kwofie-CV.png"
              className="inline-flex min-h-[40px] items-center gap-2 rounded-lg bg-[var(--accent-primary)] px-3 py-2 text-xs font-medium text-white transition-colors hover:bg-[var(--accent-primary-hover)] whitespace-nowrap"
            >
              <Download className="h-4 w-4" aria-hidden="true" />
              Save CV
            </a>
            <button
              type="button"
              onClick={onClose}
              aria-label="Close CV preview"
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-[var(--text-secondary)] transition-colors hover:bg-[var(--bg-surface-muted)] hover:text-[var(--text-primary)] cursor-pointer"
            >
              <X className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        </div>

        <div className="overflow-y-auto bg-[var(--bg-surface-muted)] p-4 sm:p-6">
          <div className="mx-auto max-w-2xl overflow-hidden rounded-lg border border-[var(--border-hairline)] bg-white">
            <img
              src={PROFILE.cvImageUrl}
              alt="Curriculum Vitae of Enoch Kwofie"
              referrerPolicy="no-referrer"
              className="h-auto w-full object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
