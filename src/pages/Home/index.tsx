import Header from '../../Components/Header'
import RestaurantsList from '../../Components/RestaurantsList'
import RestaurantsItens from '../../models/RestaurantsItens'

const restaurants: RestaurantsItens[] = [
  {
    id: 1,
    titulo: 'Bella Tavola Italiana',
    avaliacao: 4.7,
    capa: 'https://ebac-fake-api.vercel.app/efood/bella_tavola_italiana//capa.jpeg',
    descricao:
      'A paixão dos nossos talentosos chefs pela cozinha italiana é evidente em cada prato, desde massas caseiras e risotos cremosos até suculentos frutos do mar e carnes tenras. Nosso menu é complementado por uma excelente carta de vinhos, cuidadosamente selecionados para harmonizar com a riqueza dos sabores italianos.',
    tipo: 'italiana',
    destacado: 'Destaque da Semana'
  },
  {
    id: 2,
    titulo: 'Bella Tavola Italiana',
    avaliacao: 4.7,
    capa: 'https://ebac-fake-api.vercel.app/efood/bella_tavola_italiana//capa.jpeg',
    descricao:
      'A paixão dos nossos talentosos chefs pela cozinha italiana é evidente em cada prato, desde massas caseiras e risotos cremosos até suculentos frutos do mar e carnes tenras. Nosso menu é complementado por uma excelente carta de vinhos, cuidadosamente selecionados para harmonizar com a riqueza dos sabores italianos.',
    tipo: 'italiana',
    destacado: 'Destaque da Semana'
  },
  {
    id: 3,
    titulo: 'Bella Tavola Italiana',
    avaliacao: 4.7,
    capa: 'https://ebac-fake-api.vercel.app/efood/bella_tavola_italiana//capa.jpeg',
    descricao:
      'A paixão dos nossos talentosos chefs pela cozinha italiana é evidente em cada prato, desde massas caseiras e risotos cremosos até suculentos frutos do mar e carnes tenras. Nosso menu é complementado por uma excelente carta de vinhos, cuidadosamente selecionados para harmonizar com a riqueza dos sabores italianos.',
    tipo: 'italiana',
    destacado: 'Destaque da Semana'
  },
  {
    id: 4,
    titulo: 'Bella Tavola Italiana',
    avaliacao: 4.7,
    capa: 'https://ebac-fake-api.vercel.app/efood/bella_tavola_italiana//capa.jpeg',
    descricao:
      'A paixão dos nossos talentosos chefs pela cozinha italiana é evidente em cada prato, desde massas caseiras e risotos cremosos até suculentos frutos do mar e carnes tenras. Nosso menu é complementado por uma excelente carta de vinhos, cuidadosamente selecionados para harmonizar com a riqueza dos sabores italianos.',
    tipo: 'italiana',
    destacado: 'Destaque da Semana'
  }
]

const Home = () => {
  return (
    <div>
      <Header variant="home" />
      <RestaurantsList restaurantes={restaurants} />
    </div>
  )
}

export default Home
