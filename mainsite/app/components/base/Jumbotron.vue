<template>
  <header :style="{ backgroundImage: `url(${image})` }" class="relative h-[40vh] xl:h-[70vh] text-primary-50 bg-no-repeat bg-center">
    <div class="w-full h-full bg-linear-to-b from-primary-100/50 via-primary-500/50 to-primary-900" />

    <div class="absolute top-1/2 transform -translate-y-20 left-10 z-40">
      <slot />
    </div>
  </header>
</template>

<script setup lang="ts">
const { image } = defineProps<{
  image: string
}>()
</script>
