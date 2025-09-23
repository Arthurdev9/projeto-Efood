import * as S from './styles'

import backgroundImg from '../../assets/images/fundo.png'
import logo from '../../assets/images/logo (1).png'
import instagram from '../../assets/images/instagram.png'
import facebook from '../../assets/images/facebook.png'
import twitter from '../../assets/images/Twitter.png'

const Footer = () => {
  return (
    <S.Image style={{ backgroundImage: `url(${backgroundImg})` }}>
      <div className="container">
        <img src={logo} alt="Efood" />
        <S.ContainerImg>
          <img src={instagram} alt="Instagram" />
          <img src={facebook} alt="Facebook" />
          <img src={twitter} alt="Twitter" />
        </S.ContainerImg>
        <S.Description>
          A efood é uma plataforma para divulgação de estabelecimentos, a
          responsabilidade pela entrega,
          <br /> qualidade dos produtos é toda do estabelecimento contratado.
        </S.Description>
      </div>
    </S.Image>
  )
}

export default Footer
