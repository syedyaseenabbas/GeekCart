import React, {useEffect} from 'react';
import Home from './pages/Home/Home';
import { Routes, Route, BrowserRouter } from "react-router-dom"
import Login from "./components/Login";
import Signup from './components/SignUp';
import SuccessOrder from './pages/SuccessOrder/SuccessOrder'
import Product from './pages/Product/Product'
import { useAppDispatch } from './hooks'
import { fetchProducts } from './store/products/products.action'

const App: React.FC = () => {

  const dispatch = useAppDispatch()
  useEffect(() => {
     dispatch(fetchProducts())
  }, [dispatch])

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/SignUp' element={<Signup />} />
        <Route path={'/success'} element={<SuccessOrder />} />
        <Route path={'/product/:productId'} element={<Product />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
