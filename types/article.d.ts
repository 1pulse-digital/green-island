import { Author } from "./author";
import { Picture } from "./picture";

export interface Article {
  id: number;
  author: Author;
  content: string;
  title: string;
  image: Picture;
  description: string;
}
