import styled from 'styled-components'
import { cores } from '../../styles'

export const ButtonLink = styled.button`
  font-size: 14px;
  font-weight: bold;
  padding: 8px;
  color: ${cores.branco};
  background-color: ${cores.vermelho};
  border: none;
  border: 1px solid transparent;
  cursor: pointer;
  transition: ease-in-out 0.2s;
  display: block;
  margin-top: 12px;

  &:hover {
    background-color: ${cores.branco};
    color: ${cores.vermelho};
    border: 1px solid ${cores.vermelho};
    transition: ease-in-out 0.2s;
  }
`

export const SecondaryButton = styled.button`
  font-size: 14px;
  font-weight: bold;
  padding: 8px;
  border: 1px solid ${cores.vermelho};
  color: ${cores.vermelho};
  background-color: ${cores.branco};
  cursor: pointer;
  width: 100%;
  transition: ease-in-out 0.2s;

  &:hover {
    background-color: ${cores.vermelho};
    color: ${cores.branco};
    border: 1px solid ${cores.branco};
    transition: ease-in-out 0.2s;
  }
`
