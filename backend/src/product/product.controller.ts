import { Request, Response, NextFunction } from 'express'

import { productPrefix } from '../constants/apiPrefix'
import { ProductService } from './product.service'

export class ProductController {
    async create(req: Request, res: Response, next: NextFunction) {
        console.log(`post: ${productPrefix}/create product`)
        const { name, description, price, imageUrl, category } = req.body

        const product = await ProductService.create({ name: name, description: description, price: price, imageUrl: imageUrl, category: category })
        res.json(product)
    }

    async all(req: Request, res: Response, next: NextFunction) {
        const products = await ProductService.all()
        return res.json(products)
    }

    async test(req: Request, res: Response, next: NextFunction) {
        res.json('test it works')
    }
}