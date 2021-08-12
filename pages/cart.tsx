import React from "react";
import { ShoppingCart } from "../components/shoppingCart";
import MainLayout from "../layouts/MainLayout";
//import ProductWidget from "../components/productWidget";

const Cart = () => {
  return (
    <MainLayout>
      <div>
        <ShoppingCart />
      </div>
    </MainLayout>
  );
};
export default Cart;
