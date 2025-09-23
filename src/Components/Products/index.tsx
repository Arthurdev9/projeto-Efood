import Button from '../Button'

import * as S from './styles'
import close from '../../assets/images/close.png'

import { useState } from 'react'
import { ProductType } from '../../../types'
import { useDispatch } from 'react-redux'
import { add, open } from '../../store/reducers/cart'

export type Props = {
  products: ProductType[]
}

interface ModalState {
  isVisible: boolean
  product?: ProductType | null
}

export const formatPrice = (preco = 0) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(preco)
}

const Products = ({ products }: Props) => {
  const dispatch = useDispatch()

  const handleAddToCart = () => {
    dispatch(add(modal.product!))
    dispatch(open())
  }

  const [modal, setModal] = useState<ModalState>({
    isVisible: false,
    product: null
  })

  const closeModal = () => {
    setModal({ isVisible: false, product: null })
  }

  const getDescricao = (descricao: string) => {
    if (descricao.length > 220) {
      return descricao.slice(0, 218) + '...'
    }
    return descricao
  }

  if (!products || products.length === 0) {
    return <p>Nenhum produto disponível.</p>
  }

  return (
    <>
      <S.ProductsContainer>
        {products.map((product) => (
          <S.ProductCard key={product.id}>
            <S.ProductImage src={product.foto} alt={product.nome} />
            <S.ProductTitle>{product.nome}</S.ProductTitle>
            <S.ProductDescription>
              {getDescricao(product.descricao)}
            </S.ProductDescription>
            <Button
              type="button"
              title="Adicionar ao carrinho"
              onClick={() => setModal({ isVisible: true, product })}
            >
              Ver Prato
            </Button>
          </S.ProductCard>
        ))}
      </S.ProductsContainer>
      {modal.isVisible && modal.product && (
        <>
          <S.Overlay
            className="overlay"
            onClick={() => closeModal()}
          ></S.Overlay>
          <S.Modal className="visible">
            <img
              className="close-button"
              src={close}
              alt="Ícone de Fechar"
              onClick={() => closeModal()}
            />
            <S.ModalContent>
              <img src={modal.product.foto} alt={modal.product.nome} />
              <S.ModalDetails>
                <h4>{modal.product.nome}</h4>
                <p>{modal.product.porcao}</p>
                <p>{modal.product.descricao}</p>
                <Button
                  type="button"
                  title="Adicionar ao carrinho"
                  onClick={handleAddToCart}
                >
                  {`Adicionar ao carrinho ${formatPrice(modal.product.preco)}`}
                </Button>
              </S.ModalDetails>
            </S.ModalContent>
          </S.Modal>
        </>
      )}
    </>
  )
}

export default Products
