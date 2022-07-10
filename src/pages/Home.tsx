import React from "react";
import Navbar from "../components/Navbar";
import { Row, Col } from "react-bootstrap";
import { StoreItem } from "../components/StoreItem";
import { useAppSelector } from "../hooks";

const Home: React.FC = () => {
  const { filteredProducts } = useAppSelector((state) => state.productReducers)
  var array = filteredProducts.slice().sort((a, b) => b.price - a.price)
  array = array.sort((a, b) => a.price - b.price)

  console.log(array)
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
