import { useEffect, useState } from 'react'
import Header from '../../Components/Header'
import RestaurantsList from '../../Components/RestaurantsList'
import RestaurantsItens from '../../models/RestaurantsItens'

export type RestaurantsType = {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio: ProductType[]
}

export type ProductType = {
  foto: string
  preco: number
  id: number
  nome: string
  descricao: string
  porcao: string
}

const Home = () => {
  const [restaurants, setRestaurants] = useState<RestaurantsType[]>([])

  useEffect(() => {
    fetch('https://ebac-fake-api.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((res) => setRestaurants(res))
  }, [])

  return (
    <div>
      <Header variant="home" />
      <RestaurantsList restaurantes={restaurants} />
    </div>
  )
}

export default Home
