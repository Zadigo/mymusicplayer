<template>
  <section id="design" class="relative">
    <div class="grid grid-cols-12 h-screen">
      <aside class="hidden md:block p-4 col-span-3 bg-primary-50 dark:bg-primary-950 overflow-scroll scrollbar-none">
        <ul class="space-y-2">
          <li v-for="item in sidebarItems" :key="item.label" class="has-[.router-link-exact-active]:bg-primary-200 p-3 bg-primary-100 dark:bg-primary-900 rounded-lg hover:bg-primary-200 transition-all ease-in-out duration-300">
            <nuxt-link :to="item.link" class="flex items-center gap-3 font-medium">
              <icon v-if="item.icon" :name="item.icon" />
              {{ item.label }}
            </nuxt-link>
          </li>
        </ul>

        <!-- Playlist -->
        <!-- <div class="grid grid-cols-2 overflow-scroll p-5 rounded-lg mt-5 bg-primary-200 dark:bg-primary-800 gap-2">
          <h2 class="font-bold col-span-2">
            Playlists
          </h2>

          <base-playlist-card v-for="i in 4" :key="i" :index="i" text-size="text-md" />
        </div> -->
      </aside>

      <main class="col-span-12 md:col-span-9 bg-primary-100 dark:bg-primary-900 overflow-scroll">
        <slot />
      </main>

      <!-- Player -->
      <base-player />
    </div>

    <!-- Modals -->
    <lazy-nuxt-slideover v-model:open="showQueue" hydrate-on-visible>
      <template #header>
        <h2 class="text-xl font-bold">
          Queue
        </h2>
      </template>

      <template #default>
        <ul class="space-y-2">
          <li v-for="item in queue" :key="item.id" class="p-3 bg-primary-100 dark:bg-primary-900 rounded-lg hover:bg-primary-200 transition-all ease-in-out duration-300">
            {{ item.title }}
          </li>
        </ul>
      </template>
    </lazy-nuxt-slideover>
  </section>
</template>

<script setup lang="ts">
import type { Arrayable, SidebarItem } from '~/types'

const sidebarItems: Arrayable<SidebarItem> = [
  {
    label: 'Explorer',
    link: '/explorer',
    icon: 'i-lucide:compass'
  },
  {
    label: 'Search',
    link: '/search',
    icon: 'i-lucide:search'
  },
  {
    label: 'Genres',
    link: '/explorer/genres',
    icon: 'i-lucide:tag'
  },
  {
    label: 'Playlists',
    link: '/explorer/playlists',
    icon: 'i-lucide:list'
  },
  {
    label: 'Settings',
    link: '/settings',
    icon: 'i-lucide:settings'
  }
]

const showQueue = useState<boolean>('showQueue')
const { queue } = useQueueComposable()
</script>
