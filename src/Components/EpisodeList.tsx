'use client'

import { useCallback, useEffect, useState } from 'react'
import { Episode, getEpisodes } from 'rickmortyapi'
import { ListContainer } from './ListContainer'
import { EpisodeCard } from './EpisodeCard'

export function EpisodeList() {
  const [episodes, setEpisodes] = useState<Episode[] | undefined>([])
  const [page, setPage] = useState(1)
  const [lastPage, setLastPage] = useState<number>(0)
  const [totalResults, setTotalResults] = useState<number>(0)

  const fetchEpisodes = useCallback(async () => {
    const response = await getEpisodes({ page })

    setEpisodes(response.data.results)
    setLastPage(response.data.info?.pages || 0)
    setTotalResults(response.data.info?.count || 0)
  }, [page])

  useEffect(() => {
    fetchEpisodes()
  }, [fetchEpisodes])

  return (
    <ListContainer
      title="Episodes"
      page={page}
      setPage={setPage}
      lastPage={lastPage}
      totalResults={totalResults}
    >
      {episodes &&
        episodes.map((episode) => (
          <EpisodeCard key={episode.id} episode={episode} />
        ))}
    </ListContainer>
  )
}
