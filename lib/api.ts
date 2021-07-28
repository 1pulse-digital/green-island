export function getStrapiURL(path = "") {
  return `${
    process.env.NEXT_PUBLIC_STRAPI_API_URL || "http://localhost:1337"
  }${path}`;
}

// Helper to make GET requests to Strapi
export async function fetchAPI(path: string) {
  const requestUrl = getStrapiURL(path);
  console.log(`fetching ${requestUrl}`);
  const response = await fetch(requestUrl);
  const data = await response.json();
  return data;
}

export async function registerUser(username: string, password: string) {
  const requestUrl = getStrapiURL("/auth/local/register");

  const response = await fetch(requestUrl, {});
  const data = await response.json();
  return data;
}
