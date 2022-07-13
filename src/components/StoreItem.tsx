import React from "react";
import { Card } from "react-bootstrap";
import { Button } from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { formatCurrency } from "../utilities/formatCurrency";
import { User as FirebaseUser } from "firebase/auth";
import { useState, useEffect } from "react";
import { auth } from "../firebase";
import { IProduct } from "../types/index";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../hooks";
import { addProduct } from "../store/carts/cart.slice";

interface storeItemProps {
  product: IProduct;
}

export const StoreItem: React.FC<storeItemProps> = ({ product }) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [count, setCount] = useState(1);
  const [user, setUser] = useState<FirebaseUser | null>(null);
  const { cartItems, itemAdded } = useAppSelector((state) => state.cartReducer);

  const addToCart = () => {
    dispatch(addProduct({ product, quantity: count }));
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((FirebaseUser) => {
      setUser(FirebaseUser);
    });

    return unsubscribe;
  }, []);

  const navigateToProduct = () => {
    navigate(`/product/${product.id}`);
  };

  return (
    <Card className="h-100">
      <Card.Img
        onClick={navigateToProduct}
        variant="top"
        src={product.image}
        height="300px"
        width="300px"
        style={{ objectFit: "contain", cursor: "pointer" }}
      />
      <Card.Body className="d-flex flex-column">
        <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
          <span
            onClick={navigateToProduct}
            style={{ cursor: "pointer" }}
            className="fs-2"
          >
            {product.title}
          </span>
          <span className="ms-2 text-muted">
            {formatCurrency(product.price)}
          </span>
        </Card.Title>
        <div className="mt-auto">
          <Button
            disabled={
              !!cartItems.find((item) => item.product.id === product.id)
            }
            variant={"contained"}
            endIcon={<AddShoppingCartIcon />}
            className="w-100"
            onClick={() => {
              user !== null ? addToCart() : alert("Login Please");
            }}
          >
            Add To Cart
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};
