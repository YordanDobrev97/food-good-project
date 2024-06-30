import { Request, Response, NextFunction } from 'express'

import { productPrefix } from '../constants/apiPrefix'
import { MenuService } from './menu.service'

export class MenuController {
    async create(req: Request, res: Response, next: NextFunction) {
        console.log(`menu: ${productPrefix}/create`)
        const { name, description, price, imageUrl, category } = req.body

        const menu = await MenuService.create({ name: name, description: description, price: price, imageUrl: imageUrl, category: category })
        res.json(menu)
    }

    async all(req: Request, res: Response, next: NextFunction) {
        const menuList = await MenuService.all()
        return res.json(menuList)
    }

    async getById(req: Request, res: Response, next: NextFunction) {
        const { id } = req.params
        console.log('id: ', id)
        const menu = await MenuService.getById(id)
        res.json(menu)
    }
}