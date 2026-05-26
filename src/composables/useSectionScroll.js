const SCROLL_GAP_PX = 20

export function updateSiteHeaderOffset(navElement) {
  if (typeof document === 'undefined' || !navElement) return

  const offset = navElement.offsetHeight + SCROLL_GAP_PX
  document.documentElement.style.setProperty('--site-header-offset', `${offset}px`)
}

export function scrollToSection(hash) {
  if (typeof window === 'undefined' || !hash?.startsWith('#') || hash === '#') return

  if (hash === '#home') {
    window.scrollTo({ top: 0, behavior: 'smooth' })
    return
  }

  const target = document.querySelector(hash)
  if (target) {
    target.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}

export function handleSectionNavClick(event, hash, onNavigate) {
  if (!hash?.startsWith('#') || hash === '#') return

  event.preventDefault()
  onNavigate?.()

  requestAnimationFrame(() => {
    scrollToSection(hash)
  })
}
