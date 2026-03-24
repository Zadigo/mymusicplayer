<template>
  <nuxt-card class="bg-primary-50 ring-primary-200">
    <h2 class="text-3xl font-bold">
      <slot name="title" />
    </h2>

    <p>
      <slot name="description" />
    </p>

    <slot />
  </nuxt-card>
</template>
