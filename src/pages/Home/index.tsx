import Header from '../../Components/Header'
import Loader from '../../Components/Loader'
import RestaurantsList from '../../Components/RestaurantsList'

import { useGetRestaurantsQuery } from '../../services/api'

const Home = () => {
  const { data: restaurants, isLoading } = useGetRestaurantsQuery()

  if (isLoading) {
    return <Loader />
  }

  if (!restaurants) {
    return null
  }

  return (
    <div>
      <Header variant="home" />
      <RestaurantsList restaurantsData={restaurants} />
    </div>
  )
}

export default Home
