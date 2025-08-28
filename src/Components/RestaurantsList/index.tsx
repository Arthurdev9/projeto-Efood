import RestaurantsItens from '../../models/RestaurantsItens'
import Restaurants from '../Restaurants'
import { ContainerGrid } from './styles'

export type Props = {
  restaurantes: RestaurantsItens[]
}

const RestaurantsList = ({ restaurantes }: Props) => {
  return (
    <ContainerGrid>
      {restaurantes.map((res) => (
        <Restaurants
          id={res.id}
          avaliacao={res.avaliacao}
          capa={res.capa}
          descricao={res.descricao}
          tipo={res.tipo}
          titulo={res.titulo}
          destacado={res.destacado}
          key={res.id}
        />
      ))}
    </ContainerGrid>
  )
}

export default RestaurantsList
