import { ContainerRestaurant, Image, Title } from './styles'

import backgroundImg from '../../assets/images/fundo.png'
import logo from '../../assets/images/logo (1).png'

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
            <h3>Restaurantes</h3>
            <img src={logo} alt="Efood" />
            <h2>0 produtos no carrinho</h2>
          </ContainerRestaurant>
        </Image>
      )}

      {showCart && <button>🛒 Ver carrinho</button>}
    </>
  )
}

export default Header
