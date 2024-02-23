import { ButtonHTMLAttributes, FC } from 'react'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  recipesStyle?: boolean
}

const Button: FC<ButtonProps> = ({ children, recipesStyle, ...rest }) => (
  <button
    className={`${
      recipesStyle
        ? 'bg-tertiary text-secondary hover:bg-secondary hover:text-tertiary hover:scale-105 mt-4 sm:mt-0 md:mt-0 lg:mt-0 xl:mt-4 2xl:mt-4 rounded-md px-6 py-2 font-bold tracking-wider transition duration-300 ease-in-out transform'
        : 'bg-transparent border-2 text-gray-700 font-bold py-2 px-6 rounded-full transition-all duration-300 ease-in-out transform hover:bg-black hover:text-white hover:scale-105'
    }`}
    {...rest}
  >
    {children}
  </button>
)

export default Button
