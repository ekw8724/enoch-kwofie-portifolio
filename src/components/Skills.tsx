import { SKILL_DOMAINS } from '../data/skills';
import type { SkillProficiency } from '../types/portfolio';
import { PageHeader } from './PageHeader';

interface SkillsProps {
  onBackHome: () => void;
}

function getProficiencyStyle(level: SkillProficiency): string {
  switch (level) {
    case 'Proficient':
      return 'text-[var(--accent-primary)] font-semibold';
    case 'Working':
      return 'text-[var(--text-primary)] font-medium';
    case 'Foundational':
      return 'text-[var(--text-muted)] font-medium';
  }
}

export function Skills({ onBackHome }: SkillsProps) {
  return (
    <section id="skills" aria-label="Technical Skills Stack" className="bg-[var(--bg-canvas)]">
      <PageHeader
        eyebrow="Technical Stack · 4 Operational Domains"
        title="Skills & Technical Stack"
        description="Core networking, virtualization, security, and software delivery capabilities organized across four production domains."
        onBackHome={onBackHome}
      />

      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {SKILL_DOMAINS.map((domain, idx) => (
            <article
              key={domain.id}
              className="flex min-w-0 flex-col rounded-xl border border-[var(--border-hairline)] bg-[var(--bg-surface)] p-5 sm:p-6"
            >
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h2 className="font-display break-words text-lg font-semibold text-[var(--text-primary)]">
                  {domain.title}
                </h2>
                <span className="font-mono-tech text-xs text-[var(--text-muted)] tabular-nums shrink-0">
                  0{idx + 1} · {domain.skills.length} skills
                </span>
              </div>
              <p className="mt-1 break-words text-sm text-[var(--text-secondary)]">{domain.summary}</p>

              <ul className="mt-5 divide-y divide-[var(--border-hairline)] border-t border-[var(--border-hairline)]">
                {domain.skills.map((skill) => (
                  <li key={skill.name} className="min-w-0 py-3.5 first:pt-4 last:pb-0">
                    <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                      <span className="break-words text-sm font-medium text-[var(--text-primary)]">
                        {skill.name}
                      </span>
                      <span className={`font-mono-tech text-xs shrink-0 ${getProficiencyStyle(skill.level)}`}>
                        {skill.level}
                      </span>
                    </div>
                    <p className="mt-1 break-words text-xs leading-relaxed text-[var(--text-muted)]">
                      {skill.note}
                    </p>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
