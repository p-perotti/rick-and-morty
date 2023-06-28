'use client'

import { useCallback, useContext, useEffect, useState } from 'react'
import { Location, getLocations } from 'rickmortyapi'
import { ListContainer } from './ListContainer'
import { LocationCard } from './LocationCard'
import { SearchContext } from '@/contexts/search'
import { PaginationContext } from '@/contexts/pagination'

export function LocationList() {
  const [locations, setLocations] = useState<Location[] | undefined>([])

  const { search } = useContext(SearchContext)
  const { page, setLastPage, setTotalResults } = useContext(PaginationContext)

  const fetchLocations = useCallback(async () => {
    const response = await getLocations({ page, name: search })

    setLocations(response.data.results)
    setLastPage(response.data.info?.pages || 0)
    setTotalResults(response.data.info?.count || 0)
  }, [page, search, setLastPage, setTotalResults])

  useEffect(() => {
    fetchLocations()
  }, [fetchLocations])

  return (
    <ListContainer title="Locations">
      {locations &&
        locations.map((location) => (
          <LocationCard key={location.id} location={location} />
        ))}
    </ListContainer>
  )
}
