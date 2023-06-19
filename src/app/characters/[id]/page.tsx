'use client'

import { CharacterInfo } from '@/Components/CharacterInfo'
import { useCallback, useEffect, useState } from 'react'
import { Character, getCharacter } from 'rickmortyapi'

interface CharacterProps {
  params: {
    id: string
  }
}

export default function CharacterDetail({ params }: CharacterProps) {
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
