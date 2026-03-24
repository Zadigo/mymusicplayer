export type BaseGenres = 'Rap' | 'Pop' | 'Rock' | 'Jazz' | 'Classical' | 'Hip-Hop' | 'Electronic' | 'Country' | 'R&B' | 'Reggae'

export type BaseArtist = {
  id: string
  name: string
  bio: string
  profileImage: string
  coverImage: string
  debutYear: number
}

export type BaseAlbum = {
  id: string
  title: string
  artist: BaseArtist
  coverImage: string
  songCount: number
  duration: number
  genre: BaseGenres
  releasedAt: string
}

export type BaseSong = {
  id: string
  title: string
  artist: BaseArtist
  album: BaseAlbum
  duration: number
  coverImage: string
}
