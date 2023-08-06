import 'reflect-metadata'
import express, { Application } from 'express'
import cors from 'cors'

import mongoose from './mongoose/index'

import { RouteConfig } from './common/common.route.config'
import { UserRoutes } from './user/user.route.config'
import { ProductRoutes } from './product/product.route.config'

import { UserController } from './user/user.controller'
import { ProductController } from './product/product.controller'

import env from 'dotenv'

const app: Application = express()
const routes = Array<RouteConfig>()

env.config()

mongoose.init().then(() => {
  console.log('connected to database')

  const options = []
  app.use(cors({
    origin: '*'
  }))

  app.use(express.json())
  app.use(express.urlencoded({ extended: true }))
  
  const userController = new UserController()
  const productController = new ProductController()

  // routes
  routes.push(new UserRoutes(app, userController))
  routes.push(new ProductRoutes(app, productController))

  const port = 4000
  app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`)
  })
}).catch((err) => {
  console.log(err)
})