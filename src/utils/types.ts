export interface Category {
  id: string
  name: string
}

export interface Recipe {
  id: number
  title: string
  image: string
  imageType: string
  totalResults: number
  instructions: string
  extendedIngredients: Ingredient[]
}

export interface Ingredient {
  id: number
  original: string
  image: string
  name: string
  amount: number
  unit: string
  measures: {
    us: {
      amount: number
      unitShort: string
      unitLong: string
    }
    metric: {
      amount: number
      unitShort: string
      unitLong: string
    }
  }
}
export const categories: Category[] = [
  { id: '1', name: 'Indian' },
  { id: '2', name: 'Mexican' },
  { id: '3', name: 'Spanish' },
  { id: '4', name: 'American' },
  { id: '5', name: 'Italian' },
]
