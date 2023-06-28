import { ReactNode } from 'react'
import { Pagination } from './Pagination'
import { Header } from './Header'
import { Dropdown } from './Dropdown'

interface ListContainerProps {
  children: ReactNode
  title: string
  page: number
  setPage: (page: number) => void
  lastPage: number
  totalResults: number
  filterTitle?: string
  filterOptions?: string[]
  activeFilter?: string
  setFilter?: (option: string) => void
}

export function ListContainer({
  children,
  title,
  page,
  setPage,
  lastPage,
  totalResults,
  filterTitle = '',
  filterOptions,
  activeFilter = '',
  setFilter = () => null,
}: ListContainerProps) {
  return (
    <div className="overflow-hidden rounded-lg bg-white">
      <Header title={title}>
        {filterOptions && (
          <Dropdown
            title={filterTitle}
            options={filterOptions}
            activeOption={activeFilter}
            setOption={setFilter}
          />
        )}
      </Header>

      <div className="mx-auto max-w-2xl px-4 py-4 sm:px-8 sm:py-8 lg:max-w-7xl lg:px-8">
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {children}
        </div>
      </div>

      <Pagination
        page={page}
        setPage={setPage}
        lastPage={lastPage}
        totalResults={totalResults}
      />
    </div>
  )
}
