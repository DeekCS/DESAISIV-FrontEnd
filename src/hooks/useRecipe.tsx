import { useQuery } from '@tanstack/react-query'
import { getRecipeById } from '../services/spoonacularApis'
import { useParams } from 'react-router'

export function useRecipe() {
  const { id } = useParams()

  const {
    isLoading,
    data: recipe,
    error,
  } = useQuery({
    queryKey: ['recipes', id],
    queryFn: () => getRecipeById(Number(id)),
    retry: false,
  })

  return { isLoading, error, recipe }
}
