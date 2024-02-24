import React, { useState } from 'react'
import Button from '../ui/Button'
import { useRecipe } from '../hooks/useRecipe'
import Spinner from '../ui/Spinner'
import Ingredients from '../components/Ingredients'
import Instructions from '../components/Instructions'

const Recipe: React.FC = () => {
  const { isLoading, recipe } = useRecipe()

  const [activeTab, setActiveTab] = useState<'instructions' | 'ingredients'>(
    'instructions',
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
                {activeTab === 'ingredients' ? (
                  <Ingredients ingredients={recipe.extendedIngredients} />
                ) : (
                  <Instructions instructions={recipe.instructions} />
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Recipe
