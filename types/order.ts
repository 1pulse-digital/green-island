export interface Order {
  id: number;
  status: OrderStatus;
  total: number;
  discount_total: number;
  shipping_total: number;
  shipping: boolean;
  description: string;
}

export type OrderStatus =
  "pending" |
  "payment_pending" |
  "cancelled" |
  "paid" |
  "paid_in_store"
