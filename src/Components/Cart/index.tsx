import { useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import bin from '../../assets/images/lixeira.png'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import {
  CartContainer,
  List,
  ListItemContainer,
  Overlay,
  Price,
  ProductImage,
  QuantityProducts,
  SideBar
} from './styles'
import Button from '../Button'
import { useDispatch } from 'react-redux'
import { add, close, removeProduct } from '../../store/reducers/cart'
import { JSX } from 'react'

const Cart = () => {
  const dispatch = useDispatch()
  const { items, isOpen } = useSelector((state: RootReducer) => state.cart)

  const closeCart = () => {
    dispatch(close())
  }

  const removeProductList = (id: number) => {
    dispatch(removeProduct(id))
  }

  const handleSidebarClick = (e: React.MouseEvent) => {
    e.stopPropagation()
  }

  const getTotalPrice = () => {
    return items.reduce((total, item) => total + item.preco * item.quantity, 0)
  }

  return (
    <CartContainer className={isOpen ? 'is-open' : ''} onClick={closeCart}>
      <Overlay />
      <SideBar onClick={handleSidebarClick}>
        <ul>
          {items.map((item) => (
            <List key={item.id}>
              <ProductImage src={item.foto} alt={item.nome} />
              <ListItemContainer>
                <h3>{item.nome}</h3>
                <p>R$ {item.preco.toFixed(2)}</p>
                <QuantityProducts>
                  <button onClick={() => dispatch(removeProduct(item.id))}>
                    {FaChevronLeft({}) as JSX.Element}{' '}
                  </button>
                  <span>{item.quantity}</span>
                  <button onClick={() => dispatch(add(item))}>
                    {FaChevronRight({}) as JSX.Element}{' '}
                  </button>
                </QuantityProducts>
                <img
                  src={bin}
                  alt="Lixeira"
                  onClick={() => removeProductList(item.id)}
                />
              </ListItemContainer>
            </List>
          ))}
        </ul>
        <Price>
          <p>Valor total</p>
          <span>R$ {getTotalPrice().toFixed(2)}</span>
        </Price>
        <Button type="button" title="Continuar com a entrega">
          Continuar com a entrega
        </Button>
      </SideBar>
    </CartContainer>
  )
}

export default Cart
