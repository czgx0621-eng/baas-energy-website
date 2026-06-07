<script setup>
import { reactive, ref } from 'vue'
import { ArrowRight, CheckCircle2, Mail } from '@lucide/vue'
import PageHero from '../components/PageHero.vue'
import { contact, products } from '../data/siteContent'
import { useLanguage } from '../composables/useLanguage'

const { t } = useLanguage()
const submitted = ref(false)
const form = reactive({
  name: '',
  company: '',
  email: '',
  region: '',
  siteType: '',
  capacity: '',
  gpuPlan: '',
  challenge: '',
  partnership: '',
  message: '',
})

function submit() {
  submitted.value = true
}
</script>

<template>
  <PageHero
    compact
    :eyebrow="t({ en: 'Contact / Pilot', zh: '联系 / 试点' })"
    :title="t(contact.title)"
    :body="t(contact.body)"
    image="/images/photos/edge-inference.png"
  />

  <section class="contact-layout section-pad">
    <aside>
      <p class="eyebrow">{{ t({ en: 'Start the conversation', zh: '开始沟通' }) }}</p>
      <h2>{{ t({ en: 'Tell us what your site needs to power.', zh: '告诉我们您的站点需要怎样的能源能力。' }) }}</h2>
      <p>{{ t(contact.body) }}</p>
      <div class="contact-notes">
        <span><CheckCircle2 :size="18" /> {{ t({ en: 'Site assessment', zh: '站点评估' }) }}</span>
        <span><CheckCircle2 :size="18" /> {{ t({ en: 'Product configuration', zh: '产品配置' }) }}</span>
        <span><CheckCircle2 :size="18" /> {{ t({ en: 'Partner integration', zh: '伙伴集成' }) }}</span>
      </div>
      <div class="contact-email"><Mail :size="18" /> {{ t({ en: 'Site assessment and partnership inquiries', zh: '站点评估与合作咨询' }) }}</div>
    </aside>

    <form v-if="!submitted" @submit.prevent="submit">
      <label><span>{{ t({ en: 'Name', zh: '姓名' }) }}</span><input v-model="form.name" required /></label>
      <label><span>{{ t({ en: 'Company', zh: '公司' }) }}</span><input v-model="form.company" required /></label>
      <label><span>{{ t({ en: 'Email', zh: '邮箱' }) }}</span><input v-model="form.email" required type="email" /></label>
      <label><span>{{ t({ en: 'Region', zh: '所在地区' }) }}</span><input v-model="form.region" required /></label>
      <label><span>{{ t({ en: 'Site type', zh: '站点类型' }) }}</span><input v-model="form.siteType" required /></label>
      <label><span>{{ t({ en: 'Current or planned power capacity', zh: '当前或计划功率容量' }) }}</span><input v-model="form.capacity" required /></label>
      <label><span>{{ t({ en: 'GPU deployment plan', zh: 'GPU 部署计划' }) }}</span><input v-model="form.gpuPlan" required /></label>
      <label>
        <span>{{ t({ en: 'Main energy challenge', zh: '主要能源挑战' }) }}</span>
        <select v-model="form.challenge" required>
          <option value="" disabled>{{ t({ en: 'Select a challenge', zh: '请选择' }) }}</option>
          <option v-for="item in contact.challenges" :key="t(item)" :value="t(item)">{{ t(item) }}</option>
        </select>
      </label>
      <label class="full">
        <span>{{ t({ en: 'Partnership type', zh: '合作类型' }) }}</span>
        <select v-model="form.partnership" required>
          <option value="" disabled>{{ t({ en: 'Select an option', zh: '请选择' }) }}</option>
          <option v-for="product in products" :key="product.slug" :value="product.name">{{ product.name }}</option>
          <option value="Partner integration">{{ t({ en: 'Partner integration', zh: '伙伴集成' }) }}</option>
        </select>
      </label>
      <label class="full"><span>{{ t({ en: 'Message', zh: '留言' }) }}</span><textarea v-model="form.message" required /></label>
      <button type="submit">{{ t({ en: 'Submit site assessment', zh: '提交站点评估' }) }} <ArrowRight :size="18" /></button>
    </form>
    <div v-else class="form-success">
      <CheckCircle2 :size="42" />
      <h2>{{ t({ en: 'Thank you. Your assessment request is ready for review.', zh: '感谢提交。您的评估需求已准备好等待审核。' }) }}</h2>
      <p>{{ t({ en: 'This prototype form does not transmit data to a backend.', zh: '此原型表单暂未向后端传输数据。' }) }}</p>
      <button type="button" @click="submitted = false">{{ t({ en: 'Submit another request', zh: '提交另一份需求' }) }}</button>
    </div>
  </section>
</template>
