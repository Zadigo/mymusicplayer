<template>
  <div class="fixed bottom-0 left-0 h-auto p-5 z-40 w-full bg-primary-300/70 backdrop-blur-3xl dark:bg-primary-900 border-t border-primary-100 dark:border-primary-700">
    <div class="grid grid-cols-3 gap-5">
      <!-- Album Art -->
      <div class="p-2 w-full overflow-hidden">
        <div class="flex items-center p-2 rounded-lg hover:bg-primary-200 transition-all ease-in-out duration-300">
          <div class="h-12.5 w-12.5 rounded-lg overflow-hidden">
            <nuxt-img src="/images/album.jpg" class="aspect-square object-cover" alt="some album" />
          </div>

          <div class="text-primary-50 ml-4">
            <h3 class="font-bold">
              Album name
            </h3>

            <p>
              Artist name
            </p>
          </div>
        </div>
      </div>

      <!-- Controls -->
      <div class="space-y-5">
        <div class="flex justify-center gap-2">
          <nuxt-button>
            <icon name="i-lucide:shuffle" />
          </nuxt-button>

          <nuxt-button>
            <icon name="i-lucide:skip-back" />
          </nuxt-button>

          <nuxt-button>
            <icon name="i-lucide:play" />
          </nuxt-button>

          <nuxt-button>
            <icon name="i-lucide:skip-forward" />
          </nuxt-button>
        </div>

        <nuxt-slider :min="0" :max="100" :step="1" />
      </div>

      <!-- Other Controls -->
      <div class="flex">
        <div class="flex justify-center gap-2">
          <nuxt-button @click="() => { toggleShowQueue() }">
            <icon name="i-lucide:list" />
          </nuxt-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const showQueue = useState<boolean>('showQueue')
const toggleShowQueue = useToggle(showQueue)
</script>
