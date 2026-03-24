<template>
  <section id="genres" class="px-10">
    <div class="grid grid-cols-3 gap-2 my-20">
      <nuxt-card v-for="genre in genres" :key="genre" class="bg-primary-200 ring-primary-50 dark:bg-primary-900">
        <nuxt-link :to="`/explorer?genre=${genre}`">
          <nuxt-img src="/images/dancing-banner.jpg" class="rounded-lg shadow-sm" alt="Genre" />
        </nuxt-link>

        <h2 class="font-bold text-3xl mb-5">
          {{ genre }}
        </h2>

        <p class="text-primary-700 dark:text-primary-300">
          Explore music by genres. Discover new tracks and artists across various styles and moods.
        </p>
      </nuxt-card>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { genres } from '~/data'

definePageMeta({
  label: 'Explorer Genres',
  layout: 'design'
})

preloadRouteComponents('/explorer')
</script>
