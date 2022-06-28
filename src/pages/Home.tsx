import React from 'react'
import Navbar from '../components/Navbar'
import storeItems from "../data/items.json"
import {Row, Col} from "react-bootstrap";
import {StoreItem} from "../components/StoreItem"

const Home:React.FC = () => {
  return (
    <div>
      <Navbar/>
      <Row md={2} xs={1} lg={3} className="g-3">
        {storeItems.map(item => (
          <Col key={item.id}>
            <StoreItem {...item} />
            </Col>
        ))}
      </Row>
    </div>
  )
}

export default Home
