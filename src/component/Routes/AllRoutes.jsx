import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home';
import SignUp from '../Pages/SignUp';
import Login from '../Pages/Login';
import ProductDetails from '../Pages/ProductDetails';
import Test from '../Pages/Test';

function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/login" element={<Login />} />
      <Route path="/product/:id" element={<ProductDetails />} />
      <Route path="/test" element={<Test />} />
    </Routes>
  )
}

export default AllRoutes;
