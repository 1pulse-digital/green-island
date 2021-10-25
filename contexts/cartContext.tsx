import React, { useContext, useEffect, useRef, useState } from "react";
import { Product } from "../types/product";
import { toast } from "react-hot-toast";
import { useAuthContext } from "./authContext";
import { unionWith, differenceWith } from "lodash";
import {
  updateStrapiWishlist,
  fetchAPI,
  createStrapiWishlist,
  updateStrapiShoppingCart,
  createStrapiShoppingCart,
} from "../lib/api";

interface ContextType {
  addToCart: (product: Product, quantity: number) => void;
  removeFromCart: (productID: number, quantity?: number) => void;
  clearCart: () => void;
  cartItems: CartItemType[];

  addToWishlist: (product: Product) => void;
  removeFromWishlist: (productID: number) => void;
  clearWishlist: () => void;
  wishlistContains: (id: number) => boolean;
  cartContains: (id: number) => number | undefined;
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
  const cartSynchronised = useRef<boolean>();

  const [wishlistItems, setWishlistItems] = useState<WishlistItemType[]>([]);
  const wishListSynchronised = useRef<boolean>();

  //
  // cart
  //
  const cartContains = (id: number): number | undefined => cartItems.find(i => i.product.id === id)?.quantity;

  const addToCart = (product: Product, quantity: number) => {
    const isPrescription = product.availability !== "otc";

    if (isPrescription) {
      if (!user) {
        toast(`${product.name} is a prescription only product. Please login to add this to your cart`, { icon: "⚠️" });
        return;
      }
      if (user.role.name !== "Patient") {
        toast(`${product.name} is a prescription only product. Please contact us to find out how to become a patient`, {
          icon: "⚡",
          duration: 8000,
        });
        return;
      }
    }

    // check if the item is already in the list
    const existingItemIdx = cartItems.findIndex((i) => i.product.id === product.id);

    let updatedList: CartItemType[] = [];
    if (existingItemIdx >= 0) {
      // update the item in the list
      cartItems[existingItemIdx].quantity += quantity;
      updatedList = [...cartItems];
    } else {
      // add the new item (it's not in the list yet)
      updatedList = [...cartItems, { product, quantity }];
    }

    // if the user is logged in
    if (authToken) {
      updateStrapiShoppingCart(authToken, updatedList)
        .then(() => {
          setCartItems(updatedList);
          toast(`${product.name} added to cart`, { icon: "🛒" });
        })
        .catch(e => {
          if (e.toString().includes("No prescription")) {
            toast.error(e.toString(), { icon: "🔒" });
          } else {
            toast.error(`Something went wrong, we could not add to your cart`, { icon: "😞️" });
            console.error(`Could not add to your cart ${e}`);
          }
        });
    } else {
      setCartItems(updatedList);
      toast(`${product.name} added to cart`, { icon: "🛍️" });
    }

    // remove the product from the wishlist
    removeFromWishlist(product.id);
  };

  const removeFromCart = (productID: number, quantity?: number): void => {
    let updatedList: CartItemType[] = [];
    if (!quantity) {
      //  Remove from cart completely
      updatedList = cartItems.filter(i => i.product.id !== productID);
    } else {
      // get the existing item
      const existingItemIdx = cartItems.findIndex(i => i.product.id === productID);

      if (existingItemIdx < 0) {
        console.error("Can't find the item with id ", productID);
        toast.error("We can't find that item", { icon: "😞️" });
        return;
      }

      if (cartItems[existingItemIdx].quantity <= 1) {
        // if this is the last one, remove completely
        return removeFromCart(productID);
      } else {
        // update the item in the list
        cartItems[existingItemIdx].quantity -= quantity;
        updatedList = [...cartItems];
      }
    }

    // if we are logged in, update the cart on the server first
    if (authToken) {
      updateStrapiShoppingCart(authToken, updatedList)
        .catch(e => {
          console.error(`Could not synchronise your cart ${e}`);
          toast.error(`Something went wrong, we could not synchronise your cart`, { icon: "😞️" });
        })
        .finally(() => {
          setCartItems(updatedList);
        });
    } else {
      // set locally only
      setCartItems(updatedList);
    }


  };

  const clearCart = () => {
    setCartItems([]);
  };

