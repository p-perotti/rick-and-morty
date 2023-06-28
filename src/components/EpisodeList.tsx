'use client'

import { useCallback, useEffect, useState } from 'react'
import { Episode, getEpisodes } from 'rickmortyapi'
import { ListContainer } from './ListContainer'
import { EpisodeCard } from './EpisodeCard'
import { useDebounce } from '@/hooks/useDebounce'
import { usePagination } from '@/hooks/usePagination'
import { useSearch } from '@/hooks/useSearch'

export function EpisodeList() {
  const [episodes, setEpisodes] = useState<Episode[] | undefined>([])

  const { search } = useSearch()
  const { page, setLastPage, setTotalResults } = usePagination()

  const debouncedSearch = useDebounce(search, 300)

  const fetchEpisodes = useCallback(async () => {
    const response = await getEpisodes({ page, name: debouncedSearch })

    setEpisodes(response.data.results)
    setLastPage(response.data.info?.pages || 1)
    setTotalResults(response.data.info?.count || 0)
  }, [page, debouncedSearch, setLastPage, setTotalResults])

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
