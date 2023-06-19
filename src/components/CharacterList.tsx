'use client'

import { useCallback, useContext, useEffect, useState } from 'react'
import { Character, getCharacters } from 'rickmortyapi'
import { ListContainer } from './ListContainer'
import { CharacterCard } from './CharacterCard'
import { SearchContext } from '@/contexts/search'

export function CharacterList() {
  const [characters, setCharacters] = useState<Character[] | undefined>([])
  const [page, setPage] = useState(1)
  const [lastPage, setLastPage] = useState<number>(0)
  const [totalResults, setTotalResults] = useState<number>(0)
  const [status, setStatus] = useState('')

  const { search } = useContext(SearchContext)

  const fetchCharacters = useCallback(async () => {
    const response = await getCharacters({ page, name: search, status })

    setCharacters(response.data.results)
    setLastPage(response.data.info?.pages || 0)
    setTotalResults(response.data.info?.count || 0)
  }, [page, search, status])

  useEffect(() => {
    fetchCharacters()
  }, [fetchCharacters])

  return (
    <ListContainer
      title="Characters"
      page={page}
      setPage={setPage}
      lastPage={lastPage}
      totalResults={totalResults}
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
