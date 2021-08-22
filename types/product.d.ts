import { Picture } from "./picture";

export interface Product {
  id: number;
  name: string;
  description: string;
  meta_description: string;
  meta_title: string;
  price: number;
  slug: string;
  content: string;
  published_at: Date;
  created_at: Date;
  updated_at: Date;
  variation: boolean;
  image?: Picture;
  directions: string;
  warning: string;
  benefits: string;
}
