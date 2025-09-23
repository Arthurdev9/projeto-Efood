import Button from '../Button'
import Checkout from '../Checkout'

import * as S from './styles'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import bin from '../../assets/images/lixeira.png'

import { useSelector, useDispatch } from 'react-redux'
import { RootReducer } from '../../store'
import { close, openOrder, removeProduct, add } from '../../store/reducers/cart'
import { JSX } from 'react'

const Cart = () => {
  const { items, isOpen, isOrder } = useSelector(
    (state: RootReducer) => state.cart
  )
  const dispatch = useDispatch()

  const closeCart = () => dispatch(close())

  const getTotalPrice = () =>
    items.reduce((total, item) => total + item.preco * item.quantity, 0)

  if (!isOpen) return null

  return (
    <S.CartContainer className={isOpen ? 'is-open' : ''} onClick={closeCart}>
      <S.Overlay />
      <S.SideBar onClick={(e) => e.stopPropagation()}>
        {isOrder ? (
          <Checkout />
        ) : (
          <>
            {' '}
            <ul>
              {items.map((item) => (
                <S.List key={item.id}>
                  <S.ProductImage src={item.foto} alt={item.nome} />
                  <S.ListItemContainer>
                    <h3>{item.nome}</h3>
                    <p>R$ {item.preco.toFixed(2)}</p>
                    <S.QuantityProducts>
                      <button onClick={() => dispatch(removeProduct(item.id))}>
                        {FaChevronLeft({}) as JSX.Element}{' '}
                      </button>
                      <span>{item.quantity}</span>
                      <button onClick={() => dispatch(add(item))}>
                        {FaChevronRight({}) as JSX.Element}{' '}
                      </button>
                    </S.QuantityProducts>
                    <img
                      src={bin}
                      alt="Lixeira"
                      onClick={() => dispatch(removeProduct(item.id))}
                    />
                  </S.ListItemContainer>
                </S.List>
              ))}
            </ul>
            {items.length === 0 ? (
              <p>Seu carrinho está vazio</p>
            ) : (
              <>
                <S.Price>
                  <p>Total:</p>
                  <span>R$ {getTotalPrice().toFixed(2)}</span>
                </S.Price>
                <Button
                  onClick={() => dispatch(openOrder())}
                  type="button"
                  title="Continuar com a entrega"
                >
                  Continuar com a entrega
                </Button>
              </>
            )}
          </>
        )}
      </S.SideBar>
    </S.CartContainer>
  )
}

export default Cart
