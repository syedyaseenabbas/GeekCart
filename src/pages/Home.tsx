import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import storeItems from "../data/items.json";
import { Row, Col } from "react-bootstrap";
import { StoreItem } from "../components/StoreItem";

const Home: React.FC = () => {
  const [products, setProducts] = useState<CartItemType[]>([]);
  const [error, setError] = useState({});

  type CartItemType = {
    id: number;
    category: string;
    description: string;
    image: string;
    price: number;
    title: string;
    amount: number;
  };
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((res) => setProducts(res))
      .catch((err) => setError(err));
  }, []);
  // {console.log(products)}
  return (
    <div>
      <Navbar />
      <Row md={2} xs={1} lg={3} className="g-3">
        {products.map((item) => (
          <Col key={item.id}>
            <StoreItem {...item} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Home;
