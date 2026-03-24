<template>
  <nuxt-button v-if="isPlaying" :variant="variant" :size="size">
    <icon name="lucide-pause" />
  </nuxt-button>

  <nuxt-button v-else :variant="variant">
    <icon name="lucide-play" />
  </nuxt-button>
</template>

<script lang="ts" setup>
import type { ButtonProps } from '@nuxt/ui'

const { isPlaying, variant = 'solid', size = 'md' } = defineProps<{
  isPlaying: boolean
  variant?: ButtonProps['variant']
  size?: ButtonProps['size']
}>()
</script>
