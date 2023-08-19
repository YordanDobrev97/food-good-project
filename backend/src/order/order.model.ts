import { Model, Schema, Types, model } from 'mongoose'
import { IOrder } from './order.interface'
import { InputOrderData } from './inputModels/inputOrderData'

const orderSchema = new Schema<IOrder>({
   user: String,
   products: [],
   totalPrice: Number,
   status: String,
   billingData: String,
})

export class OrderModel {
    private model: Model<IOrder>

    constructor(){
        this.model = model<IOrder>('Order', orderSchema)
    }

    async create(order: IOrder) {
        return (await this.model.create(order)).save()
    }

    // async all() {
    //     return (await this.model.find({}))
    // }

    async getById(id: string) {
        return ((await this.model.findById(id).lean().exec()))
    }
}