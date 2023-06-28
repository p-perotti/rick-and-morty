import { useContext } from 'react'
import { PaginationContext } from '@/contexts/pagination'

export function usePagination() {
  return useContext(PaginationContext)
}
