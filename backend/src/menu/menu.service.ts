import { MenuModel } from './menu.model'
import { CreateMenuModel } from './inputModels/CreateMenuModel'
import { CategoryModel } from '../category/category.model'

export const MenuService = {
    create: async (inputModel: CreateMenuModel) => {
        try {
            const menu = new MenuModel()
            const category = new CategoryModel()
            let currentCategory = await category.getByName(inputModel.category)
            if (!currentCategory) {
                currentCategory = await category.create({ name: inputModel.category })
            }
            const { name, description, price, imageUrl } = inputModel
            return menu.create({ name: name, description: description, price: price, imageUrl: imageUrl, category: currentCategory.id })
        } catch (error) {
            return error
        }
    },

    all: async () => {
        try {
            const product = new MenuModel()
            return await product.all()
        } catch (error) {
            return error
        }
    },

    getById: async (id: string) => {
        try {
            const menuModel = new MenuModel()
            const menu = await menuModel.getById(id)
            return menu
        } catch (error) {
            return error
        }
    }
}