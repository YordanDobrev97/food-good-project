import { RouteConfig } from "../common/common.route.config"
import { Application } from "express"
import UserController from "./user.controller"

export class UserRoutes extends RouteConfig {
  constructor(app: Application) {
    super(app, "UserRoutes")
  }

  configureRoutes() {
    this.app.route(`/api/users`).get([UserController.getUsers])
    this.app.route('/api/create').get([UserController.createUser])

    return this.app
  }
}