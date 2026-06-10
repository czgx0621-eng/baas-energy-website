<script setup>
import { ArrowUpRight } from '@lucide/vue'
import { brand, navItems } from '../data/siteContent'
import { companyIntro } from '../data/companyIntro'
import { useLanguage } from '../composables/useLanguage'
import { assetPath } from '../utils/assets'

const { t } = useLanguage()

function scrollToTop() {
  window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
}
</script>

<template>
  <footer class="site-footer">
    <div class="footer-top">
      <div class="footer-brand">
        <RouterLink to="/" aria-label="BAAS ENERGY home">
          <img class="footer-logo" :src="assetPath('/images/brand/baas-energy-logo-dark.png')" :alt="brand.name" />
        </RouterLink>
        <p>{{ t(companyIntro.footerLine) }}</p>
        <a class="footer-email" href="mailto:contact@baas-energy.com">contact@baas-energy.com</a>
      </div>
      <nav aria-label="Footer navigation">
        <RouterLink v-for="item in navItems" :key="item.path" :to="item.path" @click="scrollToTop">{{ t(item.label) }}</RouterLink>
        <RouterLink to="/contact" @click="scrollToTop">{{ t({ en: 'Contact', zh: '联系我们' }) }}</RouterLink>
      </nav>
      <RouterLink class="footer-action" to="/contact" @click="scrollToTop">
        <span>{{ t({ en: 'Start a site assessment', zh: '开始站点评估' }) }}</span>
        <ArrowUpRight :size="20" />
      </RouterLink>
    </div>
    <div class="footer-bottom">
      <span>© 2026 BAAS ENERGY</span>
      <span>Energy-aware. Flexible. Resilient.</span>
    </div>
  </footer>
</template>
