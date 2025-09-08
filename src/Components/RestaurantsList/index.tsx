import { RestaurantsType } from '../../pages/Home'
import Restaurants from '../Restaurants'
import { ContainerGrid } from './styles'

export type Props = {
  restaurantes: RestaurantsType[]
}

const RestaurantsList = ({ restaurantes }: Props) => {
  return (
    <ContainerGrid>
      {restaurantes.map((res) => (
        <li key={res.id}>
          <Restaurants
            id={res.id}
            avaliacao={res.avaliacao}
            capa={res.capa}
            descricao={res.descricao}
            tipo={res.tipo}
            titulo={res.titulo}
            destacado={res.destacado}
          />
        </li>
      ))}
    </ContainerGrid>
  )
}

export default RestaurantsList
