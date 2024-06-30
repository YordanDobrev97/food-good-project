import { Request, Response, NextFunction } from 'express'

import { productPrefix } from '../constants/apiPrefix'
import { ProductService } from './product.service'

export class ProductController {
    async create(req: Request, res: Response, next: NextFunction) {
        console.log(`post: ${productPrefix}/create/product`)
        const { name, description, price, imageUrl, category } = req.body
        console.log('body data', req.body)
        
        const product = await ProductService.create({ name: name, description: description, price: price, imageUrl: imageUrl, category: category })
        res.json(product)
    }

    async all(req: Request, res: Response, next: NextFunction) {
        console.log(`get: ${productPrefix}/getAll`)
        const products = await ProductService.all()
        return res.json(products)
    }

    async getById(req: Request, res: Response, next: NextFunction) {
        console.log(`get: ${productPrefix}/getById`)
        const { id } = req.params
        const product = await ProductService.getById(id)
        res.json(product)
    }

    async getByCategory(req: Request, res: Response, next: NextFunction) {
        console.log(`get: ${productPrefix}/byCategory`)
        const { category } = req.params
        const productsFromCategory = await ProductService.getByCategory(category)
        res.json(productsFromCategory)
    }
}