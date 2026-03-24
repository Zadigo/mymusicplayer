<template>
  <section :id="id" class="p-10 space-y-5 max-w-5xl mx-auto mb-10">
    <slot />
  </section>
</template>

<script lang="ts" setup>
defineProps<{
  id: string
}>()
</script>
