import styled from 'styled-components'
import { colors } from '../../styles'
import { SecondaryButton } from '../Button/styles'

export const OrderContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow-y: auto;

  form {
    display: flex;
    flex-direction: column;
    gap: 16px;

    input {
      width: 100%;
      padding: 12px;
      border-radius: 8px;
      border: none;
      font-size: 14px;
    }

    p {
      font-size: 12px;
      color: ${colors.white};
      margin-top: -10px;
      margin-bottom: 4px;
    }
  }

  ${SecondaryButton} {
    margin: 0;
  }
`

export const Row = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;

  input {
    width: 100%; // garante que cada input ocupe sua coluna
  }
`

export const OrderTitle = styled.h4`
  font-size: 20px;
  font-weight: bold;
  margin: 12px 0;
  color: ${colors.white};
`

export const OrderButton = styled.button`
  background-color: ${colors.red};
  color: ${colors.white};
  padding: 12px;
  margin-top: 8px;
  border: none;
  border-radius: 8px;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
  transition: 0.3s ease;

  &:hover {
    background-color: #c62828;
  }

  &[type='button'] {
    background-color: ${colors.blue};
    &:hover {
      background-color: #555;
    }
  }
`

export const Success = styled.div`
  p {
    color: ${colors.white};
    margin: 12px 0;
  }
`
