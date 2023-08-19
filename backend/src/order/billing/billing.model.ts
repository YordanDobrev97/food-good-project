import { Model, Schema, Types, model } from 'mongoose'
import { IBilling } from './billing.interface'

const orderSchema = new Schema<IBilling>({
   creditCard: String,
   cvcNumber: Number,
   expireDate: Date
})

export class BillingModel {
    private model: Model<IBilling>

    constructor(){
        this.model = model<IBilling>('Billing', orderSchema)
    }

    async create(billing: IBilling) {
        return (await this.model.create(billing)).save()
    }

    // async all() {
    //     return (await this.model.find({}))
    // }

    // async getById(id: string) {
    //     return ((await this.model.findById(id).lean().exec()))
    // }
}