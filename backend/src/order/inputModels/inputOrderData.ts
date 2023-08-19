export interface InputOrderData {
   userId: string,
   productsIds: string[],
   totalPrice: number,
   creditCard: string,
   cvcNumber: number,
   expireDate: Date,
}