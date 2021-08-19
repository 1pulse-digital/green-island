import { Product } from "../types/product";
import Image from "next/image";
import { Button } from "./button";
import { useCartContext } from "../contexts/cartContext";
import { useRouter } from "next/router";
import wishlist from "../images/wishlist.png";

export interface ProductWidgetProps {
  product: Product;
}

type strapiLoaderParams = {
  src: string;
  width: number;
  quality?: number;
};

const strapiLoader = (params: strapiLoaderParams) => {
  return params.src;
};

const prettyPrice = (price: number): string => {
  return new Intl.NumberFormat("en-ZA", {
    style: "currency",
    currency: "ZAR",
  }).format(price);
};

const ProductWidget = (props: ProductWidgetProps) => {
  const { product } = props;
  const {
    addToCart,
    removeFromCart,
    clearCart,
    addToWishlist,
    removeFromWishlist,
  } = useCartContext();
  const router = useRouter();

  if (!product) {
    return null;
  }
  const goToProduct = () => {
    router.push(`/products/${product.id}`);
  };

  return (
    <div
      onClick={goToProduct}
      className="sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 rounded-lg border-gray-50 overflow-hidden bg-white hover:shadow-xl cursor-pointer font-karla">
      <div
        className={"relative h-[170px] w-[170px] md:w-full md:h-[240px]   "}>
        <Image
          layout="fill"
          objectFit="cover"
          loader={strapiLoader}
          src={product.image.formats.small.url}
          alt={product.image.alternativeText}
        />
      </div>
      <div className={" grid grid-cols-3  w-[250px]"}>
        <div className={" px-4 py-6 text-center md:text-left col-span-2"}>
          <span className={"text-primary text-xl"}>{product.name}</span>

          <p className="text-green-500">In stock</p>
          <p className={"text-primary "}>{prettyPrice(product.price)}</p>
        </div>
        <div
          className={"grid justify-items-end py-6 px-6 "}
          onClick={(event) => {
            event.preventDefault();
            event.stopPropagation();
            addToWishlist(props.product);
          }}>
          {/* Add product to wishlist start */}
          <svg
            className="w-6 h-6  "
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg">
            <path
              fillRule="evenodd"
              d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
              clipRule="evenodd"
            />
          </svg>
          {/* Add product to wishlist end */}
        </div>
      </div>

      <div className="p-1 sm:p-4">
        <Button
          color="secondary"
          className={"flex text-sm md:text-lg "}
          onClick={(event) => {
            event.preventDefault();
            event.stopPropagation();
            addToCart(product, 1);
          }}>
          Add to cart
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 md:h-7 sm:w-7 self-center pl-2"
            viewBox="0 0 20 20"
            fill="currentColor">
            <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
          </svg>
        </Button>
      </div>
    </div>
  );
};

export default ProductWidget;
