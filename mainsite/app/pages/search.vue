<template>
  <base-page-container id="search">
    <header class="w-full h-autop-10 bg-primary-300 p-5 rounded-lg flex items-center justify-start">
      <nuxt-input class="w-90" placeholder="Search albums, artists, songs..." />
    </header>

    <base-scrollable-block title="Recent Artist Searches" :show-see-all="false">
      <base-playlist-card v-for="(playlist, i) in featuredPlaylists" :key="playlist.id" :index="i" :playlist="playlist" class="min-w-100" text-size="text-md md:text-3xl" />
    </base-scrollable-block>

    <base-scrollable-block title="Recent Album Searches" :show-see-all="false">
      <base-playlist-card v-for="(playlist, i) in featuredPlaylists" :key="playlist.id" :index="i" :playlist="playlist" class="min-w-100" text-size="text-md md:text-3xl" />
    </base-scrollable-block>
  </base-page-container>
</template>

<script lang="ts" setup>
import { usePlaylistFixture } from '~/data/__fixtures__'

definePageMeta({
  layout: 'design'
})

const featuredPlaylists = await usePlaylistFixture(10)
</script>
