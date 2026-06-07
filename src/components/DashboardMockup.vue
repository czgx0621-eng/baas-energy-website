<script setup>
import { Activity, Battery, Gauge, Zap } from '@lucide/vue'
import { useLanguage } from '../composables/useLanguage'

const { t } = useLanguage()

const kpis = [
  { icon: Activity, label: { en: 'Live site load', zh: '实时站点负载' }, value: '2.84 MW', sub: { en: 'AIDC room active', zh: 'AIDC 机房运行中' } },
  { icon: Battery, label: { en: 'Energy reserve', zh: '能源储备' }, value: '78%', sub: { en: 'Dispatch ready', zh: '可调度' } },
  { icon: Gauge, label: { en: 'Peak window', zh: '峰值窗口' }, value: '3.12 MW', sub: { en: 'Limit protected', zh: '限值保护中' } },
  { icon: Zap, label: { en: 'Grid signal', zh: '电网信号' }, value: 'Normal', sub: { en: 'DR standby', zh: '需求响应待命' } },
]

const topology = [
  { title: { en: 'Grid', zh: '电网' }, meta: '10 kV' },
  { title: { en: 'PV / Gas', zh: '光伏 / 燃气' }, meta: 'Interface' },
  { title: { en: 'BESS', zh: '储能' }, meta: '1.2 MWh' },
  { title: { en: 'Gateway', zh: '网关' }, meta: 'Edge control' },
  { title: { en: 'AI Load', zh: 'AI 负载' }, meta: 'GPU cluster' },
]

const sites = [
  { name: 'Enterprise AI Room', state: { en: 'Normal', zh: '正常' }, load: '840 kW', tone: 'online' },
  { name: 'Campus Compute', state: { en: 'Optimizing', zh: '优化中' }, load: '1.36 MW', tone: 'online' },
  { name: 'Edge Node 04', state: { en: 'Monitoring', zh: '监测中' }, load: '420 kW', tone: 'watch' },
]

const events = [
  { time: '14:20', text: { en: 'Storage dispatch window prepared', zh: '储能调度窗口已准备' } },
  { time: '14:35', text: { en: 'Peak demand threshold protected', zh: '峰值需量阈值已保护' } },
  { time: '15:10', text: { en: 'Compute load shifted to lower-cost interval', zh: '算力负载转入低成本时段' } },
]
</script>

<template>
  <div class="dashboard">
    <div class="dashboard-bar">
      <div><span class="status-dot" /> BAAS PowerFlex OS</div>
      <span>{{ t({ en: 'Energy operations console', zh: '能源运营控制台' }) }}</span>
    </div>

    <div class="dashboard-kpis">
      <section v-for="item in kpis" :key="t(item.label)" class="dashboard-stat">
        <component :is="item.icon" :size="18" />
        <span>{{ t(item.label) }}</span>
        <strong>{{ item.value }}</strong>
        <small>{{ t(item.sub) }}</small>
      </section>
    </div>

    <div class="dashboard-grid">
      <section class="dashboard-topology">
        <div class="chart-title">
          <span>{{ t({ en: 'Site energy topology', zh: '站点能源拓扑' }) }}</span>
          <small>Live</small>
        </div>
        <div class="topology-line">
          <article v-for="node in topology" :key="t(node.title)">
            <i />
            <strong>{{ t(node.title) }}</strong>
            <span>{{ node.meta }}</span>
          </article>
        </div>
      </section>

      <section class="dashboard-chart">
        <div class="chart-title">
          <span>{{ t({ en: 'Dispatch profile', zh: '调度曲线' }) }}</span>
          <Zap :size="17" />
        </div>
        <div class="dispatch-chart">
          <svg viewBox="0 0 520 190" role="img" aria-label="Energy dispatch line chart">
            <defs>
              <linearGradient id="dispatchFill" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0%" stop-color="#4fc3c8" stop-opacity="0.34" />
                <stop offset="100%" stop-color="#4fc3c8" stop-opacity="0.02" />
              </linearGradient>
            </defs>
            <path class="grid-line" d="M0 40H520M0 95H520M0 150H520" />
            <path class="dispatch-area" d="M0 145 L48 130 L92 136 L140 104 L184 112 L232 76 L276 88 L324 58 L372 74 L420 96 L468 82 L520 68 L520 190 L0 190 Z" />
            <path class="dispatch-curve" d="M0 145 L48 130 L92 136 L140 104 L184 112 L232 76 L276 88 L324 58 L372 74 L420 96 L468 82 L520 68" />
            <path class="limit-line" d="M0 82H520" />
          </svg>
          <div class="dispatch-axis">
            <span>00:00</span>
            <span>06:00</span>
            <span>12:00</span>
            <span>18:00</span>
            <span>24:00</span>
          </div>
        </div>
      </section>

      <section class="dashboard-stack">
        <div class="chart-title">{{ t({ en: 'Capacity mix', zh: '容量组合' }) }}</div>
        <div class="capacity-row"><span>{{ t({ en: 'Grid', zh: '电网' }) }}</span><i style="--w: 72%" /></div>
        <div class="capacity-row"><span>{{ t({ en: 'Storage', zh: '储能' }) }}</span><i style="--w: 58%" /></div>
        <div class="capacity-row"><span>{{ t({ en: 'Backup', zh: '备用' }) }}</span><i style="--w: 44%" /></div>
        <div class="capacity-row"><span>{{ t({ en: 'Renewable', zh: '绿电' }) }}</span><i style="--w: 36%" /></div>
      </section>

      <section class="dashboard-sites">
        <div class="chart-title">{{ t({ en: 'Connected sites', zh: '已连接站点' }) }}</div>
        <p v-for="site in sites" :key="site.name">
          <i :class="site.tone" />
          <span>{{ site.name }}<em>{{ site.load }}</em></span>
          <strong>{{ t(site.state) }}</strong>
        </p>
      </section>

      <section class="dashboard-events">
        <div class="chart-title">{{ t({ en: 'Operations stream', zh: '运营事件流' }) }}</div>
        <p v-for="event in events" :key="event.time">
          <time>{{ event.time }}</time>
          <span>{{ t(event.text) }}</span>
        </p>
      </section>
    </div>
  </div>
</template>
