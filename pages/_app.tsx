import "../styles/globals.css";
import type { AppProps } from "next/app";
// import { Provider } from "next-auth/client";
import CartContext from "../contexts/cartContext";
import AuthContext from "../contexts/authContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    // <Provider session={pageProps.session}>
    <AuthContext>
      <CartContext>
        <Component {...pageProps} />
      </CartContext>
    </AuthContext>
    // </Provider>
  );
}

export default MyApp;
