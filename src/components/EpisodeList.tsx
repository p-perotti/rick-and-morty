'use client'

import { useCallback, useContext, useEffect, useState } from 'react'
import { Episode, getEpisodes } from 'rickmortyapi'
import { ListContainer } from './ListContainer'
import { EpisodeCard } from './EpisodeCard'
import { SearchContext } from '@/contexts/search'
import { PaginationContext } from '@/contexts/pagination'

export function EpisodeList() {
  const [episodes, setEpisodes] = useState<Episode[] | undefined>([])

  const { search } = useContext(SearchContext)
  const { page, setLastPage, setTotalResults } = useContext(PaginationContext)

  const fetchEpisodes = useCallback(async () => {
    const response = await getEpisodes({ page, name: search })

    setEpisodes(response.data.results)
    setLastPage(response.data.info?.pages || 1)
    setTotalResults(response.data.info?.count || 0)
  }, [page, search, setLastPage, setTotalResults])

  useEffect(() => {
    fetchEpisodes()
  }, [fetchEpisodes])

  return (
    <ListContainer title="Episodes">
      {episodes &&
        episodes.map((episode) => (
          <EpisodeCard key={episode.id} episode={episode} />
        ))}
    </ListContainer>
  )
}
