<script setup>
import { ArrowDownRight } from '@lucide/vue'
import { assetPath } from '../utils/assets'

defineProps({
  eyebrow: String,
  title: String,
  body: String,
  image: String,
  imageAlt: String,
  compact: Boolean,
})
</script>

<template>
  <section :class="['page-hero', { compact }]">
    <img :src="assetPath(image)" :alt="imageAlt || title" fetchpriority="high" />
    <div class="page-hero-shade" />
    <div class="page-hero-content">
      <p class="eyebrow light">{{ eyebrow }}</p>
      <h1>{{ title }}</h1>
      <p>{{ body }}</p>
      <ArrowDownRight class="page-hero-arrow" :size="28" />
    </div>
  </section>
</template>
