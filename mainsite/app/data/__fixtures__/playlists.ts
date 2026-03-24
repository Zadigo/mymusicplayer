import { faker } from '@faker-js/faker'
import type { BasePlaylist } from '~/types/graphql'

export function usePlaylistFixture(quantity: number = 1, options: { simulateFetch?: boolean, delay?: number, userCreated?: boolean } = { simulateFetch: false, delay: 500, userCreated: false }) {
  const _items = Array.from({ length: quantity }, (_, i) => {
    return {
      id: faker.string.uuid(),
      name: `Playlist ${i + 1}`,
      description: `This is the description for Playlist ${i + 1}.`,
      coverImage: `/images/dancing-sm-${faker.number.int({ min: 1, max: 3 })}.jpg`,
      songCount: faker.number.int({ min: 5, max: 50 }),
      duration: faker.number.int({ min: 300, max: 7200 }), // duration in seconds
      userCreated: options.userCreated ?? false,
      createdAt: faker.date.past().toISOString()
    } as BasePlaylist
  })

  const items = reactive(_items)

  if (options.simulateFetch) {
    return new Promise<typeof items>((resolve) => {
      useTimeout(options.delay ?? 500, {
        immediate: true,
        callback: () => {
          resolve(items)
        }
      })
    })
  } else {
    return items
  }
}
