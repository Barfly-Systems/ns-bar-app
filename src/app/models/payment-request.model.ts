import { PaymentMethod } from './payment-method.model';

export interface PaymentTokenRequest{
    reusable: boolean,
    paymentMethod: PaymentMethod,
    clientKey: string
}