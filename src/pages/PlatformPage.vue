<script setup>
import { Check } from '@lucide/vue'
import CtaBand from '../components/CtaBand.vue'
import PageHero from '../components/PageHero.vue'
import PowerToComputeDemo from '../components/PowerToComputeDemo.vue'
import SectionIntro from '../components/SectionIntro.vue'
import { powerToCompute } from '../data/siteContent'
import { useLanguage } from '../composables/useLanguage'
import { assetPath } from '../utils/assets'

const { t } = useLanguage()
</script>

<template>
  <PageHero
    :eyebrow="t(powerToCompute.hero.eyebrow)"
    :title="t(powerToCompute.hero.title)"
    :body="t(powerToCompute.hero.body)"
    image="/images/photos/power-to-compute-hero.webp"
  />

  <section class="section-pad ptc-why-section">
    <div class="ptc-why-grid">
      <SectionIntro
        :eyebrow="t(powerToCompute.why.eyebrow)"
        :title="t(powerToCompute.why.title)"
        :body="t(powerToCompute.why.body)"
      />
      <div class="ptc-constraint-list">
        <article v-for="(item, index) in powerToCompute.why.items" :key="t(item.title)">
          <span>0{{ index + 1 }}</span>
          <h3>{{ t(item.title) }}</h3>
          <p>{{ t(item.body) }}</p>
        </article>
      </div>
    </div>
  </section>

  <section class="platform-dark section-pad ptc-model-section">
    <SectionIntro
      light
      :eyebrow="t(powerToCompute.model.eyebrow)"
      :title="t(powerToCompute.model.title)"
      :body="t(powerToCompute.model.body)"
    />
    <PowerToComputeDemo />
    <div class="ptc-model-steps">
      <article v-for="(step, index) in powerToCompute.model.steps" :key="t(step.title)">
        <span>0{{ index + 1 }}</span>
        <h3>{{ t(step.title) }}</h3>
        <p>{{ t(step.body) }}</p>
      </article>
    </div>
  </section>

  <section class="section-pad ptc-delivery-section">
    <div class="ptc-delivery-grid">
      <SectionIntro
        :eyebrow="t(powerToCompute.delivery.eyebrow)"
        :title="t(powerToCompute.delivery.title)"
        :body="t(powerToCompute.delivery.body)"
      />
      <div class="ptc-delivery-timeline">
        <article v-for="(item, index) in powerToCompute.delivery.items" :key="t(item.title)">
          <span>{{ String(index + 1).padStart(2, '0') }}</span>
          <div>
            <h3>{{ t(item.title) }}</h3>
            <p>{{ t(item.body) }}</p>
          </div>
          <Check :size="18" />
        </article>
      </div>
    </div>
  </section>

  <section class="section-pad ptc-scenario-section">
    <SectionIntro
      :eyebrow="t(powerToCompute.scenarios.eyebrow)"
      :title="t(powerToCompute.scenarios.title)"
      :body="t(powerToCompute.scenarios.body)"
    />
    <div class="ptc-scenario-grid">
      <article v-for="item in powerToCompute.scenarios.items" :key="t(item.title)">
        <img :src="assetPath(item.image)" :alt="t(item.title)" loading="lazy" />
        <div>
          <h3>{{ t(item.title) }}</h3>
          <p>{{ t(item.body) }}</p>
        </div>
      </article>
    </div>
  </section>

  <CtaBand :title="t(powerToCompute.cta.title)" :body="t(powerToCompute.cta.body)" />
</template>
