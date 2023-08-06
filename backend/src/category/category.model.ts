import { Model, Schema, model } from 'mongoose'
import { ICategory } from './category.interface'

const categorySchema = new Schema<ICategory>({
    name: String,
})

export class CategoryModel {
    private model: Model<ICategory>

    constructor(){
        this.model = model<ICategory>('Category', categorySchema)
    }

    async create(category: ICategory) {
        return (await this.model.create(category)).save()
    }

    async getByName(name: string) {
        const category = new CategoryModel()
        return category.model.findOne({ name: name })
    }

    async exist(name: string) {
        const category = new CategoryModel()
        return category.model.exists({ name: name })
    }
}