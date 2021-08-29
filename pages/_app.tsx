import "../styles/globals.css";
import type { AppProps } from "next/app";
import CartContext from "../contexts/cartContext";
import AuthContext from "../contexts/authContext";
import algoliasearch from "algoliasearch/lite";
import { InstantSearch } from "react-instantsearch-dom";
import { Toaster } from "react-hot-toast";

const searchClient = algoliasearch("", "");

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthContext>
      <Toaster position={"bottom-center"} />
      <CartContext>
        <InstantSearch searchClient={searchClient} indexName="perfect_health_products">
          <Component {...pageProps} />
        </InstantSearch>
      </CartContext>
    </AuthContext>
  );
}

export default MyApp;
