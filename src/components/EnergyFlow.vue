<script setup>
import { layers } from '../data/siteContent'
import { useLanguage } from '../composables/useLanguage'

const { t } = useLanguage()
</script>

<template>
  <div class="energy-flow">
    <article v-for="layer in layers" :key="layer.number">
      <span>{{ layer.number }}</span>
      <div>
        <h3>{{ t(layer.title) }}</h3>
        <p>{{ t(layer.body) }}</p>
      </div>
    </article>
  </div>
</template>
