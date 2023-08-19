import { Model, Schema, Types, model } from 'mongoose'
import { IOrder } from './order.interface'
import { InputOrderData } from './inputModels/inputOrderData'
import { ProductModel } from '../product/product.model'

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

    async all(userId: string) {
        const orders = (await this.model.find({ user:  userId}))
        const productModel = new ProductModel()
        const producsIds = orders.map((o) => o.products)
        // console.log(producsIds)
        let products = []
        // producsIds.forEach(async (p: any, i) => {
        //     const product = await productModel.getById(p[i].id)
        //     products.push(product)
        // })
        let orderResult = []

        for (const or of orders) {
            const products = await Promise.all(or.products.map(async (p: any) => {
                const product = await productModel.getById(p.id);
                return product;
            }));

            orderResult.push({ status: or.status, _id: or._id.toString(), products: products });
        }

        return orderResult
    }

    async getById(id: string) {
        return ((await this.model.findById(id).lean().exec()))
    }
}