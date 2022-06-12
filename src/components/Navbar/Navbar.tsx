import { AppBar, Button, Container } from '@mui/material'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import './navbar.css'
import { FC } from 'react'
import { useAppDispatch, useAppSelector } from '../../hooks'
//import { toggleCart } from '../../store/cart/cart.slice'
import { useNavigate, Link } from 'react-router-dom'


const Navbar: FC = () => {
   const dispatch = useAppDispatch()
   const navigate = useNavigate()
  // const { cartItems } = useAppSelector((state) => state.cartReducer)
   return (
      <AppBar sx={{ zIndex: 100 }} position={'fixed'} color={'default'}>
         <Container maxWidth={'xl'}>
            <div className={'navbar'}>
               <h1 onClick={() => navigate('/')} className={'navbarLogo'}>
                  eProcurement
               </h1>
               <ul className={'navbar'} >
                  <li>
                     <Link to="/"><a>Home</a></Link>
                  </li>
                  <li>
                     <Link to="/"><a>Products</a></Link>
                  </li>
                  <li>
                     <Link to="/"><a>Become a Seller</a></Link>
                  </li>
                  <li>
                     <Link to="/"><a>Careers</a></Link>
                  </li>
                  <li>
                     <Link to="/"><a>Contact us</a></Link>
                  </li>
               </ul>
               {/* <Button
                  onClick={() => dispatch(toggleCart(true))}
                  startIcon={<ShoppingCartIcon />}
                  variant={'outlined'}
               >
                  Cart({cartItems.length})
               </Button> */}
            </div>
         </Container>
      </AppBar>
   )
}
export default Navbar
