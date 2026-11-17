import type { ProjectCaseStudy, ProjectCategory } from '../types/portfolio';

export function filterProjects(
  projects: ProjectCaseStudy[],
  category: ProjectCategory,
  searchQuery: string,
): ProjectCaseStudy[] {
  const normalizedQuery = searchQuery.trim().toLowerCase();

  return projects.filter((project) => {
    const matchesCategory = category === 'All' || project.category === category;
    if (!matchesCategory) {
      return false;
    }

    if (!normalizedQuery) {
      return true;
    }

    const searchableText = [
      project.title,
      project.summary,
      project.category,
      project.problem,
      ...project.tools,
    ]
      .join(' ')
      .toLowerCase();

    return searchableText.includes(normalizedQuery);
  });
}
