import hiokiSushi from '../../assets/images/hioki.png'
import estrela from '../../assets/images/estrela.png'
import Button from '../Button'
import {
  Assessment,
  Badge,
  Description,
  RestaurantsItens,
  Title
} from './styles'

// type Props = {
//   id: number
//   titulo: string
//   destacado?: boolean
//   tipo: string
//   avaliacao: number
//   descricao: string
//   capa: string
// }

type PropsSpan = {
  position?: 'left' | 'right'
}

const Restaurants = () => {
  return (
    <RestaurantsItens>
      <img src={hiokiSushi} alt="Hioki Sushi" />
      <Title>
        <h3>Hioki Sushi</h3>
        <Assessment>
          <h3>4.9</h3>
          <img src={estrela} alt="Estrela" />
        </Assessment>
      </Title>
      <Description>
        <p>
          Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis
          frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega
          rápida, embalagens cuidadosas e qualidade garantida.Experimente o
          Japão sem sair do lar com nosso delivery!
        </p>
        <Button type="link" title="Saiba Mais">
          Saiba mais
        </Button>
      </Description>
      <div>
        <Badge position="left">Destaque da semana</Badge>
        <Badge position="right">italiana</Badge>
      </div>
    </RestaurantsItens>
  )
}

export default Restaurants
