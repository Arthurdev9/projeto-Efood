import styled from 'styled-components'
import { cores } from '../../styles'

export const ProductsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  padding: 40px;
  max-width: 1200px;
  margin: 0 auto;
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

export const AddButton = styled.button`
  width: 100%;
  padding: 12px;
  background-color: ${cores.branco};
  color: ${cores.vermelho};
  border: none;
  border-radius: 6px;
  font-weight: bold;
  cursor: pointer;
  transition: 0.2s ease;

  &:hover {
    background-color: ${cores.vermelho};
    color: ${cores.branco};
    border: 2px solid ${cores.branco};
  }
`
