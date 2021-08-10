import { Picture } from "./picture";

export interface ArticleCategory {
  id: number;
  name: string;
  description: string;
  image: Picture;
  slug: string;
}
