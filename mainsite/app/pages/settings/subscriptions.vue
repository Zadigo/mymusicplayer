<template>
  <section id="settings" class="my-20">
    <nuxt-container>
      <div class="max-w-2xl mx-auto space-y-6">
        <div class="grid grid-cols-4 text-center gap-2">
          <nuxt-card>
            <span class="font-bold">Free</span>
            <div class="text-4xl p-5">
              <sup class="font-features sups">$</sup>
              0
            </div>
          </nuxt-card>

          <nuxt-card>
            <span class="font-bold">Premium</span>
            <div class="text-4xl p-5">
              <sup class="font-features sups">$</sup>
              5
            </div>
          </nuxt-card>

          <nuxt-card>
            <span class="font-bold">Family</span>
            <div class="text-4xl p-5">
              <sup class="font-features sups">$</sup>
              10
            </div>
          </nuxt-card>

          <nuxt-card>
            <span class="font-bold">DJ</span>
            <div class="text-4xl p-5">
              <sup class="font-features sups">$</sup>
              50
            </div>
          </nuxt-card>
        </div>

        <base-settings-block>
          <template #title>
            Current Plan
          </template>

          <template #description>
            You are currently on the <strong>Free</strong> plan. Upgrade to enjoy ad-free music, offline listening, and high-quality audio.
          </template>

          <template #default>
            <nuxt-button class="mt-4" color="primary" variant="solid">
              Upgrade Plan
            </nuxt-button>
          </template>
        </base-settings-block>

        <base-settings-block>
          <template #title>
            Payment Methods
          </template>

          <template #description>
            Manage your payment methods for seamless subscription renewals.
          </template>

          <template #default>
            <nuxt-button class="mt-4" color="secondary" variant="outline">
              Manage Payment Methods
            </nuxt-button>
          </template>
        </base-settings-block>

        <base-settings-block>
          <template #title>
            Billing History
          </template>

          <template #description>
            View and download your past invoices and payment history.
          </template>

          <template #default>
            <nuxt-button class="mt-4" color="secondary" variant="outline">
              View Billing History
            </nuxt-button>
          </template>
        </base-settings-block>
      </div>
    </nuxt-container>
  </section>
</template>

<script lang="ts" setup>
definePageMeta({
  label: 'Settings Subscriptions',
  layout: 'settings'
})
</script>
