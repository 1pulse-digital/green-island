import useSWR from "swr";
import { Product } from "../types/product";

export function getStrapiURL(path = "") {
  return `${
    process.env.NEXT_PUBLIC_STRAPI_API_URL || "http://localhost:1337"
  }${path}`;
}

// Helper to make GET requests to Strapi
export async function fetchAPI(path: string, token?: string) {
  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  } as { "Content-Type": string; Authorization?: string };

  if (!token) {
    delete headers.Authorization;
  }

  const requestUrl = getStrapiURL(path);
  console.debug(`fetching: ${requestUrl}`);
  const response = await fetch(requestUrl, { headers });
  if (!response.ok) {
    throw response.statusText
  }

  const data = await response.json();
  console.debug(`fetched:  ${requestUrl}\n`, data);
  if (data.error) {
    throw `${data.error}: ${data.message}`;
  }
  return data;
}


export async function createStrapiWishlist(token: string) {
  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  } as { "Content-Type": string; Authorization?: string };

  const requestUrl = getStrapiURL("/wish-lists");
  console.debug(`posting: ${requestUrl}`);

  const response = await fetch(requestUrl, {
    method: "POST",
    headers: headers,
    body: JSON.stringify({
      products: [],
    }),
  });
  const data = await response.json();
  console.debug(`posted:  ${requestUrl}\n`, data);

  if (data.error) {
    throw `${data.message}`;
  }

  return data;
}

export async function updateStrapiWishlist(token: string, products: number[]) {
  if (products.length === 0) {
    throw `products can't be empty`;
  }
  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  } as { "Content-Type": string; Authorization?: string };

  const requestUrl = getStrapiURL("/wish-lists/me");
  console.debug(`fetching: ${requestUrl}`);

  const response = await fetch(requestUrl, {
    method: "PUT",
    headers: headers,
    body: JSON.stringify({
      products,
    }),
  });
  const data = await response.json();
  console.debug(`fetched:  ${requestUrl}\n`, data);


  if (data.error) {
    throw `${data.error}: ${data.message}`;
  }
  return data;
}

export const useProducts = (query?: string): { products: Product[], isLoading: boolean, error: any } => {
  const { data, error } = useSWR(
    query ? `/products?${query}` : "/products",
    fetchAPI,
  );

  return {
    products: data,
    isLoading: !error && !data,
    error,
  };
};

export const useProductCategories = (query?: string) => {
  const { data, error } = useSWR(
    query ? `/product-categories${query}` : "/product-categories",
    fetchAPI,
  );
  return {
    productCategories: data,
    isLoading: !error && !data,
    error,
  };
};

// export const useUser = (token: string) => {
//   const { data, error } = useSWR(["/users/me", token], fetchAPI);
//   return {
//     products: data,
//     isLoading: !error && !data,
//     error,
//   };
// };
