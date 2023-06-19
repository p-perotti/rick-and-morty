import { useMemo } from 'react'
import { Episode } from 'rickmortyapi'
import { InfoContainer } from './InfoContainer'
import { InfoDetail } from './InfoDetail'
import { BadgeLink } from './BadgeLink'
import { getIdFromLink } from '@/util/links'

export function EpisodeInfo({ episode }: { episode: Episode | undefined }) {
  const characters = useMemo(() => {
    return episode?.characters.map((character) =>
      getIdFromLink(character, 'character'),
    )
  }, [episode])

  return (
    <InfoContainer title="Episode Information">
      <InfoDetail title="Code">{episode?.episode}</InfoDetail>
      <InfoDetail title="Name">{episode?.name}</InfoDetail>
      <InfoDetail title="Air Date">{episode?.air_date}</InfoDetail>
      <InfoDetail title="Characters">
        {characters &&
          characters.map((character) => (
            <BadgeLink
              key={character}
              id={character}
              title="Character"
              href={`/characters/${encodeURIComponent(character)}`}
            />
          ))}
      </InfoDetail>
    </InfoContainer>
  )
}
