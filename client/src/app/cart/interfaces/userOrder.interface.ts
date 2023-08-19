export interface UserProductOrder {
    name: string,
}

export interface UserOrder {
    _id: string,
    products: UserProductOrder[],
    totalPrice: number,
    status: string,
}