import { IProduct } from "./product.interface";

export interface IOrder {
    cardNumber: number,
    expireDate: Date,
    cvc: number,
    totalPrice: number,
    productsIds: IProduct[],
    userId: string,
}

// console.log(this.cardNumber)
//     console.log(this.expireDate)
//     console.log(this.cvc)
//     console.log(this.totalPrice)
//     console.log(this.products)
//     const jwt = localStorage.getItem('jwt') || ''