import * as S from './styles'

import backgroundImg from '../../assets/images/fundo.png'
import logo from '../../assets/images/logo (1).png'

import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { useDispatch } from 'react-redux'
import { open } from '../../store/reducers/cart'

type HeaderProps = {
  variant?: 'home' | 'restaurant'
  title?: string
  subtitle?: string
  showCart?: boolean
}

const Header = ({
  variant = 'home',
  title,
  subtitle,
  showCart
}: HeaderProps) => {
  const dispatch = useDispatch()
  const { items } = useSelector((state: RootReducer) => state.cart)
  const navigate = useNavigate()

  const openCart = () => {
    dispatch(open())
  }

  const totalItems = items.reduce((acc, item) => acc + item.quantity, 0)

  return (
    <>
      {variant === 'home' && (
        <S.Image
          variant="home"
          style={{ backgroundImage: `url(${backgroundImg})` }}
        >
          <div className="container">
            <img src={logo} alt="Efood" />
            <S.Title>
              Viva experiências gastronômicas
              <br /> no conforto da sua casa
            </S.Title>
          </div>
        </S.Image>
      )}

      {variant === 'restaurant' && (
        <S.Image
          variant="restaurant"
          style={{ backgroundImage: `url(${backgroundImg})` }}
        >
          <S.ContainerRestaurant>
            <nav>
              <S.NavList>
                <li>
                  <S.NavLink to="/">Restaurantes</S.NavLink>
                </li>
                <li>
                  <img src={logo} alt="Efood" onClick={() => navigate('/')} />
                </li>
                <li>
                  <h2 onClick={openCart}>
                    {totalItems} produto{totalItems !== 1 ? 's' : ''} no
                    carrinho
                  </h2>
                </li>
              </S.NavList>
            </nav>
          </S.ContainerRestaurant>
        </S.Image>
      )}

      {showCart && <button>🛒 Ver carrinho</button>}
    </>
  )
}

export default Header
