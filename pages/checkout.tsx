import React from "react";
import { CheckoutPage } from "../components/checkoutPage";
import { Footer } from "../components/footer";
import { Navbar } from "../components/navbar";

const Checkout = () => {
  return (
    <div>
      <Navbar />
      <CheckoutPage />
      <Footer />
    </div>
  );
};
export default Checkout;
