import { useEffect } from 'react'
import { useQuery } from '@tanstack/react-query'
import { useTotalResults } from '../context/TotalResultsContext'
import { getRecipes } from '../services/spoonacularApis'
import { Recipe } from '../utils/types'

interface UseRecipesResult {
  recipes: Recipe[] | null
  isLoading: boolean
}

const useRecipes = (
  searchQuery: string,
  selectedCategory: string,
): UseRecipesResult => {
  const { totalResults, updateTotalResults } = useTotalResults()

  const { data: apiResponse, isLoading } = useQuery<Recipe[]>({
    queryKey: ['recipes', searchQuery, selectedCategory],
    queryFn: async () => {
      const response = await getRecipes(searchQuery, selectedCategory)
      if (response) {
        updateTotalResults(response.length)
      }
      return response || [] // Ensure a default value if response is undefined
    },
  })

  useEffect(() => {
    updateTotalResults(totalResults)
  }, [updateTotalResults, totalResults])

  const recipes = apiResponse || null

  return { recipes, isLoading }
}

export default useRecipes
