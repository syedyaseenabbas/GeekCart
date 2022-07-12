import React from "react";
import { Navbar as NavbarBs, Container, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import CategoryFilter from "./CategoryFilter";
import SortByPrice from "./SortByPrice";
import { useAppDispatch, useAppSelector } from '../hooks'
import { toggleCart } from '../store/carts/cart.slice'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import { Button } from '@mui/material'

const Navbar: React.FC = () => {
  const dispatch = useAppDispatch()
  const { cartItems } = useAppSelector((state) => state.cartReducer)

  return (
    <NavbarBs sticky="top" className="bg-white shadow-sm mb-3">
      <Container>
        <Nav className="me-auto">
          <Nav.Link to="/" as={NavLink}>
            Home
          </Nav.Link>
          <Nav.Link to="/SignUp" as={NavLink}>
            SignUp
          </Nav.Link>
          <Nav.Link to="/Login" as={NavLink}>
            Login
          </Nav.Link>
        </Nav>
        <SortByPrice/>
        <CategoryFilter/>
        <Button
          onClick={() => dispatch(toggleCart(true))}
          startIcon={<ShoppingCartIcon />}
          variant={'outlined'}
        >
          Cart({cartItems.length})
        </Button>
      </Container>
    </NavbarBs>
  );
};

export default Navbar;
