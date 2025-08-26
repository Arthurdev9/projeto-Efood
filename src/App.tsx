import Header from './Components/Header'
import RestaurantsList from './Components/RestaurantsList'
import { GlobalCss } from './styles'

function App() {
  return (
    <div className="App">
      <GlobalCss />
      <Header />
      <RestaurantsList />
    </div>
  )
}

export default App
