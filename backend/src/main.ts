import express, { Application } from 'express'

import mongoose from './mongoose/index'
import { RouteConfig } from './common/common.route.config'
import { UserRoutes } from './user/user.route.config'

import env from 'dotenv'

const app: Application = express()
const routes = Array<RouteConfig>()

env.config()

mongoose.init().then(() => {
  console.log('connected to database')

  // routes
  routes.push(new UserRoutes(app))

  const port = 3000
  app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`)
  })
}).catch((err) => {
  console.log(err)
})