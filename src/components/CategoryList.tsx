import React from 'react'
import CategoryButton from './CategoryButtons'
import { categories } from '../utils/types'
import useCategory from '../context/CategoryContext'

const CategoryList: React.FC = () => {
  const { selectedCategory, handleCategoryClick } = useCategory()

  return (
    <div className="flex justify-center flex-row space-x-4 mt-8 mb-8 flex-wrap sm:flex-nowrap md:flex-nowrap lg:flex-nowrap xl:flex-wrap 2xl:flex-wrap mb-4 sm:mb-0">
      {categories.map((category, index) => (
        <CategoryButton
          key={index}
          category={category}
          onClick={handleCategoryClick}
          isSelected={selectedCategory.name === category.name}
        />
      ))}
    </div>
  )
}

export default CategoryList
