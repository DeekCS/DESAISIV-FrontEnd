import { ButtonHTMLAttributes, FC } from 'react'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  recipesStyle?: boolean
  isSelected?: boolean
}

const Button: FC<ButtonProps> = ({
  children,
  recipesStyle,
  isSelected,
  ...rest
}) => {
  const buttonClasses = `${
    recipesStyle
      ? `bg-tertiary text-secondary hover:bg-secondary hover:text-tertiary hover:scale-105 mt-4 sm:mt-0 md:mt-0 lg:mt-0 xl:mt-4 2xl:mt-4 rounded-md px-6 py-2 font-bold tracking-wider transition duration-300 ease-in-out transform`
      : isSelected
        ? `bg-black border-2 text-white font-bold py-2 px-6 rounded-full transition-all duration-300 ease-in-out transform hover:bg-black hover:text-white hover:scale-105
        ml-2 sm:ml-0 md:ml-0 lg:ml-0 xl:ml-2 2xl:ml-2
        `
        : `border-2 text-gray-700 font-bold py-2 px-6 rounded-full transition-all duration-300 ease-in-out transform hover:bg-black hover:text-white hover:scale-105
        ml-2 sm:ml-0 md:ml-0 lg:ml-0 xl:ml-2 2xl:ml-2
        `
  }`

  return (
    <button className={buttonClasses} {...rest}>
      {children}
    </button>
  )
}

export default Button
