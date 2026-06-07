<script setup>
defineProps({
  eyebrow: String,
  title: String,
  body: String,
  light: Boolean,
  align: { type: String, default: 'left' },
})
</script>

<template>
  <div :class="['section-intro', `align-${align}`, { light }]">
    <p v-if="eyebrow" class="eyebrow">{{ eyebrow }}</p>
    <h2>{{ title }}</h2>
    <p v-if="body" class="section-copy">{{ body }}</p>
  </div>
</template>
