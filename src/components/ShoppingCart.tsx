import { Offcanvas, Stack } from "react-bootstrap"
import { formatCurrency } from "../utilities/formatCurrency"
import  CartProduct  from "./CartProduct/CartProduct"
import storeItems from "../data/items.json"
import { useAppSelector } from "../hooks"


export function ShoppingCart() {
  const { isOpen, cartItems, isEmpty, totalSum, itemRemoved } = useAppSelector(
    (state) => state.cartReducer
 )
  return (
    <Offcanvas show={true} onHide={false} placement="end">
      <Offcanvas.Header >
        <Offcanvas.Title>Cart</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Stack gap={3}>
          {cartItems.map(item => (
            <CartProduct key={item.product.id} product={item} />
          ))}
          {/* <div className="ms-auto fw-bold fs-5">
            Total{" "}
            {formatCurrency(
              cartItems.reduce((total, cartItem) => {
                const item = cartItems.find(i => i.product.id === cartItem.product.id)
                return total + (item?. || 0) * cartItem.quantity
              }, 0)
            )}
          </div> */}
          <div className="ms-auto fw-bold">
            {cartItems.length === 0 ? ('Cart is Empty'):('')}
          </div>
        </Stack>
      </Offcanvas.Body>
    </Offcanvas>
  )
}