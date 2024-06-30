import { Model, Schema, model } from 'mongoose'
import { IProduct } from './product.interface'

import { ICategory } from '../category/category.interface'
import { categorySchema } from '../category/category.model'
import { CreateProductModel } from './inputModels/createProductModel'

const productSchema = new Schema<IProduct>({
    name: String,
    description: String,
    imageUrl: String,
    price: Number,
    category: { type: Schema.Types.ObjectId, ref: 'Category' },
})

export class ProductModel {
    private model: Model<IProduct>
    private categoryModel: Model<ICategory>

    constructor() {
        this.model = model<IProduct>('Product', productSchema)
        this.categoryModel = model<ICategory>('Category', categorySchema)
    }

    async create(product: IProduct): Promise<IProduct> {
        return (await this.model.create(product)).save()
    }

    async all() {
        return await this.model.find().populate('category').lean().exec()
    }

    async getById(id: string) {
        return ((await this.model.findById(id).lean().exec()))
    }

    async getByCategory(categoryName: string) {
        try {
            const category = await this.categoryModel.findOne({ name: categoryName }).exec()

            if (!category) {
                throw new Error('Invalid category')
            }
            return await this.model.find({ category: category._id }).populate('category').lean().exec()
        } catch (error) {
            return error
        }
    }

    async update(input: CreateProductModel) {
        const product = this.model.findOne({ name: input.name })
        if (!product) {
            return false
        }
     
        const category = this.categoryModel.findOne({ name: input.category.name })
        if (!category) {
            return false
        }

        const categoryDto: ICategory = {
            name: input.category.name,
        }

        const categoryUpdated = await this.categoryModel.findOneAndUpdate({ name: input.category.name }, categoryDto)
        // const updatedDto: Partial<IProduct> = {
        //     name: input.name,
        //     description: input.description,
        //     imageUrl: input.imageUrl,
        //     category: categoryUpdated._id,
        // }
        this.model.findOneAndUpdate({ name: input.name }, )

    }
}