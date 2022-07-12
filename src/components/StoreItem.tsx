import React from "react"
import {Card, Button} from "react-bootstrap";
import {formatCurrency} from "../utilities/formatCurrency";
import { User as FirebaseUser } from "firebase/auth";
import {useState, useEffect} from "react"
import { auth } from "../firebase";
import {IProduct} from "../types/index"
import { useNavigate } from 'react-router-dom'
import { useAppDispatch } from '../hooks'
import {
    decreaseCount,
    increaseCount,
    removeProduct,
    toggleItemRemoved,
    addProduct,
 } from '../store/carts/cart.slice'

 interface storeItemProps{
    product : IProduct,
 }

export const StoreItem:React.FC<storeItemProps> = ({product}) => {

      const dispatch = useAppDispatch()
      const [count, setCount] = useState(1)
    //   const handleClose = () => {
    //      setOpen(false)
    //   }
      const addToCart = () => {
        // console.log(product)
         dispatch(addProduct({  product, quantity: count }))
        //  dispatch(toggleItemAdded(true))
        //  setOpen(false)
      }
      const increase = () => {
        setCount((count) => count + 1)
        dispatch(increaseCount({product, quantity:count}))
     }
     const decrease = () => {
        if (count > 1) {
           setCount((count) => count - 1)
           dispatch(decreaseCount({product, quantity:count}))
        }
     }

      const [user, setUser] = useState<FirebaseUser | null>(null);

      useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((FirebaseUser) => {
          setUser(FirebaseUser);
        });
    
        return unsubscribe;
      }, []);
      const navigate = useNavigate()

      const navigateToProduct = () => {
        navigate(`/product/${product.id}`)
     }


    return (<Card className="h-100">
        <Card.Img onClick={navigateToProduct}
        variant="top" 
        src={product.image} 
        height="300px" 
        width="300px"
        style={{objectFit: "contain", cursor:"pointer"}} 
        />
        <Card.Body className="d-flex flex-column">
            <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
                <span onClick={navigateToProduct} style={{cursor:"pointer"}} className="fs-2">{product.title}</span>
                <span className="ms-2 text-muted">{formatCurrency(product.price)}</span>
            </Card.Title>
            <div className="mt-auto">
                <Button className="w-100" onClick={()=> {user !== null ? addToCart():alert("Login Please")}}>+ Add To Cart</Button>
            </div>
        </Card.Body>
    </Card>
)}