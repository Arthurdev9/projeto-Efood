import Cart from './Components/Cart'
import Footer from './Components/Footer'

import { GlobalCss } from './styles'

import { BrowserRouter } from 'react-router-dom'
import Rotas from './routes'
import { Provider } from 'react-redux'
import { store } from './store'

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
