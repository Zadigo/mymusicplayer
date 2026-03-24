import { faker } from '@faker-js/faker'
import type { BaseSong } from '~/types/graphql/song'
import { fetchFixture } from '.'

export function useSongFixture(quantity: number = 1, options: { simulateFetch?: boolean, delay?: number, userCreated?: boolean } = { simulateFetch: false, delay: 500, userCreated: false }) {
  const _items = Array.from({ length: quantity }, () => {
    return {
      id: faker.string.uuid(),
      title: faker.music.songName(),
      artist: {
        id: faker.string.uuid(),
        name: faker.person.fullName(),
        bio: faker.lorem.paragraph(),
        profileImage: faker.image.avatar(),
        coverImage: `/images/dancing-banner-2.jpg`,
        debutYear: faker.number.int({ min: 1950, max: 2023 })
      },
      album: {
        id: faker.string.uuid(),
        title: faker.music.album(),
        artist: {
          id: faker.string.uuid(),
          name: faker.person.fullName(),
          bio: faker.lorem.paragraph(),
          profileImage: faker.image.avatar(),
          coverImage: `/images/dancing-banner-2.jpg`,
          debutYear: faker.number.int({ min: 1950, max: 2023 })
        },
        coverImage: `/images/dancing-banner-2.jpg`,
        songCount: faker.number.int({ min: 5, max: 20 }),
        duration: faker.number.int({ min: 600, max: 3600 }),
        genre: faker.music.genre() as BaseSong['album']['genre'],
        releasedAt: faker.date.past({ years: 30 }).toISOString()
      },
      duration: faker.number.int({ min: 120, max: 420 }),
      coverImage: `/images/dancing-banner-2.jpg`
    }
  })

  if (options.simulateFetch) {
    return fetchFixture(_items, options.delay)
  } else {
    return _items
  }
}
