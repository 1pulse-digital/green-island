const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001/";

/* @param {any} image */
export const fromImageToUrl = (image: { url: string }) => {
  if (!image) {
    return "/vercel.svg";
  }
  if (image.url.indexOf("/") === 0) {
    return `${API_URL}${image.url}`;
  }

  return image.url;
};
