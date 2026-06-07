<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { Check, Network, ShieldCheck, Zap } from '@lucide/vue'
import CtaBand from '../components/CtaBand.vue'
import PageHero from '../components/PageHero.vue'
import SectionIntro from '../components/SectionIntro.vue'
import { products, ui } from '../data/siteContent'
import { useLanguage } from '../composables/useLanguage'

const route = useRoute()
const { language, t } = useLanguage()
const product = computed(() => products.find((item) => item.slug === route.params.slug) || products[0])
const capabilities = computed(() => product.value.capabilities[language.value])
</script>

<template>
  <PageHero :eyebrow="product.name" :title="t(product.title)" :body="t(product.summary)" :image="product.image" />

  <section class="detail-overview section-pad">
    <SectionIntro :eyebrow="t(ui.capabilities)" :title="t({ en: 'Designed for practical AI energy operations.', zh: '为务实的 AI 能源运营而设计。' })" />
    <div class="capability-list">
      <article v-for="item in capabilities" :key="item"><Check :size="18" /><span>{{ item }}</span></article>
    </div>
  </section>

  <section class="detail-value section-pad">
    <article>
      <Network :size="25" />
      <p class="eyebrow">{{ t(ui.system) }}</p>
      <h2>{{ t(product.system) }}</h2>
    </article>
    <article>
      <ShieldCheck :size="25" />
      <p class="eyebrow">{{ t(ui.value) }}</p>
      <h2>{{ t(product.value) }}</h2>
    </article>
    <article>
      <Zap :size="25" />
      <p class="eyebrow">{{ t({ en: 'Energy OS role', zh: 'Energy OS 角色' }) }}</p>
      <h2>{{ t(product.summary) }}</h2>
    </article>
  </section>

  <CtaBand :title="t({ en: 'Let BAAS assess where this product fits your site.', zh: '让 BAAS 评估该产品如何适配您的站点。' })" :body="t(product.value)" />
</template>
