import { ContainerRestaurant, Image, NavList, Title, NavLink } from './styles'

import backgroundImg from '../../assets/images/fundo.png'
import logo from '../../assets/images/logo (1).png'
import { Link } from 'react-router-dom'

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
  return (
    <>
      {variant === 'home' && (
        <Image
          variant="home"
          style={{ backgroundImage: `url(${backgroundImg})` }}
        >
          <div className="container">
            <img src={logo} alt="Efood" />
            <Title>
              Viva experiências gastronômicas
              <br /> no conforto da sua casa
            </Title>
          </div>
        </Image>
      )}

      {variant === 'restaurant' && (
        <Image
          variant="restaurant"
          style={{ backgroundImage: `url(${backgroundImg})` }}
        >
          <ContainerRestaurant>
            <nav>
              <NavList>
                <li>
                  <NavLink to="/">Restaurantes</NavLink>
                </li>
                <li>
                  <img src={logo} alt="Efood" />
                </li>
                <li>
                  <h2>0 produtos no carrinho</h2>
                </li>
              </NavList>
            </nav>
          </ContainerRestaurant>
        </Image>
      )}

      {showCart && <button>🛒 Ver carrinho</button>}
    </>
  )
}

export default Header
