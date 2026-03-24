<template>
  <div :class="backgroundImageTheme" class="px-10 py-5 rounded-lg bg-primary-200 dark:bg-primary-950" :style="{ backgroundImage: backgroundStyle }">
    <slot />
  </div>
</template>

<script setup lang="ts">
const { image } = defineProps<{
  image?: string
}>()

const backgroundStyle = computed(() => {
  return image ? `url(${image})` : 'none'
})

const backgroundImageTheme = ref([
  {
    'bg-no-repeat bg-center bg-cover sepia-50': Boolean(image)
  }
])
</script>
