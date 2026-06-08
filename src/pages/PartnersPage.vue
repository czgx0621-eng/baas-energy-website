<script setup>
import { ArrowRight, Check } from '@lucide/vue'
import CtaBand from '../components/CtaBand.vue'
import PageHero from '../components/PageHero.vue'
import SectionIntro from '../components/SectionIntro.vue'
import { partnerTypes } from '../data/siteContent'
import { useLanguage } from '../composables/useLanguage'
import { assetPath } from '../utils/assets'

const { t } = useLanguage()
</script>

<template>
  <PageHero
    :eyebrow="t({ en: 'Partners', zh: '合作伙伴' })"
    :title="t({ en: 'Power the next generation of AI infrastructure with BAAS.', zh: '与 BAAS 一起为下一代 AI 基础设施提供能源能力。' })"
    :body="t({ en: 'BAAS is designed to work with the broader AI infrastructure and energy ecosystem.', zh: 'BAAS 面向 AI 基础设施和能源生态开放协作。' })"
    image="/images/photos/partners-engineering.png"
  />

  <section class="section-pad">
    <SectionIntro
      :eyebrow="t({ en: 'An open delivery ecosystem', zh: '开放交付生态' })"
      :title="t({ en: 'Productized energy systems, delivered together.', zh: '共同交付产品化能源系统。' })"
      :body="t({ en: 'We work with equipment providers, integrators, contractors, data center operators, energy companies, and grid-flexibility platforms.', zh: '我们与设备供应商、集成商、承包商、数据中心运营商、能源公司和电网灵活性平台合作。' })"
    />
    <div class="partner-types">
      <article v-for="(partner, index) in partnerTypes" :key="t(partner.title)">
        <span>0{{ index + 1 }}</span>
        <Check :size="20" />
        <h3>{{ t(partner.title) }}</h3>
        <p>{{ t(partner.body) }}</p>
      </article>
    </div>
  </section>

  <section class="partner-model section-pad">
    <div class="editorial-media">
      <img :src="assetPath('/images/photos/idc-retrofit.png')" alt="Engineers delivering AI energy infrastructure" loading="lazy" />
    </div>
    <div>
      <p class="eyebrow light">{{ t({ en: 'Partner-ready integration', zh: '面向伙伴的开放集成' }) }}</p>
      <h2>{{ t({ en: 'A clear role for every delivery partner.', zh: '让每类交付伙伴都有清晰的协作角色。' }) }}</h2>
      <p>{{ t({ en: 'BAAS provides the gateway, modular energy assets, software platform, and integration standards needed to turn AI compute sites into controllable energy systems.', zh: 'BAAS 提供智能网关、模块化能源资产、软件平台和集成标准，将 AI 算力站点转化为可控制的能源系统。' }) }}</p>
      <RouterLink class="button primary" to="/contact">{{ t({ en: 'Discuss a partnership', zh: '洽谈合作' }) }} <ArrowRight :size="18" /></RouterLink>
    </div>
  </section>

  <CtaBand :title="t({ en: 'Become a BAAS partner.', zh: '成为 BAAS 合作伙伴。' })" />
</template>
