import styled from 'styled-components'
import { colors } from '../../styles'

export const ButtonLink = styled.button`
  font-size: 14px;
  font-weight: bold;
  padding: 8px;
  color: ${colors.white};
  background-color: ${colors.red};
  border: none;
  border: 1px solid transparent;
  cursor: pointer;
  transition: ease-in-out 0.2s;
  display: block;
  margin-top: 12px;

  &:hover {
    background-color: ${colors.white};
    color: ${colors.red};
    border: 1px solid ${colors.red};
    transition: ease-in-out 0.2s;
  }
`

export const SecondaryButton = styled.button`
  font-size: 14px;
  font-weight: bold;
  padding: 8px;
  border: 1px solid ${colors.red};
  color: ${colors.red};
  background-color: ${colors.white};
  cursor: pointer;
  width: 100%;
  transition: ease-in-out 0.2s;

  &:hover {
    background-color: ${colors.red};
    color: ${colors.white};
    border: 1px solid ${colors.white};
    transition: ease-in-out 0.2s;
  }
`
