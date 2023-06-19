import { Character } from 'rickmortyapi'
import { Card } from './Card'
import { StatusDisplay } from './StatusDisplay'

export function CharacterCard({ character }: { character: Character }) {
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
