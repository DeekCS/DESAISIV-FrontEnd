import { useEffect } from 'react'
import { getRecipes } from './services/spoonacularApis'
import Button from './ui/Button'
import Card from './ui/Card'
import Divider from './ui/Divider'
import Header from './ui/Header'
import SearchBar from './ui/SearchBar'
import Image from './ui/Image'

function App() {
  // Fetch recipes on component mount
  useEffect(() => {
    getRecipes()
  }, [])

  // Categories for buttons
  const categories = ['Pizza', 'Deserts', 'Noodles', 'Salads', 'Italian']

  return (
    <div className="min-h-screen bg-primary p-8">
      {/* Search bar */}
      <SearchBar placeholder="Search for recipes" onSearch={console.log} />

      {/* Header */}
      <Header />

      {/* Category Buttons */}
      <div className="flex flex-wrap justify-center sm:justify-start md:justify-start lg:justify-start xl:justify-start 2xl:justify-start gap-5 mt-2 sm:mt-0 md:mt-0 lg:mt-0 xl:mt-2 2xl:mt-2">
        {categories.map((category, index) => (
          <Button key={index}>{category}</Button>
        ))}
      </div>

      {/* Divider */}
      <Divider />

      {/* Recipe Cards */}
      <div className="flex flex-row flex-wrap gap-5 sm:justify-start mt-0 lg:mt-28">
        <Card>
          {/* Recipe Image */}
          <div className="-mt-8 sm:-mt-14 md:-mt-16 lg:-mt-20 xl:-mt-24 2xl:-mt-24">
            <Image src="https://source.unsplash.com/400x400/?food" />
          </div>

          {/* Recipe Details */}
          <div className="flex flex-col items-center justify-center text-center p-4">
            <h2 className="text-2xl font-bold">Spaghetti</h2>
            <p className="text-gray-500">
              Spaghetti is a long, thin, solid, cylindrical pasta. It is a
              staple food of traditional Italian cuisine.
            </p>

            {/* Time to Cook and Cook Button */}
            <div className="flex flex-col items-center justify-between space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4 mt-4 sm:mt-6 md:mt-8 lg:mt-10 xl:mt-12 2xl:mt-12">
              {/* Time to Cook */}
              <p className="text-gray-500">30 minutes</p>

              {/* Cook Button */}
              <Button recipesStyle>Cook</Button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}

export default App
