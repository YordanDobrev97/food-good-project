import { Request, Response, NextFunction } from 'express'

import { productPrefix } from '../constants/apiPrefix'
import { CategoryService } from './category.service'

export class CategoryController {
    async create(req: Request, res: Response, next: NextFunction) {
        console.log(`post: ${productPrefix}/create/category`)
        const { name } = req.body

        const category = await CategoryService.createCategory(name)
        res.json(category)
    }

    async all(req: Request, res: Response, next: NextFunction) {
        console.log(`get: ${productPrefix}/category/all`)
        const categories = await CategoryService.getAll()
        return res.json(categories)
    }

    async getByName(req: Request, res: Response, next: NextFunction) {
        console.log(`get: ${productPrefix}/getByName`)
        const { name } = req.params
        const category = await CategoryService.getByName(name)
        res.json(category)
    }
}