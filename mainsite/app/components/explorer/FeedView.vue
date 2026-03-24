<template>
  <section id="feed">
    <nuxt-card v-for="i in 200" :key="i" class="group relative mb-5 bg-primary-50 dark:bg-primary-800 not-dark:ring-primary-100">
      <div class="overflow-hidden w-full h-full rounded-lg">
        <nuxt-img src="/images/album.jpg" class="group-hover:grayscale-25 group-hover:scale-105 transition-all ease-in-out duration-500 aspect-square w-full object-cover grayscale-50" alt="Album cover" height="100%" width="100%" />
      </div>

      <div class="absolute bottom-10 left-1/2 transform -translate-x-1/2 bg-primary-300/30 backdrop-blur-2xl rounded-lg w-[80%] md:w-[35%] mx-auto">
        <div class="flex-col items-center p-5 gap-5 space-y-3">
          <div class="flex items-center">
            <nuxt-avatar src="/images/dancing-sm-1.jpg" alt="User ABC" />
            <span class="ml-3 text-primary-100">User ABC</span>
          </div>

          <div class="flex flex-col md:flex-row gap-8 justify-start items-center">
            <div class="space-x-2">
              <base-play-button :is-playing="false" size="xl" />
              <base-play-button :is-playing="false" size="xl" />
            </div>

            <div>
              <h1 class="text-md md:text-3xl font-semibold text-primary-100">
                <nuxt-link to="/artist/1234" class="hover:underline">
                  Mariah Carey
                </nuxt-link>
              </h1>
              <p class="text-sm text-primary-50 font-thin">
                Song name or album name
              </p>
            </div>
          </div>
        </div>
      </div>
    </nuxt-card>
  </section>
</template>
