import { Media } from "../lib/media";

export interface Variation {
  id: number;
  name: string;
  description: string;
  price: number;
  sku: Text;
  image: Media;
}
