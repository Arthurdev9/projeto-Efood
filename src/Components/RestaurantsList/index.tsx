import Restaurants from '../Restaurants'

import { ContainerGrid } from './styles'

import { RestaurantsType } from '../../../types'

export type Props = {
  restaurantsData: RestaurantsType[]
}

const RestaurantsList = ({ restaurantsData }: Props) => {
  return (
    <ContainerGrid>
      {restaurantsData.map((res) => (
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
