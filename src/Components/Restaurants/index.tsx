import { useNavigate } from 'react-router-dom'
import estrela from '../../assets/images/estrela.png'
import Button from '../Button'
import {
  Assessment,
  Badge,
  Description,
  RestaurantsItens,
  Title
} from './styles'

type Props = {
  id: number
  titulo: string
  destacado?: string
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
}

type PropsSpan = {
  position?: 'left' | 'right'
}

const Restaurants = ({
  avaliacao,
  capa,
  descricao,
  id,
  tipo,
  titulo,
  destacado
}: Props) => {
  const navigate = useNavigate()
  return (
    <RestaurantsItens>
      <img src={capa} alt={titulo} />
      <Title>
        <h3>{titulo}</h3>
        <Assessment>
          <h3>{avaliacao}</h3>
          <img src={estrela} alt="Estrela" />
        </Assessment>
      </Title>
      <Description>
        <span>{descricao}</span>
        <Button
          onClick={() => navigate('/restaurante')}
          type="link"
          title="Saiba Mais"
        >
          Saiba mais
        </Button>
      </Description>
      <div>
        <Badge position="left">{destacado}</Badge>
        <Badge position="right">{tipo}</Badge>
      </div>
    </RestaurantsItens>
  )
}

export default Restaurants
