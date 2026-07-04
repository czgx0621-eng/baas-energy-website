<script setup>
import { BatteryCharging, Cpu, Network, ShieldCheck, Zap } from '@lucide/vue'
import { useLanguage } from '../composables/useLanguage'
import { assetPath } from '../utils/assets'

const { t } = useLanguage()

const markers = [
  {
    icon: Zap,
    title: { en: 'Power access', zh: '电力接入' },
    body: { en: 'Grid and utility capacity enter the site energy layer.', zh: '电网与公用电力容量进入场站能源层。' },
  },
  {
    icon: BatteryCharging,
    title: { en: 'Energy capacity', zh: '能源容量' },
    body: { en: 'Modular assets add expansion, backup, and flexibility.', zh: '模块化能源资产提供扩容、备电与灵活性。' },
  },
  {
    icon: ShieldCheck,
    title: { en: 'Site control', zh: '站点控制' },
    body: { en: 'Gateway and controls coordinate power equipment and loads.', zh: '网关与控制层协同电力设备和负载。' },
  },
  {
    icon: Cpu,
    title: { en: 'AI compute', zh: 'AI 算力' },
    body: { en: 'Stable capacity supports AIDC and high-density racks.', zh: '稳定容量支撑 AIDC 与高密度机架。' },
  },
]
</script>

<template>
  <div id="power-to-compute-demo" class="power-to-compute-demo ptc-photo-demo">
    <div class="ptc-photo-frame">
      <img
        :src="assetPath('/images/photos/power-to-compute-daylight.webp')"
        :alt="t({ en: 'Daytime AI data center connected with power infrastructure', zh: '白天数据中心与电力基础设施场站' })"
        loading="lazy"
      />

      <div class="ptc-photo-copy">
        <span>{{ t({ en: 'Site infrastructure visual', zh: '场站基础设施示意' }) }}</span>
        <strong>{{ t({ en: 'Power to Compute', zh: '电力到算力' }) }}</strong>
        <p>
          {{
            t({
              en: 'A physical path from utility power and modular energy assets to deployable AI compute capacity.',
              zh: '从公用电力与模块化能源资产，到可部署 AI 算力容量的实体路径。',
            })
          }}
        </p>
      </div>

      <div class="ptc-photo-legend">
        <article v-for="marker in markers" :key="t(marker.title)">
          <component :is="marker.icon" :size="18" />
          <div>
            <h3>{{ t(marker.title) }}</h3>
            <p>{{ t(marker.body) }}</p>
          </div>
        </article>
      </div>

      <div class="ptc-photo-linkline" aria-hidden="true">
        <span></span>
        <Network :size="18" />
        <span></span>
      </div>
    </div>
  </div>
</template>
