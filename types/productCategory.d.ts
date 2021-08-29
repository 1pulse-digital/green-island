import { Picture } from "./picture";

export interface ProductCategory {
  id: number;
  name: string;
  description: string;
  slug: string;
  products: number[];
  image: Picture;
}
