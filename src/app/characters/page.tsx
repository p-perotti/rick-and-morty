import { CharacterList } from '@/components/CharacterList'
import { PaginationContextProvider } from '@/contexts/pagination'

export default function Characters() {
  return (
    <PaginationContextProvider>
      <CharacterList />
    </PaginationContextProvider>
  )
}
