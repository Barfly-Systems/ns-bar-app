export interface PaymentMethod{
    name: string,
    expiryMonth: number,
    expiryYear: number,
    issueNumber: number,
    startMonth: number,
    startYear: number,
    cardNumber: string,
    type: string,
    cvc: string
}