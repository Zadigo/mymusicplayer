<template>
  <nuxt-context-menu :items="items">
    <div ref="playlistEl" class="relative bg-primary-50 dark:bg-primary-900 p-2 rounded-lg">
      <nuxt-link :to="`/playlists/${playlist.id}`" class="block">
        <nuxt-img :src="playlist.coverImage" class="w-full rounded-lg aspect-square object-cover min-h-96" height="100%" width="100%" alt="Dancing" />
      </nuxt-link>

      <div id="actions" class="absolute bottom-5 left-5 text-primary-50">
        <p :class="`${textSize} font-bold mt-2 mb-1`">
          {{ playlist.name }}
        </p>

        <p class="text-sm mb-3">
          {{ playlist.songCount }} Songs • {{ Math.floor(playlist.duration / 60) }} mins
        </p>

        <nuxt-button @click="async () => await addPlaylist('1234')">
          <icon name="lucide-circle-plus" />
        </nuxt-button>
      </div>
    </div>
  </nuxt-context-menu>
</template>

<script setup lang="ts">
import type { BasePlaylist } from '~/types'

const { playlist, textSize = 'text-3xl' } = defineProps<{
  playlist: BasePlaylist
  textSize?: string
}>()

/**
 * Hover State
 */

const playlistEl = useTemplateRef('playlistEl')
// const isHovered = useElementHover(playlistEl)

/**
 * Queue State
 */

const { addPlaylist } = useQueueComposable()

/**
 * Context Menu Items
 */

const { items } = useContextMenuActionsComposable()
</script>
