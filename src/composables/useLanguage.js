import { computed, ref } from 'vue'

const language = ref('en')

if (typeof localStorage !== 'undefined') {
  localStorage.setItem('baas-lang', 'en')
}

if (typeof document !== 'undefined') {
  document.documentElement.lang = 'en'
}

export function useLanguage() {
  const isZh = computed(() => false)
  const t = (entry) => {
    if (typeof entry === 'string') return entry
    if (!entry || typeof entry !== 'object') return ''
    return entry.en ?? ''
  }

  function toggleLanguage() {
    language.value = 'en'
  }

  function setLanguage() {
    language.value = 'en'
  }

  return {
    language,
    isZh,
    t,
    toggleLanguage,
    setLanguage,
  }
}
