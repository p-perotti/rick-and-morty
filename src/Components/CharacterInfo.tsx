import { useMemo } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Character } from 'rickmortyapi'
import { InfoContainer } from './InfoContainer'
import { InfoDetail } from './InfoDetail'
import { BadgeLink } from './BadgeLink'
import { StatusDisplay } from './StatusDisplay'
import { getIdFromLink } from '@/util/links'

export function CharacterInfo({
  character,
}: {
  character: Character | undefined
}) {
  const episodes = useMemo(() => {
    return character?.episode.map((episode) =>
      getIdFromLink(episode, 'episode'),
    )
  }, [character])

  return (
    <InfoContainer title="Character Information">
      <InfoDetail title="Image" isImage>
        {character && (
          <div className="aspect-h-1 aspect-w-1 h-20 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
            <Image
              src={character?.image}
              alt={character?.name}
              width={300}
              height={300}
              className="object-cover object-center group-hover:opacity-75"
            />
          </div>
        )}
      </InfoDetail>
      <InfoDetail title="Name">{character?.name}</InfoDetail>
      <InfoDetail title="Status">
        <StatusDisplay status={character?.status} />
      </InfoDetail>
      <InfoDetail title="Species">{character?.species}</InfoDetail>
      <InfoDetail title="Type">{character?.type}</InfoDetail>
      <InfoDetail title="Gender">{character?.gender}</InfoDetail>
      <InfoDetail title="Origin">
        {character?.origin.name === 'unknown' ? (
          character?.origin.name
        ) : (
          <Link
            href={`/locations/${encodeURIComponent(
              getIdFromLink(character?.origin.url || '', 'location'),
            )}`}
          >
            {character?.origin.name}
          </Link>
        )}
      </InfoDetail>
      <InfoDetail title="Last known location">
        {character?.location.name === 'unknown' ? (
          character?.location.name
        ) : (
          <Link
            href={`/locations/${encodeURIComponent(
              getIdFromLink(character?.location.url || '', 'location'),
            )}`}
          >
            {character?.location.name}
          </Link>
        )}
      </InfoDetail>
      <InfoDetail title="Episodes">
        {episodes &&
          episodes.map((episode) => (
            <BadgeLink
              key={episode}
              id={episode}
              title="Episode"
              href={`/episodes/${encodeURIComponent(episode)}`}
            />
          ))}
      </InfoDetail>
    </InfoContainer>
  )
}
