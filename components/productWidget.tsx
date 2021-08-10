import { Product } from "../types/product";
import Image from "next/image";

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

  if (!product) {
    return null;
  }

  return (
    <div className="w-[300px] h-[536px] rounded-md border-gray-100 border-2 overflow-hidden ">
      <div className={"relative w-[300px] h-[300px] "}>
        <Image
          layout="fill"
          objectFit="cover"
          loader={strapiLoader}
          src={product.image.formats.small.url}
          alt={product.image.alternativeText}
        />
      </div>

      <div className="px-5 py-6">
        <p>{prettyPrice(product.price)}</p>
        <p className="text-[#96A629]">In stock</p>
        <span className="truncate">{product.name}</span>
      </div>

      <div className="">
        <button
          type="submit"
          className="truncate h-12 px-20 font-medium tracking-wide text-white transition duration-200 rounded-full shadow-md bg-secondary hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none mt-4 ">
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default ProductWidget;
