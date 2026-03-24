<template>
  <base-simple-block>
    <div class="flex items-center justify-between mb-5">
      <h2 class="text-2xl md:text-4xl font-bold text-primary-50">
        {{ title }}
      </h2>

      <nuxt-button v-if="showSeeAll" variant="subtle">
        See all
        <icon name="lucide-chevron-right" />
      </nuxt-button>
    </div>

    <slot />
  </base-simple-block>
</template>

<script setup lang="ts">
const { title, showSeeAll = true } = defineProps<{
  title: string
  showSeeAll?: boolean
}>()
</script>
