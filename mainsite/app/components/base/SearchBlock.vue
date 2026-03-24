<template>
  <div class="p-10 rounded-lg bg-primary-500 dark:bg-primary-950">
    <div class="flex justify-between items-center mb-10">
      <nuxt-input v-model="search" size="xl" placeholder="Search songs..." />
    </div>

    <slot :searched="searched" />
  </div>
</template>

<script setup lang="ts">
const { requestPath, passiveSearch = true } = defineProps<{
  requestPath?: string
  passiveSearch?: boolean
}>()

const search = ref<string>('')
const searched = ref<Record<string, unknown>[]>([])

if (requestPath && !passiveSearch) {
  // Fetch the results on the given path
} else {
  // Search within the data provided in the slot
}
</script>
