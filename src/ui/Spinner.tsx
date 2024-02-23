import styled, { keyframes } from 'styled-components'

const rotate = keyframes`
  to {
    transform: rotate(1turn);
  }
`

interface SpinnerProps {
  primaryColor?: string
  secondaryColor?: string
}

const Spinner = styled.div<SpinnerProps>`
  margin: 4.8rem auto;
  width: 6.4rem;
  height: 6.4rem;
  border-radius: 50%;
  background:
    radial-gradient(
        farthest-side,
        ${(props) => props.primaryColor || '#55c7c7'} 94%,
        #0000
      )
      top/10px 10px no-repeat,
    conic-gradient(#0000 30%, ${(props) => props.secondaryColor || '#43C387'});
  -webkit-mask: radial-gradient(farthest-side, #0000 calc(100% - 10px), #000 0);
  animation: ${rotate} 1.5s infinite linear;
`

export default Spinner
