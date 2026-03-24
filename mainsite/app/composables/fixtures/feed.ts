import { useSongFixture } from './songs'

export function useFeedFixture(k: number = 10) {
  const items = useSongFixture(k)

  return {
    items
  }
}
