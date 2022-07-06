import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import storeItems from "../data/items.json";
import { Row, Col } from "react-bootstrap";
import { StoreItem } from "../components/StoreItem";
import { useParams } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../hooks'
import { fetchProducts } from '../store/products/products.action'
import Sidebar from '../components/Sidebar/Sidebar'

const Home: React.FC = () => {
  const { productId } = useParams()
  const { products } = useAppSelector((state) => state.productsReducer)
  const { cartItems, itemAdded } = useAppSelector((state) => state.cartReducer)
  const dispatch = useAppDispatch()
  const product = products.filter(
     (product) => product.id === Number(productId)
  )[0]

  useEffect(() => {
    dispatch(fetchProducts())
 }, [dispatch])


  type CartItemType = {
    id: number;
    category: string;
    description: string;
    image: string;
    price: number;
    title: string;
    amount: number;
  };

  return (
    <div>
      <Navbar />
       <Sidebar />
      <Row md={2} xs={1} lg={3} className="g-3">
        {products.map((product) => (
          <Col key={product.id}>
            <StoreItem {...product} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Home;
