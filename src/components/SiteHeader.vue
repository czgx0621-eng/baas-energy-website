<script setup>
import { ref } from 'vue'
import { Globe2, Menu, X } from '@lucide/vue'
import { brand, navItems, ui } from '../data/siteContent'
import { useLanguage } from '../composables/useLanguage'

const open = ref(false)
const { isZh, t, toggleLanguage } = useLanguage()

function scrollToTop() {
  window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
}

function close() {
  open.value = false
  scrollToTop()
}
</script>

<template>
  <header class="site-header">
    <RouterLink class="brand" to="/" @click="close">
      <img class="brand-logo" src="/images/brand/baas-energy-logo-dark.png" :alt="brand.name" />
    </RouterLink>

    <nav :class="{ open }" aria-label="Main navigation">
      <RouterLink v-for="item in navItems" :key="item.path" :to="item.path" @click="close">
        {{ t(item.label) }}
      </RouterLink>
      <RouterLink class="mobile-contact" to="/contact" @click="close">{{ t(ui.contact) }}</RouterLink>
    </nav>

    <div class="header-actions">
      <button class="icon-text-button" type="button" @click="toggleLanguage">
        <Globe2 :size="16" />
        <span>{{ isZh ? 'EN' : '中文' }}</span>
      </button>
      <RouterLink class="header-contact" to="/contact" @click="scrollToTop">{{ t(ui.contact) }}</RouterLink>
      <button class="menu-button" type="button" aria-label="Toggle navigation" @click="open = !open">
        <X v-if="open" :size="20" />
        <Menu v-else :size="20" />
      </button>
    </div>
  </header>
</template>
