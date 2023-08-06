import { ProductModel } from './product.model'
import { CreateProductModel } from './inputModels/createProductModel'
import { CategoryModel } from '../category/category.model'

export const ProductService = {
    create: async (inputModel: CreateProductModel) => {
        const product = new ProductModel()
        const category = new CategoryModel()
        let currentCategory = await category.getByName(inputModel.category)
        if (!currentCategory) {
            currentCategory = await category.create({ name: inputModel.category })
        }
        const { name, description, price, imageUrl } = inputModel
        return product.create({ name: name, description: description, price: price, imageUrl: imageUrl, category: currentCategory.id })
    },

    all: async () => {
        const product = new ProductModel()
        return product.all()
    }
}