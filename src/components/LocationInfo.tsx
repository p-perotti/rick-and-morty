import { useMemo } from 'react'
import { Location } from 'rickmortyapi'
import { InfoContainer } from './InfoContainer'
import { InfoDetail } from './InfoDetail'
import { BadgeLink } from './BadgeLink'
import { getIdFromLink } from '@/util/links'

export function LocationInfo({ location }: { location: Location | undefined }) {
  const characters = useMemo(() => {
    return location?.residents.map((character) =>
      getIdFromLink(character, 'character'),
    )
  }, [location])

  return (
    <InfoContainer title="Location Information">
      <InfoDetail title="Name">{location?.name}</InfoDetail>
      <InfoDetail title="Type">{location?.type}</InfoDetail>
      <InfoDetail title="Dimension">{location?.dimension}</InfoDetail>
      <InfoDetail title="Residents">
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
