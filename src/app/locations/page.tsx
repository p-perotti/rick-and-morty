import { LocationList } from '@/components/LocationList'
import { PaginationContextProvider } from '@/contexts/pagination'

export default function Locations() {
  return (
    <PaginationContextProvider>
      <LocationList />
    </PaginationContextProvider>
  )
}
