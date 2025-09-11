import styled from 'styled-components'
import { cores } from '../../styles'
import { SecondaryButton } from '../Button/styles'

export const CartContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  z-index: 1000;

  &.is-open {
    display: block;
  }
`

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.6;
  z-index: 1;
`

export const SideBar = styled.aside`
  position: absolute;
  top: 0;
  right: 0;
  max-width: 360px;
  width: 100%;
  height: 100%;
  padding: 12px;
  background-color: ${cores.vermelho};
  overflow-y: auto;
  z-index: 2;
  transform: translateX(100%);
  transition: transform 0.3s ease-in-out;

  ${CartContainer}.is-open & {
    transform: translateX(0);
  }

  ${SecondaryButton} {
    padding: 4px;
  }
`

export const Price = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 24px 0px;
  padding: 16px;

  border-radius: 4px;

  p {
    font-weight: bold;
    font-size: 14px;
    color: ${cores.branco};
  }

  span {
    font-weight: bold;
    font-size: 14px;
    color: ${cores.branco};
  }
`

export const ListItemContainer = styled.div`
  padding-left: 6px;
  position: relative;
  flex: 1;

  img {
    width: 16px;
    height: 16px;
    position: absolute;
    right: 0;
    bottom: 0;
    cursor: pointer;
  }

  p {
    margin: 8px 0;
  }
`

export const List = styled.li`
  display: flex;
  background-color: ${cores.branco};
  padding: 8px;
  margin-bottom: 8px;
  border-radius: 4px;
`

export const ProductImage = styled.img`
  width: 80px;
  height: 80px;
  object-fit: cover;
  cursor: pointer;
`

export const QuantityProducts = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;

  button {
    background-color: transparent;
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
  }

  span {
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    min-width: 20px;
  }
`
