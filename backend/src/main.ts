import 'reflect-metadata'

import express, { Application } from 'express'

import cors from 'cors'

import mongoose from './mongoose/index'

import { RouteConfig } from './common/common.route.config'

// Routes
import { OrderRoutes } from './order/order.route.config'
import { UserRoutes } from './user/user.route.config'
import { ProductRoutes } from './product/product.route.config'
import { CategoryRoutes } from './category/category.route.config'

//Controllers
import { UserController } from './user/user.controller'
import { ProductController } from './product/product.controller'
import { OrderController } from './order/order.controller'

import env from 'dotenv'
import { MenuRoutes } from './menu/menu.route.config'
import { MenuController } from './menu/menu.controller'
import { CategoryController } from './category/category.controller'
const app: Application = express()

const routes = Array<RouteConfig>()

env.config()

mongoose.init().then(() => {
  console.log('connected to database')

  app.use(cors({
    origin: '*'
  }))

  app.use(express.json())
  app.use(express.urlencoded({ extended: true }))
  
  const userController = new UserController()
  const productController = new ProductController()
  const orderController = new OrderController()
  const menuController = new MenuController()
  const categoryController = new CategoryController()

  // routes
  routes.push(new UserRoutes(app, userController))
  routes.push(new CategoryRoutes(app, categoryController))
  routes.push(new ProductRoutes(app, productController))
  routes.push(new OrderRoutes(app, orderController))
  routes.push(new MenuRoutes(app, menuController))

  const port = 4000
  app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`)
  })
}).catch((err) => {
  console.log(err)
})