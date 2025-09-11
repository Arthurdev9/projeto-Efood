import { BrowserRouter } from 'react-router-dom'
import Footer from './Components/Footer'

import Rotas from './routes'
import { GlobalCss } from './styles'
import { Provider } from 'react-redux'
import { store } from './store'
import Cart from './Components/Cart'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalCss />
        <Rotas />
        <Cart />
        <Footer />
      </BrowserRouter>
    </Provider>
  )
}

export default App
