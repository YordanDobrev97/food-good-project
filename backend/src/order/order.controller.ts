import { Request, Response, NextFunction } from 'express'

import { orderPrefix } from '../constants/apiPrefix'
import { OrderService } from './order.service'

export class OrderController {
    async create(req: Request, res: Response, next: NextFunction) {
        console.log(`post: ${orderPrefix}/create order`)
        const { userId, productsIds, totalPrice, creditCard, cvcNumber, expireDate } = req.body

        const product = await OrderService.create(
            {
                userId: userId,
                productsIds: productsIds,
                totalPrice: totalPrice,
                creditCard: creditCard,
                cvcNumber: cvcNumber,
                expireDate: new Date(expireDate)
            })
        res.json(product)
    }

    // async all(req: Request, res: Response, next: NextFunction) {
    //     const products = await ProductService.all()
    //     return res.json(products)
    // }

    // async getById(req: Request, res: Response, next: NextFunction) {
    //     const { id } = req.params
    //     console.log('id: ', id)
    //     const product = await ProductService.getById(id)
    //     res.json(product)
    // }

    async test(req: Request, res: Response, next: NextFunction) {
        res.json('test it works')
    }
}