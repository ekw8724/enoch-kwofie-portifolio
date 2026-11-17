import { useCallback, useEffect, useState } from 'react';
import { About } from './components/About';
import { CaseStudyModal } from './components/CaseStudyModal';
import { Certifications } from './components/Certifications';
import { Contact } from './components/Contact';
import { CVModal } from './components/CVModal';
import { Experience } from './components/Experience';
import { FeaturedProject } from './components/FeaturedProject';
import { Hero } from './components/Hero';
import { Layout } from './components/Layout';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { useTheme } from './hooks/useTheme';
import type { PageRoute, ProjectCaseStudy } from './types/portfolio';
import { getScrollBehavior } from './utils/scrollToSection';

const VALID_PAGES: PageRoute[] = [
  'home',
  'about',
  'skills',
  'projects',
  'experience',
  'certifications',
  'contact',
];

function getInitialPage(): PageRoute {
  if (typeof window === 'undefined') {
    return 'home';
  }
  const hash = window.location.hash.replace('#', '') as PageRoute;
  return VALID_PAGES.includes(hash) ? hash : 'home';
}

export default function App() {
  const [activePage, setActivePage] = useState<PageRoute>(getInitialPage);
  const [cvModalOpen, setCvModalOpen] = useState(false);
  const [activeCaseStudy, setActiveCaseStudy] = useState<ProjectCaseStudy | null>(null);
  const { theme, toggleTheme } = useTheme();

  const navigateTo = useCallback((page: PageRoute) => {
    setActivePage(page);
    try {
      const targetHash = `#${page}`;
      if (window.location.hash !== targetHash) {
        window.history.pushState(null, '', targetHash);
      }
    } catch {
      // Ignore history mutation errors in restricted sandbox contexts
    }
    window.scrollTo({
      top: 0,
      behavior: getScrollBehavior(),
    });
  }, []);

  useEffect(() => {
    const handleHashChange = () => {
      const next = window.location.hash.replace('#', '') as PageRoute;
      setActivePage(VALID_PAGES.includes(next) ? next : 'home');
      window.scrollTo({ top: 0, behavior: getScrollBehavior() });
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <Layout
      activePage={activePage}
      onNavigate={navigateTo}
      theme={theme}
      onToggleTheme={toggleTheme}
    >
      {activePage === 'home' && (
        <>
          <Hero
            onOpenCV={() => setCvModalOpen(true)}
            onHireClick={() => navigateTo('contact')}
          />
          <FeaturedProject
            onOpenCaseStudy={(project) => setActiveCaseStudy(project)}
            onViewAllProjects={() => navigateTo('projects')}
          />
        </>
      )}

      {activePage === 'about' && <About onBackHome={() => navigateTo('home')} />}
      {activePage === 'skills' && <Skills onBackHome={() => navigateTo('home')} />}
      {activePage === 'projects' && (
        <Projects
          onBackHome={() => navigateTo('home')}
          onOpenCaseStudy={(project) => setActiveCaseStudy(project)}
        />
      )}
      {activePage === 'experience' && <Experience onBackHome={() => navigateTo('home')} />}
      {activePage === 'certifications' && (
        <Certifications onBackHome={() => navigateTo('home')} />
      )}
      {activePage === 'contact' && <Contact onBackHome={() => navigateTo('home')} />}

      <CVModal isOpen={cvModalOpen} onClose={() => setCvModalOpen(false)} />
      <CaseStudyModal
        project={activeCaseStudy}
        onClose={() => setActiveCaseStudy(null)}
      />
    </Layout>
  );
}
