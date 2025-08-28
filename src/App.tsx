import { BrowserRouter } from 'react-router-dom'
import Footer from './Components/Footer'
import Header from './Components/Header'

import Rotas from './routes'
import { GlobalCss } from './styles'

function App() {
  return (
    <BrowserRouter>
      <GlobalCss />
      <Rotas />
      <Footer />
    </BrowserRouter>
  )
}

export default App
