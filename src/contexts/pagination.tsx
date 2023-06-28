'use client'

import { ReactNode, createContext, useState } from 'react'

interface PaginationContextProviderProps {
  children: ReactNode
}

export const PaginationContext = createContext({
  page: 1,
  setPage: (value: number) => {},
  lastPage: 0,
  setLastPage: (value: number) => {},
  totalResults: 0,
  setTotalResults: (value: number) => {},
})

export function PaginationContextProvider({
  children,
}: PaginationContextProviderProps) {
  const [page, setPage] = useState(1)
  const [lastPage, setLastPage] = useState(0)
  const [totalResults, setTotalResults] = useState(0)

  return (
    <PaginationContext.Provider
      value={{
        page,
        setPage,
        lastPage,
        setLastPage,
        totalResults,
        setTotalResults,
      }}
    >
      {children}
    </PaginationContext.Provider>
  )
}
