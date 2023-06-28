import { Character } from 'rickmortyapi'
import { Card } from './Card'
import { StatusDisplay } from './StatusDisplay'

interface CharacterCardProps {
  character: Character
}

export function CharacterCard({ character }: CharacterCardProps) {
  return (
    <Card
      type="characters"
      id={character.id}
      name={character.name}
      image={character.image}
    >
      <StatusDisplay
        status={character.status}
        extra={` - ${character.species}`}
      />
    </Card>
  )
}
