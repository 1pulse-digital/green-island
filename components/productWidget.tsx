import { Product } from "../types/product";

export interface ProductWidgetProps {
  product: Product;
}

const ProductWidget = (props: ProductWidgetProps) => {
  return (
    <div className="bg-red-400">
      Name: {props.product.name}
      Price: {props.product.price}
    </div>
  );
};

export default ProductWidget;
