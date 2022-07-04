import {Card, Button} from "react-bootstrap";
import {formatCurrency} from "../utilities/formatCurrency";
import {useShoppingCart} from "../Context/ShoppingCartContext"

type StoreItemProps = {
    // id: number
    // name: string
    // price: number
    // imgUrl: string
    id: number;
    category: string;
    description: string;
    image: string;
    price: number;
    title: string;
    amount: number;
}

export function StoreItem({id, category, description, image, price, title, amount}:StoreItemProps) {
    const {
        getItemQuantity,
        increaseCartQuantity,
        decreaseCartQuantity,
        removeFromCart,
      } = useShoppingCart();

      const quantity = getItemQuantity(id);

    return (<Card className="h-100">
        <Card.Img 
        variant="top" 
        src={image} 
        height="300px" 
        width="300px"
        style={{objectFit: "contain"}} 
        />
        <Card.Body className="d-flex flex-column">
            <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
                <span className="fs-2">{title}</span>
                <span className="ms-2 text-muted">{formatCurrency(price)}</span>
            </Card.Title>
            <div className="mt-auto">
                {quantity === 0 ? (
                    <Button className="w-100" onClick={()=> increaseCartQuantity(id)}>+ Add To Cart</Button>
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