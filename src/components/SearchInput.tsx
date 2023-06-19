import { SearchContext } from '@/contexts/search'
import { MagnifyingGlassIcon } from '@heroicons/react/20/solid'
import { useContext } from 'react'

export default function SearchInput() {
  const { search, setSearch } = useContext(SearchContext)

  return (
    <div className="relative mx-auto text-gray-600">
      <input
        className="h-10 rounded-lg border-2 border-gray-300 bg-white px-3.5 pr-7 text-sm focus:outline-none search-cancel:appearance-none"
        type="search"
        name="search"
        placeholder="Search"
        value={search}
        onChange={(event) => setSearch(event.target.value)}
      />
      <span className="absolute right-0 top-0 mr-2 mt-2.5">
        <MagnifyingGlassIcon className="h-5 w-5" />
      </span>
    </div>
  )
}
