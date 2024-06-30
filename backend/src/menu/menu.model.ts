import { Model, Schema, model } from 'mongoose'
import { IMenu } from './menu.interface'

const menuSchema = new Schema<IMenu>({
    name: String,
    description: String,
    imageUrl: String,
    price: Number,
    category: { type: Schema.Types.ObjectId, ref: 'Category' },
})

export class MenuModel {
    private model: Model<IMenu>

    constructor(){
        this.model = model<IMenu>('Menu', menuSchema)
    }

    async create(product: IMenu): Promise<IMenu> {
        return (await this.model.create(product)).save()
    }

    async all() {
        return (await this.model.find({}, '_id name description imageUrl price'))
    }

    async getById(id: string) {
        return ((await this.model.findById(id).lean().exec()))
    }
}