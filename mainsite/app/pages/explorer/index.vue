<template>
  <section id="explorer" class="p-10 space-y-5 max-w-5xl mx-auto">
    <!-- Header -->
    <header class="flex gap-2">
      <div class="overflow-x-scroll md:overflow-auto bg-primary-200 rounded-lg p-5 flex justify-start">
        <nuxt-navigation-menu :items="items" />
      </div>

      <!-- <div class="flex justify-center bg-primary-200 rounded-lg p-5 gap-2 w-full">
        <nuxt-button variant="subtle" size="xl">
          <icon name="lucide-music" />
          Albums
        </nuxt-button>

        <nuxt-button variant="subtle" size="xl">
          <icon name="lucide-music" />
          Songs
        </nuxt-button>
      </div> -->
    </header>

    <!-- Content -->
    <component :is="displayComponent" />
  </section>
</template>

<script lang="ts" setup>
import type { NavigationMenuItem } from '@nuxt/ui'
import type { Arrayable, CustomUrlParams, ExplorerViews } from '~/types'

definePageMeta({
  label: 'Explorer',
  layout: 'design'
})

/**
 * Navigation Menu Items
 */

const currentExplorerView = ref<ExplorerViews>('FeedView')
const displayComponent = computed(() => {
  switch (currentExplorerView.value) {
    case 'FeedView':
      return resolveComponent('ExplorerFeedView')
    case 'LocationView':
      return resolveComponent('ExplorerLocationView')
    case 'ChartsView':
      return resolveComponent('ExplorerChartsView')
    case 'NewReleasesView':
      return resolveComponent('ExplorerNewReleasesView')
    case 'DiscoverView':
      return resolveComponent('ExplorerDiscoverView')
    default:
      return resolveComponent('ExplorerFeedView')
  }
})

const query = useUrlSearchParams<CustomUrlParams>()
watch(currentExplorerView, (newView) => {
  query.view = newView
})

const items = computed<Arrayable<NavigationMenuItem>>(() => [
  {
    label: 'Feed',
    icon: 'i-lucide:home',
    active: currentExplorerView.value === 'FeedView',
    onSelect: () => {
      currentExplorerView.value = 'FeedView'
    }
  },
  {
    label: 'North of France',
    icon: 'i-lucide:map-pin',
    active: currentExplorerView.value === 'LocationView',
    onSelect: () => {
      currentExplorerView.value = 'LocationView'
    }
  },
  {
    label: 'Charts',
    icon: 'i-lucide:bar-chart-2',
    active: currentExplorerView.value === 'ChartsView',
    onSelect: () => {
      currentExplorerView.value = 'ChartsView'
    }
  },
  {
    label: 'New Releases',
    icon: 'i-lucide:gift',
    active: currentExplorerView.value === 'NewReleasesView',
    onSelect: () => {
      currentExplorerView.value = 'NewReleasesView'
    }
  },
  {
    label: 'Discover',
    icon: 'i-lucide:compass',
    active: currentExplorerView.value === 'DiscoverView',
    onSelect: () => {
      currentExplorerView.value = 'DiscoverView'
    }
  }
])

/**
 * SEO
 */

useSeoMeta({
  title: 'Explorer - MyMusic',
  description: 'Discover new music and explore your favorite songs, albums, and artists on MyMusic.'
})
</script>
