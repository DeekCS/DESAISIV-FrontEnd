import { useSearch } from '../context/SearchContext'
import useCategory from '../hooks/useCategory'
import useRecipes from '../hooks/useRecipes'
import CategoryButtons from '../components/CategoryButtons'
import RecipeCards from '../components/RecipeCards'
import { categories } from '../utils/types'

const Home = () => {
  const { searchQuery } = useSearch()
  const { selectedCategory, handleCategoryClick } = useCategory()
  const { recipes, isLoading } = useRecipes(searchQuery, selectedCategory.name)

  return (
    <>
      <div className="flex justify-center flex-row">
        {categories.map((category) => (
          <CategoryButtons
            key={category.id}
            category={category}
            onClick={handleCategoryClick}
            isSelected={selectedCategory.name === category.name}
          />
        ))}
      </div>

      <RecipeCards
        recipes={recipes!}
        selectedCategory={selectedCategory}
        isLoading={isLoading}
      />
    </>
  )
}

export default Home
