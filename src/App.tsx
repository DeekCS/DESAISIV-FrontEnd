import { useEffect } from 'react'

import { getRecipes } from './services/spoonacularApis'
function App() {
  useEffect(() => {
    getRecipes()
  }, [])

  return (
    <div>
      <h1>Hello Desaisiv!</h1>
    </div>
  )
}

export default App
