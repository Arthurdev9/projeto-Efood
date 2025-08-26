import styled from 'styled-components'

export const Image = styled.div`
  width: 100%;
  height: 384px;
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
