import { useState } from 'react'
import Button from '../Button'
import {
  Modal,
  ModalContent,
  ModalDetails,
  Overlay,
  ProductCard,
  ProductDescription,
  ProductImage,
  ProductsContainer,
  ProductTitle
} from './styles'

import close from '../../assets/images/close.png'
import { ProductType } from '../../pages/Home'
import { useDispatch } from 'react-redux'
import { add, open } from '../../store/reducers/cart'

export type Props = {
  products: ProductType[]
}

interface ModalState {
  isVisible: boolean
  product?: ProductType | null
}

export const formataPreco = (preco = 0) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(preco)
}

const Products = ({ products }: Props) => {
  const dispatch = useDispatch()

  const cartOpen = () => {
    dispatch(open())
  }

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
      <ProductsContainer>
        {products.map((product) => (
          <ProductCard key={product.id}>
            <ProductImage src={product.foto} alt={product.nome} />
            <ProductTitle>{product.nome}</ProductTitle>
            <ProductDescription>
              {getDescricao(product.descricao)}
            </ProductDescription>
            <Button
              type="button"
              title="Adicionar ao carrinho"
              onClick={() => setModal({ isVisible: true, product })}
            >
              Ver Prato
            </Button>
          </ProductCard>
        ))}
      </ProductsContainer>
      {modal.isVisible && modal.product && (
        <>
          <Overlay className="overlay" onClick={() => closeModal()}></Overlay>
          <Modal className="visible">
            <ModalContent>
              <img src={modal.product.foto} />
              <ModalDetails>
                <h4>{modal.product.nome}</h4>
                <p>{modal.product.porcao}</p>
                <p>{modal.product.descricao}</p>
                <Button
                  type="button"
                  title="Adicionar ao carrinho"
                  onClick={handleAddToCart}
                >
                  {`Adicionar ao carrinho ${formataPreco(modal.product.preco)}`}
                </Button>
                <img
                  src={close}
                  alt="Ícone de Fechar"
                  onClick={() => closeModal()}
                />
              </ModalDetails>
            </ModalContent>
          </Modal>
        </>
      )}
    </>
  )
}

export default Products
