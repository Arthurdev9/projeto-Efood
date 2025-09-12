import styled from 'styled-components'
import { breakpoints, cores } from '../../styles'

export const ProductsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  padding: 40px;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: ${breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }

  @media (min-width: ${breakpoints.tablet}) and (max-width: ${breakpoints.desktop}) {
    grid-template-columns: 1fr 1fr;
  }
`

export const ProductCard = styled.div`
  background-color: ${cores.vermelho};
  border-radius: 8px;
  padding: 18px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-4px);
  }
`

export const ProductImage = styled.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
  border-radius: 6px;
  margin-bottom: 12px;
`

export const ProductTitle = styled.h4`
  font-size: 18px;
  margin-bottom: 8px;
  color: ${cores.branco};
`

export const ProductDescription = styled.p`
  font-size: 14px;
  color: ${cores.branco};
  margin-bottom: 16px;
  line-height: 1.5;
`

export const Modal = styled.div`
  position: fixed;
  inset: 0;
  margin: auto;
  width: 960px;
  height: 340px;
  z-index: 1;
  background-color: ${cores.vermelho};

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.73);
  }

  .close-button {
    position: absolute;
    top: 8px;
    right: 8px;
    width: 16px;
    height: 16px;
    cursor: pointer;

    @media (max-width: ${breakpoints.tablet}) {
      top: 4px;
      right: 4px;
    }
  }

  @media (max-width: ${breakpoints.tablet}) {
    width: 80%;
    height: 620px;
  }

  @media (max-width: ${breakpoints.desktop}) {
    width: 100%;
  }
`

export const ModalContent = styled.header`
  display: flex;
  padding: 24px;

  img {
    width: 280px;
    height: 280px;
    object-fit: cover;

    @media (max-width: ${breakpoints.tablet}) {
      width: 80vw;
      height: auto;
      padding-top: 8px;
    }
  }

  @media (max-width: ${breakpoints.tablet}) {
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 16px;
  }
`

export const ModalDetails = styled.div`
  display: flex;
  padding: 15px;
  flex-direction: column;
  position: relative;

  h4 {
    font-size: 18px;
    font-weight: bold;
    color: ${cores.branco};
  }

  p {
    margin: 24px 0;
    font-weight: bold;
    color: ${cores.branco};
  }

  img {
    width: 16px;
    height: 16px;
    position: absolute;
    top: 0;
    right: 0;
    cursor: pointer;
  }
`

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.73);
  z-index: 1;
`
