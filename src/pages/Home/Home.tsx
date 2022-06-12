import React from 'react'
import './home.css'
import Sidebar from '../../components/Sidebar/Sidebar'
import ProductList from '../../components/ProductList/ProductList'
import { useAppDispatch, useAppSelector } from '../../hooks'

const Home = () => {
   const dispatch = useAppDispatch()
   return (
      <>
         <div className={'home'}>
            <div className={'homeSidebar'}>
               <Sidebar />
            </div>
            <div className={'homeProductList'}>
               <ProductList />
            </div>
         </div>
      
      </>
   )
}

export default Home
