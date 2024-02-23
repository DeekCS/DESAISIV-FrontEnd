import React from 'react'

const Header: React.FC = () => {
  return (
    <header className="flex flex-col sm:flex-row justify-between items-center mt-5 sm:mt-10">
      <div className="flex items-center mb-2 sm:mb-0">
        <h1 className="font-bold font-playfair text-lg sm:text-3xl tracking-wider">
          Learn, Cook, & Eat your food!
        </h1>
      </div>
      <div className="mt-4 sm:mt-0 flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
        <NumberLink value="120" label="Recipes" />
        <NumberLink value="201" label="Categories" />
      </div>
    </header>
  )
}

const NumberLink: React.FC<{ value: string; label: string }> = ({
  value,
  label,
}) => {
  return (
    <div className="flex flex-col text-gray-500 text-center sm:text-left">
      <h2 className="font-bold font-playfair text-3xl tracking-wider text-center sm:text-left text-secondary">
        {value}
      </h2>
      <h3 className="hidden sm:inline">{label}</h3>
    </div>
  )
}

export default Header
