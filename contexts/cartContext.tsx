import React, { useContext, useEffect, useRef, useState } from "react";
import { Product } from "../types/product";
import { toast } from "react-hot-toast";
import { useAuthContext } from "./authContext";
import { unionWith, differenceWith } from "lodash";
import { updateStrapiWishlist, fetchAPI, createStrapiWishlist } from "../lib/api";

interface ContextType {
  addToCart: (product: Product, quantity: number) => void;
  removeFromCart: (productID: number, quantity?: number) => void;
  clearCart: () => void;
  cartCount: number;
  cartItems: CartItemType[];

  addToWishlist: (product: Product) => void;
  removeFromWishlist: (productID: number) => void;
  clearWishlist: () => void;
  wishlistContains: (id: number) => boolean;
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
  const { user, authToken } = useAuthContext();
  const [cartItems, setCartItems] = useState<CartItemType[]>([]);
  const [cartCount, setCartCount] = useState(0);

  const [wishlistItems, setWishlistItems] = useState<WishlistItemType[]>([]);
  const wishListSynchronised = useRef<boolean>();

  const wishlistContains = (id: number): boolean => wishlistItems.findIndex(i => i.product.id === id) >= 0;

  const addToWishlist = (product: Product) => {
    // check if the item is already in the list
    if (wishlistContains(product.id)) {
      // do nothing
      return;
    }

    // add the new item (it's not in the list yet)
    const updatedList = [...wishlistItems, { product: product }];

    // first add to the server
    if (user && authToken) {

      updateStrapiWishlist(authToken, updatedList.map(i => i.product.id))
        .then(() => {
          setWishlistItems(updatedList);
          toast(`${product.name} added to wishlist`, { icon: "❤️" });
        })
        .catch(e => {
          console.error(`Could not add to your wishlist ${e}`);
          toast.error(`Something went wrong, we could not add to your wishlist`, { icon: "❌️" });
        });
    } else {
      setWishlistItems(updatedList);
      toast(`${product.name} added to offline wishlist`, { icon: "🖤️" });
    }

  };

  const removeFromWishlist = (productID: number) => {
    //  Remove from cart completely
    const updatedList = wishlistItems.filter(
      (item) => item.product.id !== productID,
    );
    if (authToken) {
      updateStrapiWishlist(authToken, updatedList.map(i => i.product.id))
        .catch((e) => {
          console.error(`Could not synchronise your wishlist ${e}`);
          toast.error(`Something went wrong, we could not synchronise your wishlist`, { icon: "❌️" });
        })
        .finally(() => {
          setWishlistItems(updatedList);
        });
    } else {
      setWishlistItems(updatedList);
    }
  };

  const clearWishlist = () => {
    setWishlistItems([]);
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

  // clear the user's wishlist on logout
  // Note: wishListSynchronised.current would have been true if the user was
  //       logged in before
  useEffect(() => {
    if (!user && wishListSynchronised.current) {
      wishListSynchronised.current = false;
      clearWishlist();
    }
  }, [user]);

  // fetchWishlist can be used to fetch the user's wishlist given an auth token
  const fetchWishlist = async (token: string): Promise<Product[]> => {
    const response = await fetchAPI("/wish-lists/me", token);
    return response.products;
  };

  // comparator is a function to compare if two products are the same
  const comparator = (a: Product, b: Product): boolean => {
    return a.id === b.id;
  };

  // synchronise the wishlist if user authentication changes
  useEffect(() => {
    if (!user || !authToken) {
      return;
    }

    if (wishListSynchronised.current) {
      console.debug("Wishlist in sync");
      return;
    }

    // create a function that can be used to synchronise the wishlist
    const synchroniseWishlist = async (token: string, products: Product[], wishlistProducts: Product[]) => {
      const combinedList = unionWith(products, wishlistProducts, comparator);
      wishListSynchronised.current = true;

      // check if any items have to be updated on the server
      if (differenceWith(combinedList, products, comparator).length > 0) {
        await updateStrapiWishlist(token, combinedList.map(i => i.id));
      }

      // check if any items have to be updated locally
      if (differenceWith(combinedList, wishlistProducts, comparator).length > 0) {
        setWishlistItems(combinedList.map(i => ({ product: i })));
      }
    };

    fetchWishlist(authToken)
      .then((products: Product[]) => {
        synchroniseWishlist(authToken, products, wishlistItems.map(i => i.product))
          .then(() => {
            toast(`Synchronised your wishlist`, { icon: "❤️" });
          })
          .catch(e => {
            console.error(`Could not synchronise your wishlist ${e}`);
            toast.error(`Something went wrong, we could not synchronise your wishlist`, { icon: "❌️" });
          });
      })
      .catch(e => {
        if (e === "Not Found") {
          createStrapiWishlist(authToken)
            .then(() => {
              toast(`Created your wishlist`, { icon: "❤️" });
            })
            .catch(e => {
              console.error(`Could not create your wishlist ${e}`);
              toast.error(`Something went wrong, we could not create your wishlist`, { icon: "❌️" });
            });
        } else {
          console.error(`Could not fetch your wishlist ${e}`);
          toast.error(`Something went wrong, we could not fetch your wishlist`, { icon: "❌️" });
        }
      });
  }, [authToken, user, wishListSynchronised, wishlistItems]);

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
        wishlistItems: wishlistItems,
        wishlistContains: wishlistContains,
      }}>
      {children}
    </Context.Provider>
  );
}

const useCartContext = () => useContext(Context);
export { useCartContext };

export default CartContext;
