export interface Order
{
    organisationId: number;
    tableId: number;
    cost: number;
    received: Date | string;
    delivered: Date | string | null;
    orderStatusId: number | null;
}