import { Product } from "../../types/product";
import ProductWidget from "../productWidget";

interface ProductHitProps {
  hit: Product;
}

export const ProductHit = ({ hit: product }: ProductHitProps) => {
  return (
    <ProductWidget product={product} />
  );
};
