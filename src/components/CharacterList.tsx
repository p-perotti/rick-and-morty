'use client'

import { useCallback, useContext, useEffect, useState } from 'react'
import { Character, getCharacters } from 'rickmortyapi'
import { ListContainer } from './ListContainer'
import { CharacterCard } from './CharacterCard'
import { SearchContext } from '@/contexts/search'
import { PaginationContext } from '@/contexts/pagination'

export function CharacterList() {
  const [characters, setCharacters] = useState<Character[] | undefined>([])
  const [status, setStatus] = useState('')

  const { search } = useContext(SearchContext)
  const { page, setLastPage, setTotalResults } = useContext(PaginationContext)

  const fetchCharacters = useCallback(async () => {
    const response = await getCharacters({ page, name: search, status })

    setCharacters(response.data.results)
    setLastPage(response.data.info?.pages || 0)
    setTotalResults(response.data.info?.count || 0)
  }, [page, search, setLastPage, setTotalResults, status])

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
