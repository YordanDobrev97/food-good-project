import express, { Application } from 'express'
import { authRouter } from './routes/index'
import mongoose from './mongoose/index'
import env from 'dotenv'
const app: Application = express()
const port = 3000

env.config()

mongoose.init().then(() => {
  console.log('connected to database')
  app.use('/auth', authRouter)

  app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`)
  })
}).catch((err) => {
  console.log(err)
})