import React from 'react'
import { useTotalResults } from '../context/TotalResultsContext'
import HeroText from './HeroText'

const Header: React.FC = () => {
  const { totalResults } = useTotalResults()

  return (
    <header
      className="flex flex-col sm:flex-row justify-between items-center mt-5 sm:mt-10
      mb-5 sm:mb-10"
    >
      <div className="flex items-center mb-2 sm:mb-0">
        <h1 className="font-bold font-playfair text-lg sm:text-3xl tracking-wider">
          <HeroText />
        </h1>
      </div>
      <div className="mt-4 sm:mt-0 flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
        <NumberLink value={totalResults ?? 0} label="Recipes" />
      </div>
    </header>
  )
}

const NumberLink: React.FC<{ value: number; label: string }> = ({
  value,
  label,
}) => {
  return (
    <div className="flex flex-col text-gray-500 text-center sm:text-left">
      <h2 className="font-bold font-playfair text-5xl tracking-wider text-center sm:text-left text-secondary">
        {value}
      </h2>
      <h3 className="hidden sm:inline">{label}</h3>
    </div>
  )
}

export default Header
