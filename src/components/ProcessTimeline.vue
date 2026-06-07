<script setup>
import { process } from '../data/siteContent'
import { useLanguage } from '../composables/useLanguage'

const { t } = useLanguage()
</script>

<template>
  <div class="process-timeline">
    <article v-for="item in process" :key="item.number">
      <span>{{ item.number }}</span>
      <h3>{{ t(item.title) }}</h3>
      <p>{{ t(item.body) }}</p>
    </article>
  </div>
</template>
