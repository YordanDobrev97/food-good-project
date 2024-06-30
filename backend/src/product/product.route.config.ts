import { RouteConfig } from '../common/common.route.config'
import { Application } from 'express'
import { ProductController  } from './product.controller'
import { productPrefix } from '../constants/apiPrefix'

export class ProductRoutes extends RouteConfig {
  private productController: ProductController

  constructor(app: Application, productController: ProductController) {
    super(app, 'ProductRoutes')
    this.productController = productController
    this.configureRoutes()
  }

  configureRoutes() {
    this.app.route(`/${productPrefix}/create`).post([this.productController.create])
    this.app.route(`/${productPrefix}/all`).get([this.productController.all])
    this.app.route(`/${productPrefix}/:id`).get([this.productController.getById])
    this.app.route(`/${productPrefix}/getByCategory/:category`).get([this.productController.getByCategory])

    return this.app
  }
}