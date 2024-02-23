import React from 'react'
import Button from '../ui/Button'
import Card from '../ui/Card'
import Image from '../ui/Image'

interface RecipeCardProps {
  recipe: {
    image: string
    title: string
  }
  selectedCategory: string
}

const RecipeCard: React.FC<RecipeCardProps> = ({
  recipe,
  selectedCategory,
}) => (
  <Card className="-mt-8 sm:-mt-14 md:-mt-16 lg:-mt-20 xl:-mt-24 2xl:-mt-24">
    {/* Recipe Image */}
    <div className="-mt-8 sm:-mt-14 md:-mt-16 lg:-mt-20 xl:-mt-24 2xl:-mt-24">
      <Image src={recipe.image} />
    </div>

    {/* Recipe Details */}
    <div className="flex flex-col items-center justify-center text-center p-4">
      <h2
        className="
          text-2xl font-bold text-gray-800
          sm:text-3xl md:text-2xl lg:text2xl xl:text-2xl 2xl:text-xl
        "
      >
        {recipe.title.length > 20
          ? recipe.title.slice(0, 20) + '...'
          : recipe.title}
      </h2>
      <p className="text-gray-500">{selectedCategory}</p>

      {/* Time to Cook and Cook Button */}
      <div
        className="flex flex-col items-center justify-between  sm:flex-row sm:space-y-0 sm:space-x-4 
        mt-4 sm:mt-6 md:mt-4 lg:mt-6 xl:mt-6 2xl:mt-6
      "
      >
        {/* Time to Cook */}
        <p className="text-gray-500">30 mins</p>

        {/* Cook Button */}
        <Button recipesStyle>View Recipe</Button>
      </div>
    </div>
  </Card>
)

export default RecipeCard
