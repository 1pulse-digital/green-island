import { Product } from "../types/product";
import Image from "next/image";
import { Button } from "../components/button";

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
    <div className=" w-[200px] md:w-auto md:h-auto rounded-md border-gray-100 overflow-hidden bg-white ">
      <div
        className={"relative w-[200px] h-[200px] md:w-[290px] md:h-[290px] "}>
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
        <Button className={" w-full"}> Add to cart</Button>

      </div>
    </div>
  );
};

export default ProductWidget;
