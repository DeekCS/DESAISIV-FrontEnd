import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'

interface IngredientsProps {
  ingredients: { id: number; original: string }[]
}

const Ingredients: React.FC<IngredientsProps> = ({ ingredients }) => (
  <ul className="text-left w-full font-light text-gray-700 text-sm md:text-base lg:text-lg xl:text-xl overflow-y-auto h-48 md:h-64 lg:h-80 xl:h-96">
    {ingredients.map((ingredient) => (
      <li
        key={ingredient.id}
        className="flex items-center mb-2 md:mb-3 lg:mb-4 xl:mb-5"
      >
        <FontAwesomeIcon icon={faCheck} className="mr-2 text-green-500" />
        <span className="truncate">{ingredient.original}</span>
      </li>
    ))}
  </ul>
)

export default Ingredients
