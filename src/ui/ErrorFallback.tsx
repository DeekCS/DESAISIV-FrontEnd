import React from 'react'
import styled from 'styled-components'
import Button from './Button'

const StyledErrorFallback = styled.main`
  height: 100vh;
  background-color: #f8f9fa; /* Default grey background color */
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4.8rem;
`

const Box = styled.div`
  /* Box */
  background-color: #ffffff; /* Default white background color */
  border: 1px solid #f1f3f5; /* Default grey border color */
  border-radius: 0.4rem; /* Default border radius */

  padding: 4.8rem;
  flex: 0 1 60rem; /* Adjusted flex size */
  text-align: center;

  & h1 {
    margin-bottom: 1.6rem;
  }

  & p {
    font-family: 'Sono';
    margin-bottom: 3.2rem;
    color: #868e96; /* Default grey text color */
  }
`

interface ErrorFallbackProps {
  error: Error
  resetErrorBoundary: () => void
}

const ErrorFallback: React.FC<ErrorFallbackProps> = ({
  error,
  resetErrorBoundary,
}) => {
  return (
    <>
      <StyledErrorFallback>
        <Box>
          <h1 className="text-4xl font-bold">Something went wrong 🧐</h1>

          <p>{error.message}</p>
          <Button onClick={resetErrorBoundary}>Try again</Button>
        </Box>
      </StyledErrorFallback>
    </>
  )
}

export default ErrorFallback
