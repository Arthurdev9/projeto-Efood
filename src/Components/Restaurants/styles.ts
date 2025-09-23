import styled from 'styled-components'
import { breakpoints, colors } from '../../styles'
import { ButtonLink } from '../Button/styles'

export type Props = {
  position?: 'left' | 'right'
}

export const RestaurantsItens = styled.div`
  width: 470px;
  border: 1px solid ${colors.red};
  position: relative;
  max-height: 530px;
  height: 100%;
  box-shadow:
    0 2px 4px rgba(0, 0, 0, 0.2),
    0 8px 16px rgba(0, 0, 0, 0.15);

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
  background-color: ${colors.red};
  font-weight: 500;
  color: ${colors.white};
  padding: 5px;
  position: absolute;
  top: 6px;

  ${(props) => (props.position === 'left' ? 'left: 10px; ' : 'right: 10px;')}

  @media (max-width: ${breakpoints.tablet}) {
    padding: 3px;
  }
`
