import ProductsItens from '../../models/ProductsItens'
import Products from '../Products'
import { Assessment, Banner, Type } from './styles'

const productsData: ProductsItens[] = [
  {
    id: 1,
    nome: 'Ravioli al Tartufo Nero',
    descricao:
      'O Ravioli al Tartufo Nero é um requintado prato de massa artesanal, que celebra os sabores ricos...',
    foto: 'https://ebac-fake-api.vercel.app/efood/bella_tavola_italiana//1.webp',
    preco: 89.9,
    porcao: '3'
  },
  {
    id: 2,
    nome: 'Spaghetti Carbonara',
    descricao:
      'Spaghetti clássico com molho cremoso de ovos, queijo pecorino, pancetta e pimenta preta.',
    foto: 'https://ebac-fake-api.vercel.app/efood/bella_tavola_italiana//1.webp',
    preco: 65.0,
    porcao: '3'
  },
  {
    id: 3,
    nome: 'Osso Buco alla Milanese',
    descricao:
      'Vitela cozida lentamente com vinho branco, legumes e gremolata, servido com risoto.',
    foto: 'https://ebac-fake-api.vercel.app/efood/bella_tavola_italiana//1.webp',
    preco: 112.0,
    porcao: '3'
  },
  {
    id: 4,
    nome: 'Osso Buco alla Milanese',
    descricao:
      'Vitela cozida lentamente com vinho branco, legumes e gremolata, servido com risoto.',
    foto: 'https://ebac-fake-api.vercel.app/efood/bella_tavola_italiana//1.webp',
    preco: 112.0,
    porcao: '3'
  },
  {
    id: 5,
    nome: 'Osso Buco alla Milanese',
    descricao:
      'Vitela cozida lentamente com vinho branco, legumes e gremolata, servido com risoto.',
    foto: 'https://ebac-fake-api.vercel.app/efood/bella_tavola_italiana//1.webp',
    preco: 112.0,
    porcao: '3'
  },
  {
    id: 6,
    nome: 'Osso Buco alla Milanese',
    descricao:
      'Vitela cozida lentamente com vinho branco, legumes e gremolata, servido com risoto.',
    foto: 'https://ebac-fake-api.vercel.app/efood/bella_tavola_italiana//1.webp',
    preco: 112.0,
    porcao: '3'
  }
]

const Menu = () => {
  return (
    <div>
      <Banner image="https://ebac-fake-api.vercel.app/efood/bella_tavola_italiana/capa.jpeg">
        <Type>Italiana</Type>
        <Assessment>Bella Tavola Italiana 4.7</Assessment>
      </Banner>
      <Products products={productsData} />
    </div>
  )
}

export default Menu
