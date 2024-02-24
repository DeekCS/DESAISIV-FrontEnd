import { useSearch } from '../context/SearchContext'
import useRecipes from '../hooks/useRecipes'
import RecipeCards from '../components/RecipeCards'
import useCategory from '../context/CategoryContext'

const Home = () => {
  const { searchQuery } = useSearch()
  const { selectedCategory } = useCategory()
  const { recipes, isLoading } = useRecipes(searchQuery, selectedCategory.name)

  return (
    <RecipeCards
      recipes={recipes!}
      selectedCategory={selectedCategory}
      isLoading={isLoading}
    />
  )
}

export default Home
