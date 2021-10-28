import { connectAutoComplete } from "react-instantsearch-dom";
import { Hit } from "react-instantsearch-core";
import { useEffect, useState } from "react";
import { Product } from "../../types/product";
import Image from "next/image";
import { useCartContext } from "../../contexts/cartContext";
import { Popover } from "@headlessui/react";
import { useRouter } from "next/router";
import { AlgoliaLogo } from "./logo";
import { prettyPrice } from "../../lib/calc";

interface AutocompleteProps {
  hits: Hit[];
  currentRefinement: string;
  refine: (value: string) => void;
}

const ProductItem = ({ product }: { product: Product }) => {
  const router = useRouter();
  const { addToCart } = useCartContext();
  return (
    <li
      onClick={() => {
        router.push(`/products/${product.id}`);
      }}
      className="grid grid-cols-8 p-4 rounded transition duration-150 ease-in-out hover:bg-gray-200 hover:cursor-pointer">
      <div className="relative col-span-2 rounded ring-1 ring-primary">
        <Image
          layout="fill"
          objectFit="contain"
          src={
            product.image?.formats.thumbnail?.url ||
            "https://image.shutterstock.com/image-vector/ui-image-placeholder-wireframes-apps-260nw-1037719204.jpg"
          }
          alt={product.image?.alternativeText || product.name}
        />
      </div>

      <div className="col-span-6 px-4">
        <p className="text-lg medium text-primary">{product.name}</p>
        <p className="text-sm text-gray-800 line-clamp-2">
          {product.description}
        </p>
        <div className={"flex mt-2"}>
          <p
            className={
              "font-medium  flex-grow font-karla text-primary text-md"
            }>
            {prettyPrice(product.price)}
          </p>
          <button
            className={"font-medium text-primary hover:text-secondary"}
            onClick={(e) => {
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

const Autocomplete = ({
                        hits,
                        currentRefinement,
                        refine,
                      }: AutocompleteProps) => {
  const [showResults, setShowResults] = useState(true);
  useEffect(() => {
    if (currentRefinement) {
      setShowResults(true);
    } else {
      setShowResults(false);
    }
  }, [currentRefinement, hits.length]);

  return (
    <div className={"font-karla w-full"}>
      <input
        className={"bg-white shadow-sm border-0 rounded-full px-4 py-2 w-full"}
        type="search"
        value={currentRefinement}
        onChange={(event) => refine(event.currentTarget.value)}
        placeholder={"Search"}
        autoComplete="off"
        autoCorrect="off"
        autoCapitalize="none"
        spellCheck="false"
      />
      <div
        className={
          "absolute z-20 mt-1 bg-white/95 shadow-lg rounded-lg w-full"
        }>
        <Popover>
          {showResults && (
            <div>
              <Popover.Panel static>
                <div className="grid gap-2">
                  {hits.map((hit) => {
                    const product = hit as unknown as Product;
                    return <ProductItem key={hit.objectID} product={product} />;
                  })}
                  {hits.length === 0 && (
                    <p
                      className={
                        "h-16 w-full rounded bg-white grid place-content-center"
                      }>
                      No items found
                    </p>
                  )}
                  <div
                    className={
                      "flex mt-1 justify-end mx-2 py-2 border-t-2 border-gray-100"
                    }>
                    <AlgoliaLogo />
                  </div>
                </div>
              </Popover.Panel>
            </div>
          )}
        </Popover>
      </div>
    </div>
  );
};

export const AlgoliaAutocomplete = connectAutoComplete(Autocomplete);
