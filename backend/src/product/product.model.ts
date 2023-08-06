import { Model, Schema, model } from 'mongoose'
import { IProduct } from './product.interface'

const productSchema = new Schema<IProduct>({
    name: String,
    description: String,
    imageUrl: String,
    price: Number,
    category: { type: Schema.Types.ObjectId, ref: 'Category' },
})

export class ProductModel {
    private model: Model<IProduct>

    constructor(){
        this.model = model<IProduct>('Product', productSchema)
    }

    async create(product: IProduct): Promise<IProduct> {
        return (await this.model.create(product)).save()
    }

    async all() {
        return (await this.model.find({}, '_id name description imageUrl price'))
    }
}