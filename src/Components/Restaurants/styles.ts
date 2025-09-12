import styled from 'styled-components'
import { breakpoints, cores } from '../../styles'
import { ButtonLink } from '../Button/styles'

export type Props = {
  position?: 'left' | 'right'
}

export const RestaurantsItens = styled.div`
  width: 470px;
  border: 1px solid ${cores.vermelho};
  position: relative;
  max-height: 530px;
  height: 100%;

  @media (max-width: ${breakpoints.tablet}) {
    max-width: 320px;
    height: 530px;
    width: 100%;
    margin: 0 auto;
  }

  @media (max-width: ${breakpoints.desktop}) {
    margin: 0 auto;
  }

  img {
    width: 100%;
    object-fit: cover;
    height: 300px;

    @media (max-width: ${breakpoints.tablet}) {
      height: 240px;
    }
  }
`

export const Description = styled.div`
  padding: 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 200px;

  p {
    font-weight: bold;
    margin: 8px 0;
  }

  ${ButtonLink} {
    position: absolute;
    bottom: 5px;
    max-width: 100px;
    width: 100%;
  }
`
export const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px;
`

export const Assessment = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  img {
    height: 16px;
    margin-bottom: 4px;
  }
`

export const Badge = styled.span<Props>`
  background-color: ${cores.vermelho};
  font-weight: 500;
  color: ${cores.branco};
  padding: 5px;
  position: absolute;
  top: 6px;

  ${(props) => (props.position === 'left' ? 'left: 10px; ' : 'right: 10px;')}

  @media (max-width: ${breakpoints.tablet}) {
    padding: 3px;
  }
`
