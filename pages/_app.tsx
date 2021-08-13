import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from "next-auth/client";
import CartContext from "../contexts/cartContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider session={pageProps.session}>
      <CartContext>
        <Component {...pageProps} />
      </CartContext>
    </Provider>
  );
}

export default MyApp;
