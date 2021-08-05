import { Author } from "./author";
import { Picture } from "./picture";

export interface Article {
  id: number;
  author: Author;
  content: string;
  title: string;
  image: Picture;
  description: string;
  tags: Tag[];
  slug: string;
  category: string;
}

export interface Tag {
  id: number;
  name: string;
}
