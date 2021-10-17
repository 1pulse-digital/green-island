import "../styles/globals.css";
import type { AppProps } from "next/app";
import CartContext from "../contexts/cartContext";
import AuthContext from "../contexts/authContext";
import algoliasearch from "algoliasearch/lite";
import { InstantSearch } from "react-instantsearch-dom";
import { Toaster } from "react-hot-toast";
import RefinementContext from "../contexts/refinementContext";

// Initialise Algolia
const searchClient = algoliasearch(
  process.env.NEXT_PUBLIC_ALGOLIA_APP_ID ?? "",
  process.env.NEXT_PUBLIC_ALGOLIA_API_KEY ?? "",
);

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthContext>
      <Toaster position={"bottom-center"} />
      <CartContext>
        <RefinementContext>
          <InstantSearch searchClient={searchClient} indexName="perfect_health_products">
            <Component {...pageProps} />
          </InstantSearch>
        </RefinementContext>
      </CartContext>
    </AuthContext>
  );
}

export default MyApp;
