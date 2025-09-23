import Products from '../Products'
import Loader from '../Loader'

import * as S from './styles'
import star from '../../assets/images/estrela.png'

import { useParams } from 'react-router-dom'
import { useGetProductsQuery } from '../../services/api'

const Menu = () => {
  const { id } = useParams()

  const { data: productsData } = useGetProductsQuery(id!)

  if (!productsData) {
    return <Loader />
  }

  return (
    <div>
      <S.Banner image={productsData?.capa}>
        <S.Type>{productsData?.tipo}</S.Type>
        <S.Assessment>
          {productsData?.titulo} {productsData?.avaliacao}
          <img src={star} alt="Estrela" />
        </S.Assessment>
      </S.Banner>
      {productsData && <Products products={productsData.cardapio} />}
    </div>
  )
}

export default Menu
