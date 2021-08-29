import { connectAutoComplete } from "react-instantsearch-dom";
import { Hit } from "react-instantsearch-core";
import { useEffect, useState } from "react";
import { Product } from "../../types/product";
import Image from "next/image";
import { strapiLoader } from "../../lib/media";
import { useCartContext } from "../../contexts/cartContext";
import { Popover } from "@headlessui/react";
import { useRouter } from "next/router";

interface AutocompleteProps {
  hits: Hit[];
  currentRefinement: string;
  refine: (value: string) => void;
}

const prettyPrice = (price: number): string => {
  return new Intl.NumberFormat("en-ZA", {
    style: "currency",
    currency: "ZAR",
  }).format(price);
};

const ProductItem = ({ product }: { product: Product }) => {
  const router = useRouter();
  const { addToCart } = useCartContext();
  return (
    <li
      onClick={() => {
        router.push(`/products/${product.id}`);
      }}
      className="grid grid-cols-8 p-1 hover:cursor-pointer transition duration-150 ease-in-out rounded hover:bg-gray-200">
      <div className="relative col-span-2 ring-primary ring-1 rounded">
        <Image
          layout="fill"
          objectFit="contain"
          loader={strapiLoader}
          src={product.image?.formats.thumbnail.url || "https://image.shutterstock.com/image-vector/ui-image-placeholder-wireframes-apps-260nw-1037719204.jpg"}
          alt={product.image?.alternativeText || "Product image"}
        />
      </div>

      <div className="col-span-6 px-4">
        <p className="text-sm font-medium text-gray-900">{product.name}</p>
        <p className="text-sm text-gray-800 line-clamp-2">
          {product.description}
        </p>
        <div className={"flex mt-2"}>
          <p className={"font-medium text-gray-900 flex-grow"}>{prettyPrice(product.price)}</p>
          <button className={"font-medium text-gray-900"} onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            addToCart(product, 1);
          }}>
            Add to cart
          </button>
        </div>
      </div>
    </li>
  );
};

const Autocomplete = ({ hits, currentRefinement, refine }: AutocompleteProps) => {
  const [showResults, setShowResults] = useState(true);
  useEffect(() => {
    if (currentRefinement && hits.length > 0) {
      setShowResults(true);
    } else {
      setShowResults(false);
    }
  }, [currentRefinement, hits.length]);

  return (
    <div className={"font-karla w-full"}>
      <input
        className={"bg-white shadow-sm rounded-full px-4 py-2 w-full"}
        type="search"
        value={currentRefinement}
        onChange={event => refine(event.currentTarget.value)}
        placeholder={"Search"}
      />
      <div className={"absolute z-20 mt-1 bg-white/95 shadow-lg rounded"}>
        <Popover>
          {showResults && (
            <div>
              <Popover.Panel static>
                <div className="grid gap-2">
                  {hits.map(hit => {
                    const product = hit as unknown as Product;
                    return (
                      <ProductItem key={hit.objectID} product={product} />
                    );
                  })}
                </div>
              </Popover.Panel>
            </div>
          )}
        </Popover>
      </div>

    </div>
  );
};

export const CustomAutocomplete = connectAutoComplete(Autocomplete);
