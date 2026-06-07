<script setup>
import { ArrowUpRight, Check } from '@lucide/vue'
import CtaBand from '../components/CtaBand.vue'
import DashboardMockup from '../components/DashboardMockup.vue'
import EnergyFlow from '../components/EnergyFlow.vue'
import PageHero from '../components/PageHero.vue'
import ProcessTimeline from '../components/ProcessTimeline.vue'
import SectionIntro from '../components/SectionIntro.vue'
import { home, products } from '../data/siteContent'
import { useLanguage } from '../composables/useLanguage'

const { t } = useLanguage()
</script>

<template>
  <PageHero
    :eyebrow="t({ en: 'The BAAS platform', zh: 'BAAS 平台' })"
    :title="t({ en: 'A coordinated energy layer for distributed AI.', zh: '面向分布式 AI 的协同能源操作层。' })"
    :body="t(home.platform.body)"
    image="/images/photos/operations-center.png"
  />

  <section class="section-pad">
    <div class="platform-intro-grid">
      <SectionIntro
        :eyebrow="t({ en: 'System overview', zh: '系统概览' })"
        :title="t({ en: 'See the site. Control the assets. Orchestrate the fleet.', zh: '看清站点、控制资产、调度多站点。' })"
        :body="t({ en: 'BAAS combines a trusted data layer, configurable physical energy assets, and a software-defined orchestration layer.', zh: 'BAAS 将可信数据层、可配置的实体能源资产与软件定义的调度层连接起来。' })"
      />
      <div class="platform-principles">
        <article v-for="item in [
          { en: 'Observable from circuit to fleet', zh: '从回路到多站点全面可观测' },
          { en: 'Controllable across power and storage', zh: '跨供配电与储能全面可控制' },
          { en: 'Optimizable through software', zh: '通过软件持续优化' },
          { en: 'Ready for grid-flexible operation', zh: '为电网灵活运行做好准备' },
        ]" :key="t(item)">
          <Check :size="18" />
          <span>{{ t(item) }}</span>
        </article>
      </div>
    </div>
  </section>

  <section class="platform-dark section-pad">
    <SectionIntro light :eyebrow="t({ en: 'Five connected layers', zh: '五个连接层' })" :title="t(home.platform.title)" />
    <EnergyFlow />
  </section>

  <section class="dashboard-section section-pad">
    <div class="dashboard-heading">
      <SectionIntro
        :eyebrow="t({ en: 'Software-defined operations', zh: '软件定义运营' })"
        :title="t({ en: 'Turn site-level signals into operating decisions.', zh: '将站点级信号转化为运营决策。' })"
        :body="t({ en: 'PowerFlex OS connects load behavior, storage state, power limits, pricing, carbon data, and grid signals in one operating view.', zh: 'PowerFlex OS 在统一运营视图中连接负载行为、储能状态、功率限制、电价、碳数据和电网信号。' })"
      />
    </div>
    <DashboardMockup />
  </section>

  <section class="section-pad product-collaboration">
    <SectionIntro
      :eyebrow="t({ en: 'Products in coordination', zh: '产品协同' })"
      :title="t({ en: 'Each product is useful alone. Together, they form the Energy OS.', zh: '每个产品都能独立创造价值，协同后构成完整 Energy OS。' })"
    />
    <article v-for="(product, index) in products" :key="product.slug">
      <span>0{{ index + 1 }}</span>
      <div>
        <p class="eyebrow">{{ product.name }}</p>
        <h3>{{ t(product.title) }}</h3>
        <p>{{ t(product.system) }}</p>
      </div>
      <RouterLink :to="`/products/${product.slug}`"><ArrowUpRight :size="20" /></RouterLink>
    </article>
  </section>

  <section class="process-section section-pad">
    <SectionIntro
      :eyebrow="t({ en: 'Deployment path', zh: '部署路径' })"
      :title="t({ en: 'A practical path from assessment to orchestration.', zh: '从评估到调度的务实路径。' })"
    />
    <ProcessTimeline />
  </section>

  <CtaBand :title="t({ en: 'Design the right energy operating layer for your site.', zh: '为您的站点设计合适的能源操作层。' })" :body="t(home.platform.body)" />
</template>
