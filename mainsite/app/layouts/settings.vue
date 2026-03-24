<template>
  <section id="design">
    <div class="grid grid-cols-12 h-screen">
      <aside class="p-4 col-span-3 bg-primary-50 dark:bg-primary-950 overflow-scroll scrollbar-none">
        <ul class="space-y-2">
          <li v-for="item in sidebarItems" :key="item.label" class="has-[.router-link-exact-active]:bg-primary-200 p-3 bg-primary-100 dark:bg-primary-900 rounded-lg hover:bg-primary-200 transition-all ease-in-out duration-300">
            <nuxt-link :to="item.link" class="flex items-center gap-3 font-medium">
              <icon v-if="item.icon" :name="item.icon" />
              {{ item.label }}
            </nuxt-link>
          </li>
        </ul>
      </aside>

      <main class="col-span-9 bg-primary-100 dark:bg-primary-900 overflow-scroll">
        <slot />
      </main>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { Arrayable, SidebarItem } from '~/types'

const sidebarItems: Arrayable<SidebarItem> = [
  {
    label: 'Explorer',
    link: '/explorer',
    icon: 'i-lucide:arrow-left'
  },
  {
    label: 'Home',
    link: '/settings',
    icon: 'i-lucide:home'
  },
  {
    label: 'Algorithm',
    link: '/settings/algorithm',
    icon: 'i-lucide:cpu'
  },
  {
    label: 'Subscriptions',
    link: '/settings/subscriptions',
    icon: 'i-lucide:credit-card'
  }
]
</script>