  //
  // wishlist
  //
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
          toast.error(`Something went wrong, we could not add to your wishlist`, { icon: "😞️" });
        });
    } else {
      setWishlistItems(updatedList);
      toast(`${product.name} added to wishlist`, { icon: "🖤️" });
    }
  };

  const removeFromWishlist = (productID: number) => {
    //  Remove from cart completely
    const updatedList = wishlistItems.filter(i => i.product.id !== productID);

    if (authToken) {
      updateStrapiWishlist(authToken, updatedList.map(i => i.product.id))
        .catch((e) => {
          console.error(`Could not synchronise your wishlist ${e}`);
          toast.error(`Something went wrong, we could not synchronise your wishlist`, { icon: "😞️" });
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

  // clear the user's cart && wishlist on logout
  // Note: wishListSynchronised.current would have been true if the user was
  //       logged in before
  useEffect(() => {
    if (!user) {
      // clear cart
      if (cartSynchronised.current) {
        cartSynchronised.current = false;
        clearCart();
      }

      // clear wishlist
      if (wishListSynchronised.current) {
        wishListSynchronised.current = false;
        clearWishlist();
      }
    }
  }, [user]);

  // fetchWishlist can be used to fetch the user's wishlist given an auth token
  const fetchWishlist = async (token: string): Promise<Product[]> => {
    const response = await fetchAPI("/wish-lists/me", token);
    return response.products;
  };

  // fetchShoppingCart can be used to fetch the user's cart given an auth token
  const fetchShoppingCart = async (token: string): Promise<CartItemType[]> => {
    const response = await fetchAPI("/shopping-carts/me", token);
    return response.cart_items;
  };

  // wishlistComparator is a function to compare if two products are the same
  const wishlistComparator = (a: Product, b: Product): boolean => {
    return a.id === b.id;
  };

  // cartComparator is a function to compare if two cart items are the same
  const cartComparator = (a: CartItemType, b: CartItemType): boolean => {
    return a.product.id === b.product.id && a.quantity === b.quantity;
  };

  // synchronise the shopping cart if user is authenticated
  useEffect(() => {
    if (!user || !authToken) {
      return;
    }

    if (cartSynchronised.current) {
      console.debug("Shopping cart in sync");
      return;
    }

    // create a function that can be used to synchronise the shopping cart
    const synchroniseShoppingCart = async (token: string, items: CartItemType[], cartItems: CartItemType[]) => {
      const combinedList = unionWith(items, cartItems, cartComparator);
      cartSynchronised.current = true;

      // check if any items have to be updated on the server
      if (differenceWith(combinedList, items, cartComparator).length > 0) {
        await updateStrapiShoppingCart(token, combinedList);
      }

      // check if any items have to be updated locally
      if (differenceWith(combinedList, cartItems, cartComparator).length > 0) {
        setCartItems(combinedList);
      }
    };

    fetchShoppingCart(authToken)
      .then((items: CartItemType[]) => {
        synchroniseShoppingCart(authToken, items, cartItems)
          .then(() => {
            toast(`Synchronised your shopping cart`, { icon: "🛒️" });
          })
          .catch(e => {
            console.error(`Could not synchronise your shopping cart ${e}`);
            toast.error(`Something went wrong, we could not synchronise your shopping cart`, { icon: "😞️" });
          });
      })
      .catch(e => {
        if (e === "Not Found") {
          createStrapiShoppingCart(authToken)
            .then(() => {
              toast(`Created your shopping cart`, { icon: "🛒️️" });
            })
            .catch(e => {
              console.error(`Could not create your shopping cart ${e}`);
              toast.error(`Something went wrong, we could not create your shopping cart`, { icon: "😞️" });
            });
        } else {
          console.error(`Could not fetch your shopping cart`, e);
          toast.error(`Something went wrong, we could not fetch your shopping cart`, { icon: "😞️" });
        }
      });
  }, [authToken, user, cartItems]);


  // synchronise the wishlist if user is authenticated
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
      const combinedList = unionWith(products, wishlistProducts, wishlistComparator);
      wishListSynchronised.current = true;

      // check if any items have to be updated on the server
      if (differenceWith(combinedList, products, wishlistComparator).length > 0) {
        await updateStrapiWishlist(token, combinedList.map(i => i.id));
      }

      // check if any items have to be updated locally
      if (differenceWith(combinedList, wishlistProducts, wishlistComparator).length > 0) {
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
            toast.error(`Something went wrong, we could not synchronise your wishlist`, { icon: "😞️" });
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
              toast.error(`Something went wrong, we could not create your wishlist`, { icon: "😞️" });
            });
        } else {
          console.error(`Could not fetch your wishlist ${e}`);
          toast.error(`Something went wrong, we could not fetch your wishlist`, { icon: "😞️" });
        }
      });
  }, [authToken, user, wishlistItems]);

  return (
    <Context.Provider
      value={{
        addToCart: addToCart,
        clearCart: clearCart,
        removeFromCart: removeFromCart,
        cartItems: cartItems,
        cartContains: cartContains,

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
