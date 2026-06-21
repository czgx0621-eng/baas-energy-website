<script setup>
import { ArrowRight, ArrowUpRight } from '@lucide/vue'
import CtaBand from '../components/CtaBand.vue'
import PowerToComputeDemo from '../components/PowerToComputeDemo.vue'
import ProcessTimeline from '../components/ProcessTimeline.vue'
import ProductFeature from '../components/ProductFeature.vue'
import SectionIntro from '../components/SectionIntro.vue'
import { home, painPoints, products, solutions } from '../data/siteContent'
import { useLanguage } from '../composables/useLanguage'
import { assetPath } from '../utils/assets'

const { t } = useLanguage()
</script>

<template>
  <section class="home-hero">
    <img :src="assetPath('/images/photos/hero-campus.png')" alt="AI data center campus with modular energy infrastructure" fetchpriority="high" />
    <div class="home-hero-shade" />
    <div class="home-hero-content">
      <p class="eyebrow light">{{ t(home.hero.eyebrow) }}</p>
      <h1>{{ t(home.hero.title) }}</h1>
      <p>{{ t(home.hero.body) }}</p>
      <div class="hero-links">
        <RouterLink class="button primary" to="/solutions">
          {{ t({ en: 'Explore solutions', zh: '查看解决方案' }) }}
          <ArrowRight :size="18" />
        </RouterLink>
        <RouterLink class="button glass" to="/contact">
          {{ t({ en: 'Partner with BAAS', zh: '与 BAAS 合作' }) }}
        </RouterLink>
      </div>
    </div>
    <div class="hero-tagline">
      <span v-for="tag in home.hero.tags" :key="t(tag)">{{ t(tag) }}</span>
    </div>
  </section>

  <section class="editorial-split section-pad">
    <div class="editorial-copy">
      <SectionIntro :eyebrow="t(home.challenge.eyebrow)" :title="t(home.challenge.title)" :body="t(home.challenge.body)" />
      <div class="pain-list">
        <article v-for="item in painPoints" :key="item.number">
          <span>{{ item.number }}</span>
          <div>
            <h3>{{ t(item.title) }}</h3>
            <p>{{ t(item.body) }}</p>
          </div>
        </article>
      </div>
    </div>
    <div class="editorial-media tall">
      <img :src="assetPath('/images/photos/enterprise-ai-room.png')" alt="Enterprise AI server room" loading="lazy" />
      <div class="media-caption">
        <span>AI workload</span>
        <span>Power capacity</span>
        <span>Site control</span>
      </div>
    </div>
  </section>

  <section class="platform-dark section-pad">
    <SectionIntro light :eyebrow="t(home.platform.eyebrow)" :title="t(home.platform.title)" :body="t(home.platform.body)" />
    <PowerToComputeDemo />
  </section>

  <section class="products-editorial section-pad">
    <SectionIntro
      :eyebrow="t({ en: 'What we build', zh: '我们构建什么' })"
      :title="t({ en: 'Intelligent gateways. Modular energy pods. Compute-energy orchestration.', zh: '智能网关、模块化能源舱、算力能源调度平台。' })"
    />
    <ProductFeature v-for="(product, index) in products" :key="product.slug" :product="product" :reverse="index % 2 === 1" />
  </section>

  <section class="solutions-section section-pad">
    <SectionIntro
      :eyebrow="t({ en: 'Solutions', zh: '解决方案' })"
      :title="t({ en: 'Built for the next generation of distributed AI infrastructure.', zh: '服务下一代分布式 AI 基础设施。' })"
    />
    <div class="solution-mosaic">
      <RouterLink v-for="solution in solutions" :key="solution.slug" :to="`/solutions/${solution.slug}`">
        <img :src="assetPath(solution.image)" :alt="t(solution.title)" loading="lazy" />
        <div class="solution-shade" />
        <div>
          <p>{{ t(solution.intro) }}</p>
          <h3>{{ t(solution.title) }}</h3>
          <span>{{ t(solution.tagline) }} <ArrowUpRight :size="17" /></span>
        </div>
      </RouterLink>
    </div>
  </section>

  <section class="process-section section-pad">
    <SectionIntro
      :eyebrow="t({ en: 'How it works', zh: '如何运行' })"
      :title="t({ en: 'From site assessment to continuous energy orchestration.', zh: '从站点评估到持续能源调度。' })"
    />
    <ProcessTimeline />
  </section>

  <section class="partner-banner">
    <img :src="assetPath('/images/photos/partners-engineering.png')" alt="Energy infrastructure engineering partners" loading="lazy" />
    <div class="partner-banner-content">
      <p class="eyebrow light">{{ t({ en: 'Partner-ready integration', zh: '面向伙伴的开放集成' }) }}</p>
      <h2>{{ t({ en: 'Built to work with the AI infrastructure ecosystem.', zh: '为 AI 基础设施生态协作而设计。' }) }}</h2>
      <RouterLink class="button glass" to="/partners">
        {{ t({ en: 'Partner with BAAS', zh: '与 BAAS 合作' }) }}
        <ArrowRight :size="18" />
      </RouterLink>
    </div>
  </section>

  <CtaBand
    :title="t({ en: 'Ready to make your AI energy infrastructure controllable?', zh: '准备让您的 AI 能源基础设施变得可观测、可控制、可调度？' })"
    :body="t({ en: 'BAAS can assess your site and design the right energy operating layer.', zh: 'BAAS 可以帮助您评估站点，并设计合适的能源操作层。' })"
  />
</template>
