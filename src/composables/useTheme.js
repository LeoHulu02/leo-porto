import { ref, computed } from 'vue'

const STORAGE_KEY = 'leo-theme'
const theme = ref('light')

const applyThemeClass = (value) => {
  if (typeof document === 'undefined') return
  document.documentElement.classList.toggle('dark', value === 'dark')
}

const readStoredTheme = () => {
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (saved === 'dark' || saved === 'light') return saved
  } catch {
    /* ignore */
  }
  return 'light'
}

export const useTheme = () => {
  const isDark = computed(() => theme.value === 'dark')

  const setTheme = (value) => {
    const next = value === 'dark' ? 'dark' : 'light'
    theme.value = next
    applyThemeClass(next)
    try {
      localStorage.setItem(STORAGE_KEY, next)
    } catch {
      /* ignore */
    }
  }

  const toggleTheme = () => {
    setTheme(theme.value === 'dark' ? 'light' : 'dark')
  }

  const initTheme = () => {
    const next = readStoredTheme()
    theme.value = next
    applyThemeClass(next)
  }

  return {
    theme,
    isDark,
    setTheme,
    toggleTheme,
    initTheme,
  }
}
