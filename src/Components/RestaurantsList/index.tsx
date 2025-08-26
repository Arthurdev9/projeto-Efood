import Restaurants from '../Restaurants'
import { ContainerGrid } from './styles'

const RestaurantsList = () => {
  return (
    <ContainerGrid>
      <Restaurants />
      <Restaurants />
      <Restaurants />
      <Restaurants />
    </ContainerGrid>
  )
}

export default RestaurantsList
