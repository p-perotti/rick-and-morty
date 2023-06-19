'use client'

import { useCallback, useContext, useEffect, useState } from 'react'
import { Location, getLocations } from 'rickmortyapi'
import { ListContainer } from './ListContainer'
import { LocationCard } from './LocationCard'
import { SearchContext } from '@/contexts/search'

export function LocationList() {
  const [locations, setLocations] = useState<Location[] | undefined>([])
  const [page, setPage] = useState(1)
  const [lastPage, setLastPage] = useState<number>(0)
  const [totalResults, setTotalResults] = useState<number>(0)

  const { search } = useContext(SearchContext)

  const fetchLocations = useCallback(async () => {
    const response = await getLocations({ page, name: search })

    setLocations(response.data.results)
    setLastPage(response.data.info?.pages || 0)
    setTotalResults(response.data.info?.count || 0)
  }, [page, search])

  useEffect(() => {
    fetchLocations()
  }, [fetchLocations])

  return (
    <ListContainer
      title="Locations"
      page={page}
      setPage={setPage}
      lastPage={lastPage}
      totalResults={totalResults}
    >
      {locations &&
        locations.map((location) => (
          <LocationCard key={location.id} location={location} />
        ))}
    </ListContainer>
  )
}
