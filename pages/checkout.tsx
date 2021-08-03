import React from "react";
import MainLayout from "../layouts/MainLayout";
import { AboutPage } from "../components/aboutPage";
import { CheckoutPage } from "../components/checkoutPage";
import { Footer } from "../components/footer";
import Navbar2 from "../components/navbar2";

const Checkout = () => {
  return (
    <div>
      <Navbar2 />
      <CheckoutPage />
      <Footer />
    </div>
  );
};
export default Checkout;
