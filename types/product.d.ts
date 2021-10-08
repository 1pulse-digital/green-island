import { Picture } from "./picture";
import { Ingredient } from "./ingredients";

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
  availability: "otc" | "prescription" | undefined;
  benefits: string;
  serving_size: string;
  additional_ingredients: string;
  additional_information: string;
  notice: string;
  storage: string;
  symptoms_indications: string;
  product_form: string;
  supplier: string;
  ingredients?: Ingredient[];
}
