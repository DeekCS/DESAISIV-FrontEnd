import React, { useState } from 'react'
import Button from '../ui/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { useRecipe } from '../hooks/useRecipe'
import Spinner from '../ui/Spinner'

const Recipe: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'instructions' | 'ingredients'>(
    'instructions',
  )

  const { isLoading, recipe } = useRecipe()

  const renderIngredients = () => (
    <ul className="text-left w-full font-light text-gray-700 text-sm md:text-base lg:text-lg xl:text-xl">
      {recipe?.extendedIngredients.map((ingredient) => (
        <li key={ingredient.id} className="flex items-center mb-2">
          <FontAwesomeIcon icon={faCheck} className="mr-2 text-green-500" />
          <span className="truncate">{ingredient.original}</span>
        </li>
      ))}
    </ul>
  )

  const renderInstructions = () => (
    <div className="text-left w-full">
      <h3
        className="text-left w-full font-bold text-gray-700 text-lg md:text-xl lg:text-2xl xl:text-3xl
        mb-4"
      >
        Instructions
      </h3>
      <p
        className="text-left w-full font-light text-gray-700 text-sm md:text-base lg:text-lg xl:text-xl leading-7
      
      "
        dangerouslySetInnerHTML={{ __html: recipe?.instructions || '' }}
      ></p>
    </div>
  )

  return (
    <>
      {isLoading && <Spinner />}
      {recipe && (
        <div
          className="flex flex-col w-full
          h-screen
        "
        >
          <h1 className="w-full font-bold text-gray-700 text-lg md:text-xl lg:text-2xl xl:text-3xl">
            {recipe.title}
          </h1>
          <div
            className="w-full mt-10 flex
             flex-col md:flex-row lg:flex-row xl:flex-row"
          >
            <div
              className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2
               flex justify-center items-center
                flex-col
                mt-4 md:mt-0 lg:mt-0 xl:mt-0

               "
            >
              <img
                src={recipe.image}
                alt={recipe.title}
                className="w-full md:w-3/4 lg:w-3/4 xl:w-3/4
                  h-auto rounded-3xl shadow-lg object-cover
                "
              />
            </div>

            <div
              className="w-full
                md:w-1/2 lg:w-1/2 xl:w-1/2
                flex flex-col justify-center items-center"
            >
              <div
                className="w-full  justify-center
                flex flex-row items-center
                  mt-4 md:mt-0 lg:mt-0 xl:mt-0
                "
              >
                <Button
                  onClick={() => setActiveTab('instructions')}
                  isSelected={activeTab === 'instructions'}
                >
                  Instructions
                </Button>
                <Button
                  onClick={() => setActiveTab('ingredients')}
                  isSelected={activeTab === 'ingredients'}
                >
                  Ingredients
                </Button>
              </div>
              <div className="w-full mt-10">
                {activeTab === 'ingredients'
                  ? renderIngredients()
                  : renderInstructions()}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Recipe
