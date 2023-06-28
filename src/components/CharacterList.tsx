'use client'

import { useCallback, useEffect, useState } from 'react'
import { Character, getCharacters } from 'rickmortyapi'
import { ListContainer } from './ListContainer'
import { CharacterCard } from './CharacterCard'
import { useDebounce } from '@/hooks/useDebounce'
import { useSearch } from '@/hooks/useSearch'
import { usePagination } from '@/hooks/usePagination'

export function CharacterList() {
  const [characters, setCharacters] = useState<Character[] | undefined>([])
  const [status, setStatus] = useState('')

  const { search } = useSearch()
  const { page, setLastPage, setTotalResults } = usePagination()

  const debouncedSearch = useDebounce(search, 300)

  const fetchCharacters = useCallback(async () => {
    const response = await getCharacters({
      page,
      name: debouncedSearch,
      status,
    })

    setCharacters(response.data.results)
    setLastPage(response.data.info?.pages || 0)
    setTotalResults(response.data.info?.count || 0)
  }, [page, debouncedSearch, setLastPage, setTotalResults, status])

  useEffect(() => {
    fetchCharacters()
  }, [fetchCharacters])

  return (
    <ListContainer
      title="Characters"
      filterTitle="Status"
      filterOptions={['', 'Alive', 'Dead', 'unknown']}
      activeFilter={status}
      setFilter={setStatus}
    >
      {characters &&
        characters.map((character) => (
          <CharacterCard key={character.id} character={character} />
        ))}
    </ListContainer>
  )
}
