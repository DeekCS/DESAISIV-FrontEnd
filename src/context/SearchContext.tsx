import React, { createContext, useContext, useState, ReactNode } from 'react'

interface SearchContextProps {
  searchQuery: string
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>
}

const SearchContext = createContext<SearchContextProps | undefined>(undefined)

const SearchProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [searchQuery, setSearchQuery] = useState('')

  return (
    <SearchContext.Provider value={{ searchQuery, setSearchQuery }}>
      {children}
    </SearchContext.Provider>
  )
}

const useSearch = () => {
  const context = useContext(SearchContext)
  if (context === undefined)
    throw new Error('useSearch must be used within a SearchProvider')
  return context
}

export { SearchProvider, useSearch }
