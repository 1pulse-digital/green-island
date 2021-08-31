import { getStrapiURL } from "./api";

export interface Media {
  url: string;
}

export function getStrapiMedia(media: Media) {
  const imageUrl = media.url.startsWith("/")
    ? getStrapiURL(media.url)
    : media.url;
  return imageUrl;
}


export type strapiLoaderParams = {
  src: string;
  width: number;
  quality?: number;
};
export const strapiLoader = (params: strapiLoaderParams) => params.src;
