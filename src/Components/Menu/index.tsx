import { useParams } from 'react-router-dom'
import Products from '../Products'
import { Assessment, Banner, Type } from './styles'
import { RestaurantsType } from '../../pages/Home'

import star from '../../assets/images/estrela.png'
import { useGetProductsQuery } from '../../services/api'

const Menu = () => {
  const { id } = useParams()

  const { data: productsData } = useGetProductsQuery(id!)

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
