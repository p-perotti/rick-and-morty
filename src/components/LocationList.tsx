'use client'

import { useCallback, useEffect, useState } from 'react'
import { Location, getLocations } from 'rickmortyapi'
import { ListContainer } from './ListContainer'
import { LocationCard } from './LocationCard'
import { usePagination } from '@/hooks/usePagination'
import { useSearch } from '@/hooks/useSearch'
import { useDebounce } from '@/hooks/useDebounce'

export function LocationList() {
  const [locations, setLocations] = useState<Location[] | undefined>([])

  const { search } = useSearch()
  const { page, setLastPage, setTotalResults } = usePagination()

  const debouncedSearch = useDebounce(search, 300)

  const fetchLocations = useCallback(async () => {
    const response = await getLocations({ page, name: debouncedSearch })

    setLocations(response.data.results)
    setLastPage(response.data.info?.pages || 0)
    setTotalResults(response.data.info?.count || 0)
  }, [page, debouncedSearch, setLastPage, setTotalResults])

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
