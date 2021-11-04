import { Product } from "./product";

export interface OrderItemType {
  id: number;
  product: Product;
  price: number;
  quantity: number;
  line_total: number;
}

export interface Order {
  id: number;
  status: OrderStatus;
  total: number;
  discount_total: number;
  shipping_total: number;
  shipping: boolean;
  description: string;
  items?: OrderItemType[];
  time_submitted?: string;
}

export type OrderStatus =
  "pending" |
  "payment_pending" |
  "cancelled" |
  "paid" |
  "paid_in_store"
