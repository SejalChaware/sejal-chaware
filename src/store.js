import { atom } from 'jotai'

const getInitialTheme = () => {
  if (typeof window !== 'undefined' && window.matchMedia) {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark'
    }
  }
  return 'light'
}

export const themeAtom = atom(getInitialTheme())
