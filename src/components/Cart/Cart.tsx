import {
   Box,
   Button,
   Dialog,
   DialogContent,
   DialogContentText,
   SwipeableDrawer,
} from '@mui/material'
import React, { useState } from 'react'
import './cart.css'
import { useAppDispatch, useAppSelector } from '../../hooks'
// import {
//    clearCart,
//    toggleCart,
//    toggleItemRemoved,
// } from '../../store/cart/cart.slice'
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket'
import CartProduct from '../CartProduct/CartProduct'
import DialogTitle from '@mui/material/DialogTitle'
import DialogActions from '@mui/material/DialogActions'
import { useNavigate } from 'react-router-dom'

const Cart = () => {
   // const { isOpen, cartItems, isEmpty, totalSum, itemRemoved } = useAppSelector(
   //    (state) => state.cartReducer
   // )
   const navigate = useNavigate()
   const [dialogOpen, setDialogOpen] = useState(false)
   const dispatch = useAppDispatch()
   // const handleClose = () => {
   //    dispatch(toggleCart(false))
   // }
   // const handleSubmit = () => {
   //    dispatch(toggleCart(false))
   //    setDialogOpen(true)
   // }
   // const handleCloseSubmit = () => {
   //    setDialogOpen(false)
   //    dispatch(toggleCart(true))
   // }
   // const handleSubmitOrder = () => {
   //    navigate('/success')
   //    setDialogOpen(false)
   //    dispatch(clearCart())
   // }
   return (
      <div className={'cart'}>
         <Dialog open={dialogOpen} maxWidth={'xs'} fullWidth={true}>
            <DialogTitle id="alert-dialog-title">{'Place order'}</DialogTitle>
            <span className={'modalWindowSpan'} />
            <DialogContent>
               <DialogContentText>
                  Do you submit placing order?
               </DialogContentText>
            </DialogContent>
            <span className={'modalWindowSpan'} />
            
         </Dialog>
        
      </div>
   )
}

export default Cart
