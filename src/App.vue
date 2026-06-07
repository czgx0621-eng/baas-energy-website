<script setup>
import { computed, nextTick, watch, watchEffect } from 'vue'
import { useRoute } from 'vue-router'
import SiteHeader from './components/SiteHeader.vue'
import SiteFooter from './components/SiteFooter.vue'
import { companyIntro } from './data/companyIntro'
import { products, seo, solutions } from './data/siteContent'
import { useLanguage } from './composables/useLanguage'

const route = useRoute()
const { t } = useLanguage()

const pageSeo = computed(() => {
  if (route.name === 'product') {
    const product = products.find((item) => item.slug === route.params.slug)
    return product
      ? { title: `${product.name} | BAAS ENERGY`, description: product.summary }
      : seo.products
  }
  if (route.name === 'solution') {
    const solution = solutions.find((item) => item.slug === route.params.slug)
    return solution
      ? { title: `${t(solution.title)} | BAAS ENERGY`, description: solution.intro }
      : seo.solutions
  }
  if (route.name === 'about') {
    return {
      title: 'About | BAAS ENERGY',
      description: companyIntro.intro,
    }
  }
  return seo[route.name] || seo.home
})

watchEffect(() => {
  document.title = pageSeo.value.title
  let meta = document.querySelector('meta[name="description"]')
  if (!meta) {
    meta = document.createElement('meta')
    meta.name = 'description'
    document.head.appendChild(meta)
  }
  meta.content = t(pageSeo.value.description)
})

watch(
  () => route.fullPath,
  async () => {
    await nextTick()
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  },
)
</script>

<template>
  <SiteHeader />
  <main>
    <RouterView />
  </main>
  <SiteFooter />
</template>
