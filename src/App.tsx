import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom'
import Home from './pages/Home'
import PageNotFound from './pages/PageNotFound'
import AppLayout from './pages/AppLayout'
import { SearchProvider } from './context/SearchContext'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { TotalResultsProvider } from './context/TotalResultsContext'
import Recipe from './pages/Recipe'

function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
      },
    },
  })

  return (
    <Router>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />

        <SearchProvider>
          <TotalResultsProvider>
            <Routes>
              <Route
                element={
                  <TotalResultsProvider>
                    <AppLayout />
                  </TotalResultsProvider>
                }
              >
                <Route index element={<Navigate replace to="home" />} />
                <Route path="home" element={<Home />} />
                <Route path="/details/:id" element={<Recipe />} />
              </Route>

              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </TotalResultsProvider>
        </SearchProvider>
      </QueryClientProvider>
    </Router>
  )
}

export default App
