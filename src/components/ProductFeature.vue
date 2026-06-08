<script setup>
import { ArrowUpRight } from '@lucide/vue'
import { useLanguage } from '../composables/useLanguage'
import { assetPath } from '../utils/assets'

defineProps({ product: Object, reverse: Boolean })
const { t } = useLanguage()
</script>

<template>
  <article :class="['product-feature', { reverse }]">
    <div class="product-feature-media">
      <img :src="assetPath(product.image)" :alt="product.name" loading="lazy" />
      <span>{{ product.eyebrow ? t(product.eyebrow) : product.name }}</span>
    </div>
    <div class="product-feature-copy">
      <p class="eyebrow">{{ product.name }}</p>
      <h3>{{ t(product.title) }}</h3>
      <p>{{ t(product.summary) }}</p>
      <RouterLink :to="`/products/${product.slug}`">
        {{ t({ en: 'View product', zh: '查看产品' }) }}
        <ArrowUpRight :size="18" />
      </RouterLink>
    </div>
  </article>
</template>
