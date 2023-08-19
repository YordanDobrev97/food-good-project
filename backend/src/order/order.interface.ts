export interface IOrder {
    products: string[],
    user: string,
    totalPrice: number,
    status: string,
    billingData: string
}