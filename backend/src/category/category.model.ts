import { Model, Schema, model } from 'mongoose'
import { ICategory } from './category.interface'

export const categorySchema = new Schema<ICategory>({
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

    async getAll() {
        return (await this.model.find())
    }

    async getById(id: string) {
        const categoryModel = new CategoryModel()
        return categoryModel.model.findById(id)
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