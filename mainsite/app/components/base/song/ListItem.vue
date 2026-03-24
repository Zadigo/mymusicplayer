<template>
  <div class="p-5 last:rounded-bl-lg last:rounded-br-lg first:rounded-tl-lg first:rounded-tr-lg not-last:border-b not-last:dark:border-primary-800 bg-primary-50 dark:bg-primary-900 flex items-center justify-between">
    <div class="flex gap-2 items-center">
      <!-- Other Information -->
      <nuxt-popover>
        <nuxt-avatar src="/images/dancing-sm-1.jpg" alt="Mariah Carey" />

        <template #content>
          <div class="p-4">
            <p class="font-bold mb-2">
              Mariah Carey
            </p>

            <p class="text-sm text-primary-300">
              Additional information about the artist can go here.
            </p>
          </div>
        </template>
      </nuxt-popover>

      <!-- Content -->
      <div class="text-sm">
        <p class="font-bold">
          All I Want for Christmas Is You
        </p>

        <div class="flex">
          <nuxt-link v-for="i in 3" :key="i" to="/artist/12345" class="hover:underline">
            Mariah Carey<span v-if="i < 3" class="me-1">, </span>
          </nuxt-link>
        </div>
      </div>
    </div>

    <!-- Actions -->
    <div id="actions" class="flex gap-2">
      <base-play-button :is-playing="false" />

      <nuxt-dropdown-menu :items="items">
        <nuxt-button variant="subtle">
          <icon name="lucide-ellipsis-vertical" />
        </nuxt-button>
      </nuxt-dropdown-menu>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { BaseSong } from '~/types'

defineProps<{
  song: BaseSong
}>()

const { items } = useSongMenuActionsComposable()
</script>
