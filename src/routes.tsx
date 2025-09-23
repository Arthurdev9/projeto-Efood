import Home from './pages/Home'
import RestaurantSelected from './pages/RestaurantSelected'

import { Route, Routes } from 'react-router-dom'

const Rotas = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/restaurante/:id" element={<RestaurantSelected />} />
    </Routes>
  )
}

export default Rotas
