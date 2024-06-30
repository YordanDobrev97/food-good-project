import { RouteConfig } from '../common/common.route.config'
import { Application } from 'express'

import { CategoryController  } from './category.controller'
import { categoryPrefix } from '../constants/apiPrefix'

export class CategoryRoutes extends RouteConfig {
  private categoryController: CategoryController

  constructor(app: Application, categoryController: CategoryController) {
    super(app, 'CategoryRoutes')
    this.categoryController = categoryController
    this.configureRoutes()
  }

  configureRoutes() {
    this.app.route(`/${categoryPrefix}/create`).post([this.categoryController.create])
    this.app.route(`/${categoryPrefix}/all`).get([this.categoryController.all])
    this.app.route(`/${categoryPrefix}/:name`).get([this.categoryController.getByName])

    return this.app
  }
}