import styled from 'styled-components'
import { cores } from '../../styles'

export type Props = {
  position?: 'left' | 'right'
}

export const RestaurantsItens = styled.div`
  width: 470px;
  border: 1px solid ${cores.vermelho};
  position: relative;

  img {
    width: 100%;
    object-fit: cover;
  }
`

export const Description = styled.div`
  padding: 8px;

  p {
    margin: 12px 0;
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
  padding: 2px;
  position: absolute;
  top: 6px;

  ${(props) => (props.position === 'left' ? 'left: 240px;' : 'right: 10px;')}
`
