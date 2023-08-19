import { RouteConfig } from '../common/common.route.config'
import { Application } from 'express'
import { OrderController  } from './order.controller'
import { orderPrefix } from '../constants/apiPrefix'

export class OrderRoutes extends RouteConfig {
  private orderController: OrderController

  constructor(app: Application, orderController: OrderController) {
    super(app, 'OrderRoutes')
    this.orderController = orderController
    this.configureRoutes()
  }

  configureRoutes() {
    //this.app.route(`/${userPrefix}?id/:id`).get([this.userController.getUsers])

    this.app.route(`/${orderPrefix}/create`).post([this.orderController.create])
    this.app.route(`/${orderPrefix}/test`).get([this.orderController.test])

    return this.app
  }
}