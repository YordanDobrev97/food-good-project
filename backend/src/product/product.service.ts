import { ProductModel } from './product.model'
import { CreateProductModel } from './inputModels/createProductModel'
import { CategoryModel } from '../category/category.model'

export const ProductService = {
    create: async (inputModel: CreateProductModel) => {
        try {
            const product = new ProductModel()
            const category = new CategoryModel()
            let currentCategory = await category.getByName(inputModel.category.name)

            if (!currentCategory) {
                currentCategory = await category.create({ name: inputModel.category.name })
            }
            const { name, description, price, imageUrl } = inputModel
            return product.create({ name: name, description: description, price: price, imageUrl: imageUrl, category: currentCategory.id })
        } catch (error) {
            return error
        }
    },

    all: async () => {
        try {
            const product = new ProductModel()
            const data = await product.all()
            return data
        } catch (error) {
            return error
        }
    },

    getById: async (id: string) => {
        try {
            const productModel = new ProductModel()
            const product = await productModel.getById(id)
            return product
        } catch (error) {
            return error
        }
    },

    getByCategory: async (category) => {
        try {
            const productModel = new ProductModel()
            const productFromCategory = productModel.getByCategory(category)
            return productFromCategory
        } catch (error) {
            return error
        }
    },

    update: async(input: CreateProductModel) => {
        try {
            const productModel = new ProductModel()
            const isUpdated = await productModel.update(input)
            return isUpdated
        } catch (error) {
            return error
        }
    }
}