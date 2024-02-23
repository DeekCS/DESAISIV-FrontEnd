import React, { HTMLAttributes, ReactNode } from 'react'

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode
}

const Card: React.FC<CardProps> = ({ children, ...rest }) => (
  <div
    {...rest}
    className="bg-white rounded-lg p-4 border-4 sm:w-64 md:w-56 lg:w-72 xl:w-80 2xl:w-80
      h-auto w-full sm:h-64 md:h-72 lg:h-auto xl:h-auto 2xl:h-auto
      cursor-pointer"
  >
    {children}
  </div>
)

export default Card
