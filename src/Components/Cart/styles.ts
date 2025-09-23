import styled from 'styled-components'
import { breakpoints, colors } from '../../styles'
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
  background-color: ${colors.red};
  overflow-y: auto;
  z-index: 2;
  transform: translateX(100%);
  transition: transform 0.3s ease-in-out;

  ${CartContainer}.is-open & {
    transform: translateX(0);
  }

  ${SecondaryButton} {
    padding: 4px;
    margin-bottom: 8px;
  }

  p {
    color: ${colors.white};
    display: flex;
    margin-top: 16px;
    justify-content: center;
    font-weight: bold;
  }

  @media (max-width: ${breakpoints.tablet}) {
    max-width: 300px;
  }
`

export const Price = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 24px 0px;
  padding: 16px;

  border-radius: 4px;

  p {
    font-weight: bold;
    font-size: 14px;
    color: ${colors.white};
  }

  span {
    font-weight: bold;
    font-size: 14px;
    color: ${colors.white};
    margin-top: 16px;
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
    color: ${colors.red};
    justify-content: flex-start;
    margin: 8px 0;
  }
`

export const List = styled.li`
  display: flex;
  background-color: ${colors.white};
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

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;

  label {
    color: ${colors.white};
    margin: 12px 0;
    font-weight: bold;
    font-size: 14px;
  }

  input {
    border: none;
    padding: 6px;
  }
`

export const InputInline = styled.div`
  display: flex;
  gap: 12px;

  div {
    flex: 1;
    display: flex;
    flex-direction: column;
  }

  label {
    display: block;
  }
`

export const PaymentGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
  margin-bottom: 16px;

  > div {
    display: flex;
    flex-direction: column;
  }
`

export const Success = styled.div`
  h4 {
    color: ${colors.white};
  }
  p {
    color: ${colors.white};
    margin: 16px 0;
  }
`
