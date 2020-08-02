export interface OrderItem
{
    id :number,
    orderId: number;
    productId: number;
    name: string;
    sizeId: number;
    sizeName: string;
    unitPriceGross: number;
    unitPriceNet: number;
    totalPriceGross: number;
    totalPriceNet: number;
    qty: number;
    modifier: boolean;
    isExtra: boolean;
    location: number;
}


