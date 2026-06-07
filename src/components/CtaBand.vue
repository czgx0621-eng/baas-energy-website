<script setup>
import { ArrowRight } from '@lucide/vue'
import { useLanguage } from '../composables/useLanguage'

defineProps({ title: String, body: String })
const { t } = useLanguage()
</script>

<template>
  <section class="cta-band">
    <div>
      <p class="eyebrow light">BAAS ENERGY</p>
      <h2>{{ title }}</h2>
      <p>{{ body }}</p>
    </div>
    <RouterLink to="/contact">
      {{ t({ en: 'Assess your AI energy site', zh: '评估您的 AI 能源站点' }) }}
      <ArrowRight :size="19" />
    </RouterLink>
  </section>
</template>
