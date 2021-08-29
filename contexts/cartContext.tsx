import React, { useContext, useState } from "react";
import { Product } from "../types/product";
import { toast } from "react-hot-toast";

interface ContextType {
  addToCart: (product: Product, quantity: number) => void;
  removeFromCart: (productID: number, quantity?: number) => void;
  clearCart: () => void;
  cartCount: number;
  cartItems: CartItemType[];

  addToWishlist: (product: Product) => void;
  removeFromWishlist: (productID: number) => void;
  clearWishlist: () => void;
  wishlistCount: number;
  wishlistItems: WishlistItemType[];
}

const Context = React.createContext({} as ContextType);

export interface CartItemType {
  product: Product;
  quantity: number;
}

export interface WishlistItemType {
  product: Product;
}

function CartContext({ children }: { children?: React.ReactNode }) {
  const [cartItems, setCartItems] = useState<CartItemType[]>([]);
  const [cartCount, setCartCount] = useState(0);

  const [wishlistCount, setWishlistCount] = useState(0);
  const [wishlistItems, setWishlistItems] = useState<WishlistItemType[]>([]);

  const addToWishlist = (product: Product) => {
    // check if the item is already in the list
    const existingItemIdx = wishlistItems.findIndex(
      (item) => item.product.id === product.id,
    );
    if (existingItemIdx >= 0) {
      // do nothing
    } else {
      // add the new item (it's not in the list yet)
      const updatedList = [...wishlistItems, { product: product }];
      setWishlistItems(updatedList);
      setWishlistCount(updatedList.length);
      toast(`${product.name} added to wishlist`, { icon: "❤️" });
    }
  };

  const removeFromWishlist = (productID: number) => {
    //  Remove from cart completely
    const updatedList = wishlistItems.filter(
      (item) => item.product.id !== productID,
    );
    setWishlistItems(updatedList);
    setWishlistCount(updatedList.length);

  };

  const clearWishlist = () => {
    setWishlistItems([]);
    setWishlistCount(0);
  };

  const addToCart = (product: Product, quantity: number) => {
    // check if the item is already in the list
    const existingItemIdx = cartItems.findIndex(
      (item) => item.product.id === product.id,
    );
    if (existingItemIdx >= 0) {
      // update the item in the list
      cartItems[existingItemIdx].quantity += quantity;
      setCartItems([...cartItems]);
    } else {
      // add the new item (it's not in the list yet)
      const updatedList = [
        ...cartItems,
        { product: product, quantity: quantity },
      ];
      setCartItems(updatedList);
      setCartCount(updatedList.length);
    }
    toast(`${product.name} added to cart`, { icon: "🛒" });
  };

  const removeFromCart = (productID: number, quantity?: number) => {
    if (!quantity) {
      //  Remove from cart completely
      const updatedList = cartItems.filter(
        (item) => item.product.id !== productID,
      );
      setCartItems(updatedList);
      setCartCount(updatedList.length);
    } else {
      // get the existing item
      const existingItemIdx = cartItems.findIndex(
        (item) => item.product.id === productID,
      );
      if (existingItemIdx < 0) {
        console.error("Can't find the item with id ", productID);
        return;
      }

      if (cartItems[existingItemIdx].quantity <= 1) {
        // if this is the last one, remove completely
        removeFromCart(productID);
      } else {
        // update the item in the list
        cartItems[existingItemIdx].quantity -= quantity;
        setCartItems([...cartItems]);
      }
    }
  };

  const clearCart = () => {
    setCartItems([]);
    setCartCount(0);
  };

  return (
    <Context.Provider
      value={{
        addToCart: addToCart,
        clearCart: clearCart,
        removeFromCart: removeFromCart,
        cartCount: cartCount,
        cartItems: cartItems,

        addToWishlist: addToWishlist,
        clearWishlist: clearWishlist,
        removeFromWishlist: removeFromWishlist,
        wishlistCount: wishlistCount,
        wishlistItems: wishlistItems,
      }}>
      {children}
    </Context.Provider>
  );
}

const useCartContext = () => useContext(Context);
export { useCartContext };

export default CartContext;
