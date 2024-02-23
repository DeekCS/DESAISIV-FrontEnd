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

function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 60 * 1000,
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
