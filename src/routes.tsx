import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import RestaurantSelected from './pages/RestaurantSelected'

const Rotas = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/restaurante" element={<RestaurantSelected />} />
    </Routes>
  )
}

export default Rotas
