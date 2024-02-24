import React from 'react'
import CategoryButton from './CategoryButtons'
import { categories } from '../utils/types'
import useCategory from '../context/CategoryContext'

const CategoryList: React.FC = () => {
  const { selectedCategory, handleCategoryClick } = useCategory()

  return (
    <div
      className="flex justify-center flex-row space-x-4 mt-8 mb-8
      "
    >
      {categories.map((category) => (
        <CategoryButton
          key={category.id}
          category={category}
          onClick={handleCategoryClick}
          isSelected={selectedCategory.name === category.name}
        />
      ))}
    </div>
  )
}

export default CategoryList
