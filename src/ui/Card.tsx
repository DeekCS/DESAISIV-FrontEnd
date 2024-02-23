import React, { HTMLAttributes, ReactNode } from 'react'

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode
}

const Card: React.FC<CardProps> = ({ children, ...rest }) => (
  <div
    {...rest}
    className="bg-card rounded-3xl  p-4 border-4 sm:w-64 md:w-56 lg:w-72 xl:w-80 2xl:w-80
      h-auto w-full sm:h-64 md:h-72 lg:h-auto xl:h-auto 2xl:h-auto
      cursor-pointer
      transition-all
      hover:shadow-lg
      hover:border-green-500
      hover:scale-105
      hover:duration-300
      hover:ease-in-out
      hover:transform
      mb-4
      sm:mb-0
      md:mb-0
      lg:mb-4
      xl:mb-20
      "
  >
    {children}
  </div>
)

export default Card
