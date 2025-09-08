import { useParams } from 'react-router-dom'
import ProductsItens from '../../models/ProductsItens'
import Products from '../Products'
import { Assessment, Banner, Type } from './styles'
import { useEffect, useState } from 'react'
import { ProductType, RestaurantsType } from '../../pages/Home'

import star from '../../assets/images/estrela.png'

type Product = {
  cardapio: RestaurantsType[]
}

const Menu = () => {
  const { id } = useParams()

  const [productsData, setProductsData] = useState<RestaurantsType>()

  useEffect(() => {
    fetch(`https://ebac-fake-api.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((res) => setProductsData(res))
  }, [])

  if (!productsData) {
    return <h3>Carregando...</h3>
  }

  return (
    <div>
      <Banner image={productsData?.capa}>
        <Type>{productsData?.tipo}</Type>
        <Assessment>
          {productsData?.titulo} {productsData?.avaliacao}
          <img src={star} alt="Estrela" />
        </Assessment>
      </Banner>
      {productsData && <Products products={productsData.cardapio} />}
    </div>
  )
}

export default Menu
