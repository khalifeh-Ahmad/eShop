import { useEffect } from 'react'
import AppRoutes from './components/Routes/AppRoutes'
import './App.css'
import { fetchProducts } from './store/products/products.action'
import { useAppDispatch } from './hooks'
import data from '../products.json';



const App = () => {
   const dispatch = useAppDispatch()
   useEffect(() => {
      dispatch(fetchProducts())
   }, [dispatch])

   return <AppRoutes />
}

export default App
