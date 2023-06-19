import { Episode } from 'rickmortyapi'
import { Card } from './Card'

export function EpisodeCard({ episode }: { episode: Episode }) {
  return (
    <Card
      type="episodes"
      id={episode.id}
      name={episode.name}
      description={episode.episode}
    />
  )
}
