import { Image, Title } from './styles'

import backgroundImg from '../../assets/images/fundo.png'
import logo from '../../assets/images/logo (1).png'

const Header = () => {
  return (
    <Image style={{ backgroundImage: `url(${backgroundImg})` }}>
      <div className="container">
        <img src={logo} alt="Efood" />
        <Title>
          Viva experiências gastronômicas
          <br /> no conforto da sua casa
        </Title>
      </div>
    </Image>
  )
}

export default Header
