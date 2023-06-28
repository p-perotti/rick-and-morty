'use client'

import { CharacterInfo } from '@/components/CharacterInfo'
import { useCallback, useEffect, useState } from 'react'
import { Character, getCharacter } from 'rickmortyapi'

interface CharacterDetailProps {
  params: {
    id: string
  }
}

export default function CharacterDetail({ params }: CharacterDetailProps) {
  const [character, setCharacter] = useState<Character | undefined>()

  const fetchCharacters = useCallback(async () => {
    const response = await getCharacter(parseInt(params.id))

    setCharacter(response.data)
  }, [params.id])

  useEffect(() => {
    fetchCharacters()
  }, [fetchCharacters])

  return <CharacterInfo character={character} />
}
