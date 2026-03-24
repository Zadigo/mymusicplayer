<template>
  <section id="settings" class="my-20">
    <nuxt-container>
      <div class="max-w-2xl mx-auto space-y-6">
        <base-settings-block>
          <template #title>
            Favorite Genres
          </template>

          <template #description>
            Add or remove your favorite music genres to help us tailor your listening experience.
          </template>

          <template #default>
            <div class="flex gap-2 mt-5 my-5">
              <nuxt-select :items="genres" class="w-full" />
              <nuxt-button>
                <icon name="lucide-plus" />
              </nuxt-button>
            </div>

            <div>
              <div class="p-2 rounded-lg bg-primary-200 flex justify-between items-center">
                <div class="flex items-center gap-2">
                  <span>Rap</span>
                  <nuxt-select :items="['Rap Français', 'Rap US']" class="min-w-10" />
                </div>
                <nuxt-button variant="soft">
                  <icon name="lucide-x" />
                </nuxt-button>
              </div>
            </div>
          </template>
        </base-settings-block>
      </div>
    </nuxt-container>
  </section>
</template>

<script lang="ts" setup>
import { genres } from '~/data'

definePageMeta({
  label: 'Algorithm',
  layout: 'settings'
})

/**
 * SEO Metadata
 */

useSeoMeta({
  title: 'Algorithm Settings',
  description: 'Manage your algorithm settings and preferences.'
})
</script>
