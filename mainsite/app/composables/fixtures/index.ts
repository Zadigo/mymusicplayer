export * from './feed'
export * from './songs'
export * from './playlists'

export function fetchFixture<T>(items: T, delay: number = 500): Promise<T> {
  return new Promise<T>((resolve) => {
    useTimeout(delay, {
      immediate: true,
      callback: () => {
        resolve(items)
      }
    })
  })
}
