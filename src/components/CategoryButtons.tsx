import React from 'react'
import Button from '../ui/Button'
import { Category } from '../utils/types'

interface CategoryButtonProps {
  category: Category
  isSelected: boolean
  onClick: (category: Category) => void
}

const CategoryButton: React.FC<CategoryButtonProps> = ({
  category,
  isSelected,
  onClick,
}) => (
  <Button onClick={() => onClick(category)} isSelected={isSelected}>
    {category.name}
  </Button>
)

export default CategoryButton
