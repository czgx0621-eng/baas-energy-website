<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { Check } from '@lucide/vue'
import CtaBand from '../components/CtaBand.vue'
import PageHero from '../components/PageHero.vue'
import ProcessTimeline from '../components/ProcessTimeline.vue'
import SectionIntro from '../components/SectionIntro.vue'
import { solutions, ui } from '../data/siteContent'
import { useLanguage } from '../composables/useLanguage'

const route = useRoute()
const { language, t } = useLanguage()
const solution = computed(() => solutions.find((item) => item.slug === route.params.slug) || solutions[0])
const constraints = computed(() => solution.value.constraints[language.value])
const response = computed(() => solution.value.response[language.value])
</script>

<template>
  <PageHero :eyebrow="t(solution.intro)" :title="t(solution.title)" :body="t(solution.tagline)" :image="solution.image" />

  <section class="solution-detail section-pad">
    <div>
      <SectionIntro :eyebrow="t(ui.constraints)" :title="t({ en: 'What the site needs to solve.', zh: '站点需要解决的问题。' })" />
      <ul><li v-for="item in constraints" :key="item"><span />{{ item }}</li></ul>
    </div>
    <div>
      <SectionIntro :eyebrow="t(ui.response)" :title="t({ en: 'How BAAS builds the energy layer.', zh: 'BAAS 如何构建能源操作层。' })" />
      <ul><li v-for="item in response" :key="item"><Check :size="18" />{{ item }}</li></ul>
    </div>
  </section>

  <section class="solution-outcome section-pad">
    <p class="eyebrow light">{{ t(ui.outcome) }}</p>
    <h2>{{ t(solution.outcome) }}</h2>
  </section>

  <section class="process-section section-pad">
    <SectionIntro :eyebrow="t(ui.process)" :title="t({ en: 'From assessment to continuous orchestration.', zh: '从评估到持续调度。' })" />
    <ProcessTimeline />
  </section>

  <CtaBand :title="t({ en: 'Let BAAS assess your site and design the right energy operating layer.', zh: '让 BAAS 评估您的站点，并设计合适的能源操作层。' })" :body="t(solution.intro)" />
</template>
