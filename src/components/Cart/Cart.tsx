import {
    Box,
    Button,
    SwipeableDrawer,
 } from '@mui/material'
 import React, { useState } from 'react'
 import './cart.css'
 import { useAppDispatch, useAppSelector } from '../../hooks'
 import {
    clearCart,
    toggleCart,
    toggleItemRemoved,
 } from '../../store/carts/cart.slice'
 import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket'
 import CartProduct from '../CartProduct/CartProduct'
 import { useNavigate } from 'react-router-dom'
 import AlertComponent from '../Alert/AlertComponent'
 
 const Cart = () => {
    const { isOpen, cartItems, isEmpty, totalSum, itemRemoved } = useAppSelector(
       (state) => state.cartReducer
    )
    const navigate = useNavigate()
    const [dialogOpen, setDialogOpen] = useState(false)
    const dispatch = useAppDispatch()
    const handleClose = () => {
       dispatch(toggleCart(false))
    }
    const handleSubmit = () => {
       dispatch(toggleCart(false))
       setDialogOpen(true)
    }
    const handleSubmitOrder = () => {
       navigate('/success')
       setDialogOpen(false)
       dispatch(clearCart())
    }
    return (
       <div className={'cart'}>
          <SwipeableDrawer
             anchor={'right'}
             onClose={handleClose}
             onOpen={handleClose}
             open={isOpen}
          >
             <Box sx={{ width: 400, paddingTop: 2 }}>
                <AlertComponent
                   open={itemRemoved}
                   setOpen={() => dispatch(toggleItemRemoved(false))}
                   text={'Successfully removed product!'}
                   severity={'info'}
                />
                <div className={'cartHeader'}>
                   <h1 className={'cartTitle'}>Your cart</h1>
                   <ShoppingBasketIcon className={'cartIcon'} />
                </div>
                <div className={'cartSpan'} />
                <div className={'cartList'}>
                   {isEmpty ? (
                      <div className={'emptyCart'}>Cart is empty</div>
                   ) : (
                      cartItems.map((item) => (
                         <CartProduct key={item.product.id} product={item} />
                      ))
                   )}
                </div>
                {!isEmpty && (
                   <>
                      <div className={'cartSpan'} />
                      <div className={'cartBottom'}>
                         <h3 className={'cartTotal'}>
                            Total: {totalSum.toFixed(2)} $
                         </h3>
                         <Button onClick={handleSubmit} variant={'contained'}>
                            Place order
                         </Button>
                      </div>
                   </>
                )}
             </Box>
          </SwipeableDrawer>
       </div>
    )
 }
 
 export default Cart
 