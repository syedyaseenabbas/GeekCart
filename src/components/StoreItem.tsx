import {Card, Button} from "react-bootstrap";
import {formatCurrency} from "../utilities/formatCurrency";
import {useShoppingCart} from "../Context/ShoppingCartContext"
import { User as FirebaseUser } from "firebase/auth";
import {useState, useEffect} from "react"
import { auth } from "../firebase";
import {IProduct} from "../types/index"
import { useNavigate } from 'react-router-dom'

export function StoreItem({id, category, description, image, price, title,rating}:IProduct) {
    const {
        getItemQuantity,
        increaseCartQuantity,
        decreaseCartQuantity,
        removeFromCart,
      } = useShoppingCart();

      const quantity = getItemQuantity(id);
      const [user, setUser] = useState<FirebaseUser | null>(null);

      useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((FirebaseUser) => {
          setUser(FirebaseUser);
        });
    
        return unsubscribe;
      }, []);
      const navigate = useNavigate()

      const navigateToProduct = () => {
        navigate(`/product/${id}`)
     }


    return (<Card className="h-100">
        <Card.Img onClick={navigateToProduct}
        variant="top" 
        src={image} 
        height="300px" 
        width="300px"
        style={{objectFit: "contain", cursor:"pointer"}} 
        />
        <Card.Body className="d-flex flex-column">
            <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
                <span onClick={navigateToProduct} style={{cursor:"pointer"}} className="fs-2">{title}</span>
                <span className="ms-2 text-muted">{formatCurrency(price)}</span>
            </Card.Title>
            <div className="mt-auto">
                {quantity === 0 ? (
                    <Button className="w-100" onClick={()=> {user !== null ? increaseCartQuantity(id):alert("Login Please")}}>+ Add To Cart</Button>
                ) : (
                <div className="d-flex align-items-center flex-column"
                 style={{gap : ".5rem"}}>

                <div className="d-flex align-items-center justify-content-center" 
                style={{gap : ".5rem"}}>
                        <Button onClick={()=> decreaseCartQuantity(id)}>-</Button>
                        <div>
                            <span className="fs-3">{quantity}</span> in cart
                        </div>
                        <Button onClick={()=> increaseCartQuantity(id)}>+</Button>
                    </div>
                       <Button onClick={()=> removeFromCart(id)} variant="danger" size="sm">Remove</Button>
                    </div>)}
            </div>
        </Card.Body>
    </Card>
)}