// RecipeCards.tsx
import React from 'react'
import RecipeCard from './RecipeCard'
import Spinner from '../ui/Spinner'
import Empty from '../ui/Empty'
import { Category, Recipe } from '../utils/types'
import { useNavigate } from 'react-router-dom'

interface RecipeCardsProps {
  recipes: Recipe[]
  selectedCategory: Category
  isLoading: boolean
}

const RecipeCards: React.FC<RecipeCardsProps> = ({
  recipes,
  selectedCategory,
  isLoading,
}) => {
  const navigate = useNavigate()
  const handleNavigate = (id: number) => {
    navigate(`/details/${id}`)
  }

  return (
    <div className="flex flex-row flex-wrap gap-5 justify-center mt-0 lg:mt-28">
      {isLoading && <Spinner />}
      {recipes && recipes.length > 0 && !isLoading ? (
        recipes.map((recipe, index) => (
          <RecipeCard
            key={index}
            recipe={recipe}
            selectedCategory={selectedCategory.name}
            onNavigate={() => handleNavigate(recipe.id)}
          />
        ))
      ) : isLoading ? (
        <Spinner />
      ) : (
        <Empty message="No recipes found" />
      )}
    </div>
  )
}

export default RecipeCards
