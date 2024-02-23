export interface Category {
  id: string
  name: string
}

export interface Recipe {
  title: string
  image: string
  imageType: string
  id: number
}

export const categories: Category[] = [
  { id: '1', name: 'Indian' },
  { id: '2', name: 'Mexican' },
  { id: '3', name: 'Spanish' },
  { id: '4', name: 'American' },
  { id: '5', name: 'Italian' },
]
