import { Schema } from 'mongoose'
import { ProductModel } from '../product/product.model'
import { UserModel } from '../user/user.model'
import { BillingModel } from './billing/billing.model'
import { InputOrderData } from './inputModels/inputOrderData'
import { IOrder } from './order.interface'
import { OrderModel } from './order.model'

export const OrderService = {
    create: async (data: InputOrderData) => {
        const userModel = new UserModel()
        const user = await userModel.getUser(data.userId)

        const billingModel = new BillingModel()
        const billing = await billingModel.create({ creditCard: data.creditCard, cvcNumber: data.cvcNumber, expireDate: data.expireDate })
        console.log(billing, billing.id)
        
        const orderModel = new OrderModel()
        const order = await orderModel.create({
            status: 'pending',
            products: data.productsIds,
            billingData: billing.id,
            user: user.id,
            totalPrice: data.totalPrice,
        })
        return order
    }

    // create: async (data: IOrder) => {
    //     const orderModel = new OrderModel()
    //     const userModel = new UserModel()
    //     const productModel = new ProductModel()

    //     const user = await userModel.getUser(userId)
    //     const products = productsIds.map(async (p) => await productModel.getById(p.id))

    //     orderModel.create({ user: user, orderNumber: 'dksdjakdas',  products: products })
    //     if (!currentCategory) {
    //         currentCategory = await category.create({ name: inputModel.category })
    //     }
    //     const { name, description, price, imageUrl } = inputModel
    //     return product.create({ name: name, description: description, price: price, imageUrl: imageUrl, category: currentCategory.id })
    // },

    // all: async () => {
    //     const product = new ProductModel()
    //     return product.all()
    // },

    // getById: async (id: string) => {
    //     const productModel = new ProductModel()
    //     const categoryModel = new CategoryModel()

    //     const product = await productModel.getById(id)
    //     const category = await categoryModel.getById((await product).category.toString())

    //     console.log(product.category)
    //     return product
    // }
}