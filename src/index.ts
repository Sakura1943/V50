import express, { Express, Request, Response, NextFunction } from 'express'
import cors from 'cors'

import { ConfigJsonDataModel } from './models/config.model'

const configJsonData: ConfigJsonDataModel = new ConfigJsonDataModel()

const port: number = configJsonData.port
// const host: string = configJsonData.host

const app: Express = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use(async (req: Request, res: Response, next: NextFunction) => {
  res.status(403)
  // return res.json({
  //   status: req.statusCode,
  //   path: req.url,
  //   message: `[ERROR] KFC Crazy Thursday, V me 50$!`
  //})
  return res.send("<title>V Me $50!!!</title><body><strong><h1>V Me 50!</h1></strong></body><script>alert(`ERROR: Hey, bro, KFC Crazy Thursday, V me $50!`); throw new Error(`Hey, bro! KFC Crazy Thursday, V me $50!`)</script>")
  next()
})

app.listen(port, () => {
  console.info(`Server running on port ${port}`)
})
