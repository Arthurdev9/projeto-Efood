import styled from 'styled-components'
import { cores } from '../../styles'

type Props = {
  image: string
}

export const Banner = styled.div<Props>`
  height: 280px;
  background-repeat: no-repeat;
  background-size: cover;
  padding: 60px;

  background-image:
    linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
    url(${(props) => props.image});
`

export const Type = styled.p`
  font-size: 32px;
  color: ${cores.branco};
  font-weight: 100;
`

export const Assessment = styled.h3`
  font-size: 32px;
  font-weight: bold;
  color: ${cores.branco};
  padding-top: 90px;
`
