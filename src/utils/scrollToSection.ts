export function getScrollBehavior(): ScrollBehavior {
  if (typeof window === 'undefined' || !window.matchMedia) {
    return 'auto';
  }
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth';
}

export function scrollToSection(sectionId: string): boolean {
  if (typeof document === 'undefined') {
    return false;
  }

  const target = document.getElementById(sectionId);
  if (!target) {
    return false;
  }

  target.scrollIntoView({
    behavior: getScrollBehavior(),
    block: 'start',
  });

  return true;
}
