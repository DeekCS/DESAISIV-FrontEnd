import React, { useState } from 'react'
import { useSearch } from '../context/SearchContext'

interface SearchBarProps {
  placeholder: string
}

const SearchBar: React.FC<SearchBarProps> = ({ placeholder }) => {
  const { setSearchQuery } = useSearch()
  const [query, setQuery] = useState('')

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newQuery = event.target.value
    setQuery(newQuery)
  }

  const handleSearch = () => {
    setSearchQuery(query)
  }

  return (
    <div className="max-w-sm mb-4 md:max-w-md lg:max-w-lg">
      <div className="relative rounded-md shadow-sm">
        <input
          type="text"
          placeholder={placeholder}
          value={query}
          onChange={handleInputChange}
          className="py-2 px-4 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {/* Search Icon */}

        {/* Show Search button */}
        <button
          onClick={handleSearch}
          className="absolute inset-y-0 right-0 px-4 text-gray-600"
        >
          🔍
        </button>
      </div>
    </div>
  )
}

export default SearchBar
