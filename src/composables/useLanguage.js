import { computed, ref, watch } from 'vue'

const initialLanguage = typeof localStorage === 'undefined' ? 'en' : localStorage.getItem('baas-lang') || 'en'
const language = ref(initialLanguage === 'zh' ? 'zh' : 'en')

watch(language, (value) => {
  if (typeof localStorage !== 'undefined') {
    localStorage.setItem('baas-lang', value)
  }
  if (typeof document !== 'undefined') {
    document.documentElement.lang = value === 'zh' ? 'zh-CN' : 'en'
  }
}, { immediate: true })

export function useLanguage() {
  const isZh = computed(() => language.value === 'zh')
  const t = (entry) => entry?.[language.value] ?? entry?.en ?? ''

  function toggleLanguage() {
    language.value = language.value === 'en' ? 'zh' : 'en'
  }

  function setLanguage(value) {
    language.value = value === 'zh' ? 'zh' : 'en'
  }

  return {
    language,
    isZh,
    t,
    toggleLanguage,
    setLanguage,
  }
}
