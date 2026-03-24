<template>
  <base-title-block :title="title" :show-see-all="showSeeAll">
    <div class="overflow-hidden overflow-x-scroll scrollbar-none p-5 rounded-lg inset-shadow-xl border-primary-100">
      <div class="inline-flex gap-2">
        <slot />
      </div>
    </div>
  </base-title-block>
</template>

<script lang="ts" setup>
defineProps<{
  title: string
  showSeeAll?: boolean
}>()
</script>
