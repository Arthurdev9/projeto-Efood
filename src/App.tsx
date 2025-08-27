import Footer from './Components/Footer'
import Header from './Components/Header'
import RestaurantsList from './Components/RestaurantsList'
import { GlobalCss } from './styles'

function App() {
  return (
    <div>
      <GlobalCss />
      <Header />
      <RestaurantsList />
      <Footer />
    </div>
  )
}

export default App
