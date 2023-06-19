import { Location } from 'rickmortyapi'
import { Card } from './Card'

export function LocationCard({ location }: { location: Location }) {
  return (
    <Card
      type="locations"
      id={location.id}
      name={location.name}
      description={location.type}
    />
  )
}
