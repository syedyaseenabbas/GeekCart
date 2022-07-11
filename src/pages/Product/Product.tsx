import React, { FC } from 'react'
import './product.css'
import { useParams } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../hooks'
import { Button, Chip, Rating, Skeleton, Typography } from '@mui/material'
import Navbar from '../../components/Navbar'
// import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart'
// import { toggleItemAdded } from '../../store/cart/cart.slice'
// import AlertComponent from '../../components/Alert/AlertComponent'

const Product: FC = () => {
   const { productId } = useParams()
   const { products } = useAppSelector((state) => state.productReducers)
//    const { cartItems, itemAdded } = useAppSelector((state) => state.cartReducer)
   const dispatch = useAppDispatch()
   const product = products.filter(
    (product) => product.id === Number(productId)
 )[0]
   
//    const [open, setOpen] = useState(false)

//    const handleClickItem = () => {
//       setOpen(true)
//    }
// console.log(product)
      return (
        <>
        <Navbar/>
         <div className={'product'}>
            <div className="productWrapper">
               <div className="productImage">
                  <img
                     className={'productImg'}
                     src={product.image}
                     alt={product.title}
                  />
               </div>
               <div className={'productDescription'}>
                  <Chip
                     color={'primary'}
                     size={'medium'}
                     label={product.category}
                     variant="outlined"
                  />
                  <h1 className={'productTitle'}>{product.title}</h1>
                  <p className={'productText'}>{product.description}</p>
                  <Rating
                     readOnly
                     name="size-large"
                     value={product.rating.rate}
                     size="large"
                  />
                  <h1 className={'productPrice'}>{product.price} $</h1>
                  {/* <Button
                     disabled={
                        !!cartItems.find(
                           (item) => item.product.id === product.id
                        )
                     }
                     onClick={handleClickItem}
                     color={'success'}
                     variant={'contained'}
                     endIcon={<AddShoppingCartIcon />}
                  >
                     Add to cart
                  </Button> */}
               </div>
            </div>
         </div>
         </>
      )
}

export default Product
