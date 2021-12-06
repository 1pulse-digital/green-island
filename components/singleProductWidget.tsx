import { Product } from "../types/product";
import Image from "next/image";
import { prettyPrice } from "../lib/calc";
import { useCartContext } from "../contexts/cartContext";
import { useState } from "react";
import { toast } from "react-hot-toast";

export interface ProductWidget1Props {
  product: Product;
}

const ProductWidget1 = (props: ProductWidget1Props) => {
  const { product } = props;
  // add to cart button functionality
  const { addToCart, addToWishlist } = useCartContext();

  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return null;
  }

  const handleIncrease = () => {
    // set an arbitrary maximum of 50
    if (quantity < 50) {
      setQuantity(quantity + 1);
    }
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const productOutOfStock = product.stock_quantity <= 0;
  const productStockToLow = product.stock_quantity <= quantity;

  return (
    <div className={"w-full font-karla text-primary"}>
      <div className={"grid lg:grid-cols-2"}>
        {/* Image (* <--> md) */}
        <div className="flex md:hidden place-content-center">
          <Image
            objectFit="contain"
            height={300}
            width={300}
            src={
              product.image?.formats.small?.url ||
              product.image?.formats.medium?.url ||
              product.image?.formats.thumbnail?.url ||
              "https://image.shutterstock.com/image-vector/ui-image-placeholder-wireframes-apps-260nw-1037719204.jpg"
            }
            alt={product.image?.alternativeText || product.name}
          />
        </div>

        {/* Image (md <--> xl) */}
        <div className="hidden md:flex xl:hidden place-content-center">
          <Image
            objectFit="contain"
            height={400}
            width={400}
            src={
              product.image?.formats.small?.url ||
              product.image?.formats.medium?.url ||
              product.image?.formats.thumbnail?.url ||
              "https://image.shutterstock.com/image-vector/ui-image-placeholder-wireframes-apps-260nw-1037719204.jpg"
            }
            alt={product.image?.alternativeText || product.name}
          />
        </div>

        {/* Image (xl <--> *) */}
        <div className="hidden xl:flex place-content-center">
          <Image
            objectFit="contain"
            height={600}
            width={600}
            src={
              product.image?.formats.small?.url ||
              product.image?.formats.medium?.url ||
              product.image?.formats.thumbnail?.url ||
              "https://image.shutterstock.com/image-vector/ui-image-placeholder-wireframes-apps-260nw-1037719204.jpg"
            }
            alt={product.image?.alternativeText || product.name}
          />
        </div>

        {/* Name + *Variation + Description + Directions + Warning */}
        <div className="p-4 xl:p-10">
          {/* Name */}
          <h1 className="text-2xl font-semibold truncate lg:text-4xl">
            {product.name}
          </h1>
          <span className={"text-sm text-gray-400"}>
            {product.product_code}
          </span>
          {/* Variations */}
          {product.variation && (
            <span className={"ml-4 text-sm"}>10 Amusja</span>
          )}
          {/* Product Rating Starts */}
          {/* TODO: Add product ratings */}
          {/*<ReactStars activeColor="blue" size={30} isHalf={true} />*/}
          {/* Description */}
          <p className={"mt-6 lg:mt-8 font-semibold "}>Description</p>
          <h3 className={"my-2 "}>{product.description}</h3>
          {/* Directions */}
          <p className={"mt-6 lg:mt-8 font-semibold "}>Directions</p>
          <p className={"my-2"}>{product.directions}</p>
          {/* Storage */}
          <p className={"mt-6 lg:mt-8 font-semibold "}>Storage</p>
          <p className={"my-2"}>{product.storage}</p>
          {/* Brand (supplier) */}
          <p className={"mt-6 lg:mt-8 font-semibold "}>Brand</p>
          <p className={"my-2"}>{product.supplier}</p>
          {/* Warning */}
          <p className={"mt-6 lg:mt-8 font-semibold "}>Warning</p>
          <p className={"my-2 pb-10"}>{product.warning}</p>
          <h2 className={"font-semibold text-2xl"}>
            {prettyPrice(product.price)}
          </h2>

          <div className="inline-block relative py-4 md:py-10 px-2 text-left w-[166px]">
            <div className="flex items-center mx-2">
              <button
                type="button"
                onClick={handleDecrease}
                className="w-full px-4 py-2 text-base font-medium text-black bg-white border-t border-b border-l rounded-l-md hover:bg-gray-300">
                -
              </button>
              <button
                type="button"
                className="w-full px-4 py-2 text-base font-medium text-black bg-white border hover:bg-gray-100">
                {quantity}
              </button>
              <button
                type="button"
                className="w-full px-4 py-2 text-base font-medium text-black bg-white border-t border-b border-r rounded-r-md hover:bg-gray-100"
                onClick={handleIncrease}>
                +
              </button>
            </div>
          </div>

          {/* add product to cart button functionality */}

          <div className={"flex gap-4"}>
            <button
              className={
                "px-20 h-12 font-medium tracking-wide text-white rounded-full shadow-md transition duration-200 focus:outline-none truncate bg-secondary hover:bg-deep-purple-accent-700 focus:shadow-outline"
              }
              onClick={(event) => {
                event.preventDefault();
                event.stopPropagation();
                if (productStockToLow) {
                  if (productOutOfStock) {
                    addToWishlist(product);
                    toast(
                      "Product out of stock, it was added to your wishlist",
                      { duration: 5000, icon: "😞️" }
                    );
                  } else {
                    toast(
                      `Product stock is low. Only ${product.stock_quantity} items left`,
                      { duration: 5000, icon: "😞️" }
                    );
                  }
                } else {
                  addToCart(product, quantity);
                }
              }}>
              Add to cart
            </button>
            {/* add to wishlist button */}
            <button
              onClick={(event) => {
                event.preventDefault();
                event.stopPropagation();
                addToWishlist(product);
              }}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-10 h-10 text-primary hover:text-secondary"
                viewBox="0 0 20 20"
                fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductWidget1;
