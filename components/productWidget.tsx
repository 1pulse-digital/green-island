import { Product } from "../types/product";
import Image from "next/image";
import { Button } from "./button";
import { useCartContext } from "../contexts/cartContext";

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
  const { addToCart, removeFromCart, clearCart } = useCartContext();

  if (!product) {
    return null;
  }

  return (
    <div
      className="sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 rounded-md border-gray-50 overflow-hidden bg-white hover:shadow-xl cursor-pointer ">
      <div
        className={"relative h-[160px] md:w-[270px] md:h-[290px] "}>
        <Image
          layout="fill"
          objectFit="cover"
          loader={strapiLoader}
          src={product.image.formats.small.url}
          alt={product.image.alternativeText}
        />
      </div>

      <div className="px-5 py-6 text-center md:text-left">
        <p>{prettyPrice(product.price)}</p>
        <p className="text-[#96A629]">In stock</p>
        <span className="truncate">{product.name}</span>
      </div>

      <div className="p-5">
        <Button
          color="secondary"
          className={" w-full"}
          onClick={() => {
            addToCart(product, 1);
          }}
        >Add to cart</Button>
      </div>
    </div>
  );
};

export default ProductWidget;
