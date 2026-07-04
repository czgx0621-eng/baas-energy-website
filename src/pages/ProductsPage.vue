<script setup>
import CtaBand from '../components/CtaBand.vue'
import PageHero from '../components/PageHero.vue'
import ProductFeature from '../components/ProductFeature.vue'
import SectionIntro from '../components/SectionIntro.vue'
import { products } from '../data/siteContent'
import { useLanguage } from '../composables/useLanguage'

const { t } = useLanguage()
</script>

<template>
  <PageHero
    :eyebrow="t({ en: 'Products', zh: '产品' })"
    :title="t({ en: 'The physical and software layers of the Energy OS.', zh: 'Energy OS 的实体层与软件层。' })"
    :body="t({ en: 'Intelligent gateways. Modular energy pods. Compute-energy orchestration.', zh: '智能网关、模块化能源舱、算力能源调度平台。' })"
    image="/images/photos/gateway-cabinet.webp"
  />
  <section class="products-editorial section-pad">
    <SectionIntro
      :eyebrow="t({ en: 'A coordinated product system', zh: '协同产品系统' })"
      :title="t({ en: 'Observe, support, and orchestrate energy for AI compute.', zh: '观测、支撑并调度 AI 算力能源。' })"
      :body="t({ en: 'BAAS products connect site-level power intelligence, modular energy capacity, and software-defined operations.', zh: 'BAAS 产品连接站点级电力智能、模块化能源容量和软件定义运营。' })"
    />
    <ProductFeature v-for="(product, index) in products" :key="product.slug" :product="product" :reverse="index % 2 === 1" />
  </section>
  <CtaBand :title="t({ en: 'Build a controllable energy system for your AI site.', zh: '为您的 AI 站点构建可控制的能源系统。' })" />
</template>
