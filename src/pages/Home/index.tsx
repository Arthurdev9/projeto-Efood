import { useEffect, useState } from 'react'
import Header from '../../Components/Header'
import RestaurantsList from '../../Components/RestaurantsList'
import { useGetRestaurantsQuery } from '../../services/api'

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
  const { data: restaurants, isLoading } = useGetRestaurantsQuery()

  if (isLoading) {
    return <h3>Carregando</h3>
  }

  if (!restaurants) {
    return null
  }

  return (
    <div>
      <Header variant="home" />
      <RestaurantsList restaurantes={restaurants} />
    </div>
  )
}

export default Home
