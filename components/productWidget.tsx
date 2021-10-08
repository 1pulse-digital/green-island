import { Product } from "../types/product";
import Image from "next/image";
import { Button } from "./button";
import { useCartContext } from "../contexts/cartContext";
import { useRouter } from "next/router";
import placeholder from "../images/2.jpg";
import { strapiLoader } from "../lib/media";
import ReactTooltip from "react-tooltip";
import { prettyPrice } from "../lib/calc";

export interface ProductWidgetProps {
  product: Product;
}

const ProductWidget = (props: ProductWidgetProps) => {
  const { product } = props;
  const {
    addToCart,
    removeFromWishlist,
    addToWishlist,
    wishlistContains,
    cartContains,
  } = useCartContext();
  const router = useRouter();

  if (!product) {
    return null;
  }
  const goToProduct = () => {
    router.push(`/products/${product.id}`);
  };

  const inWishlist = wishlistContains(product.id);
  const cartCount = cartContains(product.id);

  return (
    <div
      onClick={goToProduct}
      className="relative w-[250px] bg-white rounded-lg border-gray-50 cursor-pointer hover:shadow-xl font-karla">
      <div className={"relative h-[170px] w-full md:h-[240px]"}>
        {product.image && (
          <Image
            layout="fill"
            objectFit="cover"
            loader={strapiLoader}
            src={product.image?.formats.small.url}
            alt={product.image?.alternativeText}
          />
        )}
        {!product.image && (
          <Image
            layout="fill"
            objectFit="cover"
            src={placeholder}
            alt={"Placeholder image for product"}
          />
        )}
      </div>

      <div className={"h-32 grid grid-cols-3"}>
        <div className={" px-4 py-6 text-left col-span-2"}>
          <span className={"text-primary text-xl leading-tight line-clamp-2"}>
            {product.name}
          </span>
          {product.variation && (
            <span className={"text-sm text-gray-400 line-clamp-1"}>{product.variation}</span>
          )}
          {/* FIXME: Stock management */}
          <p className="text-green-500">In stock</p>
          <p className={"text-primary"}>{prettyPrice(product.price)}</p>
        </div>

        <div
          className={"grid justify-items-end py-6 px-6 "}
          onClick={(event) => {
            event.preventDefault();
            event.stopPropagation();
            if (inWishlist) {
              removeFromWishlist(product.id);
            } else {
              addToWishlist(product);
            }
          }}>
          {/* Add product to wishlist start */}
          <svg
            className={"w-6 h-6 stroke-current text-primary"}
            fill={inWishlist ? "currentColor" : "none"}
            viewBox="0 0 20 20"
            strokeWidth="1px"
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

      <div className="flex justify-center p-1 sm:p-4">
        <Button
          color="secondary"
          className={"mt-4 flex text-sm md:text-lg py-2"}
          onClick={(event) => {
            event.preventDefault();
            event.stopPropagation();
            addToCart(product, 1);
          }}>
          Add to cart
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="self-center pl-2 w-5 h-5 sm:w-7 md:h-7"
            viewBox="0 0 20 20"
            fill="currentColor">
            <path
              d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
          </svg>
          {cartCount && <span className={"ml-1"}>({cartCount})</span>}
        </Button>
      </div>

      {product.availability !== "otc" && (
        <div
          className="absolute top-0 right-0 p-2 text-primary"
          data-tip="Prescription only product">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5"
            viewBox="0 0 20 20"
            fill="currentColor">
            <path
              fillRule="evenodd"
              d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      )}
      <ReactTooltip place="left" type="dark" effect="solid" />
    </div>
  );
};

export default ProductWidget;
