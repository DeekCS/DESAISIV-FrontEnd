import React, { createContext, useState, ReactNode } from 'react'
import { useNavigate } from 'react-router-dom'
import { Category, categories } from '../utils/types'

interface CategoryContextProps {
  selectedCategory: Category
  handleCategoryClick: (category: Category) => void
}

const CategoryContext = createContext<CategoryContextProps | undefined>(
  undefined,
)

interface CategoryProviderProps {
  children: ReactNode
}

export const CategoryProvider: React.FC<CategoryProviderProps> = ({
  children,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<Category>(
    categories[0],
  )

  const navigate = useNavigate()

  const handleCategoryClick = (category: Category) => {
    setSelectedCategory(category)
    navigate('/home')
  }

  return (
    <CategoryContext.Provider value={{ selectedCategory, handleCategoryClick }}>
      {children}
    </CategoryContext.Provider>
  )
}

const useCategory = () => {
  const context = React.useContext(CategoryContext)
  if (context === undefined) {
    throw new Error('useCategory must be used within a CategoryProvider')
  }
  return context
}

export default useCategory
