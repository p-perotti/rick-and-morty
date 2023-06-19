'use client'

import { ReactNode, createContext, useState } from 'react'

export const SearchContext = createContext({
  search: '',
  setSearch: (value: string) => {},
})

export function SearchContextProvider({ children }: { children: ReactNode }) {
  const [search, setSearch] = useState('')

  return (
    <SearchContext.Provider
      value={{
        search,
        setSearch,
      }}
    >
      {children}
    </SearchContext.Provider>
  )
}
