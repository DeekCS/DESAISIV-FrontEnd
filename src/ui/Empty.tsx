import React from 'react'

interface EmptyProps {
  message: string
}
import NoResults from '../assets/no-results.svg'

const Empty: React.FC<EmptyProps> = ({ message }) => {
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <img src={NoResults} alt="No results found" className="w-1/2 h-1/2" />
      <p className="text-lg text-gray-500 font-semibold mt-4 text-center w-3/4">
        {message}
      </p>
    </div>
  )
}

export default Empty
