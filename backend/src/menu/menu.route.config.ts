import { RouteConfig } from '../common/common.route.config'
import { Application } from 'express'
import { MenuController } from './menu.controller'
import { productPrefix } from '../constants/apiPrefix'

export class MenuRoutes extends RouteConfig {
  private menuController: MenuController

  constructor(app: Application, productController: MenuController) {
    super(app, 'ProductRoutes')
    this.menuController = productController
    this.configureRoutes()
  }

  configureRoutes() {
    this.app.route(`/${productPrefix}/create`).post([this.menuController.create])
    this.app.route(`/${productPrefix}/all`).get([this.menuController.all])
    this.app.route(`/${productPrefix}/:id`).get([this.menuController.getById])
    return this.app
  }
}