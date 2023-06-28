import { useSearch } from '@/hooks/useSearch'
import { MagnifyingGlassIcon } from '@heroicons/react/20/solid'

export default function SearchInput() {
  const { search, setSearch } = useSearch()

  return (
    <div className="relative mx-auto">
      <input
        className="block w-full rounded-md border-0 py-1.5 pl-8 text-sm leading-6 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-800 search-cancel:appearance-none"
        type="search"
        name="search"
        placeholder="Search by name..."
        value={search}
        onChange={(event) => setSearch(event.target.value)}
      />
      <span className="absolute left-0 top-0 ml-2.5 mt-2.5">
        <MagnifyingGlassIcon className="h-4 w-4 text-gray-400" />
      </span>
    </div>
  )
}
