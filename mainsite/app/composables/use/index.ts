import type { ArrayOrNested, ContextMenuItem, DropdownMenuItem } from '@nuxt/ui'

export const useQueueComposable = createGlobalState(() => {
  const queue = ref<string[]>([])

  async function addPlaylist(_playlistId: string) {
    // Do something
  }

  async function addAlbum(_albumId: string) {
    // Do something
  }

  async function addTrack(_trackId: string) {
    // Do something
  }

  return {
    queue,
    addPlaylist,
    addAlbum,
    addTrack
  }
})

export const usePlayerComposable = createGlobalState(() => {
  const isPlaying = ref(false)
  const currentTrack = ref<string | null>(null)

  return {
    isPlaying,
    currentTrack
  }
})

export function useSongMenuActionsComposable() {
  const items = ref<ArrayOrNested<DropdownMenuItem>>([
    {
      label: 'Add to Queue',
      icon: 'lucide-circle-plus'
    },
    {
      label: 'Add to Playlist',
      icon: 'lucide-list-plus',
      children: [
        {
          label: 'My Favorites'
        }
      ]
    },
    {
      label: 'Remove from Playlist',
      icon: 'lucide-minus-circle'
    },
    {
      type: 'separator'
    },
    {
      label: 'Go to Album',
      icon: 'lucide-album'
    },
    {
      label: 'Go to Artist',
      icon: 'lucide-user'
    },
    {
      type: 'separator'
    },
    {
      label: 'Share',
      icon: 'lucide-share-2'
    }
  ])

  return {
    items
  }
}

export function useContextMenuActionsComposable() {
  const items = ref<ContextMenuItem[]>([
    {
      label: 'Add to Queue',
      icon: 'lucide-circle-plus'
    },
    {
      type: 'separator'
    },
    {
      label: 'Modify',
      icon: 'lucide-edit-2'
    },
    {
      label: 'Delete',
      icon: 'lucide-trash-2',
      variant: 'danger'
    },
    {
      label: 'Download',
      icon: 'lucide-download'
    },
    {
      type: 'separator'
    },
    {
      label: 'Make private',
      icon: 'lucide-lock'
    },
    {
      label: 'Pin',
      icon: 'lucide-pin'
    },
    {
      label: 'Sync playlists',
      icon: 'lucide-refresh-cw',
      children: [
        {
          label: 'First playlist'
        },
        {
          label: 'Second playlist'
        }
      ]
    },
    {
      label: 'Merge to playlist',
      icon: 'lucide-layers',
      children: [
        {
          label: 'New playlist',
          icon: 'lucide-plus-circle'
        },
        {
          label: 'First playlist'
        },
        {
          label: 'Second playlist'
        }
      ]
    },
    {
      type: 'separator'
    },
    {
      label: 'Share',
      icon: 'lucide-share-2'
    }
  ])

  return {
    items
  }
}

export const usePlaybackComposable = createGlobalState(() => {
  const userPlaylists = ref<string[]>([])

  return {
    userPlaylists
  }
})
