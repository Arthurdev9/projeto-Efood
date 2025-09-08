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
  destacado?: boolean
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
        <p>{descricao}</p>
        <Button
          onClick={() => navigate(`/restaurante/${id}`)}
          type="link"
          title="Saiba Mais"
        >
          Saiba mais
        </Button>
      </Description>
      <div>
        {destacado && <Badge position="left">Destaque da Semana</Badge>}
        <Badge position="right">{tipo}</Badge>
      </div>
    </RestaurantsItens>
  )
}

export default Restaurants
