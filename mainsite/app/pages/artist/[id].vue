<template>
  <section id="artist">
    <!-- Jumbotron -->
    <base-jumbotron image="/images/dancing-banner.jpg">
      <template #default>
        <h1 class="text-7xl font-bold text-primary-50 mb-2">
          Mariah Carey
        </h1>

        <div class="flex gap-2 text-sm text-primary-50 mb-5">
          <nuxt-badge>
            Pop, R&B, Soul
          </nuxt-badge>

          <span>•</span>

          <p>
            USA • Active since 1990
          </p>
        </div>

        <div class="grid grid-cols-3">
          <div class="font-bold text-3xl flex flex-col">
            <span>12.5M</span>
            <span class="text-sm font-light">Followers</span>
          </div>

          <div class="font-bold text-3xl flex flex-col">
            <span>12.5M</span>
            <span class="text-sm font-light">Monthly Listeners</span>
          </div>

          <div class="font-bold text-3xl flex flex-col">
            <span>11.5M</span>
            <span class="text-sm font-light">Likes</span>
          </div>
        </div>
      </template>
    </base-jumbotron>

    <nuxt-container class="my-20 space-y-2">
      <div class="p-5 bg-primary-700 rounded-lg shadow-sm flex gap-2">
        <base-play-button variant="solid" :is-playing="false" />

        <nuxt-button>
          <icon name="lucide-skip-back" />
        </nuxt-button>

        <nuxt-button>
          <icon name="lucide-skip-forward" />
        </nuxt-button>
      </div>

      <base-title-block :show-see-all="false" title="Popular Songs">
        <base-song-list>
          <base-song-list-item v-for="song in songs" :key="song.id" :song="song" />
        </base-song-list>
      </base-title-block>

      <!-- Albums -->
      <base-scrollable-block :show-see-all="false" title="Albums">
        <base-playlist-card v-for="album in albums" :key="album.id" :playlist="album" class="min-w-100" />
      </base-scrollable-block>

      <!-- Presentation -->
      <base-simple-block :image="'/images/album.jpg'">
        <div class="text-primary-50">
          <h2 class="text-7xl font-bold">
            Mariah Carey
          </h2>

          <p>
            Mariah Carey is an American singer, songwriter, actress, and record producer.
            She is known for her five-octave vocal range, melismatic singing style, and signature use of
            the whistle register. Carey rose to fame in 1990 with her eponymous debut album, which produced four
            number-one singles on the Billboard Hot 100 chart.
          </p>

          <p>
            She has sold more than 200 million records worldwide, making her one of the best-selling
            music artists of all time.
          </p>

          <nuxt-button>
            <icon name="i-fa7-brands:instagram" />
          </nuxt-button>
          <nuxt-button>
            <icon name="i-fa7-brands:tiktok" />
          </nuxt-button>
          <nuxt-button>
            <icon name="i-fa7-brands:facebook" />
          </nuxt-button>
        </div>
      </base-simple-block>
    </nuxt-container>
  </section>
</template>

<script setup lang="ts">
import { usePlaylistFixture, useSongFixture } from '~/composables/fixtures'

definePageMeta({
  label: 'Artist',
  layout: 'design'
})

const albums = await usePlaylistFixture(10, { simulateFetch: true, delay: 3000 })
const songs = await useSongFixture(5, { simulateFetch: true, delay: 3000 })
</script>
