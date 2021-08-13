import React, { useContext, useState } from "react";
import { Product } from "../types/product";

interface ContextType {
  addToCart: (product: Product, quantity: number) => void
  removeFromCart: (productID: number) => void
  clearCart: () => void
  cartCount: number
}

const Context = React.createContext({} as ContextType);

interface CartItem {
  product: Product,
  quantity: number
}

function CartContext({ children }: { children?: React.ReactNode }) {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [cartCount, setCartCount] = useState(0);

  const addToCart = (product: Product, quantity: number) => {
    const existingItemIdx = cartItems.findIndex(item => item.product.id === product.id);
    if (existingItemIdx >= 0) {
      cartItems[existingItemIdx].quantity += quantity;
      setCartItems([...cartItems]);
    } else {
      const updatedList = [...cartItems, { product: product, quantity: quantity }];
      setCartItems(updatedList);
      setCartCount(updatedList.length);
    }
  };

  const removeFromCart = (productID: number) => {
    const updatedList = cartItems.filter(item => item.product.id !== productID);
    setCartItems(updatedList);
    setCartCount(updatedList.length);
  };

  const clearCart = () => {
    setCartItems([]);

  };

  return (
    <Context.Provider value={{
      addToCart: addToCart,
      clearCart: clearCart,
      removeFromCart: removeFromCart,
      cartCount: cartCount,
    }}>
      {children}
    </Context.Provider>
  );

}

const useCartContext = () => useContext(Context);
export {
  useCartContext,
};

export default CartContext;
