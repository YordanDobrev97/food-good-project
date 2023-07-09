import express, { Request, Response , Application } from 'express'

const app: Application = express()
const port = process.env.PORT || 4000


app.get('/', (req: Request, res: Response) => {
  res.send('Welcome to food & good backend rest api!')
})

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`)
})