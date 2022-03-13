import { CartItemType } from "../contexts/cartContext";
import { Product } from "../types/product";
import * as XLSX from "xlsx";

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
  // console.debug(`fetching: ${requestUrl}`);
  const response = await fetch(requestUrl, { headers });
  if (!response.ok) {
    const data = await response.text();
    console.warn(`fetch error response:`, { response, data });
    throw data;
  }

  const data = await response.json();
  // console.debug(`fetched:  ${requestUrl}\n`, data);
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
  // console.debug(`posting: ${requestUrl}`);

  const response = await fetch(requestUrl, {
    method: "POST",
    headers: headers,
    body: JSON.stringify({
      products: [],
    }),
  });
  const data = await response.json();
  // console.debug(`posted:  ${requestUrl}\n`, data);

  if (data.error) {
    throw `${data.message}`;
  }

  return data;
}

export async function requestCoupon(email: string, fullName: string) {
  const headers = {
    "Content-Type": "application/json",
  } as { "Content-Type": string };

  const requestUrl = getStrapiURL("/coupons/request");

  const response = await fetch(requestUrl, {
    method: "POST",
    headers: headers,
    body: JSON.stringify({
      fullName,
      email,
    }),
  });

  if (response.status != 200) {
    const message = await response.text();
    throw new Error(message);
  }

  return;
}

export async function createStrapiShoppingCart(token: string) {
  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  } as { "Content-Type": string; Authorization?: string };

  const requestUrl = getStrapiURL("/shopping-carts");
  // console.debug(`posting: ${requestUrl}`);

  const response = await fetch(requestUrl, {
    method: "POST",
    headers: headers,
    body: JSON.stringify({}),
  });
  const data = await response.json();
  // console.debug(`posted:  ${requestUrl}\n`, data);

  if (data.error) {
    throw `${data.message}`;
  }

  return data;
}

export interface submitContactFormRequest {
  firstName: string,
  lastName: string,
  email: string,
  tel: string,
  message: string,
}


export async function forgotPassword(email: string) {
  const headers = {
    "Content-Type": "application/json",
  } as { "Content-Type": string; Authorization?: string };

  const requestUrl = getStrapiURL("/auth/forgot-password");

  const response = await fetch(requestUrl, {
    method: "POST",
    headers: headers,
    body: JSON.stringify({
      email,
    }),
  });

  if (response.status != 200) {
    const message = await response.text();
    throw new Error(message);
  }

  return;
}

export async function resetPassword(code: string, password: string, passwordConfirmation: string) {
  const headers = {
    "Content-Type": "application/json",
  } as { "Content-Type": string; Authorization?: string };

  const requestUrl = getStrapiURL("/auth/reset-password");

  const response = await fetch(requestUrl, {
    method: "POST",
    headers: headers,
    body: JSON.stringify({
      code,
      password,
      passwordConfirmation,
    }),
  });

  if (response.status != 200) {
    const message = await response.text();
    throw new Error(message);
  }

  return;
}

export async function saveProfileDetails(token: string, {
  address,
  first_name,
  last_name,
  rsa_id,
  phone_number,
  apt_floor_number,
  complex_building_name,
}: {
  address: string,
  first_name: string,
  last_name: string,
  rsa_id?: string,
  phone_number?: string,
  apt_floor_number?: string,
  complex_building_name?: string
}) {
  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  } as { "Content-Type": string; Authorization?: string };

  const requestUrl = getStrapiURL("/profiles/me/details");
  console.debug(`updating: ${requestUrl}`);

  const response = await fetch(requestUrl, {
    method: "POST",
    headers: headers,
    body: JSON.stringify({
      address,
      first_name,
      last_name,
      rsa_id,
      phone_number,
      apt_floor_number,
      complex_building_name,
    }),
  });
  if (response.status != 200) {
    const message = await response.text();
    throw new Error(message);
  }

  return;
}


export async function saveProfileMedicalAid(token: string, {
  provider,
  scheme_name,
  membership_number,
  main_member,
}: { provider: string, scheme_name: string, membership_number: string, main_member: string }) {
  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  } as { "Content-Type": string; Authorization?: string };

  const requestUrl = getStrapiURL("/profiles/me/medical-aid");
  console.debug(`updating: ${requestUrl}`);

  const response = await fetch(requestUrl, {
    method: "POST",
    headers: headers,
    body: JSON.stringify({
      medical_aid_details: {
        provider,
        scheme_name,
        membership_number,
        main_member,
      },
    }),
  });
  if (response.status != 200) {
    const message = await response.text();
    throw new Error(message);
  }

  return;
}

