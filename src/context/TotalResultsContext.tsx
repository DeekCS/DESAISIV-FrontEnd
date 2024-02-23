import React, { createContext, useContext, useState, ReactNode } from 'react'

interface TotalResultsContextProps {
  totalResults?: number | undefined
  updateTotalResults: (newTotalResults: number | undefined) => void
}

const TotalResultsContext = createContext<TotalResultsContextProps | undefined>(
  undefined,
)

interface TotalResultsProviderProps {
  children: ReactNode
}

export const TotalResultsProvider: React.FC<TotalResultsProviderProps> = ({
  children,
}) => {
  const [totalResults, setTotalResults] = useState<number | undefined>(
    undefined,
  )

  const updateTotalResults = (newTotalResults: number | undefined) => {
    setTotalResults(newTotalResults)
  }

  return (
    <TotalResultsContext.Provider value={{ totalResults, updateTotalResults }}>
      {children}
    </TotalResultsContext.Provider>
  )
}

export const useTotalResults = (): TotalResultsContextProps => {
  const context = useContext(TotalResultsContext)
  if (!context) {
    throw new Error(
      'useTotalResults must be used within a TotalResultsProvider',
    )
  }
  return context
}
