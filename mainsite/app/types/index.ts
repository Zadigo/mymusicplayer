import type { UrlParams } from '@vueuse/core'

export type * from './graphql'

export type Arrayable<T> = T[]

export type SidebarItem = {
  label: string
  link: string
  icon?: string
  action?: () => void
}

export enum ExplorerViewsEnum {
  FeedView = 'Feed View',
  LocationView = 'Location View',
  ChartsView = 'Charts View',
  NewReleasesView = 'New Releases View',
  DiscoverView = 'Discover View'
}

export type ExplorerViews = keyof typeof ExplorerViewsEnum

export type CustomUrlParams = UrlParams & {
  view?: ExplorerViews
}
