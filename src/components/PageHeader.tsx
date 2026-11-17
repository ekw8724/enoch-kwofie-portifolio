import { ArrowLeft } from 'lucide-react';

interface PageHeaderProps {
  title: string;
  eyebrow: string;
  description: string;
  onBackHome: () => void;
}

export function PageHeader({ title, eyebrow, description, onBackHome }: PageHeaderProps) {
  return (
    <div className="border-b border-[var(--border-hairline)] bg-[var(--bg-surface)] py-8 sm:py-10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <button
            type="button"
            onClick={onBackHome}
            className="inline-flex min-h-[44px] items-center gap-2 rounded-lg border border-[var(--border-hairline)] bg-[var(--bg-canvas)] px-4 py-2 text-sm font-medium text-[var(--text-primary)] transition-colors hover:bg-[var(--bg-surface-muted)] cursor-pointer"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            Back to Home
          </button>

          <p className="break-words text-xs font-medium text-[var(--text-muted)]">{eyebrow}</p>
        </div>

        <h1 className="font-display mt-6 break-words text-3xl font-bold tracking-tight text-[var(--text-primary)] sm:text-4xl text-balance">
          {title}
        </h1>
        <p className="mt-3 max-w-2xl break-words text-base leading-relaxed text-[var(--text-secondary)]">
          {description}
        </p>
      </div>
    </div>
  );
}
