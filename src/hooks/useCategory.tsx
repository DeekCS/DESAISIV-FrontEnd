import { useState } from 'react'
import { categories } from '../utils/types'

interface Category {
  id: string
  name: string
}

const useCategory = () => {
  const [selectedCategory, setSelectedCategory] = useState<Category>(
    categories[0],
  )
  const handleCategoryClick = (category: Category) => {
    setSelectedCategory(category)
  }

  return { selectedCategory, handleCategoryClick }
}

export default useCategory
