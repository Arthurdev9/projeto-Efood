import styled from 'styled-components'

type ImageProps = {
  variant?: 'home' | 'restaurant'
}

export const Image = styled.header<ImageProps>`
  width: 100%;
  height: ${(props) => (props.variant === 'restaurant' ? '186px' : '384px')};
  background-repeat: no-repeat;
  background-size: cover;
  padding: 40px;

  .container {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  img {
    margin-bottom: 8rem;
  }
`

export const Title = styled.h1`
  font-weight: bold;
  font-size: 36px;
  text-align: center;
`

export const ContainerRestaurant = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;

  img {
    margin: 0;
  }
`