export async function subscribeToMailer(email: string) {
  const headers = {
    "Content-Type": "application/json",
  } as { "Content-Type": string; Authorization?: string };

  const requestUrl = getStrapiURL("/subscribe");
  // console.debug(`posting: ${requestUrl}`);

  const response = await fetch(requestUrl, {
    method: "POST",
    headers: headers,
    body: JSON.stringify({ email }),
  });

  if (response.status != 200) {
    const message = await response.text();
    throw new Error(message);
  }

  return;
}

export async function submitContactForm(request: submitContactFormRequest, token?: string) {
  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  } as { "Content-Type": string; Authorization?: string };

  if (!token) {
    delete headers.Authorization;
  }

  const requestUrl = getStrapiURL("/contact");

  const response = await fetch(requestUrl, {
    method: "POST",
    headers: headers,
    body: JSON.stringify(request),
  });

  if (response.status != 200) {
    const message = await response.text();
    throw new Error(message);
  }
  return;
}

export async function exportProducts() {
  const limit = 100;
  let start = 0;
  let list: Product[] = [];

  // fetch all the products from strapi
  while (true) {
    try {
      let query = `_start=${start}&_limit=${limit}`;
      const response = await fetchAPI(`/products?${query}`);
      list.push(...response);
      if (response.length === 0 || response.length < limit) {
        break;
      }
      start += limit;
    } catch (e) {
      console.error("Could not fetch products", e);
      throw e;
    }
  }

  // create the Excel file with all the products
  const fileName = `export_${new Date().toISOString()}.xlsx`;
  const items = list.map(entry => {
    return {
      "Name": entry.name,
      "Product Code": entry.product_code,
      "Stock Quantity": entry.stock_quantity,
      "Availability": entry.availability,
      "Image": entry.image?.url,
    };
  });

  const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(items);
  const wb: XLSX.WorkBook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, "Stock");

  XLSX.writeFile(wb, fileName);
}

export async function upsertProduct(token: string, product: Product) {
  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  } as { "Content-Type": string; Authorization?: string };

  const requestUrl = getStrapiURL(`/products/${encodeURI(product.product_code || "")}`);

  const response = await fetch(requestUrl, {
    method: "POST",
    headers: headers,
    body: JSON.stringify(product),
  });

  if (response.status != 200) {
    const message = await response.text();
    throw new Error(message);
  }
  return await response.json();
}

export async function cancelOrder(orderID: number, paymentID: string) {
  const headers = {
    "Content-Type": "application/json",
  } as { "Content-Type": string; Authorization?: string };

  const requestUrl = getStrapiURL(`/orders/cancel`);

  const response = await fetch(requestUrl, {
    method: "POST",
    headers: headers,
    body: JSON.stringify({ order_id: orderID, payment_id: paymentID }),
  });

  if (response.status != 200) {
    const message = await response.text();
    throw new Error(message);
  }
  return await response.json();
}

export async function updateStrapiWishlist(token: string, products: number[]) {
  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  } as { "Content-Type": string; Authorization?: string };

  const requestUrl = getStrapiURL("/wish-lists/me");
  // console.debug(`updating: ${requestUrl}`);

  const response = await fetch(requestUrl, {
    method: "PUT",
    headers: headers,
    body: JSON.stringify({
      products,
    }),
  });
  const data = await response.json();
  // console.debug(`updated:  ${requestUrl}\n`, data);

  if (data.error) {
    throw `${data.error}: ${data.message}`;
  }
  return data;
}

export async function updateStrapiShoppingCart(token: string, items: CartItemType[]) {
  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  } as { "Content-Type": string; Authorization?: string };

  const requestUrl = getStrapiURL("/shopping-carts/me");
  // console.debug(`updating: ${requestUrl}`);

  const response = await fetch(requestUrl, {
    method: "PUT",
    headers: headers,
    body: JSON.stringify({
      cart_items: items,
    }),
  });
  if (response.status === 403) {
    const message = await response.text();
    throw new Error(message);
  }

  const data = await response.json();
  // console.debug(`updated:  ${requestUrl}\n`, data);

  if (data.error) {
    throw `${data.error}: ${data.message}`;
  }
  return data;
}


// export const useProducts = (query?: string): { products: Product[], isLoading: boolean, error: any } => {
//   const { data, error } = useSWR(
//     query ? `/products?${query}` : "/products",
//     fetchAPI,
//   );
//
//   return {
//     products: data,
//     isLoading: !error && !data,
//     error,
//   };
// };

// export const useProductCategories = (query?: string) => {
//   const { data, error } = useSWR(
//     query ? `/product-categories${query}` : "/product-categories",
//     fetchAPI,
//   );
//   return {
//     productCategories: data,
//     isLoading: !error && !data,
//     error,
//   };
// };

// export const useUser = (token: string) => {
//   const { data, error } = useSWR(["/users/me", token], fetchAPI);
//   return {
//     products: data,
//     isLoading: !error && !data,
//     error,
//   };
// };
