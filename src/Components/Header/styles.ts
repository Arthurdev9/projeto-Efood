import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { breakpoints } from '../../styles'

type ImageProps = {
  variant?: 'home' | 'restaurant'
}

export const Image = styled.header<ImageProps>`
  width: 100%;
  height: ${(props) => (props.variant === 'restaurant' ? '186px' : '384px')};
  background-repeat: no-repeat;
  background-size: cover;
  padding: 40px;
  overflow-x: hidden;
  overflow-y: hidden;

  .container {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  img {
    margin-bottom: 8rem;
    cursor: pointer;
  }
`

export const Title = styled.h1`
  font-weight: bold;
  font-size: 36px;
  text-align: center;

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 28px;
  }
`

export const ContainerRestaurant = styled.div`
  padding: 8px;

  @media (max-width: ${breakpoints.tablet}) {
    padding: 0;
  }

  img {
    margin: 0;
  }
`

export const NavList = styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: center;

  li {
    display: flex;
    width: 100%;
    justify-content: center;
    h2 {
      cursor: pointer;
      font-size: 20px;
      max-width: 100%;
    }
  }

  @media (max-width: ${breakpoints.tablet}) {
    flex-direction: column;
    width: 100%;
    gap: 8px;
  }
`

export const NavLink = styled(Link)`
  text-decoration: none;
  font-weight: bold;
  font-size: 18px;
`
