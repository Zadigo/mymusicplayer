<template>
  <section id="playlist">
    <base-jumbotron image="/images/dancing-banner-2.jpg">
      <template #default>
        <h1 v-if="playlist" class="text-7xl font-bold text-primary-100 mb-2">
          {{ playlist.name }}
        </h1>

        <div class="flex gap-2 text-sm text-primary-100 mb-5">
          <nuxt-badge class="text-primary-100">
            Pop, R&B, Soul
          </nuxt-badge>

          <span>•</span>

          <p>
            12.5M Monthly Listeners
          </p>
        </div>

        <div class="p-5 bg-primary-700/40 backdrop-blur-2xl rounded-lg shadow-sm flex gap-2">
          <base-play-button variant="solid" :is-playing="false" />

          <nuxt-button>
            <icon name="lucide-skip-back" />
          </nuxt-button>

          <nuxt-button>
            <icon name="lucide-skip-forward" />
          </nuxt-button>
        </div>
      </template>
    </base-jumbotron>

    <nuxt-container class="mt-20 mb-40 space-y-2">
      <base-search-block>
        <template #default="{ searched }">
          <p class="text-primary-50">
            {{ searched }}
          </p>

          <base-song-list>
            <base-song-list-item v-for="i in 5" :key="i" :song="song" />
          </base-song-list>
        </template>
      </base-search-block>
    </nuxt-container>
  </section>
</template>

<script setup lang="ts">
import { usePlaylistFixture } from '~/composables/fixtures'
import type { BaseSong } from '~/types'

definePageMeta({
  label: 'Playlist',
  layout: 'design'
})

/**
 * Playlist
 */

const items = await usePlaylistFixture(1, { simulateFetch: true })
const playlist = items[0]

const song: BaseSong = {
  id: '1',
  title: 'Blinding Lights',
  coverImage: '/images/song-covers/blinding-lights.jpg',
  artist: {
    id: '1',
    name: 'The Weeknd',
    bio: 'Abel Makkonen Tesfaye, known professionally as the Weeknd, is a Canadian singer, songwriter, and record producer. He is known for his distinctive voice and eclectic musical style, which incorporates elements of R&B, pop, and hip-hop. The Weeknd has released several successful albums and singles, earning critical acclaim and commercial success worldwide.',
    profileImage: '/images/artists/the-weeknd.jpg',
    coverImage: '/images/artists/the-weeknd-cover.jpg',
    debutYear: 2010
  },
  album: {
    id: '1',
    title: 'After Hours',
    coverImage: '/images/album-covers/after-hours.jpg',
    duration: 200,
    genre: 'Hip-Hop',
    releasedAt: '2020-03-20',
    songCount: 14,
    artist: {
      id: '1',
      name: 'The Weeknd',
      bio: 'Abel Makkonen Tesfaye, known professionally as the Weeknd, is a Canadian singer, songwriter, and record producer. He is known for his distinctive voice and eclectic musical style, which incorporates elements of R&B, pop, and hip-hop. The Weeknd has released several successful albums and singles, earning critical acclaim and commercial success worldwide.',
      profileImage: '/images/artists/the-weeknd.jpg',
      coverImage: '/images/artists/the-weeknd-cover.jpg',
      debutYear: 2010
    }
  },
  duration: 200
}
</script>
