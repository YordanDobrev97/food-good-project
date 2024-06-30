import { CategoryModel } from './category.model'

export const CategoryService = {
    createCategory: async (name: string) => {
        const category = new CategoryModel()
        const existCategory = await category.exist(name)
        if (existCategory) {
            return category.create({ name: name })
        }
        return existCategory
    },

    getAll() {
        const categoryModel = new CategoryModel()
        const categories = categoryModel.getAll()
        return categories
    },

    getByName(name: string) {
        const category = new CategoryModel()
        return category.getByName(name)
    }
}