import { useMemo, useState } from 'react';
import { ArrowUpRight, BookOpen, ExternalLink, Search } from 'lucide-react';
import { PROJECT_CATEGORIES, PROJECTS } from '../data/projects';
import type { ProjectCaseStudy, ProjectCategory } from '../types/portfolio';
import { filterProjects } from '../utils/projectFilter';
import { PageHeader } from './PageHeader';

interface ProjectsProps {
  onBackHome: () => void;
  onOpenCaseStudy: (project: ProjectCaseStudy) => void;
}

export function Projects({ onBackHome, onOpenCaseStudy }: ProjectsProps) {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProjects = useMemo(
    () => filterProjects(PROJECTS, selectedCategory, searchQuery),
    [selectedCategory, searchQuery],
  );

  return (
    <section id="projects" aria-label="Projects and Case Studies" className="bg-[var(--bg-canvas)]">
      <PageHeader
        eyebrow="Engineering Builds · Architecture & Case Studies"
        title="Projects & Case Studies"
        description="Production utilities, network segmentation architectures, endpoint security baselines, and diagnostic runbooks."
        onBackHome={onBackHome}
      />

      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
          {/* Category Filter Tabs */}
          <div
            role="group"
            aria-label="Filter projects by category"
            className="flex flex-wrap items-center gap-2"
          >
            {PROJECT_CATEGORIES.map((category) => {
              const isSelected = selectedCategory === category;
              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setSelectedCategory(category)}
                  aria-pressed={isSelected}
                  className={`min-h-[40px] rounded-lg px-3.5 py-2 text-xs font-medium transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                    isSelected
                      ? 'bg-[var(--accent-primary)] text-white'
                      : 'border border-[var(--border-hairline)] bg-[var(--bg-surface)] text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>

          <div className="w-full sm:w-72">
            <label htmlFor="project-search" className="sr-only">
              Search projects by title or tool
            </label>
            <div className="relative">
              <Search
                className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[var(--text-muted)]"
                aria-hidden="true"
              />
              <input
                id="project-search"
                type="search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search tools or topics..."
                className="min-h-[44px] w-full rounded-lg border border-[var(--border-hairline)] bg-[var(--bg-surface)] pl-9 pr-3 text-sm text-[var(--text-primary)] placeholder:text-[var(--text-muted)]"
              />
            </div>
          </div>
        </div>

        {/* Project Cards Grid */}
        {filteredProjects.length === 0 ? (
          <div className="mt-8 rounded-xl border border-[var(--border-hairline)] bg-[var(--bg-surface)] p-8 text-center">
            <p className="text-sm font-medium text-[var(--text-primary)]">
              No projects match your current filter.
            </p>
            <button
              type="button"
              onClick={() => {
                setSelectedCategory('All');
                setSearchQuery('');
              }}
              className="mt-3 inline-flex min-h-[40px] items-center justify-center rounded-lg border border-[var(--border-hairline)] px-4 py-2 text-xs font-medium text-[var(--text-primary)] hover:bg-[var(--bg-surface-muted)] cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
            {filteredProjects.map((project) => (
              <article
                key={project.id}
                className="flex min-w-0 flex-col justify-between rounded-xl border border-[var(--border-hairline)] bg-[var(--bg-surface)] p-5 transition-colors hover:border-[var(--text-muted)] sm:p-6"
              >
                <div className="min-w-0">
                  <div className="flex flex-wrap items-center gap-2 text-xs text-[var(--text-muted)]">
                    <span>{project.category}</span>
                    <span aria-hidden="true">·</span>
                    <span>{project.timeframe}</span>
                  </div>

                  <h2 className="font-display mt-2 break-words text-lg font-semibold text-[var(--text-primary)]">
                    {project.title}
                  </h2>

                  <p className="mt-2 break-words text-sm leading-relaxed text-[var(--text-secondary)]">
                    {project.summary}
                  </p>

                  <p className="mt-4 break-words text-xs font-medium text-[var(--text-muted)]">
                    {project.tags.join(' · ')}
                  </p>
                </div>

                <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-[var(--border-hairline)] pt-4">
                  <div className="flex flex-wrap items-center gap-3">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex min-h-[40px] items-center gap-1.5 rounded-lg bg-[var(--accent-primary)] px-3.5 py-2 text-xs font-medium text-white transition-colors hover:bg-[var(--accent-primary-hover)] whitespace-nowrap"
                      >
                        Live Demo ↗
                      </a>
                    )}

                    <button
                      type="button"
                      onClick={() => onOpenCaseStudy(project)}
                      className="inline-flex min-h-[40px] items-center gap-1.5 rounded-lg border border-[var(--border-hairline)] bg-[var(--bg-canvas)] px-3.5 py-2 text-xs font-medium text-[var(--text-primary)] transition-colors hover:bg-[var(--bg-surface-muted)] whitespace-nowrap cursor-pointer"
                    >
                      <BookOpen className="h-3.5 w-3.5" aria-hidden="true" />
                      Read Case Study
                    </button>
                  </div>

                  {project.repoUrl && (
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex min-h-[40px] items-center gap-1.5 text-xs font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                    >
                      GitHub
                      {project.liveUrl ? (
                        <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                      ) : (
                        <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                      )}
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
