import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import { Row, Col } from "react-bootstrap";
import { StoreItem } from "../components/StoreItem";
import { useAppSelector } from "../hooks";

const Home: React.FC = () => {
  const { filteredProducts } = useAppSelector((state) => state.productReducers)
  return (
    <div>
      <Navbar />
      <Row md={2} xs={1} lg={3} className="g-3">
        {filteredProducts.map((item) => (
          <Col key={item.id}>
            <StoreItem {...item} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Home;
