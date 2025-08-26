import hiokiSushi from '../../assets/images/hioki.png'
import { Description, RestaurantsItens } from './styles'

const Restaurants = () => {
  return (
    <RestaurantsItens>
      <img src={hiokiSushi} alt="Hioki Sushi" />
      <Description>
        <h3>Hioki Sushi</h3>
        <p>
          Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis
          frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega
          rápida, embalagens cuidadosas e qualidade garantida.Experimente o
          Japão sem sair do lar com nosso delivery!
        </p>
        <button>Saiba Mais</button>
      </Description>
    </RestaurantsItens>
  )
}

export default Restaurants
