<template>
  <section id="feed" class="space-y-2">
    <header class="p-10 bg-primary-200 dark:bg-primary-950 rounded-lg">
      <nuxt-input size="xl" placeholder="Search songs, artists..." />
    </header>

    <base-title-block title="Popular Songs">
      <base-song-list>
        <base-song-list-item v-for="i in 5" :key="i" :song="song" />
      </base-song-list>
    </base-title-block>
  </section>
</template>

<script setup lang="ts">
import type { BaseSong } from '~/types'

const song: BaseSong = {
  id: '1',
  title: `Song 1`,
  duration: 240,
  coverImage: `https://via.placeholder.com/150`,
  artist: {
    id: '1',
    name: `Artist 1`,
    bio: `Bio of Artist 1`,
    coverImage: `https://via.placeholder.com/150`,
    debutYear: 2020,
    profileImage: `https://via.placeholder.com/150`
  },
  album: {
    id: '1',
    title: `Album 1`,
    coverImage: `https://via.placeholder.com/150`,
    artist: {
      id: '1',
      name: `Artist 1`,
      bio: `Bio of Artist 1`,
      coverImage: `https://via.placeholder.com/150`,
      debutYear: 2020,
      profileImage: `https://via.placeholder.com/150`
    },
    duration: 240,
    releasedAt: '2023-01-01T00:00:00Z',
    genre: 'Pop',
    songCount: 10
  }
}
</script>
