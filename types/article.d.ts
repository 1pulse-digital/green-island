import { Author } from "./author";
import { Picture } from "./picture";

export interface Category {
  name: string;
  slug: string;
}

export interface Article {
  id: number;
  author: Author;
  content: string;
  title: string;
  image?: Picture;
  description: string;
  tags: Tag[];
  slug: string;
  category: Category;
}

export interface Tag {
  id: number;
  name: string;
}
