import axios, { AxiosResponse } from 'axios'

const apiKey: string = 'f57b6c31f0b14b1486fcdd2f577491f5'
const baseUrl: string = 'https://api.spoonacular.com'

interface Recipe {
  id: number
  title: string
  image: string
  imageType: string
}

const getRecipes = async (): Promise<Recipe[] | undefined> => {
  try {
    const response: AxiosResponse<{ results: Recipe[] }> = await axios.get(
      `${baseUrl}/recipes/complexSearch?apiKey=${apiKey}&number=10&cuisine=italian`,
    )

    console.log(response.data)
    return response.data.results
  } catch (e) {
    console.error(e)
  }
}

export { getRecipes }
