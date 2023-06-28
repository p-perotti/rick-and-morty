import { Episode } from 'rickmortyapi'
import { Card } from './Card'

interface EpisodeCardProps {
  episode: Episode
}

export function EpisodeCard({ episode }: EpisodeCardProps) {
  return (
    <Card
      type="episodes"
      id={episode.id}
      name={episode.name}
      description={episode.episode}
    />
  )
}
