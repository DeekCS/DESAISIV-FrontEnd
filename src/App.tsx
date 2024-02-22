import { useEffect } from 'react'

import { getRecipes } from './services/spoonacularApis'

function App() {
  useEffect(() => {
    getRecipes()
  }, [])

  return (
    <div
      className="text-center 
      bg-primary
      min-h-screen flex items-center justify-center
      font-sans text-3xl"
    >
      <h1>Hello Desaisiv!</h1>
    </div>
  )
}

export default App
