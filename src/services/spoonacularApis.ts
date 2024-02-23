import axios, { AxiosResponse } from 'axios'

const apiKey: string = 'a519422303d44e07ae53123b25ac81f1'
const baseUrl: string = 'https://api.spoonacular.com'

interface Recipe {
  id: number
  title: string
  image: string
  imageType: string
  totalResults: number
}

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

export { getRecipes }
