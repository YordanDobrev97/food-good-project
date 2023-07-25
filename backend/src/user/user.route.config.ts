import { RouteConfig } from '../common/common.route.config'
import { Application } from 'express'
import { UserController  } from './user.controller'
import { userPrefix } from '../constants/apiPrefix'

export class UserRoutes extends RouteConfig {
  private userController: UserController

  constructor(app: Application, userController: UserController) {
    super(app, 'UserRoutes')
    this.userController = userController
    this.configureRoutes()
  }

  configureRoutes() {
    console.log('call')
    this.app.route(`/${userPrefix}?id/:id`).get([this.userController.getUsers])
    this.app.route(`/${userPrefix}/create`).post([this.userController.createUser])

    return this.app
  }
}