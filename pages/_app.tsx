import "../styles/globals.css";
import type { AppProps } from "next/app";
import CartContext from "../contexts/cartContext";
import AuthContext from "../contexts/authContext";
import RefinementContext from "../contexts/refinementContext";
import PrescriptionDisclaimerContext from "../contexts/prescriptionDisclaimerContext";
import algoliasearch from "algoliasearch/lite";
import { InstantSearch } from "react-instantsearch-dom";
import { Toaster } from "react-hot-toast";
import { useRouter } from "next/router";
import { useEffect } from "react";
import * as gtag from "../lib/gtag";
import LogRocket from "logrocket";

// Initialise Algolia
const searchClient = algoliasearch(
  process.env.NEXT_PUBLIC_ALGOLIA_APP_ID ?? "",
  process.env.NEXT_PUBLIC_ALGOLIA_API_KEY ?? "",
);

function MyApp({ Component, pageProps }: AppProps) {
  // tracking gtag start
  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = (url: string) => {
      gtag.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);
  // tracking gtag end

  // clear Algolia cache on first load
  useEffect(() => {
    console.log("Clearing Algolia cache");
    searchClient.clearCache();
  }, []);


  // logrocket monitoring
  useEffect(() => {
    LogRocket.init("vuqsu2/perfect-health-practice");
  }, []);

  return (
    <AuthContext>
      <Toaster position={"bottom-center"} />
      <PrescriptionDisclaimerContext>
        <CartContext>
          <RefinementContext>
            <InstantSearch
              indexName="perfect_health_products"
              searchClient={searchClient}
            >
              <Component {...pageProps} />
            </InstantSearch>
          </RefinementContext>
        </CartContext>
      </PrescriptionDisclaimerContext>
    </AuthContext>
  );
}

export default MyApp;
