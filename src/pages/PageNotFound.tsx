import styled from 'styled-components'

import { useMoveBack } from '../hooks/useMoveBack'
import Button from '../ui/Button'

const StyledPageNotFound = styled.main`
  height: 100vh;
  background-color: #f5f5f5;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4.8rem;
`

const Box = styled.div`
  /* box */
  background-color: '#fff';
  border: 1px solid '#e5e7eb';
  border-radius: 0.8rem;

  padding: 4.8rem;
  flex: 0 1 96rem;
  text-align: center;

  & h1 {
    margin-bottom: 3.2rem;
  }
`

function PageNotFound() {
  const moveBack = useMoveBack()

  return (
    <StyledPageNotFound>
      <Box>
        <h1 className="text-4xl font-bold text-gray-800">
          The page you are looking for could not be found 😢
        </h1>
        <Button onClick={moveBack}>&larr; Go back</Button>
      </Box>
    </StyledPageNotFound>
  )
}

export default PageNotFound
