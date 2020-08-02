import { Order } from "./order.model";
import { OrderItem } from "./order-item.model";

export class Basket{
    order: Order;
    status: number;
    items: OrderItem[];
}