import { FC, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../hooks'
import { Button, Chip, Rating } from '@mui/material'
import Navbar from '../../components/Navbar'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart'
import Cart from '../../components/Cart/Cart'
import { addProduct } from "../../store/carts/cart.slice"
import './product.css'

const Product: FC = () => {
   const { productId } = useParams()
   const { products } = useAppSelector((state) => state.productReducers)
   const dispatch = useAppDispatch()
   const product = products.filter(
      (product) => product.id === Number(productId)
   )[0]
   const { cartItems, itemAdded } = useAppSelector((state) => state.cartReducer)
   const [open, setOpen] = useState(false)
   const [count, setCount] = useState(1)
   const addToCart = () => {
      dispatch(addProduct({ product, quantity: count }))
   }
   return (
      <>
         <Navbar />
         <div className={'product'}>
            <div className="productWrapper" style={{ display: "flex", paddingLeft: 20, paddingRight: 20 }}>
               <div className="productImage" style={{ flex: 1, maxWidth: "500px" }}>
                  <img
                     className='productImg'
                     src={product.image}
                     alt={product.title}
                  />
               </div>
               <div className={'productDescription'} style={{ flex: 2, display: "flex", flexDirection: "column", maxWidth: "750px" }}>
                  <div>
                     <Chip
                        // style={{width:"150px"}}
                        color={'primary'}
                        size={'medium'}
                        label={product.category}
                        variant="outlined"
                     />
                  </div>
                  <h1 className={'productTitle'}>{product.title}</h1>
                  <p style={{ maxWidth: "400px" }} className={'productText'}>{product.description}</p>
                  <Rating
                     readOnly
                     name="size-large"
                     value={product.rating.rate}
                     size="large"
                  />
                  <h1 className={'productPrice'}>{product.price} $</h1>
                  <div>
                     <Button
                        disabled={
                           !!cartItems.find(
                              (item) => item.product.id === product.id
                           )
                        }
                        onClick={addToCart}
                        // color={'success'}
                        variant={'contained'}
                        endIcon={<AddShoppingCartIcon />}
                     >
                        Add to cart
                     </Button>
                  </div>
               </div>
            </div>
         </div>
         <Cart />
      </>
   )
}

export default Product
