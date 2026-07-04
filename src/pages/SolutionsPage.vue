<script setup>
import { ArrowUpRight } from '@lucide/vue'
import CtaBand from '../components/CtaBand.vue'
import PageHero from '../components/PageHero.vue'
import SectionIntro from '../components/SectionIntro.vue'
import { solutions } from '../data/siteContent'
import { useLanguage } from '../composables/useLanguage'
import { assetPath } from '../utils/assets'

const { t } = useLanguage()
</script>

<template>
  <PageHero
    :eyebrow="t({ en: 'Solutions', zh: '解决方案' })"
    :title="t({ en: 'Energy solutions for distributed AI compute.', zh: '面向分布式 AI 算力的能源解决方案。' })"
    :body="t({ en: 'BAAS supports customers building or upgrading AI compute environments where power access, energy cost, backup readiness, and grid flexibility are becoming strategic constraints.', zh: 'BAAS 服务正在建设或升级 AI 算力环境的客户，帮助其应对电力接入、能源成本、备电能力和电网灵活性等关键约束。' })"
    image="/images/photos/campus-compute.webp"
  />
  <section class="section-pad">
    <SectionIntro
      :eyebrow="t({ en: 'Four deployment environments', zh: '四类部署环境' })"
      :title="t({ en: 'A practical energy operating layer for every AI site.', zh: '为每类 AI 站点构建务实的能源操作层。' })"
    />
    <div class="solution-index">
      <RouterLink v-for="(solution, index) in solutions" :key="solution.slug" :to="`/solutions/${solution.slug}`">
        <div class="solution-index-image"><img :src="assetPath(solution.image)" :alt="t(solution.title)" loading="lazy" /></div>
        <div class="solution-index-copy">
          <span>0{{ index + 1 }}</span>
          <p class="eyebrow">{{ t(solution.intro) }}</p>
          <h2>{{ t(solution.title) }}</h2>
          <p>{{ t(solution.tagline) }}</p>
          <strong>{{ t({ en: 'View solution', zh: '查看方案' }) }} <ArrowUpRight :size="18" /></strong>
        </div>
      </RouterLink>
    </div>
  </section>
  <CtaBand :title="t({ en: 'Let BAAS design the right energy operating layer for your site.', zh: '让 BAAS 为您的站点设计合适的能源操作层。' })" />
</template>
