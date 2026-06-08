<script setup>
import CtaBand from '../components/CtaBand.vue'
import PageHero from '../components/PageHero.vue'
import { companyIntro } from '../data/companyIntro'
import { useLanguage } from '../composables/useLanguage'
import { assetPath } from '../utils/assets'

const { t } = useLanguage()
</script>

<template>
  <PageHero
    :eyebrow="t(companyIntro.eyebrow)"
    :title="t(companyIntro.title)"
    :body="t(companyIntro.intro)"
    image="/images/photos/hero-campus.png"
  />

  <section class="about-mission section-pad">
    <div>
      <p class="eyebrow">{{ t({ en: 'Our mission', zh: '我们的使命' }) }}</p>
      <h2>{{ t(companyIntro.mission) }}</h2>
    </div>
    <div class="about-copy-stack">
      <p>{{ t(companyIntro.intro) }}</p>
      <p v-for="paragraph in companyIntro.overview" :key="t(paragraph)">{{ t(paragraph) }}</p>
    </div>
  </section>

  <section class="about-beliefs section-pad">
    <div class="about-beliefs-intro">
      <p class="eyebrow">{{ t({ en: 'What we believe', zh: '我们相信' }) }}</p>
      <h2>{{ t({ en: 'Energy capacity is now an operating layer for AI infrastructure.', zh: '能源容量正在成为 AI 基础设施的运营层。' }) }}</h2>
      <p>{{ t({ en: 'BAAS treats power capacity as something that can be planned, deployed, monitored, and dispatched alongside compute capacity.', zh: 'BAAS 将电力容量视为可规划、可部署、可监测、可调度的基础设施能力，与算力容量协同运行。' }) }}</p>
    </div>
    <div class="about-belief-grid">
      <article v-for="(belief, index) in companyIntro.beliefs" :key="t(belief)">
        <span>0{{ index + 1 }}</span>
        <h3>{{ t(belief) }}</h3>
      </article>
    </div>
  </section>

  <section class="about-image-band">
    <img :src="assetPath('/images/photos/operations-center.png')" alt="Energy operations center" loading="lazy" />
    <div>
      <p>{{ t({ en: 'Deployable', zh: '可部署' }) }}</p>
      <p>{{ t({ en: 'Operable', zh: '可运营' }) }}</p>
      <p>{{ t({ en: 'Dispatchable', zh: '可调度' }) }}</p>
    </div>
  </section>

  <CtaBand :title="t({ en: 'Build energy capacity into your AI infrastructure.', zh: '为您的 AI 基础设施构建可运营的电力容量。' })" />
</template>
