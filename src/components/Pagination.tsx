import { useCallback, useMemo } from 'react'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid'
import { usePagination } from '@/hooks/usePagination'

export function Pagination() {
  const { page, setPage, lastPage, totalResults } = usePagination()

  const handleToPreviousPage = useCallback(() => {
    if (lastPage > 0 && page > 1) {
      return setPage(page - 1)
    }
  }, [page, lastPage, setPage])

  const handleToNextPage = useCallback(() => {
    if (page < lastPage) {
      return setPage(page + 1)
    }
  }, [page, lastPage, setPage])

  const resultsFrom = useMemo(() => {
    if (page === 1) {
      return 1
    } else {
      return page * 20 - 19
    }
  }, [page])

  const resultsTo = useMemo(() => {
    if (page === lastPage) {
      return totalResults
    } else {
      return page * 20
    }
  }, [lastPage, page, totalResults])

  return (
    <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
      <div>
        {totalResults !== 0 && (
          <p className="text-sm text-gray-700">
            {'Showing '}
            <span className="font-medium">{resultsFrom}</span>
            {' to '}
            <span className="font-medium">{resultsTo}</span>
            {' of '}
            <span className="font-medium">{totalResults}</span>
            {' results'}
          </p>
        )}
      </div>
      <div>
        <nav className="isolate inline-flex -space-x-px rounded-md shadow-sm">
          <button
            className={`relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 ${
              page === 1 && 'cursor-not-allowed opacity-25'
            }`}
            disabled={page === 1}
            onClick={handleToPreviousPage}
          >
            <ChevronLeftIcon className="h-5 w-5" />
          </button>
          <span className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 focus:z-20 focus:outline-offset-0">
            {page}
          </span>
          <button
            className={`relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 ${
              page === lastPage && 'cursor-not-allowed opacity-25'
            }`}
            disabled={page === lastPage}
            onClick={handleToNextPage}
          >
            <ChevronRightIcon className="h-5 w-5" />
          </button>
        </nav>
      </div>
    </div>
  )
}
