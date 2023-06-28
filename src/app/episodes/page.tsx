import { EpisodeList } from '@/components/EpisodeList'
import { PaginationContextProvider } from '@/contexts/pagination'

export default function Episodes() {
  return (
    <PaginationContextProvider>
      <EpisodeList />
    </PaginationContextProvider>
  )
}
