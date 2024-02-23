import React from 'react'

interface SearchBarProps {
  placeholder: string
  onSearch: (query: string) => void
}

const SearchBar: React.FC<SearchBarProps> = ({ placeholder, onSearch }) => {
  const [query, setQuery] = React.useState('')

  const handleSearch = () => {
    onSearch(query)
  }

  return (
    <div className="max-w-sm">
      <div className="flex items-stretch border rounded-md">
        <div className="relative flex-grow">
          <input
            type="text"
            placeholder={placeholder}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="py-2 px-4 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-full rounded-md"
          />
          {/* Search Icon */}
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
            <svg
              className="h-5 w-5 text-gray-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M14.293 12.293a7 7 0 1 1 1.414-1.414l5 5a1 1 0 0 1-1.414 1.414l-5-5z"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SearchBar
