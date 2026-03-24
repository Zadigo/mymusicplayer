<template>
  <nuxt-container>
    <section id="explorer-playlists" class="my-20 space-y-4">
      <base-scrollable-block title="Featured Playlists">
        <base-playlist-card v-for="(playlist, i) in featuredPlaylists" :key="playlist.id" :index="i" :playlist="playlist" class="min-w-100" text-size="text-md md:text-3xl" />
      </base-scrollable-block>

      <base-scrollable-block title="Top Charts">
        <base-playlist-card v-for="(playlist, i) in topChartsPlaylists" :key="playlist.id" :index="i" :playlist="playlist" class="min-w-100" text-size="text-md md:text-3xl" />
      </base-scrollable-block>

      <base-scrollable-block title="Made for you">
        <base-playlist-card v-for="(playlist, i) in madeForYouPlaylists" :key="playlist.id" :index="i" :playlist="playlist" class="min-w-100" text-size="text-md md:text-3xl" />
      </base-scrollable-block>
    </section>
  </nuxt-container>
</template>

<script lang="ts" setup>
import { usePlaylistFixture } from '~/data/__fixtures__'

definePageMeta({
  label: 'Explorer Playlists',
  layout: 'design'
})

const featuredPlaylists = await usePlaylistFixture(10)
const topChartsPlaylists = await usePlaylistFixture(20)
const madeForYouPlaylists = await usePlaylistFixture(2)

/**
 * SEO Meta Data
 */

useSeoMeta({
  title: 'Explorer Playlists',
  titleTemplate: '%s - MusicApp',
  description: 'Discover curated playlists tailored to your taste.'
})
</script>
