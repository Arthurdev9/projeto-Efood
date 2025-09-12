import styled from 'styled-components'
import { breakpoints } from '../../styles'

export const ContainerGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 470px);
  gap: 60px;
  justify-content: center;
  margin: 50px 0;

  @media (max-width: ${breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }

  @media (max-width: ${breakpoints.desktop}) {
    grid-template-columns: 1fr;
  }
`
