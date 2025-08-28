import ProductsItens from '../../models/ProductsItens'
import {
  AddButton,
  ProductCard,
  ProductDescription,
  ProductImage,
  ProductsContainer,
  ProductTitle
} from './styles'

export type Props = {
  products: ProductsItens[]
}

const Products = ({ products }: Props) => {
  return (
    <ProductsContainer>
      {products.map((product) => (
        <ProductCard key={product.id}>
          <ProductImage src={product.foto} alt={product.nome} />
          <ProductTitle>{product.nome}</ProductTitle>
          <ProductDescription>{product.descricao}</ProductDescription>
          <AddButton>Adicionar ao carrinho</AddButton>
        </ProductCard>
      ))}
    </ProductsContainer>
  )
}

export default Products
