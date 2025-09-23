import Button from '../Button'

import * as S from './styles'
import star from '../../assets/images/estrela.png'

import { useNavigate } from 'react-router-dom'

type Props = {
  id: number
  titulo: string
  destacado?: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
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
    <S.RestaurantsItens>
      <img src={capa} alt={titulo} />
      <S.Title>
        <h3>{titulo}</h3>
        <S.Assessment>
          <h3>{avaliacao}</h3>
          <img src={star} alt="Estrela" />
        </S.Assessment>
      </S.Title>
      <S.Description>
        <p>{descricao}</p>
        <Button
          onClick={() => navigate(`/restaurante/${id}`)}
          type="link"
          title="Saiba Mais"
        >
          Saiba mais
        </Button>
      </S.Description>
      <div>
        {destacado && <S.Badge position="left">Destaque da Semana</S.Badge>}
        <S.Badge position="right">{tipo}</S.Badge>
      </div>
    </S.RestaurantsItens>
  )
}

export default Restaurants
