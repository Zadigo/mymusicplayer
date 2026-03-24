<template>
  <section id="settings" class="my-20">
    <nuxt-container>
      <div class="max-w-2xl mx-auto space-y-6">
        <nuxt-card class="bg-primary-50 ring-primary-200">
          <form class="space-y-2">
            <h2 class="font-bold text-2xl mb-4">
              Profile
            </h2>

            <div class="flex justify-between gap-2">
              <nuxt-input type="text" class="w-full" autocomplete="given-name" placeholder="Firstname" />
              <nuxt-input type="text" class="w-full" autocomplete="family-name" placeholder="Lastname" />
              <nuxt-input type="text" class="w-full" autocomplete="username" placeholder="Username" />
            </div>

            <div class="flex justify-start gap-2">
              <nuxt-input type="email" class="w-100" autocomplete="email" placeholder="Email" />
              <nuxt-input type="tel" autocomplete="tel" placeholder="Phone Number" />
            </div>
          </form>
        </nuxt-card>

        <nuxt-card class="bg-primary-50 ring-primary-200">
          <form class="space-y-2">
            <h2 class="font-bold text-2xl mb-4">
              Address
            </h2>

            <nuxt-input type="text" class="w-full" autocomplete="address-line1" placeholder="Address Line" />

            <div class="flex justify-around gap-2">
              <nuxt-input type="text" class="w-full" autocomplete="postal-code" placeholder="Zip Code" />
              <nuxt-input type="text" class="w-full" autocomplete="address-level2" placeholder="City" />
              <nuxt-input type="text" class="w-full" autocomplete="country" placeholder="Country" />
            </div>
          </form>
        </nuxt-card>

        <nuxt-card class="bg-primary-50 ring-primary-200">
          <nuxt-button variant="solid" color="error">
            Delete Account
          </nuxt-button>
        </nuxt-card>
      </div>
    </nuxt-container>
  </section>
</template>

<script lang="ts" setup>
definePageMeta({
  label: 'Settings',
  layout: 'settings'
})

/**
 * SEO Metadata
 */

useSeoMeta({
  title: 'Profile',
  description: 'Manage your profile settings and preferences.'
})
</script>
