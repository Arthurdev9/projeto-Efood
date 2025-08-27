import styled from 'styled-components'
import { cores } from '../../styles'

export const Image = styled.footer`
  width: 100%;
  height: 300px;
  background-repeat: no-repeat;
  background-size: cover;
  padding: 40px;

  .container {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
`

export const Description = styled.p`
  font-size: 14px;
  text-align: center;
`

export const ContainerImg = styled.div`
  margin: 3rem 0;

  img {
    margin-left: 8px;
    cursor: pointer;
  }
`
