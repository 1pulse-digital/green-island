import { Product } from "../types/product";
import Image from "next/image";
import product1 from "../images/Amipro - Citricidal Liquid.jpg";
import product2 from "../images/Amipro - Daily Vita Life.jpg";
import product3 from "../images/Amipro - Magnazone Powder.jpg";
import product4 from "../images/Amipro - Malic Acid Extra Strength.jpg";

export interface ProductWidgetProps {
  product: Product;
}

const ProductWidget = (props: ProductWidgetProps) => {
  return (
    <div className="  py-16  ">
      <div className=" ">
        <Image
          className={""}
          src={product1}
          alt="cart"
          height="250"
          width="250"
        />
        {props.product.name}
        {props.product.price}
        <button
          type="submit"
          className="  h-12 px-20 font-medium tracking-wide text-white transition duration-200 rounded-full shadow-md bg-secondary hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none mt-4 ">
          Add to cart
        </button>
      </div>

      {/* <div className={""}>
        <Image
          className={""}
          src={product1}
          alt="cart"
          height="250"
          width="250"
        />
        <p className={" font-semibold pt-2 px-4"}>R1234,55</p>
        <p className={" text-green-400 px-4"}>In stock</p>
        <p className={" font-semibold px-4"}>HelicoX</p>
        <button
          type="submit"
          className="  h-12 px-20 font-medium tracking-wide text-white transition duration-200 rounded-full shadow-md bg-secondary hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none mt-4 ">
          Add to cart
        </button>
      </div> */}

      {/* <div>
        <Image
          className={" "}
          src={product4}
          alt="logo"
          height="250"
          width="250"
        />
        <p className={" font-semibold pt-2 px-4"}>R1234,55</p>
        <p className={" text-green-400 px-4"}>In stock</p>
        <p className={" font-semibold px-4"}>HelicoX</p>
        <button
          type="submit"
          className="  h-12 px-20 font-medium tracking-wide text-white transition duration-200 rounded-full shadow-md bg-secondary hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none mt-4 ">
          Add to cart
        </button>
      </div> */}
      {/* next four products */}
    </div>
  );
};

export default ProductWidget;
