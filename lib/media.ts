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
