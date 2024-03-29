import axios, { AxiosResponse } from 'axios'
import { Recipe } from '../utils/types'

const apiKey: string = '06128fea1e344fe19ac5159cedd2694a'
const baseUrl: string = 'https://api.spoonacular.com'

const getRecipes = async (
  query: string,
  category: string,
): Promise<Recipe[] | undefined> => {
  try {
    const response: AxiosResponse<{ results: Recipe[] }> = await axios.get(
      `${baseUrl}/recipes/complexSearch`,
      {
        params: {
          apiKey,
          number: 10,
          cuisine: category,
          query,
        },
      },
    )

    return response.data.results || []
  } catch (e) {
    console.error(e)
    // Return an empty array or handle the error as needed
    return undefined
  }
}

const getRecipeById = async (id: number): Promise<Recipe | undefined> => {
  try {
    const response: AxiosResponse<Recipe> = await axios.get(
      `${baseUrl}/recipes/${id}/information`,
      {
        params: {
          apiKey,
        },
      },
    )

    return response.data
  } catch (e) {
    console.error(e)
    return undefined
  }
}

export { getRecipes, getRecipeById }
