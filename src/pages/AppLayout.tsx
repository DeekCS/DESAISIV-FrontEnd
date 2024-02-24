import React from 'react'
import Header from '../ui/Header'
import { Outlet } from 'react-router-dom'
import SearchBar from '../ui/SearchBar'
import CategoryList from '../components/CategoryList'

const AppLayout: React.FC = () => {
  return (
    <div className="min-h-screen bg-primary p-8" data-testid="app-layout">
      <SearchBar placeholder="Search for recipes" />
      <Header />
      <CategoryList />
      <main className="flex-grow">
        <Outlet />
      </main>
    </div>
  )
}

export default AppLayout
