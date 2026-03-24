import 'vue-router'

export {}

type BaseRouteLabel = 'Artist' | 'Playlist' | 'Playlists' | 'Explorer'

declare module 'vue-router' {
  interface RouteMeta {
    label?: BaseRouteLabel
  }
}
