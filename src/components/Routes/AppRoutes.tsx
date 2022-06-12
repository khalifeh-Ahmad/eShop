import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../../pages/Home/Home'
import Product from '../../pages/Product/Product'

const AppRoutes = () => {
   return (
      <Routes>
         <Route path={'/'} element={<Home />} />
         <Route path={'/product/:productId'} element={<Product />} />
      </Routes>
   )
}

export default AppRoutes
