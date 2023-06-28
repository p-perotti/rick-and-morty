import { Location } from 'rickmortyapi'
import { Card } from './Card'

interface LocationCardProps {
  location: Location
}

export function LocationCard({ location }: LocationCardProps) {
  return (
    <Card
      type="locations"
      id={location.id}
      name={location.name}
      description={location.type}
    />
  )
}
