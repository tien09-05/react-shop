import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "../pages/Home";
import Catalog from "../pages/catalog/Catalog";
import Cart from "../pages/cart/Cart";
import Product from "../pages/product/Product";

const MyRoutes = () => {
  return (
    <Routes>
      <Route path="/" exact element={<Home />} />
      <Route path="/catalog/:slug" element={<Product />} />
      <Route path="/catalog" element={<Catalog />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  );
};

export default MyRoutes;
