import { ReactNode } from 'react'
import { Pagination } from './Pagination'
import { Header } from './Header'
import { Dropdown } from './Dropdown'

interface ListContainerProps {
  children: ReactNode
  title: string
  filterTitle?: string
  filterOptions?: string[]
  activeFilter?: string
  setFilter?: (option: string) => void
}

export function ListContainer({
  children,
  title,
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
      {children ? (
        <div className="mx-auto max-w-2xl px-4 py-4 sm:px-8 sm:py-8 lg:max-w-7xl lg:px-8">
          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {children}
          </div>
        </div>
      ) : (
        <div className="flex h-16 w-full items-center justify-center">
          <p className="text-sm text-gray-600">
            No matches found... Please try another search.
          </p>
        </div>
      )}
      <Pagination />
    </div>
  )
}
